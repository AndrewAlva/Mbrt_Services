jQuery(document).ready(function($) {

	// CAROUSEL INTERACTION

		// INTERACTION BY ARROWS CLICK (PENDING KEYBOARD INTERACTION)
			// Next Project Interaction | Arrows Nav Click
			$('#logosCarousel').on('click', '.rightArrow a', function(event) {
				event.preventDefault();

				// EVALUATE WHICH PROJECT WOULD BRING NEXT BY ID
				switch ($(this).data("idtobring")){
					case 2:

						// SHOW THE LEFT ARROW TO GO PREVIOUS PHOTOS
						$('#logosCarousel').find('.leftArrow').removeClass('firstArrow');

						// SET THE NEW ID OF THE PROJECT PHOTO THAT ARROWS WILL BRING
						// Right Arrow
						setAttrIdToBring($('#logosCarousel').find('.rightArrow a'), 3);
						// Left Arrow
						setAttrIdToBring($('#logosCarousel').find('.leftArrow a'), 1);

						sendToPrevious($('#logos-1'), $('#logosBar-1'));
						sendToCurrent($('#logos-2'), $('#logosBar-2'));
						sendToNext($('#logos-3'), $('#logosBar-3'));
						sendToFront($('#logos-4'));
						sendToFront($('#logos-5'));
						break;
					case 3:

						setAttrIdToBring($('#logosCarousel').find('.rightArrow a'), 4);
						setAttrIdToBring($('#logosCarousel').find('.leftArrow a'), 2);

						sendToBack($('#logos-1'));
						sendToPrevious($('#logos-2'), $('#logosBar-2'));
						sendToCurrent($('#logos-3'), $('#logosBar-3'));
						sendToNext($('#logos-4'), $('#logosBar-4'));
						sendToFront($('#logos-5'));
						break;
					case 4:

						setAttrIdToBring($('#logosCarousel').find('.rightArrow a'), 5);
						setAttrIdToBring($('#logosCarousel').find('.leftArrow a'), 3);

						sendToBack($('#logos-1'));
						sendToBack($('#logos-2'));
						sendToPrevious($('#logos-3'), $('#logosBar-3'));
						sendToCurrent($('#logos-4'), $('#logosBar-4'));
						sendToNext($('#logos-5'), $('#logosBar-5'));
						break;
					case 5:

						// SET THE RIGHT ARROW ATTRIBUTE TO TRIGGER THE SCROLL AT NEXT SECTION
						setAttrIdToBring($('#logosCarousel').find('.rightArrow a'), 'next');
						setAttrIdToBring($('#logosCarousel').find('.leftArrow a'), 4);

						sendToBack($('#logos-1'));
						sendToBack($('#logos-2'));
						sendToBack($('#logos-3'));
						sendToPrevious($('#logos-4'), $('#logosBar-4'));
						sendToCurrent($('#logos-5'), $('#logosBar-5'));
						break;

					case 'next':
						// HERE WE SCROLL TO THE NEXT SECTION
						console.log('Here we go to next section');
						break;
				}
			});

			//  Previous Project Interaction | Arrows Nav Click
			$('#logosCarousel').on('click', '.leftArrow a', function(event) {
				event.preventDefault();

				// EVALUATE WHICH PROJECT WOULD BRING NEXT BY ID
				switch ($(this).data("idtobring")){
					case 1:

						// SHOW THE LEFT ARROW TO GO PREVIOUS PHOTOS
						$('#logosCarousel').find('.leftArrow').addClass('firstArrow');

						// SET THE NEW ID OF THE PROJECT PHOTO THAT ARROWS WILL BRING
						// Left Arrow
						setAttrIdToBring($('#logosCarousel').find('.leftArrow a'), 0);
						// Right Arrow
						setAttrIdToBring($('#logosCarousel').find('.rightArrow a'), 2);

						sendToCurrent($('#logos-1'),$('#logosBar-1'));
						sendToNext($('#logos-2'),$('#logosBar-2'));
						sendToFront($('#logos-3'));
						sendToFront($('#logos-4'));
						sendToFront($('#logos-5'));
						break;
					case 2:

						setAttrIdToBring($('#logosCarousel').find('.leftArrow a'), 1);
						setAttrIdToBring($('#logosCarousel').find('.rightArrow a'), 3);

						sendToPrevious($('#logos-1'),$('#logosBar-1'));
						sendToCurrent($('#logos-2'),$('#logosBar-2'));
						sendToNext($('#logos-3'),$('#logosBar-3'));
						sendToFront($('#logos-4'));
						sendToFront($('#logos-5'));
						break;
					case 3:

						setAttrIdToBring($('#logosCarousel').find('.leftArrow a'), 2);
						setAttrIdToBring($('#logosCarousel').find('.rightArrow a'), 4);

						sendToBack($('#logos-1'));
						sendToPrevious($('#logos-2'),$('#logosBar-2'));
						sendToCurrent($('#logos-3'),$('#logosBar-3'));
						sendToNext($('#logos-4'),$('#logosBar-4'));
						sendToFront($('#logos-5'));
						break;
					case 4:

						// SET THE RIGHT ARROW ATTRIBUTE TO TRIGGER THE SCROLL AT NEXT SECTION
						setAttrIdToBring($('#logosCarousel').find('.leftArrow a'), 3);
						setAttrIdToBring($('#logosCarousel').find('.rightArrow a'), 5);

						sendToBack($('#logos-1'));
						sendToBack($('#logos-2'));
						sendToPrevious($('#logos-3'), $('#logosBar-3'));
						sendToCurrent($('#logos-4'), $('#logosBar-4'));
						sendToNext($('#logos-5'), $('#logosBar-5'));
						break;
				}
			});


		// INTERACTION BY BOTTOM NAV BARS
		var currentLoadedLogo = 1;
		var totalLogos = 5;

		$('#logosCarousel').on('click', '.singleBar', function(event) {
			event.preventDefault();
			projectToLoad = $(this).data("loadprojectid");
			projectsToSkip = projectToLoad - currentLoadedLogo;

			// CHECK IF USER IS TRYING TO LOAD THE CURRENT PROJECT
			if (projectToLoad == currentLoadedLogo){
				console.log('Seriously?, you are trying to load the current project');
			} 

			// CHECK IF USER IS LOADING NEXT PROJECTS
			else if(projectToLoad > currentLoadedLogo){
				console.log('Ready to go to next project');

				// DISPLACEMENT OF PROJECT PHOTOS
				currentProjectPhoto = '#logos-' + currentLoadedLogo;

			} 

			// CHECK IF USER IS LOADING PREVIOUS PROJECTS
			else {
				console.log('Ready to go to previous project');
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
});












