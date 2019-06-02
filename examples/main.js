function init() {
    var elForm = document.getElementById("form");
    var nval = new NValTippy.NValTippy(elForm);
	
	var btn = document.getElementById("submitBtn");
	btn.addEventListener("click", function(e){
		e.preventDefault();
		if(nval.isValid()){
			alert("Form is valid.")
		}
    });
}