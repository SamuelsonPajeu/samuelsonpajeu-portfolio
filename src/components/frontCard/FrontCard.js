import { React, useState } from "react";
import "./style.css";

import { WiredProfilePictureIcon } from './WiredProfilePictureIcon.tsx';
import LightComponent from '../light/lightComponent.js';


function FrontCard() {
  const [light, setLight] = useState(false);

  return (
    <div className="darkmode-front"
      onMouseEnter={() => setLight(true)}
      onMouseLeave={() => setLight(false)}
    >
      
      <div className="overlap-group">
        {light && (<LightComponent />)}
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
