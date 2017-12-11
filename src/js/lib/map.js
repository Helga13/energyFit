if (document.getElementById('map')) {
	//console.log('Map exist');
	$(function () {})
	var styles = [
    {
        "featureType": "all",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "saturation": 36
            },
            {
                "color": "#000000"
            },
            {
                "lightness": 40
            }
        ]
    },
    {
        "featureType": "all",
        "elementType": "labels.text.stroke",
        "stylers": [
            {
                "visibility": "on"
            },
            {
                "color": "#000000"
            },
            {
                "lightness": 16
            }
        ]
    },
    {
        "featureType": "all",
        "elementType": "labels.icon",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "administrative",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#000000"
            },
            {
                "lightness": 20
            }
        ]
    },
    {
        "featureType": "administrative",
        "elementType": "geometry.stroke",
        "stylers": [
            {
                "color": "#000000"
            },
            {
                "lightness": 17
            },
            {
                "weight": 1.2
            }
        ]
    },
    {
        "featureType": "landscape",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#000000"
            },
            {
                "lightness": 20
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#000000"
            },
            {
                "lightness": 21
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#000000"
            },
            {
                "lightness": 17
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "geometry.stroke",
        "stylers": [
            {
                "color": "#000000"
            },
            {
                "lightness": 29
            },
            {
                "weight": 0.2
            }
        ]
    },
    {
        "featureType": "road.arterial",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#000000"
            },
            {
                "lightness": 18
            }
        ]
    },
    {
        "featureType": "road.local",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#000000"
            },
            {
                "lightness": 16
            }
        ]
    },
    {
        "featureType": "transit",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#000000"
            },
            {
                "lightness": 19
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#000000"
            },
            {
                "lightness": 17
            }
        ]
    }
];
	var markers = [];

	function initMap() {
		var myOptions = {
			zoom: 14
			, center: new google.maps.LatLng(53.8896888, 27.426601)
			, scrollwheel: false
			, mapTypeControl: false
			, streetViewControl: false
			, navigationControl: true
            , zoomControl: true
			, zoomControlOptions: {
				style: google.maps.ZoomControlStyle.SMALL
				, position: google.maps.ControlPosition.LEFT_TOP
			}
			, mapTypeControlOptions: {
				mapTypeIds: [google.maps.MapTypeId.ROADMAP, 'tehgrayz']
			}
		};
		var map = new google.maps.Map(document.getElementById('map'), myOptions);
		var mapType = new google.maps.StyledMapType(styles, {
			name: "Grayscale"
		});
		map.mapTypes.set('tehgrayz', mapType);
		map.setMapTypeId('tehgrayz');
		setMarkers(map);
	}
	var beaches = [];
	$('.maps').each(function (index) {
		var cur_coords = [];
		cur_coords[0] = $(this).data('longitude');
		cur_coords[1] = $(this).data('latitude');
		beaches[index] = cur_coords;
	});
	var contentString = beaches[1];

	function setMarkers(map) {
		var image = {
			url: 'img/icons/icon_location.png'
			, size: new google.maps.Size(24, 35)
			, origin: new google.maps.Point(0, 0)
			, anchor: new google.maps.Point(12, 35)
		};
		var markersBounds = new google.maps.LatLngBounds();
		for (var i = 0; i < beaches.length; i++) {
			var beach = beaches[i];
			var markerPosition = new google.maps.LatLng(beach[0], beach[1]);
			var marker = new google.maps.Marker({
				position: markerPosition
				, map: map
				, icon: image
			});
		}
	};
	initMap();
}