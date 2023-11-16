import { React, useRef, useEffect } from "react";
import './App.css';

// import FlippableCard from './components/flippableCards/flippableCards';
// import DarkmodeFront from './components/frontCard/DarkmodeFront';
import FrontCard from './components/frontCard/FrontCard.js';


const applyScaling = (scaledContent) => {
  scaledContent.style.transform = 'scale(1.25, 1.25)';

  let { width: cw, height: ch } = scaledContent.getBoundingClientRect();
  let ww = window.innerWidth;
  let wh = window.innerHeight;
  let scaleAmtX = Math.min(ww / cw, wh / ch);
  let scaleAmtY = scaleAmtX;

  scaledContent.style.transform = `scale(${scaleAmtX}, ${scaleAmtY})`;
};

function App() {
  const scaledContent = useRef();

  useEffect(() => {

    function handleResize(){
      if(scaledContent.current) {
        applyScaling(scaledContent.current);
      }
    }
  
    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    }

  })

  return (
    <div className="App">
      <div ref={scaledContent}>
        <FrontCard />
      </div>
    </div>
  );
}

export default App;
