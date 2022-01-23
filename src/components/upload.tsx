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

const Upload = ({
  onPageChange,
  fileId,
}: {
  onPageChange: Function;
  fileId: string;
}) => {
  const [fileForUpload, selectFileForUpload] = useState<any>(null);

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

  const {
    getRootProps,
    getInputProps,
    isFocused,
    isDragAccept,
    isDragReject,
    isDragActive,
  } = useDropzone({
    onDrop,
    accept: "image/png",
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
      {fileForUpload !== null && renderSelectedFile()}
      <Button disabled={fileForUpload === null} onClick={handleFileUpload}>
        Upload
      </Button>
    </div>
  );
};

export default Upload;
