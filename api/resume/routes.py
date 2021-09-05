from resume.error.error import error
from resume.dummy.dummyapi import dummyApi

from flask import Flask, jsonify, request, Blueprint
from flask_cors import CORS, cross_origin
import os



main = Blueprint('main', __name__)



@main.route('/', methods=['GET'])
def hello():
    return 'Whatup bitch <a href="https://www.linkedin.com/in/iyashdewangan/">Head over to</a>'


@main.route('/api/v1/dummy')
def api():
    return jsonify({'message': "testing other routes"})


@main.route('/api/post', methods=['POST'])
@cross_origin()
def index():
    if request.method == 'POST':
        try:
            if not request.files or request.files['file'].filename == '':
                raise Exception("Select a file")
            file = request.files['file']
            file.save(file.filename)
            fileName = file.filename
            if not file.filename.endswith('.pdf'):
                os.remove(file.filename)
                raise Exception("Wrong file type")
            os.remove(file.filename)    
            return dummyApi()
        except Exception as e:
            os.remove(file.filename)
            return error(str(e.args), 415)

    