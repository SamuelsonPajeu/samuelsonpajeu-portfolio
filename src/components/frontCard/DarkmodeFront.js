import {React, Component} from "react";
import "./style.css";

import { WiredProfilePictureIcon } from './WiredProfilePictureIcon.tsx';


class DarkmodeFront extends Component {

  applyScaling(scaledContent) {
    console.log("Aqui");
    scaledContent.style.transform = 'scale(1, 1)';

    let { width: cw, height: ch } = scaledContent.getBoundingClientRect();
    let ww  = window.innerWidth;
    let wh = window.innerHeight;
    let scaleAmtX = Math.min(ww / cw, wh / ch);
    let scaleAmtY = scaleAmtX;
    scaledContent.style.transform = `scale(${scaleAmtX}, ${scaleAmtY})`;
  }

  test(){
    console.log("AQUI!");
  }


  componentDidMount() {
    window.addEventListener("resize", this.test);
  }

  componentWillUnmount() {
    window.removeEventListener("resize",  this.test);
  }

  render() {
    return (
      <div ref={this.frontCard} className="darkmode-front">
        <div className="overlap-group">
          <div className="background" />
          <img className="bottom-line" alt="Bottom line" src="/assets/img/bottom-line-1.svg" />
          <img className="upper-line" alt="Upper line" src="/assets/img/upper-line-1.svg" />
          <div className="text-wrapper">FULL STACK DEVELOPER</div>
          <div className="div">SAMUELSON</div>
          <div className="text-wrapper-2">PAJEU</div>
          <img className="bottom-icons" alt="Bottom icons" src="/assets/img/bottom-icons.svg" />
          {/* <img className="wired-profile" alt="Wired profile" src="/assets/img/wired-profile-picture.png" /> */}
          <WiredProfilePictureIcon className="wired-profile" />
        </div>
      </div>
    );
  }
}

// function DarkmodeFront2() {
//   return (
//     <div className="darkmode-front">
//       <div className="overlap-group">
//         <div className="background" />
//         <img className="bottom-line" alt="Bottom line" src="/assets/img/bottom-line-1.svg" />
//         <img className="upper-line" alt="Upper line" src="/assets/img/upper-line-1.svg" />
//         <div className="text-wrapper">FULL STACK DEVELOPER</div>
//         <div className="div">SAMUELSON</div>
//         <div className="text-wrapper-2">PAJEU</div>
//         <img className="bottom-icons" alt="Bottom icons" src="/assets/img/bottom-icons.svg" />
//         {/* <img className="wired-profile" alt="Wired profile" src="/assets/img/wired-profile-picture.png" /> */}
//         <WiredProfilePictureIcon className="wired-profile" />
//       </div>
//     </div>
//   );
// }

export default DarkmodeFront;
