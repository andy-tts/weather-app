// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
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
		map: ourMap
	});

	var infoWindow = new google.maps.InfoWindow({
		content: "<h5>Where people learn to code!</h5>"	
	});

	google.maps.event.addListener(marker, 'click', function() {
		infoWindow.open(ourMap, marker);
	});
}

