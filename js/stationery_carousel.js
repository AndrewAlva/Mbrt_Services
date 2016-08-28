
	// STATIONERY CAROUSEL INTERACTION

		// GLOBAL VARS
		var totalStationery = 2;
		var currentDisplayStationery = 1;

		// INTERACTION BY ARROWS CLICK
			// Next Project Interaction | Arrows Nav Click
			$('#stationeryCarousel').on('click', '.rightArrow a', function(event) {
				event.preventDefault();
				rightArrowNavClick(currentDisplayStationery, totalStationery, $('#stationeryCarousel'), currentSectionId + 1, 'communication');

				// THE LAST MOVE | Tried to integrate it to the general function, but it doesn't change the global vars value
				// Update the 'current loaded project' var
				if (currentDisplayStationery < totalStationery){
					currentDisplayStationery = currentDisplayStationery + 1 ;
				}
				console.log('New current showing project id value: ' + currentDisplayStationery);
			});

			// Previous Project Interaction | Arrows Nav Click
			$('#stationeryCarousel').on('click', '.leftArrow a', function(event) {
				event.preventDefault();
				leftArrowNavClick(currentDisplayStationery, $('#stationeryCarousel'));

				// THE LAST MOVE
				// Update the 'current loaded project' var
				if (currentDisplayStationery > 1){
					currentDisplayStationery = currentDisplayStationery - 1 ;
				}
				console.log('New current showing project id value: ' + currentDisplayStationery);
			});


	// HELPER FUNCTIONS
		// ARROWS INTERACTION
			// Next Project | Right Arrow Nav Click
			function rightArrowNavClick(currentDisplayProject, totalProjects, currentCarouselSelector, nextSectionId, nextSectionName){
				// Check if there are next projects to show
				if (currentDisplayProject < totalProjects) {
					showMeTheNextProject(currentDisplayProject, currentCarouselSelector, totalProjects);

				} 
				// If there aren't, scroll to next section
				else if (currentDisplayProject == totalProjects) {
					// HELPER FUNCTIONS FROM SCROLL_LISTENER.JS
					delayBetweenSections();
					scrollNextSection();
					currentSectionId = nextSectionId;
		 			window.history.pushState("object or string", "section", "?section=" + nextSectionName);
		 			
				};
			}

			//  Previous Project | Left Arrow Nav Click
			function leftArrowNavClick(currentDisplayProject, currentCarouselSelector){
				// Check if there are previous projects to show
				if (currentDisplayProject > 1){
					showMeThePreviousProject(currentDisplayProject, currentCarouselSelector);
				}
			}


		// GO NEXT PROJECT ONE BY ONE
		function showMeTheNextProject(currentShowingProjectId, currentCarouselSelector, totalProjects){
			// CHECK IF IT'S MOVING FROM THE FIRST PROJECT
			if (currentShowingProjectId == 1) {
				// SHOW THE LEFT ARROW TO GO PREVIOUS PHOTOS
				currentCarouselSelector.find('.leftArrow').removeClass('firstArrow');
			};

			// DISPLACE 1 POSITION PROJECT PHOTOS
			// First move the previous photos to their new positions
				// The 'holding back photos' stay like that, only the 'previous photo' go backwards
				currentCarouselSelector.find('.previousPhoto').addClass('holdingBackPhoto');
				currentCarouselSelector.find('.previousPhoto').removeClass('previousPhoto');

			// Second move the current photo
				// Because you are moving forward, the current photo goes backwards, so put its right class
				currentCarouselSelector.find('.currentPhoto').addClass('previousPhoto');
				currentCarouselSelector.find('.currentPhoto').removeClass('currentPhoto');

			// Finally, move the next photos
				// We will only move the 'next photo' and the first 'holding front photo', so we will start moving first the 'next photo'
				currentCarouselSelector.find('.nextPhoto').addClass('currentPhoto');
				currentCarouselSelector.find('.nextPhoto').removeClass('nextPhoto');

				holdingFrontProjects = currentCarouselSelector.find('.holdingFrontPhoto');
				$(holdingFrontProjects[0]).addClass('nextPhoto');
				$(holdingFrontProjects[0]).removeClass('holdingFrontPhoto');


			// SET THE ATTRIBUTES OF THE ARROWS
			// First set the new attribute for each arrow, depending on the new project loaded, the previous photo id for left arrow and the next photo id for right arrow
			leftIdToBring = currentShowingProjectId;
			rightIdToBring = currentShowingProjectId + 2;

			// If the right id is greater than the total of projects, it means it will scroll down instead of showing the next photo
			if (rightIdToBring > totalProjects) {
				rightIdToBring = 'next';
			};

			currentCarouselSelector.find('.leftArrow a').data("idtobring", leftIdToBring);
			currentCarouselSelector.find('.rightArrow a').data("idtobring", rightIdToBring);


			// SET THE STYLE FOR THE BOTTOM NAV BARS
				// First move the 'current bar' to the 'previous bar' position
				currentCarouselSelector.find('.currentBar').addClass('previousBar');
				currentCarouselSelector.find('.currentBar').removeClass('currentBar');

				// Then, bring only the first 'next bar' to the 'current bar' position
				nextBars = currentCarouselSelector.find('.nextBar');
				$(nextBars[0]).addClass('currentBar');
				$(nextBars[0]).removeClass('nextBar');
		}

		// GO PREVIOUS PROJECT, ONE BY ONE
		function showMeThePreviousProject(currentShowingProjectId, currentCarouselSelector){

			// CHECK IF IT'S MOVING TO THE FIRST PROJECT
			if (currentShowingProjectId == 2) {
				// SHOW THE LEFT ARROW TO GO PREVIOUS PHOTOS
				currentCarouselSelector.find('.leftArrow').addClass('firstArrow');
			};

			// DISPLACE 1 POSITION PROJECT PHOTOS
			// First move the next photos to their new positions
				// The 'holding front photos' stay like that, only the 'next photo' go backwards
				currentCarouselSelector.find('.nextPhoto').addClass('holdingFrontPhoto');
				currentCarouselSelector.find('.nextPhoto').removeClass('nextPhoto');

			// Second move the current photo
				// Because you are moving backwards, the current photo goes frontwards, so put its right class
				currentCarouselSelector.find('.currentPhoto').addClass('nextPhoto');
				currentCarouselSelector.find('.currentPhoto').removeClass('currentPhoto');

			// Finally, move the previous photos
				// We will only move the 'previous photo' and the last 'holding back photo', so we will start moving first the 'previous photo'
				currentCarouselSelector.find('.previousPhoto').addClass('currentPhoto');
				currentCarouselSelector.find('.previousPhoto').removeClass('previousPhoto');

				holdingBackProjects = currentCarouselSelector.find('.holdingBackPhoto');
				$(holdingBackProjects[holdingBackProjects.length - 1]).addClass('previousPhoto');
				$(holdingBackProjects[holdingBackProjects.length - 1]).removeClass('holdingBackPhoto');


			// SET THE ATTRIBUTES OF THE ARROWS
			// First set the new attribute for each arrow, depending on the new project loaded, the previous photo id for left arrow and the next photo id for right arrow
			leftIdToBring = currentShowingProjectId - 2;
			rightIdToBring = currentShowingProjectId;

			currentCarouselSelector.find('.leftArrow a').data("idtobring", leftIdToBring);
			currentCarouselSelector.find('.rightArrow a').data("idtobring", rightIdToBring);


			// SET THE STYLE FOR THE BOTTOM NAV BARS
				// First move the 'current bar' to the 'next bar' position
				currentCarouselSelector.find('.currentBar').addClass('nextBar');
				currentCarouselSelector.find('.currentBar').removeClass('currentBar');

				// Then, bring only the last 'previous bar' to the 'current bar' position
				previousBars = currentCarouselSelector.find('.previousBar');
				$(previousBars[previousBars.length - 1]).addClass('currentBar');
				$(previousBars[previousBars.length - 1]).removeClass('previousBar');
		}






















