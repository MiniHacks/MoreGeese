import React, { useState } from "react";
import { Button } from "react-bootstrap";
import Start from "../components/start";
import Upload from "../components/upload";

const Home = () => {
  const [page, setPage] = useState("get-started");

  const handlePageChange = (pageName: string) => {
    setPage(pageName);
  };

  switch (page) {
    case "get-started":
      return <Start onPageChange={handlePageChange} />;
    case "upload":
      return <Upload />;
    default:
      return <Start onPageChange={handlePageChange} />;
  }
};

export default Home;
