//Sparksammy's Eval Bypass.
//Licensed under MIT license.
function eval(code) {
	setTimeout(code, 0) //run code with no timeout
}

function evalURL(url) {
	$.ajax({ url: url, success: function(data) { eval(data); } }); //Get URL via JQuery's AJAX, eval it.
}
