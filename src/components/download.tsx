import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { ref, getDownloadURL } from "firebase/storage";
import { app, storage } from "../firebase";
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
    const pathReference = ref(storage, `unprocessed/${fileId}.png`);
    const url = await getDownloadURL(pathReference);
    setUrl(url);
  };

  const handleImageDownload = async () => {
    downloadjs(imageUrl);
  };

  return (
    <div>
      <h1>Download Your Fixed Image!</h1>
      <Button onClick={handleImageDownload}>Download!</Button>
    </div>
  );
};

export default Download;
