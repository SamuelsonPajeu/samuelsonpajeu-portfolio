import { React, useState, useRef, useEffect } from "react";

import './home.css';

import Tilt from 'react-parallax-tilt';
import FrontCard from '../../components/frontCard/FrontCard.js'
import BackCard from '../../components/backCard/BackCard.js';

import mathUtils from '../../utils/math-utils.js'
import utils from "../../utils/utils.js";

function Home() {
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

  function disableArrowsVisibility() {
    utils.setOpacity(rightArrow.current, 0);
    utils.setOpacity(leftArrow.current, 0);
    setFlipingTo(0);
  }

  function setArrowOpacity(event, centerCard) {
    if (!leftArrow.current || !rightArrow.current)
      return;

    const containerRect = centerCard.current.getBoundingClientRect();
    const mouseX = event.clientX - containerRect.left;

    const normalizedX = mouseX / containerRect.width;
    const interpolatedX = (normalizedX - 0.5) * 2;
    const threshold = 0.85;

    if (!mathUtils.withinRange(interpolatedX, -threshold, threshold)){
      if(interpolatedX !== 0) {
        const actualArrow = interpolatedX < 0 ? leftArrow : rightArrow;
        const flipDirection = interpolatedX < 0 ? -1 : 1;

        utils.setOpacity(actualArrow.current, mathUtils.lerp(threshold, 1, 0.1, 1, Math.abs(interpolatedX)));
        setFlipingTo(flipDirection);
      }
    } else {
      disableArrowsVisibility();
    }
  }

  useEffect(() => {
    function handleResize(){
      utils.applyScaling(scaledContent.current);
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
    <div ref={scaledContent}
      onMouseEnter={() => setTrackingOnWindow(true)}
      onMouseLeave={() => {
        setTrackingOnWindow(false)
        disableArrowsVisibility();
      }}
      onMouseMove={(event) => {
        if (centerCard.current)
          setArrowOpacity(event, centerCard);
      }}
      onClick={() => {
        if (flipingTo) {
          setTiltX(flipingTo < 0 ? 100 : -100);
          setTimeout(changeCardSide, 150);
        }
      }}
    >

      <div className="flip-arrow-left-wrapper" ref={leftArrow}>
        <img className="app-img" alt="Flip Arrow Left" src="assets/img/flip-arrow.svg" draggable="false" />
      </div>
      <div className="center-card" ref={centerCard}

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
  );
}

export default Home;
