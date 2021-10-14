from resume.error.error import error
from resume.dummy.dummyapi import dummyApi
from resume.extraction.resumeextraction import ResumeExtract
from flask import Flask, jsonify, request, Blueprint
from flask_cors import CORS, cross_origin
import os
import json
import nltk

from resume.extraction.utils import formatStringIntoList, validateStringAttr

main = Blueprint('main', __name__)
#nltk.download('popular')

@main.route('/', methods=['GET'])
def hello():
    return 'Whatup bitch <a href="https://www.linkedin.com/in/iyashdewangan/">Head over to</a>'


@main.route('/api/v1/dummy')
def api():
    return dummyApi()

@main.route('/api/v1/postJD', methods=['POST'])
@cross_origin()
def job_description():
    data = dict()
    if request.method == 'POST':
        try: 
            data = {
                "company_name": request.form.get("company_name"),
                "designation": request.form.get("designation"),
                "experience": request.form.get("experience"),
                "location": request.form.get("location"),
                "job_preference_remote": request.form.get("job_preference"),
                "skills": request.form.get("skills"),
                "job_description": request.form.get("job_description")
            }

            # Validating data's attributes
            validateStringAttr(data)

            # Formatting data
            data["company_name"] = data["company_name"].title()
            data["designation"] = data["designation"].title()
            data["location"] = data["location"].title()
            data["skills"] = data["skills"].title()
            data["job_description"] = data["job_description"].capitalize()

            # Transform skills from string format separate by comma or space to list format
            data["skills"] = formatStringIntoList(data["skills"])

            data = {
                "job_summary": data
            }

            return json.dumps(data)
        except Exception as e:
            return error(str(e.args), 400)

@main.route('/api/v1/postResume', methods=['POST'])
@cross_origin()
def index():
    dataList = list()
    if request.method == 'POST':
        try:
            if not request.files or request.files['file'].filename == '':
                raise Exception("Select a file")
            for file in request.files.getlist('file'):
                fileName = file.filename
                if fileName.endswith('.pdf'):
                    file.save(file.filename)
                    ext = ResumeExtract(fileName)
                    dataList.append(ext.get_data())
                    os.remove(fileName)
            return json.dumps(dataList)
        except Exception as e:
            return error(str(e.args), 415)
