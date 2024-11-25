import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { images } from "../../constants";
import "./About.scss";

const abouts = [
  {
    title: "Web dev",
    description: "I am a good web dev",
    imgUrl: images.about01,
  },
  {
    title: "Web design",
    description: "I am a good design dev",
    imgUrl: images.about02,
  },
  {
    title: "Backend",
    description: "I am a good backend dev",
    imgUrl: images.about03,
  },
  {
    title: "DevOps",
    description: "I am a good devops eng",
    imgUrl: images.about04,
  },
];

const About = () => {
  return (
    <>
      <h2 className="head-text">
        {" "}
        I know that <span>Good Development</span> <br /> means{" "}
        <span>Good Business</span>{" "}
      </h2>

      <div className="app__profiles">
        {abouts.map((abouts, index) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: "tween" }}
            className="app__profile-item"
            key={abouts.title + index}
          >
            <img src={abouts.imgUrl} alt={abouts.title} />
            <h2 className="bold-text" style={{ marginTop: 20 }}>
              {abouts.title}
            </h2>
            <p className="p-text" style={{ marginTop: 10 }}>
              {abouts.description}
            </p>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default About;
