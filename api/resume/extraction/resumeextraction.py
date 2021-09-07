from . import utils
import pdfx
from pyresparser import ResumeParser

class ResumeExtract(object):
    def __init__(self , fileName):
        self.__details = {
            'personal_details' : None,
            'skills' : None,
            'education' : None,
            'experience' : None,
            'no_of_pages' : None,
            'links' : None,
            'total_experience': None,
            'projects' : None,
            'achievements' : None,
            'hobbies' : None
        }
        self.__fileName = fileName

    def __get_details(self , fileName):
        # Modify and regroup extracted data
        pdf = pdfx.PDFx(fileName)
        links = pdf.get_references_as_dict()
        data = ResumeParser(fileName).get_extracted_data()

        self.__details["personal_details"] = {
            'name' : data["name"],
            'email' : data["email"],
            'mobile_number' : data["mobile_number"],
        }
        self.__details["skills"] = data["skills"]
        self.__details["education"] = data["degree"]
        self.__details["projects"] = utils.getProjects()
        self.__details["achievements"] = utils.getAchievements()
        self.__details["hobbies"] = utils.getHobbies()
        self.__details["experience"] = data["experience"]
        self.__details["no_of_pages"] = data["no_of_pages"]
        self.__details["links"] = utils.getLinks(links)
        self.__details["total_experience"] = data["total_experience"]
        
        return self.__details


    def get_data(self):
        # Return grouped and modified data
        return self.__get_details(self.__fileName)