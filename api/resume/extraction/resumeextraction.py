from . import utils
import pdfx
from pyresparser import ResumeParser
import random
import os


class ResumeExtract(object):
    def __init__(self, fileName):
        self.__details = {
            'personal_details': {
                'name': None,
                'email': None,
                'mobile_number': None,
            },
            'skills': None,
            'education': None,
            'experience': None,
            'no_of_pages': None,
            'links': None,
            'total_experience': None,
            'projects': None,
            'achievements': None,
            'hobbies': None,
            'score':None
        }
        self.__fileName = fileName

    def __get_details(self, fileName):
        # Modify and regroup extracted data
        #print(fileName)
        pdf = pdfx.PDFx(fileName)
        links = pdf.get_references_as_dict()
        data = ResumeParser(fileName).get_extracted_data()
        filePath = os.path.dirname(os.path.abspath(fileName))
        print(filePath)
        pdfFileObj = open(filePath, encoding='utf-8').read()
        print(pdfFileObj)
        self.__details["personal_details"]['name'] = data["name"]
        self.__details["personal_details"]['email'] = data["email"]
        self.__details["personal_details"]['mobile_number'] = data["mobile_number"]
        self.__details["skills"] = data["skills"]
        self.__details["education"] = data["degree"]
        self.__details["projects"] = utils.getProjects(pdfFileObj)
        self.__details["achievements"] = utils.getAchievements()
        self.__details["hobbies"] = utils.getHobbies()
        self.__details["experience"] = data["experience"]
        self.__details["no_of_pages"] = data["no_of_pages"]
        self.__details["links"] = utils.getLinks(links)
        self.__details["total_experience"] = data["total_experience"]
        # For testing, replace with real algo later
        self.__details["score"] = random.randint(60,100)

        return self.__details

    def get_data(self):
        # Return grouped and modified data
        return self.__get_details(self.__fileName)
