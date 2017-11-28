//= require rails-ujs
//= require turbolinks
//= require_tree .
//= require jquery

function initMap() {
	var ourMap = new google.maps.Map(document.getElementById('map-canvas'), {
		center: {lat: 39.961, lng: -82.998},
		zoom: 14
	});

	var marker = new google.maps.Marker({
		position: {lat: 39.9585, lng: -83.0119},
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

	// [city, state, latitude, longitude]
	// [0,    1,     2,        3        ]
	for (var i=0; i < cities.length; i++) {
		new google.maps.Marker({
			position: {lat: cities[i][2], lng: cities[i][3] },
			title: cities[i][0] + ", " + cities[i][1],
			map: ourMap,
			animation: google.maps.Animation.DROP
		});
	}
}