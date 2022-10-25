 // ,{maxZoom:22} po 'map'
   var mymap = L.map('map', {zoomAnimationThreshold: 4}).setView([52.21614947735841, 21.02002643154671], 3);

   
   
   
   
   var OpenStreetMap = 
   L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png?{foo}', 
   {foo: 'bar',
   attribution: '<a href="http://openstreetmap.org/copyright">OpenStreetMap</a> | Kacper Sito 2022'
   });
   
	OpenStreetMap.addTo(mymap);
	L.control.scale().addTo(mymap);
	
	
	var myIcon = L.icon({
    iconUrl: 'lot_logo_web.png',
    iconSize: [25, 25]

});
	
	var WAWcircle = L.marker([52.16586593126193, 20.967062665855927],{
	icon: myIcon
	}).addTo(mymap);
	
	var BUDcircle = L.marker([47.433333333333, 19.233333333333],{
	icon: myIcon
	}).addTo(mymap);
	
	//var imageUrl = 'lot_logo_web.png',
    //imageBounds = [[40.712216, -74.22655], [40.712216, -74.22655]];
	//L.imageOverlay(imageUrl, imageBounds).addTo(mymap);
	
	
	for (var i = 0; i<locations.length; i++){
	//marker = new L.marker([locations[i][1], locations[i][2]])
	//.bindPopup(locations[i][0])
	//.addTo(mymap);
	
	var circleAirport = L.circleMarker([locations[i][1], locations[i][2]],{radius: 5, color: 'rgba(10,44,112)', weight: 2}).addTo(mymap);
	circleAirport.bindTooltip(locations[i][0],
	{direction: 'top'
	});
	

	
	var circleAirportPoint = L.circleMarker([locations[i][1], locations[i][2]],{radius: 1, color: 'rgba(10,44,112)'}).addTo(mymap);
	circleAirport.bindTooltip(locations[i][0],
	{direction: 'top'
	});

	
	}

		var circleAirportLCY = L.circleMarker([51.504844, 0.049518],{radius: 5, color: 'rgba(10,44,112)'}).addTo(mymap);
	circleAirportLCY.bindTooltip("LCY",
	{direction: 'top'
	});
	
	var circleAirportPointLCY = L.circleMarker([51.504844, 0.049518],{radius: 1, color: 'rgba(10,44,112)'}).addTo(mymap);
	circleAirportLCY.bindTooltip("LCY",
	{direction: 'top'
	});
	


	

	// Scale circle markers by using the zoom value
	// you need to know what the min value is, 
	// calculated at runtime or prior
	var minValue = 1;
	function calcRadius(val, zoom) {
		return 1.0083 * Math.pow(val/minValue,0.5716) * (zoom / 2);      
	}

	mymap.on('zoomend', function() {
		var currentZoom = mymap.getZoom();
		// Recalc always with the original value
		circleAirport.setRadius(calcRadius(circleAirport._orgRadius,currentZoom))
	});


	var allPaths=[];
	var pathsGroup= L.layerGroup().addTo(mymap);
	
	function drawDestLine(WAW, arrLat, arrLng, col) { //pass point dep airport and arr airport
	
		//var latlng1 = [52.21614947735841, 21.02002643154671]
			//latlng2 = [51.470020, -0.454295]
		var latlngs = [];
		var latlng1 = [arrLat, arrLng];
		latlng2 = WAW;

		var offsetX = latlng2[1] - latlng1[1],
			offsetY = latlng2[0] - latlng1[0];

		var r = Math.sqrt( Math.pow(offsetX, 2) + Math.pow(offsetY, 2) ),
			theta = Math.atan2(offsetY, offsetX);

		var thetaOffset = (3.14/10);

		var r2 = (r/2)/(Math.cos(thetaOffset)),
			theta2 = theta + thetaOffset;

		var midpointX = (r2 * Math.cos(theta2)) + latlng1[1],
			midpointY = (r2 * Math.sin(theta2)) + latlng1[0];

		var midpointLatLng = [midpointY, midpointX];

		latlngs.push(latlng1, midpointLatLng, latlng2);

		var pathOptions = {
			color: 'rgba(37,38,103,0.5)',
			weight: 4
		}

		if (typeof document.getElementById('map').animate === "function") { 
			var durationBase = 2000;
			var duration = Math.sqrt(Math.log(r)) * durationBase;
			// Scales the animation duration so that it's related to the line length
			// (but such that the longest and shortest lines' durations are not too different).
			// You may want to use a different scaling factor.
			pathOptions.animate = {
				duration: duration,
				iterations: Infinity,
				easing: 'ease-in-out',
				direction: 'alternate'
			}
		}

		var curvedPath = L.curve(
			[
				'M', latlng1,
				'Q', midpointLatLng,
					 latlng2
			], {color: col, weight: 2}).addTo(pathsGroup); //{color: 'rgba(84,67,201,0.5)', weight: 6}
		
		allPaths.push(curvedPath);
		//console.log(curvedPath);
	}
	
	console.log(allPaths);
	
	// airport from which route should be marked
	var WAW = [52.16586593126193, 20.967062665855927];
	var KRK = [﻿50.07778, 19.78472];
	var BUD = [47.433333333333, 19.233333333333	];
	

	for (var i = 0; i<locations.length; i++){
		drawDestLine(WAW,locations[i][1], locations[i][2],'rgba(10,44,112, 0.7)');
	}
	
	drawDestLine(BUD,locations[59][1], locations[59][2],'rgba(0,102,0, 0.7)');
	drawDestLine(BUD,locations[1][1], locations[1][2],'rgba(0,102,0, 0.7)');
	drawDestLine([locations[69][1],locations[69][2]], 51.504844, 0.049518,'rgba(0,102,0, 0.7)');
	drawDestLine(KRK,locations[63][1], locations[63][2],'rgba(0,102,0, 0.7)');
	//drawDestLine(KRK,locations[i][1], locations[i][2]);
	
	
	
	//checkbox
	     var autoZoomCheckbox = L.control({position: 'topright'});
        autoZoomCheckbox.onAdd = function (map) {
            var div = L.DomUtil.create('div', 'command');
            div.innerHTML = '<form><input id="command" type="checkbox" />Show only airports</form>'; //checked="true"
            return div;
        };
        autoZoomCheckbox.addTo(mymap);
		
		
	function clearRoutes(){
		mymap.removeLayer(pathsGroup);
	}

	// add the event handler
	function handleCommand() {
	   //alert("Clicked, checked = " + this.checked);
	   if(this.checked == true){
	   clearRoutes();
	   }
	   else
	   //console.log(this.checked);
	   pathsGroup.addTo(mymap);  
	}
	document.getElementById ("command").addEventListener ("click", handleCommand, false);