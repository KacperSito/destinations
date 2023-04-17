 // ,{maxZoom:22} po 'map'
   var mymap = L.map('map',{zoomAnimationThreshold: 4}).setView([52.21614947735841, 21.02002643154671], 3);
   
   var OpenStreetMap = 
   L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png?{foo}', 
   {foo: 'bar',
   attribution: '<a href="http://openstreetmap.org/copyright">OpenStreetMap</a> | Kacper Sito 2023'
   });
   
   
	OpenStreetMap.addTo(mymap);
	L.control.scale().addTo(mymap);
	
	
	var myIcon = L.icon({
    iconUrl: 'zuraw.png',
	iconSize: [25, 25]
	});
	
	var myIconPoint = L.icon({
    iconUrl: 'zuraw.png',
	iconSize: [15, 15]
	});

	
	const lineOptions = {
		weight: 2,
		//opacity: 0.5,
		color: 'rgba(10,44,112, 0.7)',
	};
	//https://github.com/henrythasler/Leaflet.Geodesic


	const lineOptionsNotWAW = {
		weight: 2,
		//opacity: 0.5,
		color: 'rgba(0,102,0, 0.7)',
	};

	

	
	
	
	for (var i = 0; i<locations.length; i++){
	//marker = new L.marker([locations[i][1], locations[i][2]])
	//.bindPopup(locations[i][0])
	//.addTo(mymap);
	
	/**
	var circleAirport = L.circleMarker([locations[i][1], locations[i][2]],{radius: 5, color: 'rgba(10,44,112)', weight: 2}).addTo(mymap);
	circleAirport.bindTooltip(locations[i][0],
	{direction: 'top'
	});
	

	
	var circleAirportPoint = L.circleMarker([locations[i][1], locations[i][2]],{radius: 1, color: 'rgba(10,44,112)'}).addTo(mymap);
	circleAirport.bindTooltip(locations[i][0],
	{direction: 'top',
	});
	**/
	
	var WAWcircleCrane = L.marker([locations[i][1], locations[i][2]],{
	icon: myIconPoint
	})
	.addTo(mymap);

	WAWcircleCrane.bindTooltip(locations[i][0],
	{direction: 'top',
	});

	}
	
	var WAWcircle = L.marker([52.16586593126193, 20.967062665855927],{
	icon: myIcon,
	}).addTo(mymap);
	
	WAWcircle.bindTooltip("WAW",
	{direction: 'top',
	});
	
	
	var BUDcircle = L.marker([47.433333333333, 19.233333333333],{
	icon: myIcon
	}).addTo(mymap);
	BUDcircle.bindTooltip("BUD",
	{direction: 'top',
	});
	
	

/*
	var circleAirportLCY = L.circleMarker([51.504844, 0.049518],{radius: 5, color: 'rgba(10,44,112)'}).addTo(mymap);
	circleAirportLCY.bindTooltip("LCY",
	{direction: 'top'
	});
	
	var circleAirportPointLCY = L.circleMarker([51.504844, 0.049518],{radius: 1, color: 'rgba(10,44,112)'}).addTo(mymap);
	circleAirportLCY.bindTooltip("LCY",
	{direction: 'top'
	});
	*/
	
	var LCYcircleCrane = L.marker([51.504844, 0.049518],{
	icon: myIconPoint
	})
	.addTo(mymap);

	LCYcircleCrane.bindTooltip([51.504844, 0.049518],
	{direction: 'top',
	});

	

	// Scale circle markers by using the zoom value
	// you need to know what the min value is, 
	// calculated at runtime or prior
	var minValue = 1;
	function calcRadius(val, zoom) {
		return 1.0083 * Math.pow(val/minValue,0.5716) * (zoom / 2);      
	}
/*
	mymap.on('zoomend', function() {
		var currentZoom = mymap.getZoom();
		// Recalc always with the original value
		circleAirport.setRadius(calcRadius(circleAirport._orgRadius,currentZoom))
	});
	*/



	var allPaths=[];
	var pathsGroup= L.layerGroup().addTo(mymap);
	

	
	console.log(allPaths);
	
	// airport from which route should be marked
	var WAW = [52.16586593126193, 20.967062665855927];
	var KRK = [﻿50.07778, 19.78472];
	var BUD = [47.433333333333, 19.233333333333	];
	

	for (var i = 0; i<locations.length; i++){
		//drawDestLine(WAW,locations[i][1], locations[i][2],'rgba(10,44,112, 0.7)');
		const geodesic = new L.Geodesic([WAW, [locations[i][1], locations[i][2]]], lineOptions).addTo(pathsGroup);
	}
	

	const geodesicLCY= new L.Geodesic([[locations[69][1],locations[69][2]], [51.504844, 0.049518]], lineOptionsNotWAW).addTo(pathsGroup);
	const geodesicKRK= new L.Geodesic([KRK,[locations[63][1], locations[63][2]]],lineOptionsNotWAW).addTo(pathsGroup);
	const geodesicICN= new L.Geodesic([BUD, [locations[59][1], locations[59][2]]], lineOptionsNotWAW).addTo(pathsGroup);
	
	
	
	//checkbox
	     var autoZoomCheckbox = L.control({position: 'topright'});
        autoZoomCheckbox.onAdd = function (map) {
            var div = L.DomUtil.create('div', 'command');
            div.innerHTML = '<form><input id="command" type="checkbox" />Show airports only</form>'; //checked="true"
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
	
	
