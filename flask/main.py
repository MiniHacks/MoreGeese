
from flask import Flask

app = Flask(__name__)

"""
!pip3 install tensorflow
!pip3 install opencv-python
!pip3 install scikit-image
!pip3 install pillow
!pip3 install pixellib
"""

import pixellib
from pixellib.semantic import semantic_segmentation

model = "deeplabv3_xception65_ade20k.h5"
segment_image = semantic_segmentation()
segment_image = load_ade20k_model(model)

@app.route("/")
def index():
    return "hello world!"

@app.route("/mask")
def mask():

if __name__ == "__main__":
    app.run(debug=True)
