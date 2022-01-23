
from flask import Flask, jsonify, request

app = Flask(__name__)

"""
!pip3 install tensorflow
!pip3 install opencv-python
!pip3 install scikit-image
!pip3 install pillow
!pip3 install pixellib
"""

import numpy as np
import cv2
import pixellib
from pixellib.semantic import semantic_segmentation

model = "deeplabv3_xception65_ade20k.h5"
segment_image = semantic_segmentation()
segment_image = load_ade20k_model(model)

@app.route("/")
def index():
    return "hello world!"

@app.route("/mask", methods=['POST'])
def mask():
    f = request.files['file']
    segments, img = segment_image(f, output_image="mask_"+f)
    mask = segments["masks"]

    # g value for signs is 5
    mask = img[..., 1] != 5
    masked = img.copy()
    masked[mask] = 0

    gray_image = cv2.cvtColor(masked, cv2.COLOR_BGR2GRAY)
    ret, thresh = cv2.threshold(gray_image, 50, 255, cv2.THRESH_BINARY)
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


if __name__ == "__main__":
    app.run(debug=True)
