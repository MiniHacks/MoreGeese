import React from "react";
import { Button } from "react-bootstrap";

const Start = ({ onPageChange }: { onPageChange: Function }) => {
  return (
    <div className="start">
      <h1>Antidoxx Your Photos</h1>
      <p> A way to remove identifying information from your images </p>
      <Button variant="outline-dark" size="lg" onClick={() => onPageChange("upload")}>Get Started</Button>
    </div>
  );
};

export default Start;
