import PyPDF2
import nltk


class Links:
    def __init__(self):
        self.urls = {
            "linkedin": str(),
            "leetcode": str(),
            "codechef": str(),
            "codeforces": str(),
            "github": list(),
            "others": list(),
        }

def getLinks(links: dict):
    tofind = ["github", "linkedin", "leetcode", "codechef", "codeforces"]
    link = Links()
    linkscopy = links['url'].copy()
    for string in tofind:
        if type(link.urls[string]) == list:
            for i in links['url']:
                if string in i:
                    link.urls[string].append(i)
                    linkscopy.remove(i)
        else:
            for i in links['url']:
                if string in i:
                    link.urls[string] = i
                    linkscopy.remove(i)
                    break

    link.urls["others"] = linkscopy
    return link.urls

def getProjects(pdfFileObj):
    pdfReader = PyPDF2.PdfFileReader(pdfFileObj)
    text = ""
    numPage = pdfReader.numPages
    pages = 0
    for pages in range(numPage):
        page = pdfReader.getPage(pages).extractText()
        text = text + page + " "
    sentences = nltk.sent_tokenize(text)
    corpus = []
    for x in sentences:
        corpus.append(x.replace("\n",""))
    formatted_text = []
    imp_headings = ['projects']
    excluded_headings = ['skills', 'technical skills', 'hobbies', 'achievements', 'languages', 'frameworks','education', 'experience','links']
    imp_headings_text = {}
    heading_index = -1
    heading_text = []
    for item in text.split('\n'):
        cur_index = -1
        excluded_index = -1
        if len(item) < 2 or item.isspace() or item == '\n':
            continue
        formatted_text.append(item.strip())
        if len(item.strip().split(' ')) == 1:
            for heading in imp_headings:
                if item.lower().find(heading) != -1:
                    cur_index = imp_headings.index(heading)
                    break
            for heading in excluded_headings:
                if item.lower().find(heading) != -1:
                    excluded_index = excluded_headings.index(heading)
                    break
        if excluded_index != -1:
            if len(heading_text) > 0:
                imp_headings_text[imp_headings[heading_index]] = '\n'.join(str(line) for line in heading_text)
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
                imp_headings_text[imp_headings[heading_index]] = '\n'.join(str(line) for line in heading_text)
                heading_index = cur_index
                heading_text = [item]
    if heading_index != -1:
        imp_headings_text[imp_headings[heading_index]] = '\n'.join(str(line) for line in heading_text)
    ###functin start
    headings_to_skip = ['hobbies', 'achievements', 'education', 'experience', 'languages', 'skills',
                        'technical skills','links']
    projects_text = []
    projects_available = False
    projectString = ""
    for i in range(0, len(formatted_text)):
        if projects_available:
            if formatted_text[i].lower() in headings_to_skip:
                break
            projects_text.append(formatted_text[i])
            projectString = projectString + formatted_text[i] + " "
        elif formatted_text[i].lower().find('project') != -1:
            projects_available = True
    return projectString[:-1]

def getAchievements():
    return "Achievements TBC"


def getHobbies():
    return "Hobbies TBC"
