import React from "react";
import { BsLinkedin } from "react-icons/bs";

const SocialMedia = () => {
  return (
    <div className="app__social">
      <div>
        <a
          href="https://www.linkedin.com/in/marwahammani/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <BsLinkedin />
        </a>
      </div>
    </div>
  );
};

export default SocialMedia;
