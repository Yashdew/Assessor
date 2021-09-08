from resume.error.error import error
from resume.dummy.dummyapi import dummyApi
from resume.extraction.resumeextraction import ResumeExtract
from flask import Flask, jsonify, request, Blueprint
from flask_cors import CORS, cross_origin
import os
import json


main = Blueprint('main', __name__)


@main.route('/', methods=['GET'])
def hello():
    return 'Whatup bitch <a href="https://www.linkedin.com/in/iyashdewangan/">Head over to</a>'


@main.route('/api/v1/dummy')
def api():
    return dummyApi()


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
