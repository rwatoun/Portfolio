import React from "react";
import { BsTwitter, BsInstagram, BsFacebook } from "react-icons/bs";

const SocialMedia = () => {
  return (
    <div className="app__social">
      <div>
        <BsTwitter></BsTwitter>
      </div>
      <div>
        <BsFacebook></BsFacebook>
      </div>
      <div>
        <BsInstagram></BsInstagram>
      </div>
    </div>
  );
};

export default SocialMedia;
