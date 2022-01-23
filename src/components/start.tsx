import React from "react";
import { Button } from "react-bootstrap";

const Start = ({ onPageChange }: { onPageChange: Function }) => {
  return (
    <div>
      <h1>Antidoxx your photos!</h1>
      <p>Hello world, this is me typing here!</p>
      <Button onClick={() => onPageChange("upload")}>Get Started</Button>
    </div>
  );
};

export default Start;
