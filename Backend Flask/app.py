from flask import Flask

import numpy as np
import tensorflow
from flask import Flask, request
from tensorflow.keras.models import load_model
from flask_cors import CORS, cross_origin
from flask import jsonify
from flask import json
from numpy import asarray
import base64
import cv2
import os

app = Flask(__name__)

class_names = ['Acne and Rosacea',
               'Eczema',
               'Exanthems and Drug Eruptions',
               'Hair Loss Photos Alopecia and other Hair Diseases',
               'Lupus and other Connective Tissue diseases',
               'Melanoma Skin Cancer Nevi and Moles',
               'Nail Fungus and other Nail Disease',
               'Psoriasis pictures Lichen Planus and related diseases',
               'Urticaria Hives',
               'Vascular Tumors']


@app.route('/disease', methods=['POST'])
@cross_origin(origin='http://localhost:4200', headers=['Content- Type', 'Authorization', 'Access-Control-Allow-Origin'])
def send_disease():
    picture = request.data

    # processing image
    imgdata = base64.b64decode(picture)
    filename = 'skinImage.jpg'

    with open(filename, 'wb') as f:
        f.write(imgdata)
        f.close()

    width = 128
    height = 128
    dim = (width, height)

    img = cv2.imread('skinImage.jpg')
    resizedImg = cv2.resize(img, dim)
    resizedImg = np.expand_dims(resizedImg, axis=0)

    # make predictions on skin disease model
    model = load_model('../skin_disease_10_classes.h5')
    predictions = model.predict(resizedImg)
    print(predictions)
    predicted_class = class_names[np.argmax(predictions[0])]
    print(predicted_class)
    confidence = round(100 * (np.max(predictions[0])), 2)
    print(confidence)

    # send prediction
    return jsonify(predicted_class)


@app.route('/')
def hello_world():  # put application's code here
    return 'Hello World!'


if __name__ == '__main__':
    app.run()
