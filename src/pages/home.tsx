import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import Start from "../components/start";
import Upload from "../components/upload";
import Loading from "../components/loading";
import SelectAreas from "../components/selectAreas";
import Download from "../components/download";
const { v4: uuidv4 } = require("uuid");

const Home = () => {
  const [page, setPage] = useState("get-started");
  const [fileId, setId] = useState("");
  const [ext, setExt] = useState("");
  const [up, setUpload] = useState(true);

  useEffect(() => {
    setId(uuidv4());
  }, []);

  const handlePageChange = (pageName: string, upload: boolean = true) => {
    setPage(pageName);
    setUpload(upload);
  };

  const handleExtChange = (extension: string) => {
    setExt(extension);
  };

  switch (page) {
    case "get-started":
      return <Start onPageChange={handlePageChange}/>;
    case "upload":
      return (
        <Upload
          onPageChange={handlePageChange}
          onExtChange={handleExtChange}
          fileId={fileId}
        />
      );
    case "loading":
      return <Loading onPageChange={handlePageChange} upload={up} />;
    case "select-areas":
      return (
        <SelectAreas
          onPageChange={handlePageChange}
          fileId={fileId}
          extension={ext}
        />
      );
    case "download":
      return <Download onPageChange={handlePageChange} fileId={fileId} />;
    default:
      return <Start onPageChange={handlePageChange}/>;
  }
};

export default Home;
