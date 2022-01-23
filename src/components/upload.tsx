import React, { useState, useCallback, useMemo } from "react";
import { ref, uploadBytes } from "firebase/storage";
import { app, storage } from "../firebase";
import { useDropzone } from "react-dropzone";
import { Button } from "react-bootstrap";

const baseStyle = {
  flex: 1,
  display: "flex",
  alignItems: "center",
  padding: "20px",
  borderWidth: 2,
  borderRadius: 2,
  borderColor: "#eeeeee",
  borderStyle: "dashed",
  backgroundColor: "#fafafa",
  color: "#bdbdbd",
  outline: "none",
  transition: "border .24s ease-in-out",
};

const focusedStyle = {
  borderColor: "#2196f3",
};

const acceptStyle = {
  borderColor: "#00e676",
};

const rejectStyle = {
  borderColor: "#ff1744",
};

const Upload = () => {
  const [fileForUpload, selectFileForUpload] = useState(null);

  const handleFileUpload = async () => {
    console.log(fileForUpload);
    if (fileForUpload === null) {
      return;
    }
    const storageRef = ref(storage, "helloworld.png");

    try {
      const result = await uploadBytes(storageRef, fileForUpload);
      console.log("Data!", result);
    } catch (e) {
      console.log("AHHHHHHHHHHH");
      console.log("Error", e);
    }
  };

  const onDrop = useCallback((acceptedFiles) => {
    selectFileForUpload(acceptedFiles[0]);
  }, []);

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
    <div>
      <h1>Upload Files</h1>
      <section className="container">
        <div {...getRootProps({ className: "dropzone", style })}>
          <input {...getInputProps()} />
          {isDragActive ? (
            <p>Drop the files here ...</p>
          ) : (
            <p>Drag and drop some files here, or click to select files</p>
          )}
        </div>
      </section>
      <Button disabled={fileForUpload === null} onClick={handleFileUpload}>
        Upload
      </Button>
    </div>
  );
};

export default Upload;
