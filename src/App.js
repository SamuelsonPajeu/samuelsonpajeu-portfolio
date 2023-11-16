import { React, useRef, useEffect } from "react";
import './App.css';

// import FrontCard from './components/frontCard/FrontCard.js';
import BackCard from './components/backCard/BackCard.js';


const applyScaling = (scaledContent) => {
  scaledContent.style.transform = 'scale(1.25, 1.25)';

  const { width: cw, height: ch } = scaledContent.getBoundingClientRect();
  const ww = window.innerWidth;
  const wh = window.innerHeight;
  const scaleAmtX = Math.min(ww / cw, wh / ch);
  const scaleAmtY = scaleAmtX;

  const scale = `scale(${scaleAmtX}, ${scaleAmtY})`;
  scaledContent.settings.scale = scale;

  scaledContent.style.transform = scale;
};

const applyTilt = (tiltedContent, event) => {

  const settings = {
    reverse: 0,        // Reverse tilt: 1, 0
    max: 18,           // Max tilt: 35
    axis: "",          // Limit axis. "y", "x"
  };

  const element = tiltedContent.getBoundingClientRect();
  const x = Math.min(1, Math.max(0, (event.clientX - element.left) / element.width));
  const y = Math.min(1, Math.max(0, (event.clientY - element.top) / element.height));
  const reverse = settings.reverse ? -1 : 1;
  const tiltX = reverse * (settings.max / 2 - x * settings.max);
  const tiltY = reverse * (y * settings.max - settings.max / 2);

  tiltedContent.style.transform = `
    rotateX(${settings.axis === "x" ? 0 : tiltY}deg)
    rotateY(${settings.axis === "y" ? 0 : tiltX}deg)
    ${tiltedContent.settings.scale}
  `

}

function App() {
  const scaledContent = useRef();
  scaledContent.settings = {
    'scale' : 1
  }

  useEffect(() => {

    function handleResize(){
      if(scaledContent.current) {
        applyScaling(scaledContent.current);
      }
    }

    function handleTilt(event){
      if(scaledContent.current) {
        applyTilt(scaledContent.current, event);
      }
    }

    window.addEventListener("resize", handleResize);
    window.addEventListener("pointermove", handleTilt);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("pointermove", handleTilt);
    }

  })

  return (
    <div className="App">
      <div ref={scaledContent}>
        {/* <FrontCard /> */}
        <BackCard />
      </div>
    </div>
  );
}

export default App;
