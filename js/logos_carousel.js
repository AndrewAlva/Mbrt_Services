jQuery(document).ready(function($) {

	// CAROUSEL INTERACTION

		// GLOBAL VARS
		var totalLogos = 5;
		var currentDisplayLogo = 1;

		// INTERACTION BY ARROWS CLICK (PENDING KEYBOARD INTERACTION)
			// Next Project Interaction | Arrows Nav Click
			$('#logosCarousel').on('click', '.rightArrow a', function(event) {
				event.preventDefault();

				if (currentDisplayLogo < totalLogos) {
					showMeTheNextLogo(currentDisplayLogo);
				};
			});

			//  Previous Project Interaction | Arrows Nav Click
			$('#logosCarousel').on('click', '.leftArrow a', function(event) {
				event.preventDefault();

				showMeThePreviousLogo(currentDisplayLogo);
			});


		// INTERACTION BY BOTTOM NAV BARS

		$('#logosCarousel').on('click', '.singleBar', function(event) {
			event.preventDefault();
			projectToLoad = $(this).data("loadprojectid");
			projectsToSkip = Math.abs(projectToLoad - currentDisplayLogo);

			// CHECK IF USER IS TRYING TO LOAD THE CURRENT PROJECT
			if (projectToLoad == currentDisplayLogo){
				console.log('Seriously?, you are trying to load the current project');
			} 

			// CHECK IF USER IS LOADING NEXT PROJECTS
			else if(projectToLoad > currentDisplayLogo){
				// console.log('Ready to go to next project');

				// Repeat the action until reaching the desired project
				for (var i = 0; i < projectsToSkip; i++) {
					// ADD A DELAY WHEN THEY SKIP VARIOUS PROJECTS
					setTimeout(function(){
						showMeTheNextLogo(currentDisplayLogo);
					}, i * 100);
				};	
			} 

			// CHECK IF USER IS LOADING PREVIOUS PROJECTS
			else {
				// console.log('Ready to go to previous project');

				// Repeat the action until reaching the desired project
				for (var i = 0; i < projectsToSkip; i++) {
					// ADD A DELAY WHEN THEY SKIP VARIOUS PROJECTS
					setTimeout(function(){
						showMeThePreviousLogo(currentDisplayLogo);
					}, i * 100);
				};
			}
		});


	
		// INTERACTION BY KEYBOARD
			$(document).keyup(function(event) {

				// TRIGGER THE KEY INTERACTION FUNCTIONS ONLY IF WE ARE AT THE LOGOS CAROUSEL SECTION, AND IF THERE ARE STILL PROJECTS TO LOAD
				// RIGHT ARROW INTERACTION (KEYCODE = 39)
				if (event.keyCode == 39 && currentSectionId == 4 && currentDisplayLogo < totalLogos){
					event.preventDefault();
					
					showMeTheNextLogo(currentDisplayLogo);
				}

				// LEFT ARROW INTERACTION (KEYCODE = 37)
				if (event.keyCode == 37 && currentSectionId == 4 && currentDisplayLogo > 1){
					event.preventDefault();
					
					showMeThePreviousLogo(currentDisplayLogo);
				}
			});


			

		// INTERACTION BY HORIZONTAL SCROLLING
		$('#mbrtWrapper').on('mousewheel', function(event) {
			// CONTROL TRIGGERING
			// Change section only if the current section has been fully loaded
			if(canScroll && event.deltaX != 0 && currentSectionId == 4){
				canScroll = false;
		    	setTimeout(function(){
		    		canScroll = true;
		    	},transitionsTiming + pauseToLoadSection);

		    	// CHECK IF JS IS DETECTING MOUSEWHEEL
				console.log('Scroll started.');
		  		console.log(event.deltaX, event.deltaY, event.deltaFactor);

		  		// Detect if user is scrolling right
	    		if (event.deltaX > 0 && currentDisplayLogo < totalLogos){
	    			showMeTheNextLogo(currentDisplayLogo);
	    		} 
	    		// Detect if user is scrolling left
	    		else if (event.deltaX < 0 && currentDisplayLogo > 1){
	    			showMeThePreviousLogo(currentDisplayLogo);
	    		}


		    } else {
		    	// PREVENT OVERLAPING CHANGE SECTION ANIMATIONS
				// If there is an animation running to change the section, wait until it's over to change of section again
				event.preventDefault();

				// NOTICE YOU HAVE TO WAIT TO SCROLL AGAIN
				// console.log("You can't scroll yet, canScroll: " + canScroll);
		    }
	    });




	// HELPER FUNCTIONS
		// CHANGE POSITION OF PROJECT PHOTOS
			// PUT SELECTED PROJECT PHOTO ON THE LEFT EDGE, OUTSIDE THE VIEWPORT
			function sendToBack(project, projectBar){
				project.addClass('holdingBackPhoto');
				project.removeClass('previousPhoto');
				project.removeClass('currentPhoto');
			}

			// PUT SELECTED PROJECT PHOTO ON THE LEFT SIDE, INSIDE THE VIEWPORT
			function sendToPrevious(project, projectBar){
				project.addClass('previousPhoto');
				project.removeClass('currentPhoto');
				project.removeClass('holdingBackPhoto');

				// CHANGE BARS POSITION OF THE BOTTOM NAV TO THE CORRECT POSITION
				projectBar.addClass('previousBar');
				projectBar.removeClass('currentBar');
				projectBar.removeClass('nextBar');
			}

			// PUT SELECTED PROJECT PHOTO ON CENTER
			function sendToCurrent(project, projectBar){
				project.addClass('currentPhoto');
				project.removeClass('nextPhoto');
				project.removeClass('previousPhoto');

				// CHANGE BARS POSITION OF THE BOTTOM NAV TO THE CORRECT POSITION
				projectBar.addClass('currentBar');
				projectBar.removeClass('previousBar');
				projectBar.removeClass('nextBar');
			}

			// PUT SELECTED PROJECT PHOTO ON THE RIGHT EDGE, INSIDE THE VIEWPORT
			function sendToNext(project, projectBar){
				project.addClass('nextPhoto');
				project.removeClass('currentPhoto');
				project.removeClass('holdingFrontPhoto');

				// CHANGE BARS POSITION OF THE BOTTOM NAV TO THE CORRECT POSITION
				projectBar.addClass('nextBar');
				projectBar.removeClass('currentBar');
				projectBar.removeClass('previousBar');
			}

			// PUT SELECTED PROJECT PHOTO ON THE RIGHT SIDE, OUTSIDE THE VIEWPORT
			function sendToFront(project){
				project.addClass('holdingFrontPhoto');
				project.removeClass('nextPhoto');
				project.removeClass('currentPhoto');
			}

		// SET ATTRIBUTE VALUE
			// SET ID OF THE PROJECT TO BRING
			function setAttrIdToBring(element, idToBring){
				element.data("idtobring", idToBring);
			}

		// GO NEXT PROJECT, ONE BY ONE
		function showMeTheNextLogo(currentShowingLogoId){
			// CHECK IF IT'S MOVING FROM THE FIRST PROJECT
			if (currentShowingLogoId == 1) {
				// SHOW THE LEFT ARROW TO GO PREVIOUS PHOTOS
				$('#logosCarousel').find('.leftArrow').removeClass('firstArrow');
			};

			// DISPLACE 1 POSITION PROJECT PHOTOS
			// First move the previous photos to their new positions
				// The 'holding back photos' stay like that, only the 'previous photo' go backwards
				$('#logosCarousel').find('.previousPhoto').addClass('holdingBackPhoto');
				$('#logosCarousel').find('.previousPhoto').removeClass('previousPhoto');

			// Second move the current photo
				// Because you are moving forward, the current photo goes backwards, so put its right class
				$('#logosCarousel').find('.currentPhoto').addClass('previousPhoto');
				$('#logosCarousel').find('.currentPhoto').removeClass('currentPhoto');

			// Finally, move the next photos
				// We will only move the 'next photo' and the first 'holding front photo', so we will start moving first the 'next photo'
				$('#logosCarousel').find('.nextPhoto').addClass('currentPhoto');
				$('#logosCarousel').find('.nextPhoto').removeClass('nextPhoto');

				holdingFrontProjects = $('#logosCarousel').find('.holdingFrontPhoto');
				$(holdingFrontProjects[0]).addClass('nextPhoto');
				$(holdingFrontProjects[0]).removeClass('holdingFrontPhoto');


			// SET THE ATTRIBUTES OF THE ARROWS
			// First set the new attribute for each arrow, depending on the new project loaded, the previous photo id for left arrow and the next photo id for right arrow
			leftIdToBring = currentShowingLogoId;
			rightIdToBring = currentShowingLogoId + 2;

			// If the right id is greater than the total of projects, it means it will scroll down instead of showing the next photo
			if (rightIdToBring > totalLogos) {
				rightIdToBring = 'next';
			};

			$('#logosCarousel').find('.leftArrow a').data("idtobring", leftIdToBring);
			$('#logosCarousel').find('.rightArrow a').data("idtobring", rightIdToBring);


			// SET THE STYLE FOR THE BOTTOM NAV BARS
				// First move the 'current bar' to the 'previous bar' position
				$('#logosCarousel').find('.currentBar').addClass('previousBar');
				$('#logosCarousel').find('.currentBar').removeClass('currentBar');

				// Then, bring only the first 'next bar' to the 'current bar' position
				nextBars = $('#logosCarousel').find('.nextBar');
				$(nextBars[0]).addClass('currentBar');
				$(nextBars[0]).removeClass('nextBar');


			// THE LAST MOVE
				// Update the 'current loaded logo' var
				currentDisplayLogo = currentShowingLogoId + 1 ;
		}

		function showMeThePreviousLogo(currentShowingLogoId){

			// CHECK IF IT'S MOVING TO THE FIRST PROJECT
			if (currentShowingLogoId == 2) {
				// SHOW THE LEFT ARROW TO GO PREVIOUS PHOTOS
				$('#logosCarousel').find('.leftArrow').addClass('firstArrow');
			};

			// DISPLACE 1 POSITION PROJECT PHOTOS
			// First move the next photos to their new positions
				// The 'holding front photos' stay like that, only the 'next photo' go backwards
				$('#logosCarousel').find('.nextPhoto').addClass('holdingFrontPhoto');
				$('#logosCarousel').find('.nextPhoto').removeClass('nextPhoto');

			// Second move the current photo
				// Because you are moving backwards, the current photo goes frontwards, so put its right class
				$('#logosCarousel').find('.currentPhoto').addClass('nextPhoto');
				$('#logosCarousel').find('.currentPhoto').removeClass('currentPhoto');

			// Finally, move the previous photos
				// We will only move the 'previous photo' and the last 'holding back photo', so we will start moving first the 'previous photo'
				$('#logosCarousel').find('.previousPhoto').addClass('currentPhoto');
				$('#logosCarousel').find('.previousPhoto').removeClass('previousPhoto');

				holdingBackProjects = $('#logosCarousel').find('.holdingBackPhoto');
				$(holdingBackProjects[holdingBackProjects.length - 1]).addClass('previousPhoto');
				$(holdingBackProjects[holdingBackProjects.length - 1]).removeClass('holdingBackPhoto');


			// SET THE ATTRIBUTES OF THE ARROWS
			// First set the new attribute for each arrow, depending on the new project loaded, the previous photo id for left arrow and the next photo id for right arrow
			leftIdToBring = currentShowingLogoId - 2;
			rightIdToBring = currentShowingLogoId;

			$('#logosCarousel').find('.leftArrow a').data("idtobring", leftIdToBring);
			$('#logosCarousel').find('.rightArrow a').data("idtobring", rightIdToBring);


			// SET THE STYLE FOR THE BOTTOM NAV BARS
				// First move the 'current bar' to the 'next bar' position
				$('#logosCarousel').find('.currentBar').addClass('nextBar');
				$('#logosCarousel').find('.currentBar').removeClass('currentBar');

				// Then, bring only the last 'previous bar' to the 'current bar' position
				previousBars = $('#logosCarousel').find('.previousBar');
				$(previousBars[previousBars.length - 1]).addClass('currentBar');
				$(previousBars[previousBars.length - 1]).removeClass('previousBar');


			// THE LAST MOVE
				// Update the 'current loaded logo' var
				currentDisplayLogo = currentShowingLogoId - 1 ;
		}
});












