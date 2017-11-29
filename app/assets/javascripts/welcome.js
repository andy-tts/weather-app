function initMap() {
	var mapOptions = {
		center: { lat: 39.964, lng: -82.999},
		zoom: 3,
		mapTypeId: 'satellite'
	};
	var ourMap = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);

	var marker = new google.maps.Marker({
		position: { lat: 39.9585, lng: -83.0119 },
		title: "Idea Foundry",
		map: ourMap,
		animation: google.maps.Animation.DROP
	});

	var infoWindow = new google.maps.InfoWindow({
		content: "<h5>Where people learn to code!</h5>"
	});

	google.maps.event.addListener(marker, 'click', function() {
		infoWindow.open(ourMap, marker);
	});

	$.each(cities, function(i, city) {
		let cityMarker = new google.maps.Marker({
			position: { lat: cities[i][2], lng: cities[i][3] },
			title: cities[i][0] + ", " + cities[i][1],
			map: ourMap,
			animation: google.maps.Animation.DROP
		});

		let markerInfoWindow = new google.maps.InfoWindow({
			content: "<h5>" + cities[i][0] + ", " + cities[i][1]  +"</h5>"
		});

		google.maps.event.addListener(cityMarker, 'click', function() {
			markerInfoWindow.open(ourMap, cityMarker);
		});
	});
}