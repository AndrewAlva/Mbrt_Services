jQuery(document).ready(function($) {

	// THIS LISTENER WILL BE WORKING ON '.NAV BAR' ELEMENTS
	$('#rightBarsNav').on('click', '.navBar', function(event) {
		event.preventDefault();
		console.log('Right nav bar click listener working on .navBar selector.');
	});

});