/*marker image links*/
var targetSVG = "images/1-warning.png"
var redMarker = "images/1-exclamation.png"
var watchMarker = "http://www.onlygfx.com/wp-content/uploads/2016/09/watercolor-circle-red.png" //remove


/*marker data source:http://www.coralreefwatch.noaa.gov/vs/data.php*/
var markers = [   {
  "year": 2013,
  "images": [{
    "imageURL": targetSVG ,
      "title": "Northern Hispaniola",
      "latitude": 19.325,
      "longitude": -70.675,
    }, {
    "imageURL": targetSVG ,
      "title": "Southern Hispaniola",
      "latitude": 18.650,
      "longitude": -71.775,
    }, {
    "imageURL": targetSVG,
      "title": "Puerto Rico",
      "latitude": 18.200,
      "longitude": -66.625,
      
    }, {
    "imageURL": targetSVG ,
      "title": "Panama Atlantic West",
      "latitude": 9.075,
      "longitude": -81.650,
    }, {
    "imageURL": targetSVG,
      "title": "Marshall Islands",
      "latitude": 8.450,
      "longitude": 167.100
    }, {
    "imageURL": targetSVG,
      "title": "West Papua",
      "latitude": -1.625,
      "longitude": 133.900
    }, {
    "imageURL": targetSVG,
      "title": "Lampung and Banten",
      "latitude": -5.850,
      "longitude": 105.075
    }, {
    "imageURL": targetSVG,
      "title": "Northern Java",
      "latitude": -6.275,
      "longitude": 109.500
    }, {
    "imageURL": targetSVG,
      "title": "Southern Philippines",
      "latitude": 7.400,
      "longitude": 122.900
    }, {
    "imageURL": targetSVG,
      "title": "North Sulawesi",
      "latitude": 2.575,
      "longitude": 125.050
    }, {
    "imageURL": targetSVG,
      "title": "Central Sulawesi and Gorontalo",
      "latitude": -1.050,
      "longitude": 123.025
    }, {
    "imageURL": targetSVG,
      "title": "East Kalimantan",
      "latitude": 0.625,
      "longitude": 117.875
    }, {
    "imageURL": targetSVG,
      "title": "Southern Borneo",
      "latitude": -3.575,
      "longitude": 116.550
    }, {
    "imageURL": targetSVG,
      "title": "North Maluku, Indonesia",
      "latitude": 0.125,
      "longitude": 126.700
    }, {
    "imageURL": targetSVG,
      "title": "West Papua",
      "latitude": -1.625,
      "longitude": 133.900
    }, {
    "imageURL": targetSVG,
      "title": "West Sulawesi",
      "latitude": -2.275,
      "longitude": 119.150
    }, {
    "imageURL": targetSVG,
      "title": "South Sulawesi",
      "latitude": -5.225,
      "longitude": 119.625
    }, {
    "imageURL": targetSVG,
      "title": "Southeast Sulawesi",
      "latitude": -4.975,
      "longitude":122.750
    }, {
    "imageURL": targetSVG,
      "title": "East Java and Bali",
      "latitude": -6.950,
      "longitude": 114.100
    }, {
    "imageURL": targetSVG,
      "title": "West Nusa Tenggara",
      "latitude": -8.625,
      "longitude": 117.625
    }, {
    "imageURL": targetSVG,
      "title": "Al Wusta, Oman",
      "latitude": 19.625,
      "longitude": 57.800
    }, {
    "imageURL": targetSVG,
      "title": "Dhofar, Oman",
      "latitude": 17.425,
      "longitude": 55.500
    }, {
    "imageURL": targetSVG,
      "title": "Eastern Yemen",
      "latitude": 14.550,
      "longitude": 49.625
    }, {
    "imageURL": redMarker,
      "title": "Cape Verde Islands",
      "latitude": 15.975,
      "longitude": -24.025
    }, {
    "imageURL": redMarker,
      "title": "Virgin Islands",
      "latitude": 18.200 ,
      "longitude": -64.550
    }, {
    "imageURL": redMarker,
      "title": "Leeward Caribbean Islands",
      "latitude": 16.775,
      "longitude": -62.325
    }, {
    "imageURL": redMarker,
      "title": "Nearshore Venezuela",
      "latitude": 10.600,
      "longitude": -66.350
    }, {
    "imageURL": redMarker,
      "title": "Offshore Venezuela",
      "latitude": 11.425,
      "longitude": -65.350
    }, {
    "imageURL": redMarker,
      "title": "Aruba, Curacao, and Bonaire",
      "latitude": 12.275,
      "longitude": -69.125
    }, {
    "imageURL": redMarker,
      "title": "La Guajira",
      "latitude": 12.050,
      "longitude":  -71.925
    }, {
    "imageURL": redMarker,
      "title": "Colombia Atlantic",
      "latitude": 9.875,
      "longitude": -75.575
    }, {
    "imageURL": redMarker,
      "title": "Panama Atlantic East",
      "latitude": 9.150,
      "longitude": -78.700
    }, {
    "imageURL": redMarker,
      "title": "Nicaragua",
      "latitude": 14.125,
      "longitude": -81.750
    }, {
    "imageURL": redMarker,
      "title": "Eastern FSM",
      "latitude": 5.150,
      "longitude": 153.000
    }]
}, {
  "year": 2014,
  "images": [{
    "imageURL": targetSVG ,
      "title": "Northern Hispaniola",
      "latitude": 19.325,
      "longitude": -70.675,
    }, {
    "imageURL": targetSVG ,
      "title": "Southern Hispaniola",
      "latitude": 18.650,
      "longitude": -71.775,
    }, {
    "imageURL": targetSVG,
      "title": "Puerto Rico",
      "latitude": 18.200,
      "longitude": -66.625,
    }, {
    "imageURL": targetSVG,
      "title": "Virgin Islands",
      "latitude": 18.200,
      "longitude": -64.550
    }, {
    "imageURL": targetSVG,
      "title": "Nearshore Venezuela",
      "latitude": 10.600,
      "longitude": -66.350
    }, {
    "imageURL": targetSVG,
      "title": "Panama Atlantic East",
      "latitude": 9.150,
      "longitude": -78.700
    }, {
    "imageURL": targetSVG ,
      "title": "Panama Atlantic West",
      "latitude": 9.075,
      "longitude": -81.650,
    }, {
    "imageURL": targetSVG ,
      "title": "Panama Pacific East",
      "latitude": 8.250,
      "longitude": -79.375,
    }, {
    "imageURL": targetSVG ,
      "title": "Northern Line Islands",
      "latitude": 3.025,
      "longitude": -159.800,
    }, {
    "imageURL": targetSVG ,
      "title": "Western FSM",
      "latitude": 9.100,
      "longitude": 139.450,
    }, {
    "imageURL": targetSVG ,
      "title": "Eastern FSM",
      "latitude": 5.150,
      "longitude": 153.000,
    }, {
    "imageURL": targetSVG,
      "title": "Johor and Pahang, Malaysia",
      "latitude": 2.250,
      "longitude": 104.200
    }, {
    "imageURL": targetSVG,
      "title": "East Kalimantan",
      "latitude": 0.625,
      "longitude": 117.875
    }, {
    "imageURL": targetSVG,
      "title": "West Sulawesi",
      "latitude": -2.275,
      "longitude": 119.150
    }, {
    "imageURL": targetSVG,
      "title": "Dhofar, Oman",
      "latitude": 17.425,
      "longitude": 55.500
    }, {
    "imageURL": targetSVG,
      "title": "Gulf of Kutch, India",
      "latitude": 22.250,
      "longitude": 69.575
    }, {
    "imageURL": redMarker,
      "title": "Cape Verde Islands",
      "latitude": 15.975,
      "longitude": -24.025
    }, {
    "imageURL": redMarker,
      "title": "La Guajira",
      "latitude": 12.050,
      "longitude": -71.925
    }, {
    "imageURL": redMarker,
      "title": "Colombia Atlantic",
      "latitude": 9.875,
      "longitude": -75.575
    }, {
    "imageURL": redMarker,
      "title": "Northwestern Hawaiian Islands",
      "latitude": 25.675,
      "longitude": -170.125
    }, {
    "imageURL": redMarker,
      "title": "Guam",
      "latitude": 13.150,
      "longitude": 144.626
    }, {
    "imageURL": redMarker,
      "title": "Marshall Islands",
      "latitude": 8.450,
      "longitude": 167.100
    }, {
    "imageURL": redMarker,
      "title": "Gilbert Islands",
      "latitude": 0.350,
      "longitude": 173.200
    }, {
    "imageURL": redMarker,
      "title": "Nauru",
      "latitude": -0.525,
      "longitude": 166.925
    }, {
    "imageURL": redMarker,
      "title": "Al Wusta, Oman",
      "latitude": 19.625,
      "longitude": 57.800
    }]
}, {
  "year": 2015,
  "images": [{
    "imageURL": targetSVG,
      "title": "Jamaica",
      "latitude": 17.675,
      "longitude": -77.250
    }, {
    "imageURL": targetSVG,
      "title": "Honduras",
      "latitude": 16.650,
      "longitude": -85.850
    }, {
    "imageURL": targetSVG,
      "title": "Costa Rica Pacific",
      "latitude": 9.525,
      "longitude": -84.425
    }, {
    "imageURL": targetSVG,
      "title": "Southern Line Islands",
      "latitude": -7.700,
      "longitude": -153.075
    }, {
    "imageURL": targetSVG,
      "title": "Northern Cook Islands",
      "latitude": -10.950,
      "longitude": -165.200
    }, {
    "imageURL": targetSVG,
      "title": "Andaman, India",
      "latitude": 12.725,
      "longitude": 93.150
    }, {
    "imageURL": targetSVG,
      "title": "Spratly Islands",
      "latitude": 7.950 ,
      "longitude": 113.750
    }, {
    "imageURL": targetSVG,
      "title": "Southern Borneo",
      "latitude": -3.575,
      "longitude": 116.550
    }, {
    "imageURL": targetSVG,
      "title": "West Sulawesi",
      "latitude": -2.275,
      "longitude": 119.150
    }, {
    "imageURL": targetSVG,
      "title": "Dhofar, Oman",
      "latitude": 17.425,
      "longitude": 55.500
    }, {
    "imageURL": redMarker,
      "title": "Cape Verde Islands",
      "latitude": 15.975,
      "longitude": -24.025
    }, {
    "imageURL": redMarker,
      "title": "Leeward Caribbean Islands",
      "latitude": 16.775,
      "longitude": -62.325
    }, {
    "imageURL": redMarker,
      "title": "La Guajira",
      "latitude": 12.050,
      "longitude": -71.925
    }, {
    "imageURL": redMarker,
      "title": "Colombia Atlantic",
      "latitude": 9.875,
      "longitude": -75.575
    }, {
    "imageURL": redMarker,
      "title": "Panama Atlantic East",
      "latitude": 9.150,
      "longitude": -78.700
    }, {
    "imageURL": redMarker,
      "title": "Panama Atlantic West",
      "latitude": 9.075,
      "longitude": -81.650
    }, {
    "imageURL": redMarker,
      "title": "Costa Rica Atlantic",
      "latitude": 9.825,
      "longitude": -82.875
    }, {
    "imageURL": redMarker,
      "title": "Nicaragua",
      "latitude": 14.125,
      "longitude": -81.750
    }, {
    "imageURL": redMarker,
      "title": "Belize",
      "latitude": 17.025,
      "longitude": -88.125
    }, {
    "imageURL": redMarker,
      "title": "Panama Pacific East",
      "latitude": 8.250,
      "longitude": -79.375
    }, {
    "imageURL": redMarker,
      "title": "Main Hawaiian Islands",
      "latitude": 20.575,
      "longitude": -157.700
    }, {
    "imageURL": redMarker,
      "title": "Northern Line Islands",
      "latitude": 3.025,
      "longitude": -159.800
    }, {
    "imageURL": redMarker,
      "title": "Howland and Baker",
      "latitude": 0.500,
      "longitude": -176.525
    }, {
    "imageURL": redMarker,
      "title": "Phoenix Islands, Kiribati",
      "latitude": -3.150,
      "longitude": -172.825
    }, {
    "imageURL": redMarker,
      "title": "Al Wusta, Oman",
      "latitude": 19.625,
      "longitude": 57.800
    }, {
    "imageURL": redMarker,
      "title": "Gulf of Aqaba",
      "latitude": 28.700,
      "longitude": 34.700
    }, {
    "imageURL": redMarker,
      "title": "Gulf of Suez",
      "latitude": 28.475,
      "longitude": 33.250
    }, {
    "imageURL": redMarker,
      "title": "Gulf of Kutch, India",
      "latitude": 22.250,
      "longitude": 69.575
    }, {
    "imageURL": redMarker,
      "title": "Western India",
      "latitude": 17.700,
      "longitude": 72.275
    }]
} , {
  "year": 2016,
  "images": [{
    "imageURL": targetSVG,
      "title": "Leeward Caribbean Islands",
      "latitude": 16.775,
      "longitude": -62.325
    }, {
    "imageURL": targetSVG,
      "title": "Nicaragua",
      "latitude": 14.125,
      "longitude": -81.750
    }, {
    "imageURL": targetSVG,
      "title": "Offshore Venezuela",
      "latitude": 11.425,
      "longitude": -65.350
    }, {
    "imageURL": targetSVG,
      "title": "Northern Mariana Islands",
      "latitude": 17.250,
      "longitude": 145.550
    }, {
    "imageURL": targetSVG,
      "title": "Papua New Guinea",
      "latitude": -6.425,
      "longitude": 151.150
    }, {
    "imageURL": targetSVG,
      "title": "Northern Myanmar",
      "latitude": 18.250,
      "longitude": 93.550
    }, {
    "imageURL": targetSVG,
      "title": "Guam",
      "latitude": 13.150,
      "longitude": 144.625
    }, {
    "imageURL": targetSVG,
      "title": "Costa Rica Atlantic",
      "latitude": 9.825,
      "longitude": -82.875
    },  {
    "imageURL": targetSVG,
      "title": "Aruba, Curacao, and Bonaire",
      "latitude": 12.275,
      "longitude": -69.125
    }, {
    "imageURL": redMarker,
      "title": "Cape Verde Islands",
      "latitude": 15.975,
      "longitude": -24.025
    }, {
    "imageURL": redMarker,
      "title": "Windward Caribbean Islands",
      "latitude": 13.400,
      "longitude": -60.475
    }, {
    "imageURL": redMarker,
      "title": "Trinidad and Tobago",
      "latitude": 10.875,
      "longitude": -60.850
    }, {
    "imageURL": redMarker,
      "title": "Nearshore Venezuela",
      "latitude": 10.600,
      "longitude": -66.350
    }, {
    "imageURL": redMarker,
      "title": "La Guajira, Colombia",
      "latitude": 12.050,
      "longitude": -71.925
    }, {
    "imageURL": redMarker,
      "title": "Eastern FSM",
      "latitude": 5.150,
      "longitude": 153.000
    }, {
    "imageURL": redMarker,
      "title": "Marshall Islands",
      "latitude": 8.450,
      "longitude": 167.100
    }]
} ];




