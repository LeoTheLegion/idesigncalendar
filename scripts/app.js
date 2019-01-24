var $ = require('jquery');

var sec = 1000;
var min = sec * 60;

 var time = new Date().getTime();

 $(document.body).bind("mousemove keypress", function(e) {
	 time = new Date().getTime();
 });

 function refresh() {
	 if(new Date().getTime() - time >= min) 
		 window.location.reload(true);
	 else 
		 setTimeout(refresh, 10000);
 }

 setTimeout(refresh, 10000);