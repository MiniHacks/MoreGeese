
from flask import Flask

app = Flask(__name__)

"""
!pip3 install tensorflow
!pip3 install opencv-python
!pip3 install scikit-image
!pip3 install pillow
!pip3 install pixellib
"""

@app.route("/")
def index():
    return "hello world!"

if __name__ == "__main__":
    app.run(debug=True)
