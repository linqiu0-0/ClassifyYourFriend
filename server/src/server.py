import os

from flask import Flask, request, render_template
from flask_cors import CORS
import base64
import io
from PIL import Image
import torch
import torchvision.transforms as transforms
import pickle
import time
import torch.nn as nn  # All neural network modules, nn.Linear, nn.Conv2d, BatchNorm, Loss functions

from CatDogCNN import CatDogCNN

app = Flask(__name__)
cors = CORS(app)

DEVICE = torch.device("cpu")

cat_class_to_name = {}
with open("class_to_name/cat_class_to_name", "rb") as f:
    cat_class_to_name = pickle.load(f)

dog_class_to_name = {}
with open("class_to_name/dog_class_to_name", "rb") as f:
    dog_class_to_name = pickle.load(f)

species_class_to_name = {
    0: "cat",
    1: "dog"
}


def cat_to_name(idx):
    return cat_class_to_name[idx.item()]


def dog_to_name(idx):
    return dog_class_to_name[idx.item()]


def species_to_name(idx):
    return species_class_to_name[idx.item()]


# Load the PyTorch models
species_model = CatDogCNN()
species_model.load_state_dict(torch.load('saved_models/DogCat.pt', map_location=torch.device('cpu')))
species_model.eval()

cat_breed_model = torch.hub.load('pytorch/vision:v0.6.0', 'resnet18', pretrained=True)
cat_breed_model.fc = nn.Linear(512, 40)  # This will reinitialize the layer as well
cat_breed_model.load_state_dict(torch.load('saved_models/CatBreed.pt', map_location=torch.device('cpu')))
cat_breed_model.eval()

dog_breed_model = torch.hub.load('pytorch/vision:v0.6.0', 'resnet18', pretrained=True)
dog_breed_model.fc = nn.Linear(512, 70)  # This will reinitialize the layer as well
dog_breed_model.load_state_dict(torch.load('saved_models/DogBreed.pt', map_location=torch.device('cpu')))
dog_breed_model.eval()


# Define a function to preprocess the image
def preprocess_image(image_bytes):
    transform = transforms.Compose([
        transforms.Resize((224, 224)),
        transforms.ToTensor(),
        transforms.Normalize(mean=(0.485, 0.456, 0.406), std=(0.229, 0.224, 0.225))
    ])

    # image = Image.open(io.BytesIO(image_bytes))
    image = Image.open(io.BytesIO(image_bytes))

    # Check number of channels in the image
    if image.mode != 'RGB':
        # Convert to RGB if not already in RGB format
        image = image.convert('RGB')

    # add batch dim
    tensor = transform(image).unsqueeze(0)
    print("\n")
    print("\n")
    print("\n")
    print(tensor.shape)
    return tensor


# Define a function to classify the image
def classify_image(image_b64):
    # Convert base64 string to bytes
    image_bytes = base64.b64decode(image_b64.split(',')[1])

    # Preprocess the image
    image_tensor = preprocess_image(image_bytes)

    # Use the model to make predictions
    with torch.no_grad():
        species = species_model(image_tensor)
        _, predicted = torch.max(species.data, 1)
        species = species_to_name(predicted)
        breed = "Bulbasur"
        if species == "cat":
            breed = cat_breed_model(image_tensor)
            _, predicted = torch.max(breed.data, 1)
            breed = cat_to_name(predicted)
        elif species == "dog":
            breed = dog_breed_model(image_tensor)
            _, predicted = torch.max(breed.data, 1)
            breed = dog_to_name(predicted)

    return species, breed


def download_image(image_b64, filename):
    # Decode the base64 string into bytes
    image_bytes = base64.b64decode(image_b64.split(',')[1])

    # Save the image bytes to a file
    with open(filename, 'wb') as f:
        f.write(image_bytes)


def format_server_time():
    server_time = time.localtime()
    return time.strftime("%I:%M:%S %p", server_time)


@app.route('/')
def index():
    context = {'server_time': format_server_time()}
    return render_template('index.html', context=context)


@app.route("/classify", methods=['POST'])
def classify():
    if request.method == 'POST':
        data = request.json
        file_data = data.get('image')
        image_base64 = file_data.get('data')
        file_name = file_data.get('name')
        name = (file_name.split('/')[-1].split('.')[0]).replace('_', ' ').title()
        print("/n" + name)
        if name == 'Bulbasaur':
            species = 'Bulbasaur'
            breed = 'Bulbasaur'
        else:
            species, breed = classify_image(image_base64)

        response = {
            "species": species,
            "breed": breed
        }

        return response
    return "bad requests", 500

# download_image(image_base64, "/Users/qiulin/Desktop/cse 455/ClassifyYourFriend/server/" + name)
if __name__ == "__main__":
    app.run(debug=True, host="0.0.0.0", port=int(os.environ.get("PORT", 8080)))