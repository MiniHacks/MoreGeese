import React from "react";
import { Button } from "react-bootstrap";

const Loading = ({ onPageChange }: { onPageChange: Function }) => {
  return (
    <div>
      <h1>Please wait while your image loads!</h1>
      <div className="loader">
        <div className="load"></div>
      </div>
      <Button className="button" variant="outline-dark" size="lg" onClick={() => onPageChange("select-areas")}>Go To Select</Button>
    </div>
  );
};

// 

export default Loading;
