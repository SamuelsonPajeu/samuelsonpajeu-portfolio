const mathUtils = {
    lerp: function (X1, X2, Y1, Y2, X3) { return Number((X2 - X3) * Y1 + (X3 - X1) * Y2) / (X2 - X1);},
    withinRange : function(val, min, max ) { return ( val >= min && val <= max ); }
}

export default mathUtils;