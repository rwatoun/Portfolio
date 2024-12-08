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
            <h3 className="head-text" style={{ textAlign: "left" }}>
              Welcome
            </h3>
            <br />
            <br />
            <h3 className="head-text" style={{ textAlign: "right" }}>
              To
            </h3>
          </div>
          <div className="tag-cmp-img app_flex">
            <img src={images.profile} />
          </div>
          <div className="tag-cmp-2 app_flex">
            <h3 className="head-text" style={{ textAlign: "left" }}>
              Marwa's
            </h3>
            <br />
            <br />
            <h3 className="head-text" style={{ textAlign: "right" }}>
              Portfolio
            </h3>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default AppWrap(Header, "home");
