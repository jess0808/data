
//tabs



$(function () {

    $(document).ready(function () {
        
        
        
        // piechart 1
        Highcharts.chart('pie1', {
            chart: {
                plotBackgroundColor: null,
                plotBorderWidth: null,
                plotShadow: false,
                type: 'pie',
                spacingBottom: 20,
                spacingTop: 30,
                spacingLeft: 20,
                spacingRight: 20,

            },
            
       
            colors: ['#BA131A', '#C54939', '#CC8673', '#D0A99A'],
            

            
            title: {
                text: 'Costs of degradation',
                style: {
                fontFamily: 'Roboto Condensed', 
                fontWeight: 700,
                fontSize: 20,
                textTransform: 'uppercase'
            }
            },
            
            subtitle: {
            text: "The breakdown of annual losses due to coral reef degradation",
            style: {
                fontFamily: 'Roboto', 
                fontWeight: 400,
                fontSize: 13
            }
            },
            
            tooltip: {
                pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
            },
            plotOptions: {
                pie: {
                    allowPointSelect: true,
                    cursor: 'pointer',
                    dataLabels: {
                        enabled: false,

                    },
                    showInLegend: true
                }
            },
            series: [{
                name: 'Brands',
                colorByPoint: true,
                data: [{
                    name: 'Tourism',
                    y: 40
                }, {
                    name: 'Biodiversity',
                    y: 22
                }, {
                    name: 'Fisheries',
                    y: 23
                }]
            }]
        });
        
        
      //piechart 2
      Highcharts.chart('pie2', {
            chart: {
                plotBackgroundColor: null,
                plotBorderWidth: null,
                plotShadow: false,
                type: 'pie',
                spacingBottom: 20,
                spacingTop: 30,
                spacingLeft: 20,
                spacingRight: 20,
            },
            
            
            colors: ['#BA131A', '#C54939', '#CC8673', '#D0A99A'],
          
            
            title: {
                text: 'Value of coral reefs',
                style: {
                fontFamily: 'Roboto Condensed', 
                fontWeight: 700,
                fontSize: 20,
                textTransform: 'uppercase'
            }
            },
            
            subtitle: {
            text: "The breakdown of annual benefits gained from coral reefs",
            style: {
                fontFamily: 'Roboto', 
                fontWeight: 400,
                fontSize: 13
            }
            },
            
            
            tooltip: {
                pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
            },
            plotOptions: {
                pie: {
                    allowPointSelect: true,
                    cursor: 'pointer',
                    dataLabels: {
                        enabled: false,
                        
                    },
                    showInLegend: true
                }
            },
            series: [{
                name: 'Brands',
                colorByPoint: true,
                data: [{
                    name: 'Tourism & recreation',
                    y: 9.6
                }, {
                    name: 'Biodiversity',
                    y: 5.5
                }, {
                    name: 'Fisheries',
                    y: 5.7
                }, {
                    name: 'Coastal protection',
                    y: 9.0
                }]
            }]
        });
        
        
        //bar graph 1
        Highcharts.chart('bar1', {
        chart: {
            type: 'bar',
            spacingBottom: 30,
            spacingTop: 30,
            spacingLeft: 30,
            spacingRight: 30,
        },
        
        colors: ['#BA131A'],
        
        title: {
            text: 'Regional Costs',
            style: {
                fontFamily: 'Roboto Condensed', 
                fontWeight: 700,
                fontSize: 20,
                textTransform: 'uppercase'
            }
        },
        subtitle: {
            text: "Total cost of severe degradation to the world's most vulnerable regions over a 50-year time horizon",
            style: {
                fontFamily: 'Roboto', 
                fontWeight: 400,
                fontSize: 13
            }
        },
        xAxis: {
            type: 'category',
            title: {
                text: null
            }
        },
        yAxis: {
            min: 0,
            title: {
                text: 'Cost (billions of dollars)',
                align: 'high',
                style: {
                        fontFamily: 'Roboto', 
                        fontWeight: 400,
                        fontSize: 13
                    }
            },
            labels: {
                overflow: 'justify'
            }
        },
        tooltip: {
          enabled:true,
          valueSuffix: ' billion',
          valuePrefix: '$',
          style: {
                        fontFamily: 'Roboto', 
                        fontWeight: 400,
                        fontSize: 13
                    }
        },
        plotOptions: {
            bar: {
                dataLabels: {
                    enabled: true,
                    formatter: function () {
                            return Highcharts.numberFormat(this.y,1);
                        }
                },
                series: {
                connectNulls: true
                }
            }
        },
        legend: {
            enabled:false
        },
        credits: {
            enabled: false
        },
        series: [{
          name:'Cost',
          data: [
                ['Southeast Asia', 38.3],
                ['Australia', 28.4],
                ['Indian Ocean', 13.0],
                ['Pacific', 7.6],
                ['United States', 7.6],
                ['Japan', 7.0],
                ['Caribbean', 5.7]
            ],
        }]
    });
        

        //bar graph 2
        
        
        Highcharts.setOptions({
		lang: {
			thousandsSep: ','
		}
      });
        
        Highcharts.chart('bar2', {
        chart: {
            type: 'bar',
            spacingBottom: 30,
            spacingTop: 30,
            spacingLeft: 30,
            spacingRight: 30,
        },
        
        colors: ['#BA131A'],

        title: {
            text: 'Value by site',
            style: {
                fontFamily: 'Roboto Condensed', 
                fontWeight: 700,
                fontSize: 20,
                textTransform: 'uppercase'
            }
        },
        subtitle: {
            text: "Amount of money generated per year by the most popular reef locations",
             style: {
                fontFamily: 'Roboto', 
                fontWeight: 400,
                fontSize: 13
            }
        },
        xAxis: {
            type: 'category',
            title: {
                text: null,
            },
            
        },
        yAxis: {
            min: 0,
            title: {
                text: 'Value (millions of dollars)',
                align: 'high',
                style: {
                        fontFamily: 'Roboto', 
                        fontWeight: 400,
                        fontSize: 13
                    }
            },
            labels: {
                overflow: 'justify'
            }
        },
        tooltip: {
            enabled:true,
            valueSuffix: ' million',
            valuePrefix: '$',
            style: {
                        fontFamily: 'Roboto', 
                        fontWeight: 400,
                        fontSize: 13
                    }
        },
        plotOptions: {
            bar: {
                dataLabels: {
                    enabled: true,
                    formatter: function () {
                            return Highcharts.numberFormat(this.y,1);
                        }
                },
                series: {
                connectNulls: true
                }
            }
        },
        legend: {
            enabled:false
        },
        credits: {
            enabled: false
        },
        
        
        series: [{
          name:'Cost',
          data: [
                ['Caribbean', 4600.0],
                ['Great Barrier Reef', 3700.0],
                ['Indonesia', 1600.0],
                ['Hawaii', 364.0],
                ['Guam', 127.3],
                ['Mariana Islands', 61.2],
                ['Turks & Caicos Islands', 47.3],
                ['Sri Lanka', 28.1]
            ],
        }]
    });

//line graph 1 options

			var options = {
				chart: {
					renderTo: 'line1',
					type: 'line',
                    backgroundColor: '#fff',
                    spacingBottom: 30,
                    spacingTop: 30,
                    spacingLeft: 30,
                    spacingRight: 30,
				},
                
                plotOptions: {
                    series: {
                        lineWidth: 3,
                        marker: {
                            fillColor: '#FFFFFF',
                            lineWidth: 3,
                            symbol:'circle',
                            lineColor: null // inherit from series
                        }
                    }
                },

                colors: ['#BA131A', '#4D94B1', '#D0A63C', '#4A7C16'],

				title: {
					text: 'Decline of Acropora',
                    x: -20, //center
                    style: {
                        fontFamily: 'Roboto Condensed', 
                        fontWeight: 700,
                        fontSize: 20,
                        textTransform: 'uppercase'
                    }
                    
				},
                
                subtitle: {
                    text: 'Percent of coral cover from the Acropora genus',
                    x: -20,
                    style: {
                        fontFamily: 'Roboto', 
                        fontWeight: 400,
                        fontSize: 13
                    }
                },
				xAxis: {
					categories: []
				},
				yAxis: {
                  title: {
                      text: 'Percent cover',
                      style: {
                        fontFamily: 'Roboto', 
                        fontWeight: 400,
                        fontSize: 13
                    }
                  },
                  plotLines: [{
                      value: 0,
                      width: 1,
                      color: '#808080'
                  }]
              },
              tooltip: {
                  valueSuffix: '%',
                  style: {
                        fontFamily: 'Roboto', 
                        fontWeight: 400,
                        fontSize: 13
                    }
              },
              legend: {
                  layout: 'vertical',
                  align: 'right',
                  verticalAlign: 'top',
                  y: 50,
                  padding: 25,
                  itemMarginTop: 3,
                  itemMarginBottom: 3,
                  floating:true,
                  borderWidth: 0
              },

				series: []
			};
			
			// Load line1 data from the XML file 
			$.get('line1.xml', function(xml) {
				
				// Split the lines
				var $xml = $(xml);
				
				// push categories
				$xml.find('categories item').each(function(i, category) {
					options.xAxis.categories.push($(category).text());
				});
				
				// push series
				$xml.find('series').each(function(i, series) {
					var seriesOptions = {
						name: $(series).find('name').text(),
						data: []
					};
					
					// push data points
					$(series).find('data point').each(function(i, point) {
						seriesOptions.data.push(
							parseFloat($(point).text())
						);
					});
					
					// add it to the options
					options.series.push(seriesOptions);
				});
				var chart = new Highcharts.Chart(options);
			});
			
//line graph 2 options

			var options2 = {
				chart: {
					renderTo: 'line2',
					type: 'line',
                    spacingBottom: 30,
                    spacingTop: 30,
                    spacingLeft: 30,
                    spacingRight: 30,
				},
                
                plotOptions: {
                    series: {
                        lineWidth: 3,
                        marker: {
                            fillColor: '#FFFFFF',
                            lineWidth: 3,
                            symbol:'circle',
                            lineColor: null // inherit from series
                        }
                    }
                },

                colors: ['#BA131A', '#4D94B1', '#D0A63C', '#4A7C16'],
                
				title: {
					text: 'Decline of Agariciidae',
                    x: -20, //center
                    style: {
                        fontFamily: 'Roboto Condensed', 
                        fontWeight: 700,
                        fontSize: 20,
                        textTransform: 'uppercase'
                    }
				},
                
                subtitle: {
                    text: 'Percent of coral cover from the Agariciidae family',
                    x: -20,
                    style: {
                        fontFamily: 'Roboto', 
                        fontWeight: 400,
                        fontSize: 13
                    }
                },
				xAxis: {
					categories: []
				},
				yAxis: {
                  title: {
                      text: 'Percent cover',
                      style: {
                        fontFamily: 'Roboto', 
                        fontWeight: 400,
                        fontSize: 13
                    }
                  },
                  plotLines: [{
                      value: 0,
                      width: 1,
                      color: '#808080'
                  }]
              },
              tooltip: {
                  valueSuffix: '%',
                  style: {
                        fontFamily: 'Roboto', 
                        fontWeight: 400,
                        fontSize: 13
                    }
              },
              legend: {
                  layout: 'vertical',
                  align: 'right',
                  verticalAlign: 'top',
                  y: 50,
                  padding: 25,
                  itemMarginTop: 3,
                  itemMarginBottom: 3,
                  floating:true,
                  borderWidth: 0
              },

				series: []
			};
			
		  // Load line2 data from the XML file 
			$.get('line2.xml', function(xml2) {
				
				// Split the lines
				var $xml = $(xml2);
				
				// push categories
				$xml.find('categories item').each(function(i, category) {
					options2.xAxis.categories.push($(category).text());
				});
				
				// push series
				$xml.find('series').each(function(i, series) {
					var seriesOptions = {
						name: $(series).find('name').text(),
						data: []
					};
					
					// push data points
					$(series).find('data point').each(function(i, point) {
						seriesOptions.data.push(
							parseFloat($(point).text())
						);
					});
					
					// add it to the options
					options2.series.push(seriesOptions);
				});
				var chart2 = new Highcharts.Chart(options2);
			});
						

//line graph 3 options

			var options3 = {
				chart: {
					renderTo: 'line3',
					type: 'line',
                    spacingBottom: 30,
                    spacingTop: 30,
                    spacingLeft: 30,
                    spacingRight: 30,
				},
                
                plotOptions: {
                    series: {
                        lineWidth: 3,
                        marker: {
                            fillColor: '#FFFFFF',
                            lineWidth: 3,
                            symbol:'circle',
                            lineColor: null // inherit from series
                        }
                    }
                },

                colors: ['#BA131A', '#4D94B1', '#D0A63C', '#4A7C16'],
                
				title: {
					text: 'Decline of Poritidae',
                    x: -20, //center
                    style: {
                        fontFamily: 'Roboto Condensed', 
                        fontWeight: 700,
                        fontSize: 20,
                        textTransform: 'uppercase'
                    }
				},
                
                subtitle: {
                    text: 'Percent of coral cover from the Poritidae family',
                    x: -20,
                     style: {
                          fontFamily: 'Roboto', 
                          fontWeight: 400,
                          fontSize: 13
                      }
                },
				xAxis: {
					categories: []
				},
				yAxis: {
                  title: {
                      text: 'Percent cover',
                      style: {
                        fontFamily: 'Roboto', 
                        fontWeight: 400,
                        fontSize: 13
                    }
                  },
                  plotLines: [{
                      value: 0,
                      width: 1,
                      color: '#808080'
                  }]
              },
              tooltip: {
                  valueSuffix: '%',
                   style: {
                        fontFamily: 'Roboto', 
                        fontWeight: 400,
                        fontSize: 13
                    }
              },
              legend: {
                  layout: 'vertical',
                  align: 'right',
                  verticalAlign: 'top',
                  y: 50,
                  padding: 25,
                  itemMarginTop: 3,
                  itemMarginBottom: 3,
                  floating:true,
                  borderWidth: 0,
                  
              },

				series: []
			};
			
		  // Load line2 data from the XML file 
			$.get('line3.xml', function(xml3) {
				
				// Split the lines
				var $xml = $(xml3);
				
				// push categories
				$xml.find('categories item').each(function(i, category) {
					options3.xAxis.categories.push($(category).text());
				});
				
				// push series
				$xml.find('series').each(function(i, series) {
					var seriesOptions = {
						name: $(series).find('name').text(),
						data: []
					};
					
					// push data points
					$(series).find('data point').each(function(i, point) {
						seriesOptions.data.push(
							parseFloat($(point).text())
						);
					});
					
					// add it to the options
					options3.series.push(seriesOptions);
				});
				var chart3 = new Highcharts.Chart(options3);
			});
							
			

   
    
    
       
        
        
    });
});

