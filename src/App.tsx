import React, { FC } from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Outlet, Route, Routes, useLocation } from "react-router-dom";
import Home from "./pages/home";
import About from "./pages/about";
import Navigation from "./components/navigation";
import Animate from "./components/animate";

import { AnimatePresence, motion } from "framer-motion";

// import "./App.css";
import "./styles/page.css";
import "./styles/fade.css"

export const AnimateRoutes: FC = () => {
  const location = useLocation();

  return (
    <AnimatePresence exitBeforeEnter>
      <Routes location={location} key={location.pathname}>
        <Route element={<Animate />}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
        </Route>
      </Routes>
    </AnimatePresence>
  );
};

function App() {
  return (
    <div>
      <Navigation />
      <AnimateRoutes />
    </div>
  );
}

export default App;
