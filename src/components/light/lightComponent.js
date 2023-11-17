import { React, useRef, useEffect } from "react";
import "./style.css";


const updatePosition = (mouseEvent, lightComponent) => {
  const innerX = mouseEvent.clientX / 2;
  const innerY = mouseEvent.clientY / 2;
  
  lightComponent.style.left = innerX + "px";
  lightComponent.style.top = innerY + "px";
}

function LightComponent() {
  const lightComponent = useRef();

  function handleUpdatePosition(event) {
    if (lightComponent.current){
      updatePosition(event, lightComponent.current);
    }
    
  }

  useEffect(() => {
    if (lightComponent.current) {
      window.addEventListener("pointermove", handleUpdatePosition);
    }

    return () => {
      window.removeEventListener("pointermove", handleUpdatePosition);
    }
  })

  return (
    <div>
      <span ref={lightComponent} 
        className="light"
      />
    </div>

  );
}

export default LightComponent;
