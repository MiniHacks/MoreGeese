import React from "react";
import { Button } from "react-bootstrap";
import "../styles/start.css";


// SORRY BEN LOL

const Start = ({ onPageChange }: { onPageChange: Function }) => {
  return (
    <div className="start">
      <img src="./placeholder.png" alt="pretty placeholder" />
      <h1 className="title">
        <span className="blur">A</span>
        <span className="blur">n</span>
        <span className="blur">t</span>
        <span className="blur">i</span>
        <span className="blur">d</span>
        <span className="blur">o</span>
        <span className="blur">x</span>
        <span className="blur">x </span>
         Your Photos </h1>
      <p> A way to remove identifying information from your images </p>
      <Button className="button" variant="outline-dark" size="lg" onClick={() => onPageChange("upload")}>Get Started</Button>
    </div>
  );
};

export default Start;
