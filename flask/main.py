
from flask import Flask, jsonify, request

app = Flask(__name__)

import numpy as np
import cv2
import pixellib
from pixellib.semantic import semantic_segmentation
from PIL import Image
import requests
from io import BytesIO

model = "deeplabv3_xception65_ade20k.h5"
segment_image = semantic_segmentation()
segment_image.load_ade20k_model(model)

@app.route("/")
def index():
    return "hello world!"

@app.route("/mask", methods=['POST'])
def mask():
    url = request.json['url']
    req = requests.get(url)
    f = Image.open(BytesIO(response.content))
    segments, img = segment_image(f, output_image="mask_"+f)
    mask = segments["masks"]

    # g value for signs is 5
    mask = img[..., 1] != 5
    masked = img.copy()
    masked[mask] = 0

    gray_image = cv2.cvtColor(masked, cv2.COLOR_BGR2GRAY)
    _, thresh = cv2.threshold(gray_image, 50, 255, cv2.THRESH_BINARY)
    contours, _ = cv2.findContours(thresh, cv2.RETR_EXTERNAL, cv2.CHAIN_APPROX_NONE)

    notable_contours = filter(lambda c: len(c) > 10, contours)
    outlines = []
    for contour in notable_contours:
        c = np.squeeze(contour, axis=1)
        zipped_points = []
        for (x, y) in c:
            zipped_points.append(x)
            zipped_points.append(y)
        outlines.append(zipped_points)
    return outlines

@app.route("/blur", methods=['POST'])
def blur():
    url = request.json['url']
    req = requests.get(url)
    f = Image.open(BytesIO(response.content))
    segments, img = segment_image(f, output_image="mask_"+f)
    mask = segments["masks"]

    img = cv2.imread("f.png", flags=cv2.IMREAD_COLOR)
    # g value for signs is 5
    mask = img[..., 1] != 5
    masked = img.copy()
    masked[mask] = 0

    gray_image = cv2.cvtColor(masked, cv2.COLOR_BGR2GRAY)
    _, thresh = cv2.threshold(gray_image, 50, 255, cv2.THRESH_BINARY)
    contours, _ = cv2.findContours(thresh, cv2.RETR_EXTERNAL, cv2.CHAIN_APPROX_NONE)
    blurred_img = cv2.GuassianBlur(img, (51,51), 0)
    height, width, _ = img.shape
    mask = np.zeros((height, width))
    for c in contours:
        mask = cv2.fillPoly(mask, pts=[c], color=(255,255,255))
    mask = np.repeat(mask[:, :, np.newaxis], 3, axis=2)
    output = np.where(mask==[0,0,0], img, blurred_img)
    return output

if __name__ == "__main__":
    app.run()

