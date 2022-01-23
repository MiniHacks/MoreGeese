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
            <p>
              {" "}
              <span className="highlight">
                Antidoxx is a privacy tool that detects and removes sensitive
                information
              </span>{" "}
              from pictures so you can share the moment without sharing too
              much.
            </p>
            <p>
              {" "}
              After uploading your image, Antidoxx will locate text within the
              image, allowing you to choose what is removed and what remains.
            </p>

            <p>
              {" "}
              Upload your image, Antidoxx will locate text and faces, allowing
              you to choose what is removed and what remains.
            </p>
          </div>
        </div>
        <div className="item">
          <img className="goose" src="./goose.png" alt="lock" />
          <h1>Who made this?</h1>
          <div className="text">
            <p>
              {" "}
              <span className="highlight">Antidoxx</span> is a project created
              for MinneHack 2022 by four nerds with{" "}
              <span className="highlight">mixed feelings about geese</span>:
              Ben, Sasha, <a href="https://www.n8pf.com/">Nate</a>, and Mini.
            </p>
          </div>
        </div>

        <div className="item">
          <img src="./lock.svg" alt="lock" />
          <h1>What do you do with my images?</h1>
          <div className="text">
            <p>
              {" "}
              We use a{" "}
              <span className="highlight">
                machine learning computer vision algorithm
              </span>{" "}
              to detect text in your images. You then select which of the text
              you want to blur, and we produce a new copy of your image with the
              desired regions blurred out.{" "}
            </p>
            <p>
              {" "}
              After you download your “Antidoxxed” image,{" "}
              <span className="highlight">
                we delete both the original and edited versions in order to keep
                your privacy safe.
              </span>
            </p>
          </div>
        </div>
      </div>
      <div className="item"></div>
    </div>
  );
};

export default About;