/*map set up*/
var map = AmCharts.makeChart( "chartdiv", {
  "type": "map",
  "projection": "miller",
  
  "imagesSettings": {
    "rollOverColor": "#089282",
    "rollOverScale": 1.5,
    "selectedScale": 1.5,
    "selectedColor": "#089282",
  },
  
  "zoomControl": {
	"homeButtonEnabled": false,
    "gridHeight": 20,
	},
  

  "areasSettings": {
    "unlistedAreasColor": "#DDDCCB",
    "outlineThickness": 0.5,
  },
  
  "dataProvider": {
    "map": "worldLow",
    "images": markers[0].images,
  },
  
  "legend": {
    "backgroundColor": "#fff",
    "backgroundAlpha": 0.7,
    "width": 250,
    "align": "center",
    "right": 0,
    "bottom": 0,
    "data": [ {
      "title": "Bleaching Warning (Stress level 2)",
      "color": "#3366CC",
      "customMarker": "images/1-warning.png"
    }, {
      "title": "Bleaching Alert (Stress level 3-4)",
      "color": "#FFCC33",
      "customMarker": "images/1-exclamation.png"
    } ]
  },
  
  "listeners": [{
    "event": "init",
    "method": function(e) {

      // init jQuery UI Slider source:https://www.amcharts.com/kbase/time-line-map-jquery-ui-slider/
      $( "#slider" ).slider({
        "min": 0,
        "max": (markers.length - 1),
        "create": function( event, ui ) {
          var dataSet = markers[0];
          $("#slider .ui-slider-handle").text(dataSet.year);
        },
        "slide": function( event, ui ) {
          var dataSet = markers[ui.value];
          e.chart.dataProvider.images = dataSet.images;
          e.chart.validateData();
          $(ui.handle).text(dataSet.year);
        }
      });
    }
  }]
} );




// fix dimensions of chart hidden in tabs
$(document).on( 'shown.bs.tab', 'a[data-toggle="tab"]', function (e) { // on tab selection event
    $( ".contains-chart" ).each(function() { // target each element with the .contains-chart class
        var chart = $(this).highcharts(); // target the chart itself
        chart.reflow() // reflow that chart
    });
})

/*data table*/
$(document).ready(function() {
    $('#test').DataTable( {
        "ajax": 'data.json',
        responsive: true,
    } );
} );