import React from "react";
import { motion } from "framer-motion";
import { images } from "../../constants";
import { AppWrap } from "../../wrapper";
import "./Header.scss";

const scaleVariants = {
  whileInView: {
    scale: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: 1,
      ease: "easeInOut",
    },
  },
};

const Header = () => {
  return (
    <div className="app__header app__flex ">
      <motion.div
        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
        transition={{ duration: 0.5 }}
        className="app__header-info"
      >
        <div className="app__header-badge">
          <div className="tag-cmp app_flex">
            <h3 className="head-text" style={{ fontSize: "140px" }}>
              Marwa Hammani
            </h3>
          </div>
          <div className="tag-cmp1 app_flex">
            <p className="p-text" style={{ fontSize: "20px" }}>
              A software engineering student with a knack for problem solving,
              UI design, and impactful technology.
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default AppWrap(Header, "home");
