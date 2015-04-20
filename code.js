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
			        	for(var i=0; i<data.length; i++) {
			        		$("body").css("backgroundColor", data[i].color);
			        		$("body").append(data[i].color + " ");
			        	}
			        };
				  getData();
				
			});