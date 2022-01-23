import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { ref, getDownloadURL } from "firebase/storage";
import { app, storage } from "../firebase";
import ImageMapper from "react-image-mapper";
import { arrayBounds } from "./range_points";

const SelectAreas = ({
  onPageChange,
  fileId,
}: {
  onPageChange: Function;
  fileId: string;
}) => {
  useEffect(() => {
    getImageToEdit();
    getImageMaps();
  }, []);

  const [imageUrl, setUrl] = useState("");
  const [maps, setMaps] = useState({});

  const getImageToEdit = async () => {
    const pathReference = ref(storage, `unprocessed/${fileId}.png`);
    const url = await getDownloadURL(pathReference);
    setUrl(url);
  };

  const getImageMaps = () => {
    const imageMap = {
      name: "image-map",
      areas: arrayBounds.map((a, idx) => {
        return {
          name: idx,
          shape: "poly",
          coords: a,
          preFillColor: "green",
          fillColor: "blue",
        };
      }),
    };

    const newMaps = {
      name: "new-maps",
      areas: [
        {
          name: "area",
          shape: "poly",
          coords: [25, 50, 50, 50, 50, 75, 25, 75],
          preFillColor: "green",
          fillColor: "blue",
        },
      ],
    };
    setMaps(newMaps);
  };

  return (
    <div>
      <h1>Select of Your Image to Blur</h1>
      {Object.keys(maps).length !== 0 && (
        <ImageMapper
          src={imageUrl}
          map={maps}
          onLoad={() => console.log("Hello!")}
        />
      )}
      <Button onClick={() => onPageChange("download")}>Done!</Button>
    </div>
  );
};

export default SelectAreas;
