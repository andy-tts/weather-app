function initMap() {
	var mapOptions = {
		center: { lat: 39.964, lng: -82.999},
		zoom: 3
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

	var sites = [
		[ "Ottawa", 45.42, -75.69 ],
		[ "London", 51.50, 0.128 ],
		[ "Columbus", 39.964, -82.999]
	];

	for (var i=0; i < sites.length; i++) {
		new google.maps.Marker({
			position: { lat: sites[i][1], lng: sites[i][2] },
			title: sites[i][0],
			map: ourMap,
			animation: google.maps.Animation.DROP
		});
	}
}