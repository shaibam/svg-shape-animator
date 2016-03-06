function Loader() {
	var T = this;
	T.httpGet = function(theUrl)
	{
	  	var xmlHttp = new XMLHttpRequest();
	    xmlHttp.onreadystatechange = function() {
		  if (xmlHttp.readyState == 4 && xmlHttp.status == 200) {
		  	T.Dispatch("READY",xmlHttp.response);
		  }
		};
	    xmlHttp.open( "GET", theUrl, true ); // false for synchronous request
	    xmlHttp.send( null ); 
	   
	}
	T.trigger = function() {
		T.Dispatch("READY");
	}
}
