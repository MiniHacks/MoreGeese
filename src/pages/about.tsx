import React from "react";
import "../styles/about.css";

const About = () => {
  return (
    <div className="page about">
      <div>
        <h1>Hello!</h1>
        <h2>What is this?</h2>
        <p>
          A tool to help protect the privacy of anyone that uses an image
          sharing website. Upload an image, pick the parts that you want to blur
          out, and in just a few seconds, get a new copy of the image ready to
          post to the web.
        </p>
        <h1>How is my image processed?</h1>
        <p>
          We use a machine learning computer vision algorithm to detect text in
          your images that you might want to blur out in order to keep your
          location private. You then select which of the text you want to blur
          and we produce a new copy of your image with the desired regions
          blurred out.
        </p>
        <h1>What do you do with my images?</h1>
        <p>
          After you upload an image, we only process it and remove any text.
          After you download the new copy, we delete both the original and
          edited versions in order to keep your privacy safe.
        </p>
        <h1>Who made this?</h1>
        <p>People who have mixed feelings about geese</p>
        <img src="./goose.png" alt="goose" />
      </div>
    </div>
  );
};

export default About;
