import { React, useState, useRef, useEffect } from "react";
import './App.css';


import Tilt from 'react-parallax-tilt';
import FrontCard from './components/frontCard/FrontCard.js';
import BackCard from './components/backCard/BackCard.js';

Math.lerp = function (X1, X2, Y1, Y2, X3) { return Number((X2 - X3) * Y1 + (X3 - X1) * Y2) / (X2 - X1);};
Math.withinRange = function (val, min, max ) { return ( val >= min && val <= max ); };


const getScaling = (scaledContent) => {
  const { width: cw, height: ch } = scaledContent.getBoundingClientRect();
  const ww = window.innerWidth;
  const wh = window.innerHeight;
  const scaleAmtX = Math.min(ww / cw, wh / ch);
  const scaleAmtY = scaleAmtX;

  // const scale = `scale(${scaleAmtX}, ${scaleAmtY})`;
  const scale = [scaleAmtX, scaleAmtY];

  return scale;
}

const applyScaling = (scaledContent) => {
  scaledContent.style.transform = 'scale(1.25, 1.25)';
  const scale = getScaling(scaledContent);
  scaledContent.style.transform = `scale(${scale[0]}, ${scale[1]})`;
};

const setOpacity = (obj, opacity) => {
  obj.style.opacity = opacity;
}

 // Tilt did manually before I found the react-parallax-tilt library

// const applyTilt = (tiltedContent, mouseEvent, ) => {
//   const innerX = mouseEvent.clientX - tiltedContent.offsetLeft;
//   const innerY = mouseEvent.clientY - tiltedContent.offsetTop;

//   const x = tiltedContent.offsetWidth / 2;
//   const y = tiltedContent.offsetHeight / 2;

//   const intensityX = 8;
//   const intensityY = 3;

//   let convertX = ((innerX - x) * intensityX / x);
//   let convertY = ((innerY - y) * intensityY / y);

//   tiltedContent.style.transform = `
//   rotateY(${convertX * -1}deg)
//   rotateX(${convertY}deg)
//   ${getScaling(tiltedContent)}
//   `

// }

function App() {
  const scaledContent = useRef();
  const centerCard = useRef();
  const leftArrow = useRef(), rightArrow = useRef();
  const [cardSide, setCardSide] = useState('front');
  const [flipingTo, setFlipingTo] = useState(0);
  const [tiltX, setTiltX] = useState(undefined);
  const [trackingOnWindow, setTrackingOnWindow] = useState(false);

  function changeCardSide() {
    cardSide === 'front' ? setCardSide('back') : setCardSide('front');
    setTiltX(0);
    setTimeout(function(){
      setTiltX(undefined);
    },1);
  }

  // function handleTilt(event){
  //   if (scaledContent.current){
  //     applyTilt(scaledContent.current, event);
  //   }
  // }

  // function handleMouseOut(){
  //   if(scaledContent.current){
  //     scaledContent.current.style.transform = `
  //     rotateY(0deg)
  //     ${getScaling(scaledContent.current)}
  //     `
  //   }
  // }

  useEffect(() => {
    function handleResize(){
      applyScaling(scaledContent.current);
    }

    if(scaledContent.current) {
      window.addEventListener("resize", handleResize);
      handleResize();
    }

    return () => {
      window.removeEventListener("resize", handleResize);
    }

  })

  return (
    <div className="App" >

      <div ref={scaledContent}
        // onMouseMove={(event) => handleTilt(event)}
        // onMouseOut={() => handleMouseOut()}
      >

        <div className="flip-arrow-left-wrapper" ref={leftArrow}>
          <img className="app-img" alt="Flip Arrow Left" src="assets/img/flip-arrow.svg" draggable="false" />
        </div>

        <div className="center-card" ref={centerCard}
          onMouseEnter={() => setTrackingOnWindow(true)}
          onMouseLeave={() => {
            setTrackingOnWindow(false)
            setOpacity(rightArrow.current, 0);
            setOpacity(leftArrow.current, 0);
          }}
          onMouseMove={(event) => {
            if (!centerCard.current)
              return;

            const containerRect = centerCard.current.getBoundingClientRect();
            const mouseX = event.clientX - containerRect.left;

            const normalizedX = mouseX / containerRect.width;
            const interpolatedX = (normalizedX - 0.5) * 2;
            console.log(interpolatedX);
            const threshold = 0.8;

            if (!Math.withinRange(interpolatedX, -threshold, threshold)){
              if (interpolatedX < 0 && leftArrow.current) {
                setOpacity(leftArrow.current, Math.lerp(threshold, 1, 0, 0.2, Math.abs(interpolatedX)));
                setFlipingTo(-1);
              }
              else if (interpolatedX > 0 && rightArrow.current) {
                setOpacity(rightArrow.current, Math.lerp(threshold, 1, 0, 0.2, interpolatedX));
                setFlipingTo(1);
              }
            } else {
              setOpacity(rightArrow.current, 0);
              setOpacity(leftArrow.current, 0);
              setFlipingTo(0);
            }

          }

          }
          onClick={() => {
            console.log("clicou no card");
            if (flipingTo) {
              setTiltX(flipingTo < 0 ? 100 : -100);
              setTimeout(changeCardSide, 150);
            }
          }}
          onMouse
        >
          <Tilt 
            tiltMaxAngleX = {20}
            tiltMaxAngley = {10}
            trackOnWindow = {trackingOnWindow}
            tiltAngleYManual={tiltX}

          >
            {cardSide === 'front' &&(<FrontCard />)}
            {cardSide === 'back' &&(<BackCard />)}
          </Tilt>
        </div>

          <div className="flip-arrow-right-wrapper" ref={rightArrow}>
            <img className="app-img" alt="Flip Arrow Right" src="assets/img/flip-arrow.svg" draggable="false" />
          </div>

          
        
      </div>
    </div>
  );
}

export default App;
