import React, { FC } from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Outlet, Route, Routes, useLocation } from "react-router-dom";
import Home from "./pages/home";
import About from "./pages/about";
import Navigation from "./components/navigation";

// import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { AnimatePresence, motion } from "framer-motion";

// import "./App.css";
import "./styles/page.css";
import "./styles/fade.css"

// does funky transition
export const Animate: FC = () => {
  return (
    <motion.div
      animate="in"
      initial="initial"
      exit="out"
      variants={{
        initial: { opacity: 0 },
        in: { opacity: 1 },
        out: { opacity: 0 }
      }}
      transition={{
        type: "spring",
        damping: 10,
        stiffness: 40
      }}
    >
      <Outlet />
    </motion.div>
  );
};

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
