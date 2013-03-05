$(document).ready(function() {

	jQuery(".location li:has('ul')").toggle(
		function(){
			jQuery(this).children('ul').show();
			return false;
		},
		function(){
			jQuery(this).children('ul').hide();
			return false;
		}
	);

});