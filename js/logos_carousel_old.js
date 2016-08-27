// Hello there! This is the backup of the carousel functionality
// using switch(){case...}; at the arrow navigators. It is very
// useful played alone but when it doesn't work to link it with
// other navigators triggers, for example, a carousel that works
// with the keyboard, the mousewheel, arrow navigators on the UI
// and an extra navigator on the UI too.

// So, this is only a backup, soon I will upload another one,
// completely scalable and integrable with other nav triggers.

// CAROUSEL INTERACTION

	// GLOBAL VARS
	var totalLogos = 5;
	var currentDisplayLogo = 1;

	// INTERACTION BY ARROWS CLICK (PENDING KEYBOARD INTERACTION)
		// Next Project Interaction | Arrows Nav Click
		$('#logosCarousel').on('click', '.rightArrow a', function(event) {
			event.preventDefault();

			// EVALUATE WHICH PROJECT WOULD BRING NEXT BY ID
			switch ($(this).data("idtobring")){
				// IN CASE USER GO FROM PROJECT 1 TO 2
				case 2:

					// SET THE NEW 'CURRENT DISPLAYING LOGO' JS GLOBAL VARIABLE
					currentDisplayLogo = 2;

					// SHOW THE LEFT ARROW TO GO PREVIOUS PHOTOS
					$('#logosCarousel').find('.leftArrow').removeClass('firstArrow');

					// SET THE NEW POSITION OF EACH PROJECT PHOTO
					sendToPrevious($('#logos-1'), $('#logosBar-1'));
					sendToCurrent($('#logos-2'), $('#logosBar-2'));
					sendToNext($('#logos-3'), $('#logosBar-3'));
					sendToFront($('#logos-4'));
					sendToFront($('#logos-5'));

					// SET THE NEW ID OF THE PROJECT PHOTO THAT ARROWS WILL BRING
					// Right Arrow
					setAttrIdToBring($('#logosCarousel').find('.rightArrow a'), 3);
					// Left Arrow
					setAttrIdToBring($('#logosCarousel').find('.leftArrow a'), 1);

					break;

				// IN CASE USER GO FROM PROJECT 2 TO 3
				case 3:

					currentDisplayLogo = 3;

					sendToBack($('#logos-1'));
					sendToPrevious($('#logos-2'), $('#logosBar-2'));
					sendToCurrent($('#logos-3'), $('#logosBar-3'));
					sendToNext($('#logos-4'), $('#logosBar-4'));
					sendToFront($('#logos-5'));

					setAttrIdToBring($('#logosCarousel').find('.rightArrow a'), 4);
					setAttrIdToBring($('#logosCarousel').find('.leftArrow a'), 2);
					break;

				// IN CASE USER GO FROM PROJECT 3 TO 4
				case 4:

					currentDisplayLogo = 4;

					sendToBack($('#logos-1'));
					sendToBack($('#logos-2'));
					sendToPrevious($('#logos-3'), $('#logosBar-3'));
					sendToCurrent($('#logos-4'), $('#logosBar-4'));
					sendToNext($('#logos-5'), $('#logosBar-5'));

					setAttrIdToBring($('#logosCarousel').find('.rightArrow a'), 5);
					setAttrIdToBring($('#logosCarousel').find('.leftArrow a'), 3);
					break;

				// IN CASE USER GO FROM PROJECT 4 TO 5
				case 5:

					currentDisplayLogo = 5;

					sendToBack($('#logos-1'));
					sendToBack($('#logos-2'));
					sendToBack($('#logos-3'));
					sendToPrevious($('#logos-4'), $('#logosBar-4'));
					sendToCurrent($('#logos-5'), $('#logosBar-5'));

					// SET THE RIGHT ARROW ATTRIBUTE TO TRIGGER THE SCROLL AT NEXT SECTION
					setAttrIdToBring($('#logosCarousel').find('.rightArrow a'), 'next');
					setAttrIdToBring($('#logosCarousel').find('.leftArrow a'), 4);
					break;

				// IN CASE USER IS AT THE FINAL PROJECT AND TRIES TO GO NEXT PROJECT, INSTEAD WE SEND THEM BELOW TO NEXT SECTION
				case 'next':
					// HERE WE SCROLL TO THE NEXT SECTION
					console.log('Here we go to next section');
					break;
			}

			showMeTheNextLogo(currentDisplayLogo);
		});

		//  Previous Project Interaction | Arrows Nav Click
		$('#logosCarousel').on('click', '.leftArrow a', function(event) {
			event.preventDefault();

			// EVALUATE WHICH PROJECT WOULD BRING NEXT BY ID
			switch ($(this).data("idtobring")){
				// IN CASE USER GO FROM PROJECT 2 TO 1
				case 1:

					// SET THE NEW 'CURRENT DISPLAYING LOGO' JS GLOBAL VAR
					currentDisplayLogo = 1;

					// SHOW THE LEFT ARROW TO GO PREVIOUS PHOTOS
					$('#logosCarousel').find('.leftArrow').addClass('firstArrow');

					// SET THE NEW POSITION OF EACH PROJECT PHOTO
					sendToCurrent($('#logos-1'),$('#logosBar-1'));
					sendToNext($('#logos-2'),$('#logosBar-2'));
					sendToFront($('#logos-3'));
					sendToFront($('#logos-4'));
					sendToFront($('#logos-5'));

					// SET THE NEW ID OF THE PROJECT PHOTO THAT ARROWS WILL BRING
					// Left Arrow
					setAttrIdToBring($('#logosCarousel').find('.leftArrow a'), 0);
					// Right Arrow
					setAttrIdToBring($('#logosCarousel').find('.rightArrow a'), 2);
					break;

				// IN CASE USER GO FROM PROJECT 3 TO 2
				case 2:

					currentDisplayLogo = 2;

					sendToPrevious($('#logos-1'),$('#logosBar-1'));
					sendToCurrent($('#logos-2'),$('#logosBar-2'));
					sendToNext($('#logos-3'),$('#logosBar-3'));
					sendToFront($('#logos-4'));
					sendToFront($('#logos-5'));

					setAttrIdToBring($('#logosCarousel').find('.leftArrow a'), 1);
					setAttrIdToBring($('#logosCarousel').find('.rightArrow a'), 3);
					break;

				// IN CASE USER GO FROM PROJECT 4 TO 3
				case 3:

					currentDisplayLogo = 3;

					sendToBack($('#logos-1'));
					sendToPrevious($('#logos-2'),$('#logosBar-2'));
					sendToCurrent($('#logos-3'),$('#logosBar-3'));
					sendToNext($('#logos-4'),$('#logosBar-4'));
					sendToFront($('#logos-5'));

					setAttrIdToBring($('#logosCarousel').find('.leftArrow a'), 2);
					setAttrIdToBring($('#logosCarousel').find('.rightArrow a'), 4);
					break;

				// IN CASE USER GO FROM PROJECT 5 TO 4
				case 4:

					currentDisplayLogo = 4;

					sendToBack($('#logos-1'));
					sendToBack($('#logos-2'));
					sendToPrevious($('#logos-3'), $('#logosBar-3'));
					sendToCurrent($('#logos-4'), $('#logosBar-4'));
					sendToNext($('#logos-5'), $('#logosBar-5'));

					// SET THE RIGHT ARROW ATTRIBUTE TO TRIGGER THE SCROLL AT NEXT SECTION
					setAttrIdToBring($('#logosCarousel').find('.leftArrow a'), 3);
					setAttrIdToBring($('#logosCarousel').find('.rightArrow a'), 5);
					break;
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