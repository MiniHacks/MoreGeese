import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { motion } from "framer-motion";

const Loading = ({
  onPageChange,
  upload,
}: {
  onPageChange: Function;
  upload: boolean;
}) => {
  const [isLoading, setLoading] = useState(true);

  const demoTime = Math.floor(
    Math.random() * (Math.floor(6000) - Math.ceil(2000)) + Math.ceil(2000)
  );

  console.log(demoTime);
  useEffect(() => {
    setTimeout(() => setLoading(false), demoTime);
  }, []);

  const nextPage = upload ? "select-areas" : "download";

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      exit={{ opacity: 0 }}
    >
      <div>
        <h1>Please wait while your image loads!</h1>
        <div className="loader">
          <div className="load"></div>
        </div>
        <Button
          className="button"
          variant="outline-dark"
          size="lg"
          disabled={isLoading}
          onClick={() => onPageChange(nextPage)}
        >
          {isLoading
            ? "Please Wait..."
            : upload
            ? "Go To Select"
            : "Go To Download"}
        </Button>
      </div>
    </motion.div>
  );
};

export default Loading;
