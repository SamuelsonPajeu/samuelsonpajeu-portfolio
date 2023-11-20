import { React, useState } from "react";
import "./style.css";

import { WiredProfilePictureIcon } from './WiredProfilePictureIcon.tsx';
import LightComponent from '../light/lightComponent.js';


function FrontCard() {
  const [light, setLight] = useState(false);
  const [skillLabel, setSkillLabel] = useState("");

  return (
    <div className="darkmode-front"
      onMouseEnter={() => setLight(true)}
      onMouseLeave={() => setLight(false)}
    >
      
      <div className="overlap-group">
        {light && (<LightComponent />)}
        <div className="background" />
        <img className="bottom-line" alt="Bottom line" src="/assets/img/bottom-line-1.svg" draggable="false" />
        <img className="upper-line" alt="Upper line" src="/assets/img/upper-line-1.svg" draggable="false" />
        <div className="text-wrapper">FULL STACK DEVELOPER</div>
        <div className="div">SAMUELSON</div>
        <div className="text-wrapper-2">PAJEU</div>
        <div className="icon-label">{skillLabel}</div>
        {/* <img className="bottom-icons" alt="Bottom icons" src="/assets/img/bottom-icons.svg" draggable="true" /> */}
        <div className="bottom-icons-wrapper"
          onMouseMove={(event) => {
            if(event.target && event.target.name) {
              setSkillLabel(event.target.name.toUpperCase());
            }
          }}
          onMouseLeave={() => {
            setSkillLabel("");
          }}
        >
          <img name="Python" className="bottom-icon" alt="Bottom icons" src="/assets/img/python.png" draggable="false" />
          <img name="JavaScript" className="bottom-icon" alt="Bottom icons" src="/assets/img/javaScript.png" draggable="false" />
          <img name="C#" className="bottom-icon" alt="Bottom icons" src="/assets/img/cS.png" draggable="false" />
          <img name="Dart" className="bottom-icon" alt="Bottom icons" src="/assets/img/dartLanguage.png" draggable="false" />
          <img name="HTML" className="bottom-icon" alt="Bottom icons" src="/assets/img/hTML.png" draggable="false" />
          <img name="Vue" className="bottom-icon" alt="Bottom icons" src="/assets/img/vuetify.png" draggable="false" />
          <img name="React" className="bottom-icon" alt="Bottom icons" src="/assets/img/react.png" draggable="false" />
          <img name="Java" className="bottom-icon" alt="Bottom icons" src="/assets/img/java.png" draggable="false" />
          <img name="Unity" className="bottom-icon" alt="Bottom icons" src="/assets/img/unity.png" draggable="false" />
          <img name="Go" className="bottom-icon" alt="Bottom icons" src="/assets/img/golang.png" draggable="false" />
        </div>
        <WiredProfilePictureIcon className="wired-profile" />
      </div>
    </div>
  );
}

export default FrontCard;
