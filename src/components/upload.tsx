import React, { useState, useCallback, useMemo } from "react";
import { ref, uploadBytes } from "firebase/storage";
import { app, storage } from "../firebase";
import { useDropzone } from "react-dropzone";
import { Button } from "react-bootstrap";
import { motion } from "framer-motion";

const baseStyle = {
  flex: 1,
  display: "flex",
  alignItems: "center",
  padding: "20px",
  borderWidth: 2,
  borderColor: "#eeeeee",
  borderStyle: "none",
  backgroundColor: "#fafafa",
  color: "#bdbdbd",
  outline: "solid",
  transition: "border .24s ease-in-out",
};

const focusedStyle = {
  borderColor: "#F26D00",
};

const acceptStyle = {
  borderColor: "#DB490B",
};

const rejectStyle = {
  borderColor: "#FA2602",
};

const Upload = ({
  onPageChange,
  fileId,
}: {
  onPageChange: Function;
  fileId: string;
}) => {
  const [fileForUpload, selectFileForUpload] = useState<any>(null);
  const [localUrl, setUrl] = useState("");

  const handleFileUpload = async () => {
    if (fileForUpload === null) {
      return;
    }

    const ext = fileForUpload.name.split(".").pop();
    const storageRef = ref(storage, `unprocessed/${fileId}.${ext}`);

    await uploadBytes(storageRef, fileForUpload);
    onPageChange("loading");
  };

  const onDrop = useCallback((acceptedFiles) => {
    selectFileForUpload(acceptedFiles[0]);
    const url = URL.createObjectURL(acceptedFiles[0]);
    setUrl(url);
  }, []);

  const renderSelectedFile = () => {
    if (fileForUpload === null) {
      return;
    }
    return (
      <div>
        <h4>Selected File</h4>
        <p>{fileForUpload.name}</p>
      </div>
    );
  };

  const renderImagePreview = () => {
    if (localUrl === "") {
      return;
    }
    return <img src={localUrl} alt="preview" />;
  };

  const {
    getRootProps,
    getInputProps,
    isFocused,
    isDragAccept,
    isDragReject,
    isDragActive,
  } = useDropzone({
    onDrop,
    accept: "image/*",
  });

  const style = useMemo(
    () => ({
      ...baseStyle,
      ...(isFocused ? focusedStyle : {}),
      ...(isDragAccept ? acceptStyle : {}),
      ...(isDragReject ? rejectStyle : {}),
    }),
    [isFocused, isDragAccept, isDragReject]
  );

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      exit={{ opacity: 0 }} >
      <div className="upload">
        <h1>Upload A File</h1>
        <section className="container">
          <div className="drop">
          <div {...getRootProps({ style })}>
            <input {...getInputProps()} />
            {isDragActive ? (
              <p>Drop the file here ...</p>
            ) : (
              <p>Drag and drop a file here, or click to select a file</p>
            )}
          </div>
        </div>
      </section>

      {fileForUpload !== null && renderSelectedFile()}

      <div className="preview">
        {localUrl !== "" && renderImagePreview()}
      </div>

      <Button
        className="button"
        variant="outline-dark"
        size="lg"
        disabled={fileForUpload === null}
        onClick={handleFileUpload}
      >
        Upload
      </Button>
    </div>
    </motion.div>
  );
};

export default Upload;
