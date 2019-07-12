//Title
document.title = "we b svgn' in js, yo"
//Header
var header = document.createElement('H1');
header.setAttribute('align', 'center');
var headertext = document.createTextNode("SVG Glow in the Hizza, Y'all");
header.appendChild(headertext);
document.body.appendChild(header);
//SVG Element 1
var svgNS = "http://www.w3.org/2000/svg";
var svg1 = document.createElementNS(svgNS, 'svg');
svg1.setAttributeNS(null, 'style', "background-color:black; position:absolute; top:75px; left:30px")
svg1.setAttributeNS(null, 'width', '500');
svg1.setAttributeNS(null, 'height', '300');
document.body.appendChild(svg1);
//Circle to SVG Element 1
var circ1 = document.createElementNS(svgNS, 'circle');
circ1.setAttributeNS(null, 'cx', 100);
circ1.setAttributeNS(null, 'cy', 100);
circ1.setAttributeNS(null, 'r', 40);
circ1.setAttributeNS(null, 'stroke', 'green');
circ1.setAttributeNS(null, 'fill', 'yellow');
circ1.setAttributeNS(null, 'stroke-width', 3);
svg1.appendChild(circ1);
//Add Filter
var filter1 = document.createElementNS( svgNS, "filter" );
filter1.setAttribute( 'id', "f1" );
filter1.setAttribute( "x", "0" );
filter1.setAttribute( "y", "0" );
var blur1 = document.createElementNS( svgNS, "feGaussianBlur" );
blur1.setAttribute( "stdDeviation", "2" );
blur1.setAttribute( "in", "SourceGraphic" );
filter1.appendChild( blur1 );
svg1.appendChild( filter1 );
//Line w/Blur Filter
var line1 = document.createElementNS(svgNS, 'line');
line1.setAttributeNS(null, 'x1', 300);
line1.setAttributeNS(null, 'x2', 400);
line1.setAttributeNS(null, 'y1', 50);
line1.setAttributeNS(null, 'y2', 200);
line1.setAttributeNS(null, 'stroke', 'rgb(153,255,0)');
line1.setAttributeNS(null, 'stroke-width', 8);
line1.setAttributeNS(null, 'filter', 'url(#f1)');
svg1.appendChild(line1);

//////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////
//SVG Element 2
//Line w/Blur Filter
var line2 = document.createElementNS(svgNS, 'line');
line2.setAttributeNS(null, 'x1', 50);
line2.setAttributeNS(null, 'x2', 200);
line2.setAttributeNS(null, 'y1', 200);
line2.setAttributeNS(null, 'y2', 350);
line2.setAttributeNS(null, 'stroke', 'rgb(255,255,255)');
line2.setAttributeNS(null, 'stroke-width', 20);
line2.setAttributeNS(null, 'filter', 'url(#neongreen)');
line2.setAttributeNS(null, 'stroke-linecap', 'round');
var svg2js = document.getElementById('svg2');
svg2js.appendChild(line2);
