import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import About from "./pages/about";
import Navigation from "./components/navigation";

import { CSSTransition, TransitionGroup } from 'react-transition-group';

// import "./App.css";
import "./styles/page.css";

function App() {
  return (
    <div className="App">
      <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
    </div>
  );
}

export default App;
