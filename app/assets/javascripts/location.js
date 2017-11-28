function initLocationMap() {
	var mapOptions = {
		center: {lat: latitude, lng: longitude},
		zoom: 14		
	};
	var ourMap = new google.maps.Map(document.getElementById('location-map'), mapOptions);
}




