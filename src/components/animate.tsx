import React, { FC } from "react";
import { Outlet } from "react-router-dom";
import { motion } from "framer-motion";


const Animate: FC = () => {
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

  export default Animate;