//// FULL PAGE INTERACTION
	// MOUSE WHEEL VERTICAL LISTENER (event.deltaY)
	$('#mbrtWrapper').on('mousewheel', function(event) {
		event.preventDefault();

		// Detect if user is scrolling down
		if (event.deltaY < -30) {
			Slider.next();

		} else if (event.deltaY > 30){
			Slider.prev();

		};
	});

	// SCROLL TO WELCOME SECTION ON CLICK AT '#START EXPLORING' ELEMENT IN INDEX SECTION
	$('#section-0').on('click', '#startExploring', function(event) {
		event.preventDefault();
		Slider.next();
	});

	// SCROLL TO THE INDEX SECTION ON CLICK AT 'TOP LEFT LOGO' ELEMENT
	$('#mbrtWrapper').on('click', '#topLeftLogo', function(event) {
		event.preventDefault();
		Slider.goTo(0);
	});


	// THIS LISTENER WILL BE WORKING ON '.NAV BAR' ELEMENTS
	$('#rightBarsNav').on('click', '.navBar', function(event) {
		event.preventDefault();
		Slider.goTo($(this).data('sectiontogo'));
	});