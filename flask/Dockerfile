# syntax=docker/dockerfile:1

FROM gcr.io/google-appengine/python

COPY ["deeplabv3_xception65_ade20k.h5", "/"]
COPY ["main.py", "/"]

RUN pip3 install --upgrade pip
RUN pip install tensorflow==2.7.0 && \
pip install opencv-python==4.5.5.62 && \
pip install scikit-image==0.18.3 && \
pip install Pillow==9.0.0 && \
pip install pixellib==0.7.1 && \
pip install Flask==1.1.4 && \
pip install numpy 

EXPOSE 5000
EXPOSE 8080
EXPOSE 8000

CMD [ "python3", "main.py", "--host=0.0.0.0"]
