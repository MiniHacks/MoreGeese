import React from "react";
import { Button } from "react-bootstrap";
import { motion } from "framer-motion";

const Loading = ({ onPageChange }: { onPageChange: Function }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5  }}
      exit={{ opacity: 0 }}>
    <div>
      <h1>Please wait while your image loads!</h1>
      <div className="loader">
        <div className="load"></div>
      </div>
      <Button className="button" variant="outline-dark" size="lg" onClick={() => onPageChange("select-areas")}>Go To Select</Button>
    </div>
    </motion.div>
  );
};

// 

export default Loading;
