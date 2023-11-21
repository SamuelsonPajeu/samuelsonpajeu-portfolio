const utils = {
    openUrl : function(url) {
        window.open(url, '_blank');
    },

    getScaling : function (scaledContent) {
        const { width: cw, height: ch } = scaledContent.getBoundingClientRect();
        const ww = window.innerWidth;
        const wh = window.innerHeight;
        const scaleAmtX = Math.min(ww / cw, wh / ch);
        const scaleAmtY = scaleAmtX;

        // const scale = `scale(${scaleAmtX}, ${scaleAmtY})`;
        const scale = [scaleAmtX, scaleAmtY];

        return scale;
    },

    applyScaling : function (scaledContent) {
        scaledContent.style.transform = 'scale(1.25, 1.25)';
        const scale = this.getScaling(scaledContent);
        scaledContent.style.transform = `scale(${scale[0]}, ${scale[1]})`;
    },

    setOpacity : function (obj, opacity) {
        obj.style.opacity = opacity;
    }

}

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


export default utils;