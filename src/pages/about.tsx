import React from "react";
import "../styles/about.css";

const About = () => {
  return (
    <div className="about">
      <div className="header">
        <div className="item">
          <img src="./image.svg" alt="photo" />
          <h1>What is this?</h1>
          <div className="text">
          <p> <span className="highlight">Antidoxx is a privacy tool that detects and removes sensitive information</span> from
              pictures so you can share the moment without sharing too much.</p>

          <p> After uploading your image, Antidoxx will locate text within the image, allowing you to choose
              what is removed and what remains.</p>

          </div>
        </div>
        <div className="item">
        <img className="goose" src="./goose.png" alt="lock" />
          <h1>Who made this?</h1>
          <div className="text">
            <p> <span className="highlight">Antidoxx</span> is a project created for MinneHack 2022 by four nerds
              with <span className="highlight">mixed feelings about geese</span>: Ben, Sasha, Nate, and Mini.</p>
          </div>
        </div>

        <div className="item">
          <img src="./lock.svg" alt="lock" />
          <h1>What do you do with my images?</h1>
          <div className="text">
            <p> We use a <span className="highlight">machine learning computer vision algorithm</span> to detect text in your images.
                You then select which of the text you want to blur, and we produce a new copy of your image with
                the desired regions blurred out. </p>
            <p> After you download your “Antidoxxed” image, <span className="highlight">we delete both the original and edited versions in order
                to keep your privacy safe.</span>
            </p>
             
          </div>
        </div>
      </div>
      <div className="item">

        </div>
    </div>
    
    /*
    <div className="page about">
      <div>
      <div className="item">
        <h2>What is this?</h2>
        <p>
          A tool to help protect the privacy of anyone that uses an image
          sharing website. Upload an image, pick the parts that you want to blur
          out, and in just a few seconds, get a new copy of the image ready to
          post to the web.
        </p>
      </div>
      <div className="item">
        <h1>How is my image processed?</h1>
        <p>
          We use a machine learning computer vision algorithm to detect text in
          your images that you might want to blur out in order to keep your
          location private. You then select which of the text you want to blur
          and we produce a new copy of your image with the desired r.
      <div className="item">
        <h1>What do you do with my images?</h1>
        <p>
          After you upload an image, we only process it and remove any text.
          After you download the new copy, we delete both the original and
          edited versions in order to keep your privacy safe.
        </p>
      </div>
      <div className="item">
        <h1>Who made this?</h1>
        <p>People who have mixed feelings about geese</p>
        <img src="./goose.png" alt="goose" />
      </div>
      </div>
    </div>
    */
  );
};

export default About;
