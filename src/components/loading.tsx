import React from "react";
import { Button } from "react-bootstrap";

const Loading = ({ onPageChange }: { onPageChange: Function }) => {
  return (
    <div className="loading">
      <h1>Detecting Funky Image Text...</h1>
      <Button className="button" variant="outline-dark" size="lg" onClick={() => onPageChange("download")}>Go To Downloads</Button>
    </div>
  );
};

// <div className="load"></div>

export default Loading;
