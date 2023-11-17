import { React, useState, useRef, useEffect } from "react";
import Grid from '@mui/material/Grid';
import './App.css';


import Tilt from 'react-parallax-tilt';
import FrontCard from './components/frontCard/FrontCard.js';
import BackCard from './components/backCard/BackCard.js';

const getScaling = (scaledContent) => {
  scaledContent.style.transform = 'scale(1.25, 1.25)';

  const { width: cw, height: ch } = scaledContent.getBoundingClientRect();
  const ww = window.innerWidth;
  const wh = window.innerHeight;
  const scaleAmtX = Math.min(ww / cw, wh / ch);
  const scaleAmtY = scaleAmtX;

  const scale = `scale(${scaleAmtX}, ${scaleAmtY})`;

  return scale;
}

const applyScaling = (scaledContent) => {
  scaledContent.style.transform = getScaling(scaledContent);
};

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
  const [cardSide, setCardSide] = useState('front');

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
        <Grid container spacing={2}
          alignItems="center"
          direction="row"
          justifyContent="space-between"
        >
          {cardSide === 'back' && (
          <Grid item xs>
            <div className="flip-arrow-left-wrapper">
              <img className="app-img" alt="Flip Arrow Left" src="assets/img/flip-arrow.svg" 
                onClick={() => {
                  setCardSide('front');
                }}
              />
            </div>
          </Grid>
          )}
          <Grid item xs>
            <div className="center-card">
              <Tilt 
                tiltReverse = {false}
                tiltMaxAngleX = {10}
                tiltMaxAngley = {5}
              >
                {cardSide === 'front' &&(<FrontCard />)}
                {cardSide === 'back' &&(<BackCard />)}
              </Tilt>
            </div>
          </Grid>
          {cardSide === 'front' && (
            <Grid item xs>
              <div className="flip-arrow-right-wrapper">
                <img className="app-img" alt="Flip Arrow Right" src="assets/img/flip-arrow.svg" 
                onClick={() => {
                  setCardSide('back');
                }}
                />
              </div>
            </Grid>
          )}
          
        </Grid>
        
      </div>
    </div>
  );
}

export default App;
