import React from "react";
import Cam from "../img/cam.png";
import Add from "../img/add.png";
import More from "../img/more.png";

function Chatinfo() {
  return (
    <div className="chatInfo">
      <span>Maxim</span>
      <div className="chatIcons">
        <img src={Cam} alt="" />
        <img src={Add} alt="" />
        <img src={More} alt="" />
      </div>
    </div>
  );
}

export default Chatinfo;
