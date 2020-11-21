document.addEventListener('DOMContentLoaded', fireContentLoadedEvent, false);

function fireContentLoadedEvent () {
	$("body").append("<svg id='photocopier-svg-filter' width='0' height='0'><filter id='photocopy-filter-warp' filterUnits='userSpaceOnUse' x='0' y='0'><feTurbulence baseFrequency='0 0.021' seed='1' result='photocopy-turbulance'></feTurbulence><feDisplacementMap in='SourceGraphic' in2='photocopy-turbulance' scale='38' result='photocopy-displacement'></feDisplacementMap><feOffset dx='-14' dy='-9' result='photocopy-offset' in='photocopy-displacement'></feOffset><feComposite in='photocopy-offset' in2='SourceGraphic' result='photocopy-composite'></feComposite></filter></svg>").css('filter', "url(#photocopy-filter-warp) grayscale(100%) contrast(800%)").fadeIn(1000);
}