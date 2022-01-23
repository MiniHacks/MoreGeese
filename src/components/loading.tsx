import React from "react";
import { Button } from "react-bootstrap";

const Loading = ({ onPageChange }: { onPageChange: Function }) => {
  return (
    <div>
      <h1>Please wait while your image loads!</h1>
      <Button onClick={() => onPageChange("select-areas")}>Go To Select</Button>
    </div>
  );
};

export default Loading;
