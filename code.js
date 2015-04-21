$(document).ready(function(){
				  var public_spreadsheet_url = 'https://docs.google.com/spreadsheets/d/130As1Yi0oW9PgjMuRXVdpx0bFwLExae3CXwY2FgizS4/pubhtml';
				  var getData = function () {
				    Tabletop.init({ 
				    	"key": public_spreadsheet_url,
				        "callback": processData,
				        "simpleSheet": true
				    });
				  }
				  var processData = function(data){
			        	console.log(data);
			        	// for(var i=0; i<data.length; i++) {
			        	
			        	// }
			        	
				
				
				  for (var i=0; i<data.length; i++) {console.log(data[i].onascaleof0to9howcoldareyou);
				  	if (data[i].onascaleof0to9howcoldareyou == 0) {
							$("table.temp").append("<div id=\"temp\" style=\"background-color:#44BBBB\"></div>" )
						} else if (data[i].onascaleof0to9howcoldareyou == 1) {
							$("table.temp").append("<div id=\"temp\" style=\"background-color:#53A6AC\"></div>" )
						} else if (data[i].onascaleof0to9howcoldareyou == 2) {
							$("table.temp").append("<div id=\"temp\" style=\"background-color:#62919D\"></div>" )
						} else if (data[i].onascaleof0to9howcoldareyou == 3) {
							$("table.temp").append("<div id=\"temp\" style=\"background-color:#717D8E\"></div>" )
						} else if (data[i].onascaleof0to9howcoldareyou == 4) {
							$("table.temp").append("<div id=\"temp\" style=\"background-color:#80687F\"></div>" )
						} else if (data[i].onascaleof0to9howcoldareyou == 5) {
							$("table.temp").append("<div id=\"temp\" style=\"background-color:#90536F\"></div>" )
						} else if (data[i].onascaleof0to9howcoldareyou == 6) {
							$("table.temp").append("<div id=\"temp\" style=\"background-color:#9F3E60\"></div>" )
						} else if (data[i].onascaleof0to9howcoldareyou == 7) {
							$("table.temp").append("<div id=\"temp\" style=\"background-color:#AE2A51\"></div>" )
						} else if (data[i].onascaleof0to9howcoldareyou == 8) {
							$("table.temp").append("<div id=\"temp\" style=\"background-color:#BD1542\"></div>" )
						} else if (data[i].onascaleof0to9howcoldareyou == 9) {
							$("table.temp").append("<div id=\"temp\" style=\"background-color:#CC0033\"></div>" )
						} else {
							$("table.temp").append("<div id=\"temp\" style=\"background-color:#CC0033\"></div>" )
						}
					};
				  };
				
			       
  getData();

			});