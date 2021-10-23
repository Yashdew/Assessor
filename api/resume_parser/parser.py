from datetime import date

import PyPDF2
import fitz
import re
import json


class ResumeParser:
    pdffile = ''
    text = ''
    formatted_text = []
    imp_headings_text = {}

    def __init__(self, file):
        self.pdffile = file
        doc = fitz.open(self.pdffile)
        page = doc.load_page(0)  # number of page
        self.text = page.get_text()
        self.formatted_text = []
        imp_headings = ['education', 'experience', 'project']
        excluded_headings = ['skills', 'technical skills', 'hobbies', 'achievements', 'languages', 'frameworks']
        self.imp_headings_text = {}
        heading_index = -1
        heading_text = []
        for item in self.text.split('\n'):
            cur_index = -1
            excluded_index = -1
            if len(item) < 2 or item.isspace() or item == '\n':
                continue
            self.formatted_text.append(item.strip())
            if len(item.strip().split(' ')) == 1:
                for heading in imp_headings:
                    if item.lower().find(heading) != -1:
                        cur_index = imp_headings.index(heading)
                        break
                for heading in excluded_headings:
                    if item.lower().find(heading) != -1:
                        excluded_index = excluded_headings.index(heading)
                        break
            # if text is containing any of excluded headings
            if excluded_index != -1:
                if len(heading_text) > 0:
                    self.imp_headings_text[imp_headings[heading_index]] = '\n'.join(str(line) for line in heading_text)
                heading_index = -1
                heading_text = []

            if cur_index == -1:
                # if text is part of current imp heading
                if heading_index != -1:
                    heading_text.append(item)

            # text contains imp heading
            else:
                # found new heading
                if heading_index == -1:
                    heading_index = cur_index
                    heading_text.append(item)
                else:
                    self.imp_headings_text[imp_headings[heading_index]] = '\n'.join(str(line) for line in heading_text)
                    heading_index = cur_index
                    heading_text = [item]
        if heading_index != -1:
            self.imp_headings_text[imp_headings[heading_index]] = '\n'.join(str(line) for line in heading_text)

    def get_links(self):
        file = open(self.pdffile, 'rb')
        readpdf = PyPDF2.PdfFileReader(file)
        pages = readpdf.getNumPages()
        key = '/Annots'
        uri = '/URI'
        ank = '/A'

        url_list = []

        for page in range(pages):
            pageSliced = readpdf.getPage(page)
            pageObject = pageSliced.getObject()
            if key in pageObject.keys():
                ann = pageObject[key]
                for a in ann:
                    u = a.getObject()
                    if uri in u[ank].keys():
                        url_list.append(u[ank][uri])
        single_links = ['leetcode', 'codechef', 'codeforces', 'linkedin', 'hackerearth', 'hackerrank']
        multiple_links = ['github']
        links_data = {}
        for url in url_list:
            is_single_link = -1
            for link in single_links:
                if str(url).find(link) != -1:
                    is_single_link = single_links.index(link)
                    break
            if is_single_link != -1:
                links_data[single_links[is_single_link]] = url
                continue

            is_multiple_link = -1
            for link in multiple_links:
                if str(url).find(link) != -1:
                    is_multiple_link = multiple_links.index(link)
                    break
            if is_multiple_link != -1:
                if multiple_links[is_multiple_link] not in links_data.keys():
                    links_data[multiple_links[is_multiple_link]] = [url]
                else:
                    links_data[multiple_links[is_multiple_link]].append(url)
                continue
            else:
                if 'others' not in links_data.keys():
                    links_data['others'] = [url]
                else:
                    links_data['others'].append(url)

        return links_data

    def get_personal_details(self):
        personal_details = self.formatted_text[0] + " " + self.formatted_text[1] + " " + self.formatted_text[2] + " " + \
                           self.formatted_text[3]
        mail_address = re.search(r'[\w.+-]+@[\w-]+\.[\w.-]+', personal_details)
        if mail_address:
            mail_address = mail_address.group(0)
        else:
            mail_address = "NA"

        contact_number = re.search(r"\(?\d{3}\)?[-.\s]?\d{3}[-.\s]?\d{4}", personal_details)
        if contact_number is None:
            contact_number = re.search(r"\(?\d{3}\)?[-.\s]?\d{3}[-.\s]?\d{4}", personal_details)
            if contact_number is None:
                contact_number = "NA"

        if contact_number:
            if contact_number != "NA":
                contact_number = contact_number.group(0)

        personal_details = {"name": self.formatted_text[0].strip(), "email": mail_address,
                            "mobile_number": contact_number}
        return personal_details

    def get_skills(self):
        headings_to_skip = ['hobbies', 'achievements', 'education', 'experience', 'languages', 'projects']
        replace_words = ['languages', 'databases', 'database', 'dbms', 'tools', 'frameworks', 'libraries', 'strength']
        skills_text = []
        skills_available = False
        for i in range(0, len(self.formatted_text)):
            if skills_available:
                if self.formatted_text[i].lower() in headings_to_skip:
                    break
                max_skip_index = -1
                for word in replace_words:
                    word_index = self.formatted_text[i].lower().find(word)
                    if word_index != -1:
                        word_index += len(word)
                        max_skip_index = max(max_skip_index, word_index)
                if max_skip_index == -1:
                    max_skip_index = 0
                current_text = self.formatted_text[i].lower()
                current_text = re.split('[,|]', current_text[max_skip_index:])
                for skill in current_text:
                    if len(skill) == 0 or (skill.find(':') != -1):
                        continue
                    skills_text.append(skill)
            elif self.formatted_text[i].lower().find('skills') != -1 or self.formatted_text[i].lower().find(
                    'strength') != -1:
                skills_available = True
        return skills_text

    def get_projects(self):
        headings_to_skip = ['hobbies', 'achievements', 'education', 'experience', 'languages', 'skills',
                            'technical skills']
        projects_text = []
        projects_available = False
        for i in range(0, len(self.formatted_text)):
            if projects_available:
                if self.formatted_text[i].lower() in headings_to_skip:
                    break
                projects_text.append(self.formatted_text[i])

            elif self.formatted_text[i].lower().find('project') != -1:
                projects_available = True
        return projects_text

    def get_achievements(self):
        headings_to_skip = ['hobbies', 'projects', 'education', 'experience', 'languages', 'skills', 'technical skills']
        achievements_text = []
        achievements_available = False
        achievements_start_symbol = ''
        curr_achievement = ''
        for i in range(0, len(self.formatted_text)):
            if achievements_available:
                if len(achievements_start_symbol) == 0:
                    curr_achievement = ''
                    if not self.formatted_text[i][0].isalnum():
                        achievements_start_symbol = self.formatted_text[i][0]

                if self.formatted_text[i].strip().lower() in headings_to_skip:
                    break
                else:
                    if self.formatted_text[i][0] == achievements_start_symbol:
                        if len(curr_achievement):
                            achievements_text.append(curr_achievement)
                            curr_achievement = self.formatted_text[i]
                        else:
                            curr_achievement += self.formatted_text[i]
                    else:
                        curr_achievement += " " + self.formatted_text[i]
            if len(self.formatted_text[i].strip()) < 2:
                continue
            if self.formatted_text[i].strip().lower().find('achievements') != -1:
                achievements_available = True
        if len(curr_achievement):
            achievements_text.append(curr_achievement);
        if not achievements_available:
            achievements_text = []
        return achievements_text

    def no_of_months(self, month1, year1, month2, year2, abbrev_list, full_name_list):
        month1 = month1.lower()
        month2 = month2.lower()
        year1 = int(year1)
        year2 = int(year2)
        tot_months = 0
        pre_month = -1
        if month1 in abbrev_list:
            tot_months += 12 - abbrev_list.index(month1)
            pre_month = abbrev_list.index(month1)
            if year1 == year2:
                tot_months -= pre_month

        if month1 in full_name_list and month1 != 'may':
            tot_months += 12 - full_name_list.index(month1)
            pre_month = full_name_list.index(month1)
            if year1 == year2:
                tot_months -= pre_month

        if month2 in abbrev_list:
            tot_months += abbrev_list.index(month2) + 1
            if year1 == year2:
                return abbrev_list.index(month2) - pre_month + 1

        if month2 in full_name_list and month2 != 'may':
            tot_months += full_name_list.index(month2) + 1
            if year1 == year2:
                return full_name_list.index(month2) - pre_month + 1

        if year1 != year2:
            tot_months += 12 * (year2 - year1 - 1)
        return tot_months

    def get_work_experience(self):
        headings_to_skip = ['achievements', 'projects', 'education', 'languages', 'skills', 'strength',
                            'technical skills']
        abbrv_months_list = ['jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sep', 'oct', 'nov', 'dec']
        full_months_list = ['january', 'february', 'march', 'april', 'may', 'june', 'july', 'august', 'september',
                            'october', 'november', 'december']
        exp_available = False
        exp_months = 0
        for i in range(0, len(self.formatted_text)):
            if exp_available:
                if self.formatted_text[i].strip().lower() in headings_to_skip:
                    break
                current_text = self.formatted_text[i].strip().lower()
                dates = re.findall(r'[A-Za-z]+ [0-9]{4}', current_text)
                if len(dates) == 1:
                    month, year = dates[0].split(' ')
                    current_year = date.today().year
                    current_month = full_months_list[date.today().month - 1]
                    exp_months += self.no_of_months(month, year, current_month, current_year, abbrv_months_list,
                                                    full_months_list)
                elif len(dates) == 2:
                    month1, year1 = dates[0].split(' ')
                    month2, year2 = dates[1].split(' ')
                    exp_months += self.no_of_months(month1, year1, month2, year2, abbrv_months_list, full_months_list)
            elif self.formatted_text[i].lower().find('experience') != -1:
                exp_available = True

        total_exp = ''
        if exp_months >= 12:
            total_exp += str(exp_months // 12) + " year" + ("" if (exp_months // 12 == 1) else "s")
            if exp_months % 12:
                total_exp += " " + str(exp_months % 12) + " month" + ("" if (exp_months % 12 < 2) else "s")
        else:
            total_exp += str(exp_months) + " month" + ("" if (exp_months < 2) else "s")

        return total_exp

    def get_hobbies(self):
        headings_to_skip = ['achievements', 'projects', 'education', 'experience', 'languages', 'skills',
                            'technical skills']
        hobbies_text = []
        hobbies_available = False
        for i in range(0, len(self.formatted_text)):
            if hobbies_available:
                if self.formatted_text[i].strip().lower() in headings_to_skip:
                    break
                else:
                    hobbies_text.append(self.formatted_text[i].strip())
            if len(self.formatted_text[i].strip()) < 2:
                continue
            if self.formatted_text[i].strip().lower().find('hobbies') != -1:
                hobbies_available = True
        if not hobbies_available:
            hobbies_text = []
        return hobbies_text

    def parse_resume(self):
        resume_fields = {"personal_details": self.get_personal_details(), "skills": self.get_skills(),
                         "education": [self.imp_headings_text['education']],
                         "experience": [self.imp_headings_text['experience']], "links": self.get_links(),
                         "total_experience": self.get_work_experience(),
                         "projects": [self.imp_headings_text['project']], "achievements": self.get_achievements(),
                         "hobbies": self.get_hobbies()}

        return json.dumps(resume_fields, indent=2)


parser = ResumeParser('FilePath')
print(parser.parse_resume())
