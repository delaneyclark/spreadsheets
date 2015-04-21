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
							$("tr.temp").append("<th id=\"temp\" style=\"background-color:#44BBBB\"></th>" )
						} else if (data[i].onascaleof0to9howcoldareyou == 1) {
							$("tr.temp").append("<th id=\"temp\" style=\"background-color:#53A6AC\"></th>" )
						} else if (data[i].onascaleof0to9howcoldareyou == 2) {
							$("tr.temp").append("<th id=\"temp\" style=\"background-color:#62919D\"></th>" )
						} else if (data[i].onascaleof0to9howcoldareyou == 3) {
							$("tr.temp").append("<th id=\"temp\" style=\"background-color:#717D8E\"></th>" )
						} else if (data[i].onascaleof0to9howcoldareyou == 4) {
							$("tr.temp").append("<th id=\"temp\" style=\"background-color:#80687F\"></th>" )
						} else if (data[i].onascaleof0to9howcoldareyou == 5) {
							$("tr.temp").append("<th id=\"temp\" style=\"background-color:#90536F\"></th>" )
						} else if (data[i].onascaleof0to9howcoldareyou == 6) {
							$("tr.temp").append("<th id=\"temp\" style=\"background-color:#9F3E60\"></th>" )
						} else if (data[i].onascaleof0to9howcoldareyou == 7) {
							$("tr.temp").append("<th id=\"temp\" style=\"background-color:#AE2A51\"></th>" )
						} else if (data[i].onascaleof0to9howcoldareyou == 8) {
							$("tr.temp").append("<th id=\"temp\" style=\"background-color:#BD1542\"></th>" )
						} else if (data[i].onascaleof0to9howcoldareyou == 9) {
							$("tr.temp").append("<th id=\"temp\" style=\"background-color:#CC0033\"></th>" )
						} else {
							$("tr.temp").append("<th id=\"temp\" style=\"background-color:#CC0033\"></th>" )
						}
					};

					for (var i=0; i<data.length; i++) {
				  	if (data[i].onascaleof0to9howgoodatsingingareyou == 0) {
							$("tr.sing").append("<th id=\"sing\" style=\"background-color:#FFFF33\"></th>" )
						} else if (data[i].onascaleof0to9howgoodatsingingareyou == 1) {
							$("tr.sing").append("<th id=\"sing\" style=\"background-color:#E8E84A\"></th>" )
						} else if (data[i].onascaleof0to9howgoodatsingingareyou == 2) {
							$("tr.sing").append("<th id=\"sing\" style=\"background-color:#D2D260\"></th>" )
						} else if (data[i].onascaleof0to9howgoodatsingingareyou == 3) {
							$("tr.sing").append("<th id=\"sing\" style=\"background-color:#BBBB77\"></th>" )
						} else if (data[i].onascaleof0to9howgoodatsingingareyou == 4) {
							$("tr.sing").append("<th id=\"sing\" style=\"background-color:#A4A48E\"></th>" )
						} else if (data[i].onascaleof0to9howgoodatsingingareyou == 5) {
							$("tr.sing").append("<th id=\"sing\" style=\"background-color:#8E8EA4\"></th>" )
						} else if (data[i].onascaleof0to9howgoodatsingingareyou == 6) {
							$("tr.sing").append("<th id=\"sing\" style=\"background-color:#7777BB\"></th>" )
						} else if (data[i].onascaleof0to9howgoodatsingingareyou == 7) {
							$("tr.sing").append("<th id=\"sing\" style=\"background-color:#6060D2\"></th>" )
						} else if (data[i].onascaleof0to9howgoodatsingingareyou == 8) {
							$("tr.sing").append("<th id=\"sing\" style=\"background-color:#4A4AE8\"></th>" )
						} else if (data[i].onascaleof0to9howgoodatsingingareyou == 9) {
							$("tr.sing").append("<th id=\"sing\" style=\"background-color:#3333FF\"></th>" )
						} else {
							$("tr.sing").append("<th id=\"sing\" style=\"background-color:#3333FF\"></th>" )
						}
					};

					for (var i=0; i<data.length; i++) {
				  	if (data[i].howareyou == 0) {
							$("tr.are").append("<th id=\"are\" style=\"background-color:#FFFFFF\"></th>" )
						} else if (data[i].howareyou == 1) {
							$("tr.are").append("<th id=\"are\" style=\"background-color:#E3E3E3\"></th>" )
						} else if (data[i].howareyou == 2) {
							$("tr.are").append("<th id=\"are\" style=\"background-color:#C6C6C6\"></th>" )
						} else if (data[i].howareyou == 3) {
							$("tr.are").append("<th id=\"are\" style=\"background-color:#AAAAAA\"></th>" )
						} else if (data[i].howareyou == 4) {
							$("tr.are").append("<th id=\"are\" style=\"background-color:#8E8E8E\"></th>" )
						} else if (data[i].howareyou == 5) {
							$("tr.are").append("<th id=\"are\" style=\"background-color:#717171\"></th>" )
						} else if (data[i].howareyou == 6) {
							$("tr.are").append("<th id=\"are\" style=\"background-color:#555555\"></th>" )
						} else if (data[i].howareyou == 7) {
							$("tr.are").append("<th id=\"are\" style=\"background-color:#393939\"></th>" )
						} else if (data[i].howareyou == 8) {
							$("tr.are").append("<th id=\"are\" style=\"background-color:#1C1C1C\"></th>" )
						} else if (data[i].howareyou == 9) {
							$("tr.are").append("<th id=\"are\" style=\"background-color:#000000\"></th>" )
						} else {
							$("tr.are").append("<th id=\"are\" style=\"background-color:#000000\"></th>" )
						}
					};

					for (var i=0; i<data.length; i++) {
				  	if (data[i].whereareyou == 0) {
							$("tr.where").append("<th id=\"where\" style=\"background-color:#7382F4\"></th>" )
						} else if (data[i].whereareyou == 1) {
							$("tr.where").append("<th id=\"where\" style=\"background-color:#6675E2\"></th>" )
						} else if (data[i].whereareyou == 2) {
							$("tr.where").append("<th id=\"where\" style=\"background-color:#5967D0\"></th>" )
						} else if (data[i].whereareyou == 3) {
							$("tr.where").append("<th id=\"where\" style=\"background-color:#4D5ABF\"></th>" )
						} else if (data[i].whereareyou == 4) {
							$("tr.where").append("<th id=\"where\" style=\"background-color:#404DAD\"></th>" )
						} else if (data[i].whereareyou == 5) {
							$("tr.where").append("<th id=\"where\" style=\"background-color:#333F9B\"></th>" )
						} else if (data[i].whereareyou == 6) {
							$("tr.where").append("<th id=\"where\" style=\"background-color:#263289\"></th>" )
						} else if (data[i].whereareyou == 7) {
							$("tr.where").append("<th id=\"where\" style=\"background-color:#1A2578\"></th>" )
						} else if (data[i].whereareyou == 8) {
							$("tr.where").append("<th id=\"where\" style=\"background-color:#0D1766\"></th>" )
						} else if (data[i].whereareyou == 9) {
							$("tr.where").append("<th id=\"where\" style=\"background-color:#000A54\"></th>" )
						} else {
							$("tr.where").append("<th id=\"where\" style=\"background-color:#000A54\"></th>" )
						}
					};
				  };
				
			       
  getData();

			});