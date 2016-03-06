function SvgController() {
	var svg_data;
	var url;
	var loader;
	var T = new Object_Document();	
	
	Object.defineProperty(T,'url',{
		get:function() {
			return url;
		},
		set:function(value) {
			url = value;
			loader = this.New(Loader);
			this.onSvgReady = function(event_arguments)  {
				console.log("ready")
				svg_data = event_arguments;
				T.populateSvg();
				loader.Detach("READY",this.onSvgReady);
			}
			loader.Listen("READY",this.onSvgReady);					
			loader.httpGet(url);
		}
	});

	var container;
	Object.defineProperty(T,'container',{
		get:function() {
			return container;
		},
		set:function(value) {
			container = value;
			T.populateSvg();
		}
	});

	T.populateSvg = function() {	
		var ready = true;
		if (!svg_data) console.log("svg not ready") , ready = false;
		if (!container) console.log("container not ready") , ready = false;
		if (ready) {
			container.innerHTML = svg_data;
			container.style.width = container.querySelector("svg").getAttribute("viewBox").split(" ")[2];
			container.style.height = container.querySelector("svg").getAttribute("viewBox").split(" ")[3];
			if (document.querySelector("#result").offsetWidth < container.querySelector("svg").getAttribute("viewBox").split(" ")[2])
				document.querySelector("#result").style.width = container.querySelector("svg").getAttribute("viewBox").split(" ")[2];
			if (document.querySelector("#result").offsetHeight < container.querySelector("svg").getAttribute("viewBox").split(" ")[3])
				document.querySelector("#result").style.height = container.querySelector("svg").getAttribute("viewBox").split(" ")[3];
		}
	}

	return T;
}