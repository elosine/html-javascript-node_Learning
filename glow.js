//GLOBAL VARIABLES /////////////////////////////////////////////
////////////////////////////////////////////////////////////////
var svgNS = "http://www.w3.org/2000/svg";

var csrmain = document.createElementNS(svgNS, "line");


  //MAIN Cursor //////////////////////////
  csrmain.setAttributeNS(null, "id", 'csrmain');
  csrmain.setAttributeNS(null, "x1", 100);
  csrmain.setAttributeNS(null, "y1", 100);
  csrmain.setAttributeNS(null, "x2", 100);
  csrmain.setAttributeNS(null, "y2", 400);
  csrmain.setAttributeNS(null, "stroke-width", 4);
  csrmain.setAttributeNS(null, "stroke", 'rgb(153, 255, 0)');
  csrmain.setAttributeNS(null, "box-shadow", '120px 80px 40px 20px #0ff');


  document.getElementById("timeline_svg").appendChild(csrmain);
