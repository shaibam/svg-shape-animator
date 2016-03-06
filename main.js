//(function () {
	var start_svg = new SvgController();
	var end_svg = new SvgController();

	start_svg.url = "start.svg";
	end_svg.url = "end.svg";

	start_svg.container = document.querySelector("#start");
	end_svg.container = document.querySelector("#end");

	function animate_svg() {
		console.log("aniamte");
	}

//})();