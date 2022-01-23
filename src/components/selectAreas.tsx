import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { ref, getDownloadURL, connectStorageEmulator } from "firebase/storage";
import { app, storage } from "../firebase";
import ImageMapper from "react-image-mapper";
import { arrayBounds } from "./range_points";
import { motion } from "framer-motion";
import "../styles/select.css";

const SelectAreas = ({
  onPageChange,
  fileId,
  extension,
}: {
  onPageChange: Function;
  fileId: string;
  extension;
}) => {
  useEffect(() => {
    getImageToEdit();
    getImageMaps([]);
  }, []);

  const [imageUrl, setUrl] = useState("");
  const [imageWidth, setWidth] = useState(1000);
  const [maps, setMaps] = useState({});
  const [selectedAreas, setAreas] = useState([]);

  const getImageToEdit = async () => {
    const pathReference = ref(storage, `unprocessed/${fileId}.${extension}`);
    const url = await getDownloadURL(pathReference);
    setUrl(url);
    const img = new Image();
    img.src = url;
    img.onload = function () {
      setWidth(img.naturalWidth);
    };
  };

  const handleSelectArea = async (area) => {
    let newAreas: number[] = [...selectedAreas];
    const areaIdx: number = newAreas.indexOf(area.name);
    if (areaIdx > -1) {
      newAreas.splice(areaIdx, 1);
    } else {
      newAreas.push(area.name);
    }
    setAreas(newAreas);
    await getImageMaps(newAreas);
    await getImageMaps(newAreas);
    console.log(newAreas);
  };

  const getImageMaps = async (newAreas) => {
    const imageMaps = {
      name: "image-map",
      areas: arrayBounds.map((a, idx) => {
        const color: string = newAreas.indexOf(idx) > -1 ? "#DB490B" : "cyan";
        return {
          name: idx,
          shape: "poly",
          coords: a,
          preFillColor: color,
          fillColor: "white",
        };
      }),
    };
    setMaps(imageMaps);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      exit={{ opacity: 0 }}
    >
      <div className="selection">
        <h1>Select Parts of Your Image to Blur</h1>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 5 }}
          exit={{ opacity: 0 }}
        >
          <div className="map">
            {Object.keys(maps).length !== 0 && (
              <ImageMapper
                src={imageUrl}
                map={maps}
                width={800}
                imgWidth={imageWidth}
                onClick={(area) => handleSelectArea(area)}
              />
            )}
          </div>
        </motion.div>
        <Button
          className="button"
          variant="outline-dark"
          size="lg"
          onClick={() => onPageChange("loading", false)}
        >
          Done!
        </Button>
      </div>
    </motion.div>
  );
};

export default SelectAreas;
