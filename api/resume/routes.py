from resume.error.error import error
from resume.dummy.dummyapi import dummyApi
from resume.extraction.resumeextraction import ResumeExtract , utils
from flask import Flask, jsonify, request, Blueprint
from flask_cors import CORS, cross_origin
import os



main = Blueprint('main', __name__)



@main.route('/', methods=['GET'])
def hello():
    return 'Whatup bitch <a href="https://www.linkedin.com/in/iyashdewangan/">Head over to</a>'


@main.route('/api/v1/dummy')
def api():
    return dummyApi()


@main.route('/api/post', methods=['POST'])
@cross_origin()
def index():
    dataList = list()
    if request.method == 'POST':
        try:
            if not request.files or request.files['file'].filename == '':
                raise Exception("Select a file")
            files = request.files.getlist('file')
            for file in files:
                file.save(file.filename)
                fileName = file.filename
                if utils.allowedFile(fileName):
                    ext = ResumeExtract(fileName)
                    data = ext.get_data()
                    dataList.append(data)
                    os.remove(fileName)            
            return {"DATA" : dataList}
        except Exception as e:
            return error(str(e.args), 415)