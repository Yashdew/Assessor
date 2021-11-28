from resume.error.error import error
from resume.dummy.dummyapi import dummyApi
from resume.extraction.resumeextraction import ResumeExtract
from flask import Flask, jsonify, request, Blueprint
from flask_cors import CORS, cross_origin
import os
import json
import nltk
import random

main = Blueprint('main', __name__)
#nltk.download('popular')

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
            if not dataList:
                raise Exception("Select atleast 1 PDF file")        
            return json.dumps(dataList)
        except Exception as e:
            return error(str(e.args), 415)
        finally:
            os.remove(fileName)

@main.route('/api/v1/getRankings/<int:id>/<int:total>')
@cross_origin()
# Creates json {score:98,id:1} of random score.
def getRankings(id,total):
    ids, scores = [], []

    # Add random score to dict
    for x in range(1,total+1):
        scores.append(random.randint(100 - id * 12,100))

    # Add ids
    for x in range(1,total+1):
        ids.append(x)

    # Combine both dicts to get required json
    updatedScores = [{"id": i, "score": s} for i, s in zip(ids, scores)]
    return json.dumps(updatedScores)
    