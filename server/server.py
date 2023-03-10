from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
cors = CORS(app)


@app.route("/classify", methods=['POST'])
def classify():
    if request.method == 'POST':
        response = {
            "breed": "Bulbasaur"
        }
        return response
    return "bad requests", 500


@app.route('/data', methods=['GET'])
def get_time():
    # Returning an api for showing in  reactjs
    return {
        'Name': "geek",
        "Age": "22",
        "Date": 1,
        "programming": "python"
    }



@app.route('/profile')
def my_profile():
    response_body = {
        "name": "Nagato",
        "about" :"Hello! I'm a full stack developer that loves python and javascript"
    }
    return response_body