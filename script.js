   var mymap = L.map('map',{zoomAnimationThreshold: 4}).setView([52.21614947735841, 21.02002643154671], 3);
   
   var OpenStreetMap = 
   //L.tileLayer('https://{s}.basemaps.cartocdn.com/light_nolabels/{z}/{x}/{y}.png?(foo)',
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
		color: 'rgba(10,44,112, 0.7)',
	};
	//https://github.com/henrythasler/Leaflet.Geodesic

	var minValue = 1;
	function calcRadius(val, zoom) {
		return 1.0083 * Math.pow(val/minValue,0.5716) * (zoom / 2);      
	}

	var allPaths=[];
	var pathsGroup= L.layerGroup().addTo(mymap);
	
	
	// airport from which route should be marked
	var WAW = [52.16586593126193, 20.967062665855927];
	var KRK = [﻿50.07778, 19.78472];
	var BUD = [47.433333333333, 19.233333333333	];

	
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
	
	const date = new Date();

	let day = date.getDate();
	let month = date.getMonth() + 1;
	let year = date.getFullYear();

	console.log(month)
	if (month == 10 || month ==11 || month ==12){
		
		let currentDate = `${day}${month}${year}`;
		let nextWeekDate = `${day+7}${month}${year}`;
	}

	let currentDate = `${day}0${month}${year}`;
	let nextWeekDate = `${day+7}0${month}${year}`;

	console.log(currentDate)
	console.log(nextWeekDate)
	
		for (var i = 0; i<dest.length; i++){
		
			console.log(dest[i][1])
		
		const geodesic = new L.Geodesic([[airportsCoordinates[dest[i][0]].lat, airportsCoordinates[dest[i][0]].lng], [airportsCoordinates[dest[i][1]].lat, airportsCoordinates[dest[i][1]].lng]], lineOptions).addTo(pathsGroup);
	

		// crane logo airport
		var circleCrane = L.marker([airportsCoordinates[dest[i][1]].lat, airportsCoordinates[dest[i][1]].lng],{
			icon: myIconPoint
			})
			.addTo(mymap); //bindTooltip

		
		
			circleCrane.bindPopup(
				'<a href="https://www.lot.com/pl/pl?departureAirport='+ dest[i][0]+'&destinationAirport='+ dest[i][1]+'&departureDate='+currentDate+'&class=E&adults=1&returnDate='+nextWeekDate+'">'+dest[i][1]+'</a>'+"<br>"+
				airportsCoordinates[dest[i][1]].city+
				"<br>"+
				airportsCoordinates[dest[i][1]].country,
			{offset: [0,1],
			direction: "center",}
			);

	}

	var WAWcircle = L.marker([52.16586593126193, 20.967062665855927],{
		icon: myIcon,
		}).addTo(mymap);
		
		WAWcircle.bindPopup("WAW"+"<br>"+"Warsaw"+"<br>"+"Poland",
		{offset: [0,0],
			direction: "center",}
		);
		
		
		var BUDcircle = L.marker([47.433333333333, 19.233333333333],{
		icon: myIcon
		}).addTo(mymap);
		BUDcircle.bindPopup("WAW"+"<br>"+"Budapest"+"<br>"+"Hungary",
		{offset: [0,0],
			direction: "center",}
		);