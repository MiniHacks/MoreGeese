import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./pages/home";
import About from "./pages/about";
import Navigation from "./components/navigation";

import { CSSTransition, TransitionGroup } from 'react-transition-group';

// import "./App.css";
import "./styles/page.css";
import "./styles/fade.css"

function App() {
  let location = useLocation();
  return (
    <div className="App">
      <Navigation />

      <TransitionGroup component={null}>
        <CSSTransition
          timeout={1000}
          classNames="fade"
          key={location.key}
          appear
        >
          <Routes location={location}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
          </Routes>

        </CSSTransition>
      </TransitionGroup>
    </div>
  );
}

export default App;
