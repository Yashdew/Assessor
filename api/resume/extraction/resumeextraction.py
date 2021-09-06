from pyresparser import ResumeParser
import pdfx

def extarct(fileName):
    pdf = pdfx.PDFx(fileName)
    links = pdf.get_references_as_dict()
    projects = getProjects()
    achievements = getAchievements()
    hobbies = getHobbies()
    data = ResumeParser(fileName).get_extracted_data()
    data["Links"] = links
    data["Projects"] = projects
    data["Acheivements"] = achievements
    data["Hobbies"] = hobbies
    return data


def getProjects():
    return "Projects TBC"

def getAchievements():
    return "Achievements TBC"

def getHobbies():
    return "Hobbies TBC"        