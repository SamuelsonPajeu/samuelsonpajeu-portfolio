
import React from "react";
import "./style.css";

function BackCard() {
return (
  <div className="darkmode-back">
    <div className="overlap-group">
    <div className="overlap">
      <div className="SAMUELSON-PAJEU">SAMUELSON.PAJEU&nbsp;&nbsp;&nbsp;&nbsp;GMAIL.COM</div>
      <div className="text-wrapper">@</div>
    </div>
    <div className="rectangle">
      <img className="linkedin-circled" alt="Linkedin circled" src="assets/img/linkedin.svg" />
    </div>
    <div className="git-hub-wrapper">
      <img className="img" alt="Git hub" src="assets/img/github.svg" />
    </div>
    <div className="qr-code-wrapper">
      <img className="img" alt="Qr code" src="assets/img/view-more.svg" />
    </div>
    </div>
  </div>
  );
};

export default BackCard;
