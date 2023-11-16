import React from "react";
import "./style.css";

import { WiredProfilePictureIcon } from './WiredProfilePictureIcon.tsx';

function FrontCard() {
  return (
    <div className="darkmode-front">
      <div className="overlap-group">
        <div className="background" />
        <img className="bottom-line" alt="Bottom line" src="/assets/img/bottom-line-1.svg" />
        <img className="upper-line" alt="Upper line" src="/assets/img/upper-line-1.svg" />
        <div className="text-wrapper">FULL STACK DEVELOPER</div>
        <div className="div">SAMUELSON</div>
        <div className="text-wrapper-2">PAJEU</div>
        <img className="bottom-icons" alt="Bottom icons" src="/assets/img/bottom-icons.svg" />
        <WiredProfilePictureIcon className="wired-profile" />
      </div>
    </div>
  );
}

export default FrontCard;
