


	// THIS LISTENER WILL BE WORKING ON '.NAV BAR' ELEMENTS
	$('#rightBarsNav').on('click', '.navBar', function(event) {
		event.preventDefault();
		delayBetweenSections();

		skipToProjectId = $(this).data('sectiontogo');
		console.log('Current Section Id: ' + currentSectionId);
		console.log('Skip to this section id: ' + skipToProjectId);

		if (skipToProjectId > currentSectionId) {
			moveForwardSections(skipToProjectId);

		} else if (skipToProjectId < currentSectionId) {
			moveBackwardSections(skipToProjectId);

		} else {
			console.log('Again!? You are trying to load the current section');
		};
	});




	// HELPER FUNCTIONS
	// Delay between the sections transition triggered by the right navigator bars
	var delayBetweenTransitionsOfRightNav = 50;

	// Function to move to any next section
	function moveForwardSections(idSectionToGo){

		// Define the amount of sections to skip. It will be used in the for loop
		sectionsToSkip = Math.abs(idSectionToGo - currentSectionId);

		for (var i = 0; i < sectionsToSkip; i++) {
			
			// Update the right nav bars style
			shiftForwardNavBars();

			// Set the delay to change between sections until reach the section user want to go
			setTimeout(function(){
				// Set the new position of the current section
				$('.is-active').addClass('passed-up');
				$('.is-active').removeClass('is-active');

				// Select all the next sections, but update only the first one to the current position
				nextSectionsArray = $('.coming-up');
				$(nextSectionsArray[0]).addClass('is-active');
				$(nextSectionsArray[0]).removeClass('coming-up');

			}, delayBetweenTransitionsOfRightNav * i);

			// Push the new URL section name when the for loop reaches the last section to load, set delay to get the section name after current section has started to load the last section
			if (i == (sectionsToSkip - 1) ){
				setTimeout(function(){
					setCurrentSectionNameById();

				}, delayBetweenTransitionsOfRightNav * i);
			}
			
			// Update the current section id on each repetition of the for loop
			currentSectionId = currentSectionId + 1;
			
		};
	}

	// Function to move to any previous section
	function moveBackwardSections(idSectionToGo){

		// Define the amount of sections to skip. It will be used in the for loop
		sectionsToSkip = Math.abs(idSectionToGo - currentSectionId);

		for (var i = 0; i < sectionsToSkip; i++) {
			
			if (idSectionToGo > 0) {
				// Update the right nav bars style
				shiftBackwardNavBars();
			};

			// Set the delay to change between sections until reach the section user want to go
			setTimeout(function(){
				// Set the new position of the current section
				$('.is-active').addClass('coming-up');
				$('.is-active').removeClass('is-active');

				// Select all the previous sections and sort them in reverse, to only update the closest to the current position
				backSectionsArray = $('.passed-up').get().reverse();
				$(backSectionsArray[0]).addClass('is-active');
				$(backSectionsArray[0]).removeClass('passed-up');

			}, delayBetweenTransitionsOfRightNav * i);

			// Push the new URL section name when the for loop reaches the last section to load, set delay to get the section name after current section has started to load the last section
			if (i == (sectionsToSkip - 1) ){
				setTimeout(function(){
					setCurrentSectionNameById();

				}, delayBetweenTransitionsOfRightNav * i);
			}
			
			// Update the current section id on each repetition of the for loop
			currentSectionId = currentSectionId - 1;
			
		};
	}

	// Function to deactive current nav bar style and active the new next bar
	function shiftForwardNavBars(){
		// Deactive the current nav bar and put it the previous nav bar class 
		$('.currentNavBar').addClass('prevNavBar');
		$('.currentNavBar').addClass('deactiveNavBar');
		$('.currentNavBar').removeClass('activeNavBar');
		$('.currentNavBar').removeClass('currentNavBar');
		
		// Select all the next bars
		nextNavBarsArray = $('.nextNavBar');
		
		// Update only the first next nav bar to the current position
		$(nextNavBarsArray[0]).addClass('currentNavBar');
		$(nextNavBarsArray[0]).addClass('activeNavBar');
		$(nextNavBarsArray[0]).removeClass('deactiveNavBar');
		$(nextNavBarsArray[0]).removeClass('nextNavBar');
	}

	// Function to deactive current nav bar style and active the new previous bar
	function shiftBackwardNavBars(){

		// Deactive the current nav bar and put it the next nav bar class
		$('.currentNavBar').addClass('nextNavBar');
		$('.currentNavBar').addClass('deactiveNavBar');
		$('.currentNavBar').removeClass('activeNavBar');
		$('.currentNavBar').removeClass('currentNavBar');
		
		// Select all the previous nav bars and sort the array backwards, so the [0] element is the closest to the current nav bar
		backNavBarsArray = $('.prevNavBar').get().reverse();
		
		// Update only the closest previous nav bar to the current position
		$(backNavBarsArray[0]).addClass('currentNavBar');
		$(backNavBarsArray[0]).addClass('activeNavBar');
		$(backNavBarsArray[0]).removeClass('deactiveNavBar');
		$(backNavBarsArray[0]).removeClass('prevNavBar');
	}

	// Push the new section to URL by the id of the section
	function setCurrentSectionNameById(){

		// Set a delay to do it after the new current section has been loaded
		setTimeout(function(){
			// Get the current section id name
			setCurrentSectionId = $('.is-active').attr('id');

			// Clean the current section name, erase the words 'section-' to get the ID number, then, convert the ID to the correct name
			setCurrentSectionName = setCurrentSectionId.replace('section-', '');
			switch (setCurrentSectionName){
				case '0':
					setCurrentSectionName = 'index';
					break;
				case '1':
					setCurrentSectionName = 'welcome';
					break;
				case '2':
					setCurrentSectionName = 'services';
					break;
				case '3':
					setCurrentSectionName = 'branding';
					break;
				case '4':
					setCurrentSectionName = 'logos';
					break;
				case '5':
					setCurrentSectionName = 'stationery';
					break;
				case '6':
					setCurrentSectionName = 'communication';
					break;
				case '7':
					setCurrentSectionName = 'packaging';
					break;
				case '8':
					setCurrentSectionName = 'uniforms';
					break;
				case '9':
					setCurrentSectionName = 'pos';
					break;
				case '10':
					setCurrentSectionName = 'interiorism';
					break;
				case '11':
					setCurrentSectionName = 'advertising';
					break;
				case '12':
					setCurrentSectionName = 'web';
					break;
				case '13':
					setCurrentSectionName = 'lucky';
					break;
				case '14':
					setCurrentSectionName = 'camila';
					break;
				case '15':
					setCurrentSectionName = 'contact';
					break;

			}

			// Set the full name with '?' for the query
			initURL = "?";
			setCurrentSectionName = initURL.concat(setCurrentSectionName);

			// Finally update the URL
			window.history.pushState("object or string", "section", setCurrentSectionName);
		}, transitionsTiming);
	}

	function activeNextNavBar(){
		// First deactive 'current nav bar'
		$('.currentNavBar').addClass('deactiveNavBar');
		$('.currentNavBar').addClass('prevNavBar');
		$('.currentNavBar').removeClass('activeNavBar');
		$('.currentNavBar').removeClass('currentNavBar');

		// Then update the first 'next nav bar' to the current position
		nextNavBarsArray = $('.nextNavBar');
		$(nextNavBarsArray[0]).addClass('activeNavBar');
		$(nextNavBarsArray[0]).addClass('currentNavBar');
		$(nextNavBarsArray[0]).removeClass('deactiveNavBar');
		$(nextNavBarsArray[0]).removeClass('nextNavBar');
	}

	function activePreviousNavBar(){
		// First deactive 'current nav bar'
		$('.currentNavBar').addClass('deactiveNavBar');
		$('.currentNavBar').addClass('nextNavBar');
		$('.currentNavBar').removeClass('activeNavBar');
		$('.currentNavBar').removeClass('currentNavBar');

		// Then update the closest 'prev nav bar' to the current position
		// Reverse the order of the array element so the [0] element would be the last one, the closest to the current position
		prevNavBarsArray = $('.prevNavBar').get().reverse();
		$(prevNavBarsArray[0]).addClass('activeNavBar');
		$(prevNavBarsArray[0]).addClass('currentNavBar');
		$(prevNavBarsArray[0]).removeClass('deactiveNavBar');
		$(prevNavBarsArray[0]).removeClass('prevNavBar');
	}

	function resetNavBars(){
		$('.navBar').removeClass('prevNavBar');
		$('.navBar').removeClass('currentNavBar');
		$('.navBar').removeClass('nextNavBar');
		$('.navBar').removeClass('activeNavBar');
		$('.navBar').removeClass('deactiveNavBar');
	}



