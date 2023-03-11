from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
cors = CORS(app)


@app.route("/classify", methods=['POST'])
def classify():
    if request.method == 'POST':
        data = request.json
        fileData = data.get('image')
        fileName = fileData.get('name')
        name = (fileName.split('/')[-1].split('.')[0]).replace('_', ' ').title()
        print(name)
        response = {
            "breed": name
        }
        return response
    return "bad requests", 500

