
	// INTERIORISM CAROUSEL INTERACTION
	// Section ID = 10

		// GLOBAL VARS
		var totalInteriorisms = 8;
		var currentDisplayInteriorism = 1;

		// INTERACTION BY ARROWS CLICK
		// Next Project Interaction | Arrows Nav Click
		$('#interiorismCarousel').on('click', '.rightArrow a', function(event) {
			event.preventDefault();
			rightMovementNavigation(currentDisplayInteriorism, totalInteriorisms, $('#interiorismCarousel'), currentSectionId + 1, 'advertising');

			// THE LAST MOVE | Tried to integrate it to the general function, but it doesn't change the global vars value
			// Update the 'current loaded project' var
			if (currentDisplayInteriorism < totalInteriorisms){
				currentDisplayInteriorism = currentDisplayInteriorism + 1 ;
			}
		});

		// Previous Project Interaction | Arrows Nav Click
		$('#interiorismCarousel').on('click', '.leftArrow a', function(event) {
			event.preventDefault();
			leftMovementNavigation(currentDisplayInteriorism, $('#interiorismCarousel'));

			// THE LAST MOVE
			// Update the 'current loaded project' var
			if (currentDisplayInteriorism > 1){
				currentDisplayInteriorism = currentDisplayInteriorism - 1 ;
			}
		});


		// INTERACTION BY BOTTOM NAV BARS
		$('#interiorismCarousel').on('click', '.singleBar', function(event) {
			event.preventDefault();
			projectToLoad = $(this).data("loadprojectid");
			projectsToSkip = Math.abs(projectToLoad - currentDisplayInteriorism);
			
			bottomNavBarClick(projectToLoad, projectsToSkip, currentDisplayInteriorism, $('#interiorismCarousel'), totalInteriorisms);

			// THE LAST MOVE
			// Update the 'current loaded stationery id' var
			if (projectToLoad > currentDisplayInteriorism) {
				for (var i = 0; i < projectsToSkip; i++) {
					currentDisplayInteriorism = currentDisplayInteriorism + 1 ;
				};
				console.log('New currentDisplayInteriorism value: '+ currentDisplayInteriorism);

			} else if (projectToLoad < currentDisplayInteriorism) {
				for (var i = 0; i < projectsToSkip; i++) {
					currentDisplayInteriorism = currentDisplayInteriorism - 1 ;

					// Fix to each(loop) inside bottomNavBarClick() function, it doesn't update the 'current display project' var
					if (currentDisplayInteriorism == 1) {
						$('#interiorismCarousel').find('.leftArrow').addClass('firstArrow');
					};
				};
				console.log('New currentDisplayInteriorism value: '+ currentDisplayInteriorism);
			};
		});


		// INTERACTION BY KEYBOARD ARROWS
		$(document).keyup(function(event) {

			// TRIGGER THE KEY INTERACTION FUNCTIONS OF THE CURRENT CAROUSEL SECTION
			// RIGHT ARROW INTERACTION (KEYCODE = 39)
			if (event.keyCode == 39 ){
				event.preventDefault();

				// Trigger the functions of the Interiorism Carousel
				if (currentSectionId == 10) {
					rightMovementNavigation(currentDisplayInteriorism, totalInteriorisms, $('#interiorismCarousel'), currentSectionId + 1, 'advertising');

					// THE LAST MOVE | Tried to integrate it to the general function, but it doesn't change the global vars value
					// Update the 'current loaded project' var
					if (currentDisplayInteriorism < totalInteriorisms){
						currentDisplayInteriorism = currentDisplayInteriorism + 1 ;
					}
				};
			}

			// LEFT ARROW INTERACTION (KEYCODE = 37)
			if (event.keyCode == 37){
				event.preventDefault();

				// Trigger the functions of the Interiorism Carousel
				if (currentSectionId == 10 && currentDisplayInteriorism > 1) {
					leftMovementNavigation(currentDisplayInteriorism, $('#interiorismCarousel'));

					// THE LAST MOVE
					// Update the 'current loaded project' var
					if (currentDisplayInteriorism > 1){
						currentDisplayInteriorism = currentDisplayInteriorism - 1 ;
					}
				};
			}
		});


		// INTERACTION BY HORIZONTAL SCROLLING
		$('#mbrtWrapper').on('mousewheel', function(event) {
			// CONTROL TRIGGERING
			// Change section only if the current section has been fully loaded
			if(canScroll && event.deltaX != 0){
				event.preventDefault();

				if (currentSectionId == 10) {
					scrollHorizontalCarousel(event.deltaX, event.deltaY, event.deltaFactor, currentDisplayInteriorism, totalInteriorisms, $('#interiorismCarousel'), currentSectionId + 1, 'advertising');

					// Detect if user is scrolling right
					if (event.deltaX > 0) {
						// THE LAST MOVE | Tried to integrate it to the general function, but it doesn't change the global vars value
						// Update the 'current loaded project' var
						if (currentDisplayInteriorism < totalInteriorisms){
							currentDisplayInteriorism = currentDisplayInteriorism + 1 ;
						}
					} else if (event.deltaX < 0) {
						// THE LAST MOVE
						// Update the 'current loaded project' var
						if (currentDisplayInteriorism > 1){
							currentDisplayInteriorism = currentDisplayInteriorism - 1 ;
						}
					};
				};
		    } else {
		    	// PREVENT OVERLAPING CHANGE SECTION ANIMATIONS
				// If there is an animation running to change the section, wait until it's over to change of section again
				event.preventDefault();

				// NOTICE YOU HAVE TO WAIT TO SCROLL AGAIN
				// console.log("You can't scroll yet, canScroll: " + canScroll);
		    }
	    });