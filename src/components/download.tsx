import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { ref, getDownloadURL } from "firebase/storage";
import { app, storage } from "../firebase";
import { motion } from "framer-motion";
const downloadjs = require("downloadjs");

const Download = ({
  onPageChange,
  fileId,
}: {
  onPageChange: Function;
  fileId: string;
}) => {
  useEffect(() => {
    getImageUrl();
  }, []);

  const [imageUrl, setUrl] = useState("");

  const getImageUrl = async () => {
    const pathReference = ref(
      storage,
      `processed/cbcec80b-48f9-49be-9dee-722c5281e30f.jpg`
    );
    const url = await getDownloadURL(pathReference);
    setUrl(url);
  };

  const handleImageDownload = async () => {
    downloadjs(imageUrl);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      exit={{ opacity: 0 }}
    >
      <div className="download">
        <h1>Download Your Antidoxxed Image!</h1>
        <Button
          className="button"
          variant="outline-dark"
          size="lg"
          onClick={handleImageDownload}
        >
          Download!
        </Button>
        <h1>Not Done Yet?</h1>
        <Button
          className="button"
          variant="outline-dark"
          size="lg"
          onClick={() => onPageChange("getting-started")}
        >
          Antidoxx Another Image
        </Button>
      </div>
    </motion.div>
  );
};

export default Download;
