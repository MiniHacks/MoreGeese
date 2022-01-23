import React from "react";
import { Button } from "react-bootstrap";

const Loading = ({ onPageChange }: { onPageChange: Function }) => {
  return (
    <div>
      <h1>Please wait while your image loads!</h1>
      <Button onClick={() => onPageChange("download")}>Go To Downloads</Button>
    </div>
  );
};

export default Loading;
