import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { ref, getDownloadURL } from "firebase/storage";
import { app, storage } from "../firebase";

const SelectAreas = ({
  onPageChange,
  fileId,
}: {
  onPageChange: Function;
  fileId: string;
}) => {
  useEffect(() => {
    getImageToEdit();
  }, []);

  const getImageToEdit = async () => {
    const pathReference = ref(storage, `unprocessed/${fileId}.png`);
    const url = await getDownloadURL(pathReference);
    const img = document.getElementById("image-to-edit");
    if (img !== null) {
      img.setAttribute("src", url);
    }
  };

  return (
    <div className="select">
      <h1>Select Parts of Your Image to Blur</h1>
      <img alt="img-to-edit" id="image-to-edit" />
      <br />
      <Button className="button" variant="outline-dark" size="lg" onClick={() => onPageChange("download")}>Done!</Button>
    </div>
  );
};

export default SelectAreas;
