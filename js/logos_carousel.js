jQuery(document).ready(function($) {

	// SET GIFS IN PLACE
	$('#logos-1').prepend('<img id="mbrtGIF" src="img/logos/Lucky_Logo.gif?' + Math.random() + '" alt="Lucky Ideas Logo">');
	$('#logos-3').prepend('<img id="mbrtGIF" src="img/logos/Das_Lab_Logo.gif?' + Math.random() + '" alt="Das Lab Logo">');
	$('#logos-5').prepend('<img id="mbrtGIF" src="img/logos/NorthWay_Logo.gif?' + Math.random() + '" alt="Northway Logo">');

	// CAROUSEL INTERACTION
	// Next Project Interaction
	$('#logosCarousel').on('click', '.rightArrow a', function(event) {
		event.preventDefault();

		// EVALUATE WHICH PROJECT WOULD BRING NEXT BY ID
		switch ($(this).data("idtobring")){
			case 2:

				// SHOW THE LEFT ARROW TO GO PREVIOUS PHOTOS
				$('#logosCarousel').find('.leftArrow').removeClass('firstArrow');

				// SET THE NEW ID OF THE PROJECT PHOTO THAT ARROWS WILL BRING
				// Right Arrow
				setAttrIdToBring($(this), 3);
				// Left Arrow
				setAttrIdToBring($('#logosCarousel').find('.leftArrow a'), 1);

				sendToPrevious($('#logos-1'));
				sendToCurrent($('#logos-2'));
				sendToNext($('#logos-3'));
				sendToFront($('#logos-4'));
				sendToFront($('#logos-5'));
				break;
			case 3:

				setAttrIdToBring($(this), 4);
				setAttrIdToBring($('#logosCarousel').find('.leftArrow a'), 2);

				sendToBack($('#logos-1'));
				sendToPrevious($('#logos-2'));
				sendToCurrent($('#logos-3'));
				sendToNext($('#logos-4'));
				sendToFront($('#logos-5'));
				break;
			case 4:

				setAttrIdToBring($(this), 5);
				setAttrIdToBring($('#logosCarousel').find('.leftArrow a'), 3);

				sendToBack($('#logos-1'));
				sendToBack($('#logos-2'));
				sendToPrevious($('#logos-3'));
				sendToCurrent($('#logos-4'));
				sendToNext($('#logos-5'));
				break;
			case 5:

				// SET THE RIGHT ARROW ATTRIBUTE TO TRIGGER THE SCROLL AT NEXT SECTION
				setAttrIdToBring($(this), 'next');
				setAttrIdToBring($('#logosCarousel').find('.leftArrow a'), 4);

				sendToBack($('#logos-1'));
				sendToBack($('#logos-2'));
				sendToBack($('#logos-3'));
				sendToPrevious($('#logos-4'));
				sendToCurrent($('#logos-5'));
				break;

			case 'next':
				// HERE WE SCROLL TO THE NEXT SECTION
				console.log('Here we go to next section');
				break;
		}
	});


	$('#logosCarousel').on('click', '.leftArrow a', function(event) {
		event.preventDefault();

		// EVALUATE WHICH PROJECT WOULD BRING NEXT BY ID
		switch ($(this).data("idtobring")){
			case 1:

				// SHOW THE LEFT ARROW TO GO PREVIOUS PHOTOS
				$('#logosCarousel').find('.leftArrow').addClass('firstArrow');

				// SET THE NEW ID OF THE PROJECT PHOTO THAT ARROWS WILL BRING
				// Right Arrow
				setAttrIdToBring($(this), 0);
				// Left Arrow
				setAttrIdToBring($('#logosCarousel').find('.rightArrow a'), 2);

				sendToCurrent($('#logos-1'));
				sendToNext($('#logos-2'));
				sendToFront($('#logos-3'));
				sendToFront($('#logos-4'));
				sendToFront($('#logos-5'));
				break;
			case 2:

				setAttrIdToBring($(this), 1);
				setAttrIdToBring($('#logosCarousel').find('.rightArrow a'), 3);

				sendToPrevious($('#logos-1'));
				sendToCurrent($('#logos-2'));
				sendToNext($('#logos-3'));
				sendToFront($('#logos-4'));
				sendToFront($('#logos-5'));
				break;
			case 3:

				setAttrIdToBring($(this), 2);
				setAttrIdToBring($('#logosCarousel').find('.rightArrow a'), 4);

				sendToBack($('#logos-1'));
				sendToPrevious($('#logos-2'));
				sendToCurrent($('#logos-3'));
				sendToNext($('#logos-4'));
				sendToFront($('#logos-5'));
				break;
			case 4:

				// SET THE RIGHT ARROW ATTRIBUTE TO TRIGGER THE SCROLL AT NEXT SECTION
				setAttrIdToBring($(this), 3);
				setAttrIdToBring($('#logosCarousel').find('.rightArrow a'), 5);

				sendToBack($('#logos-1'));
				sendToBack($('#logos-2'));
				sendToPrevious($('#logos-3'));
				sendToCurrent($('#logos-4'));
				sendToNext($('#logos-5'));
				break;
		}
	});


	// HELPER FUNCTIONS
		// CHANGE POSITION OF PROJECT PHOTOS
			// PUT SELECTED PROJECT PHOTO ON THE LEFT EDGE, OUTSIDE THE VIEWPORT
			function sendToBack(project){
				project.addClass('holdingBackPhoto');
				project.removeClass('previousPhoto');
			}

			// PUT SELECTED PROJECT PHOTO ON THE LEFT SIDE, INSIDE THE VIEWPORT
			function sendToPrevious(project){
				project.addClass('previousPhoto');
				project.removeClass('currentPhoto');
				project.removeClass('holdingBackPhoto');
			}

			// PUT SELECTED PROJECT PHOTO ON CENTER
			function sendToCurrent(project){
				project.addClass('currentPhoto');
				project.removeClass('nextPhoto');
				project.removeClass('previousPhoto');
			}

			// PUT SELECTED PROJECT PHOTO ON THE RIGHT EDGE, INSIDE THE VIEWPORT
			function sendToNext(project){
				project.addClass('nextPhoto');
				project.removeClass('currentPhoto');
				project.removeClass('holdingFrontPhoto');
			}

			// PUT SELECTED PROJECT PHOTO ON THE RIGHT SIDE, OUTSIDE THE VIEWPORT
			function sendToFront(project){
				project.addClass('holdingFrontPhoto');
				project.removeClass('nextPhoto');
			}

		// SET ATTRIBUTE VALUE
			// SET ID OF THE PROJECT TO BRING
			function setAttrIdToBring(element, idToBring){
				element.data("idtobring", idToBring);
			}
});












