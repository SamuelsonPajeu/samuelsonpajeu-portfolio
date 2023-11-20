
import { React, useState } from "react";
import "./style.css";

import LightComponent from '../light/lightComponent.js';


function BackCard() {
const [light, setLight] = useState(false);

return (
  <div className="darkmode-back"
    onMouseEnter={() => setLight(true)}
    onMouseLeave={() => setLight(false)}
  >
    
    <div className="overlap-group">
      {light && (<LightComponent />)}

      <div className="overlap">
        <div className="SAMUELSON-PAJEU">SAMUELSON.PAJEU&nbsp;&nbsp;&nbsp;&nbsp;GMAIL.COM</div>
          <div className="text-wrapper">@</div>
        </div>
        <div className="rectangle">
          <a href="https://www.linkedin.com/in/samuelson-pajeu-7a4369149/" target="_blank" rel="noreferrer" >
            <img className="img" alt="Linkedin circled" src="assets/img/linkedin.svg" draggable="false"  />
          </a>
        </div>
        <div className="git-hub-wrapper">
          <a href="https://github.com/SamuelsonPajeu" target="_blank" rel="noreferrer" >
            <img className="img" alt="Git hub" src="assets/img/github.svg" draggable="false" />
          </a>
        </div>
        <div className="qr-code-wrapper">
          <img className="img" alt="Qr code" src="assets/img/view-more.svg" draggable="false" />
        </div>
      </div>
  </div>
  );
};

export default BackCard;
