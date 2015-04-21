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
			        	
				
				
				  for (var i=0; i<data.length; i++) {
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

					for (var i=0; i<data.length; i++) {
				  	if (data[i].onascaleof0to9howgoodatsingingareyou == 0) {
							$("table.temp").append("<div id=\"temp\" style=\"background-color:#FFFF33\"></div>" )
						} else if (data[i].onascaleof0to9howgoodatsingingareyou == 1) {
							$("table.temp").append("<div id=\"temp\" style=\"background-color:#E8E84A\"></div>" )
						} else if (data[i].onascaleof0to9howgoodatsingingareyou == 2) {
							$("table.temp").append("<div id=\"temp\" style=\"background-color:#D2D260\"></div>" )
						} else if (data[i].onascaleof0to9howgoodatsingingareyou == 3) {
							$("table.temp").append("<div id=\"temp\" style=\"background-color:#BBBB77\"></div>" )
						} else if (data[i].onascaleof0to9howgoodatsingingareyou == 4) {
							$("table.temp").append("<div id=\"temp\" style=\"background-color:#A4A48E\"></div>" )
						} else if (data[i].onascaleof0to9howgoodatsingingareyou == 5) {
							$("table.temp").append("<div id=\"temp\" style=\"background-color:#8E8EA4\"></div>" )
						} else if (data[i].onascaleof0to9howgoodatsingingareyou == 6) {
							$("table.temp").append("<div id=\"temp\" style=\"background-color:#7777BB\"></div>" )
						} else if (data[i].onascaleof0to9howgoodatsingingareyou == 7) {
							$("table.temp").append("<div id=\"temp\" style=\"background-color:#6060D2\"></div>" )
						} else if (data[i].onascaleof0to9howgoodatsingingareyou == 8) {
							$("table.temp").append("<div id=\"temp\" style=\"background-color:#4A4AE8\"></div>" )
						} else if (data[i].onascaleof0to9howgoodatsingingareyou == 9) {
							$("table.temp").append("<div id=\"temp\" style=\"background-color:#3333FF\"></div>" )
						} else {
							$("table.temp").append("<div id=\"temp\" style=\"background-color:#3333FF\"></div>" )
						}
					};

					for (var i=0; i<data.length; i++) {
				  	if (data[i].howareyou == 0) {
							$("table.temp").append("<div id=\"temp\" style=\"background-color:#FFFFFF\"></div>" )
						} else if (data[i].howareyou == 1) {
							$("table.temp").append("<div id=\"temp\" style=\"background-color:#E3E3E3\"></div>" )
						} else if (data[i].howareyou == 2) {
							$("table.temp").append("<div id=\"temp\" style=\"background-color:#C6C6C6\"></div>" )
						} else if (data[i].howareyou == 3) {
							$("table.temp").append("<div id=\"temp\" style=\"background-color:#AAAAAA\"></div>" )
						} else if (data[i].howareyou == 4) {
							$("table.temp").append("<div id=\"temp\" style=\"background-color:#8E8E8E\"></div>" )
						} else if (data[i].howareyou == 5) {
							$("table.temp").append("<div id=\"temp\" style=\"background-color:#717171\"></div>" )
						} else if (data[i].howareyou == 6) {
							$("table.temp").append("<div id=\"temp\" style=\"background-color:#555555\"></div>" )
						} else if (data[i].howareyou == 7) {
							$("table.temp").append("<div id=\"temp\" style=\"background-color:#393939\"></div>" )
						} else if (data[i].howareyou == 8) {
							$("table.temp").append("<div id=\"temp\" style=\"background-color:#1C1C1C\"></div>" )
						} else if (data[i].howareyou == 9) {
							$("table.temp").append("<div id=\"temp\" style=\"background-color:#000000\"></div>" )
						} else {
							$("table.temp").append("<div id=\"temp\" style=\"background-color:#000000\"></div>" )
						}
					};

					for (var i=0; i<data.length; i++) {
				  	if (data[i].whereareyou == 0) {
							$("table.temp").append("<div id=\"temp\" style=\"background-color:#7382F4\"></div>" )
						} else if (data[i].whereareyou == 1) {
							$("table.temp").append("<div id=\"temp\" style=\"background-color:#6675E2\"></div>" )
						} else if (data[i].whereareyou == 2) {
							$("table.temp").append("<div id=\"temp\" style=\"background-color:#5967D0\"></div>" )
						} else if (data[i].whereareyou == 3) {
							$("table.temp").append("<div id=\"temp\" style=\"background-color:#4D5ABF\"></div>" )
						} else if (data[i].whereareyou == 4) {
							$("table.temp").append("<div id=\"temp\" style=\"background-color:#404DAD\"></div>" )
						} else if (data[i].whereareyou == 5) {
							$("table.temp").append("<div id=\"temp\" style=\"background-color:#333F9B\"></div>" )
						} else if (data[i].whereareyou == 6) {
							$("table.temp").append("<div id=\"temp\" style=\"background-color:#263289\"></div>" )
						} else if (data[i].whereareyou == 7) {
							$("table.temp").append("<div id=\"temp\" style=\"background-color:#1A2578\"></div>" )
						} else if (data[i].whereareyou == 8) {
							$("table.temp").append("<div id=\"temp\" style=\"background-color:#0D1766\"></div>" )
						} else if (data[i].whereareyou == 9) {
							$("table.temp").append("<div id=\"temp\" style=\"background-color:#000A54\"></div>" )
						} else {
							$("table.temp").append("<div id=\"temp\" style=\"background-color:#000A54\"></div>" )
						}
					};
				  };
				
			       
  getData();

			});