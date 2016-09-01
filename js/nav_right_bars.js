


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

	function moveForwardSections(idSectionToGo){
		console.log('moveForwardSections function triggered');

		sectionsToSkip = Math.abs(idSectionToGo - currentSectionId);
		console.log('Sections to Skip: ' + sectionsToSkip);


		for (var i = 0; i < sectionsToSkip; i++) {
			
			shiftForwardNavBars();
			setTimeout(function(){
				$('.is-active').addClass('passed-up');
				$('.is-active').removeClass('is-active');

				nextSectionsArray = $('.coming-up');

				$(nextSectionsArray[0]).addClass('is-active');
				$(nextSectionsArray[0]).removeClass('coming-up');

				console.log('Index count: ' + i);

			}, delayBetweenTransitionsOfRightNav * i);

			if (i == (sectionsToSkip - 1) ){
				setTimeout(function(){
					console.log('If conditional for setCurrentSectionNameById working');
					setCurrentSectionNameById();
				}, delayBetweenTransitionsOfRightNav * i);
			}
			
			currentSectionId = currentSectionId + 1;
			
		};
	}

	function moveBackwardSections(idSectionToGo){
		console.log('moveForwardSections function triggered');

		sectionsToSkip = Math.abs(idSectionToGo - currentSectionId);
		console.log('Sections to Skip: ' + sectionsToSkip);


		for (var i = 0; i < sectionsToSkip; i++) {
			
			shiftBackwardNavBars();
			setTimeout(function(){
				$('.is-active').addClass('coming-up');
				$('.is-active').removeClass('is-active');

				backSectionsArray = $('.passed-up').get().reverse();

				$(backSectionsArray[0]).addClass('is-active');
				$(backSectionsArray[0]).removeClass('passed-up');

				console.log('Index count: ' + i);

			}, delayBetweenTransitionsOfRightNav * i);

			if (i == (sectionsToSkip - 1) ){
				setTimeout(function(){
					console.log('If conditional for setCurrentSectionNameById working');
					setCurrentSectionNameById();
				}, delayBetweenTransitionsOfRightNav * i);
			}
			
			currentSectionId = currentSectionId - 1;
			
		};
	}

	function shiftForwardNavBars(){
		$('.currentNavBar').addClass('prevNavBar');
		$('.currentNavBar').addClass('deactiveNavBar');
		$('.currentNavBar').removeClass('activeNavBar');
		$('.currentNavBar').removeClass('currentNavBar');
		
		nextNavBarsArray = $('.nextNavBar');
		
		$(nextNavBarsArray[0]).addClass('currentNavBar');
		$(nextNavBarsArray[0]).addClass('activeNavBar');
		$(nextNavBarsArray[0]).removeClass('deactiveNavBar');
		$(nextNavBarsArray[0]).removeClass('nextNavBar');
	}

	function shiftBackwardNavBars(){

		$('.currentNavBar').addClass('nextNavBar');
		$('.currentNavBar').addClass('deactiveNavBar');
		$('.currentNavBar').removeClass('activeNavBar');
		$('.currentNavBar').removeClass('currentNavBar');
		
		backNavBarsArray = $('.prevNavBar').get().reverse();
		
		$(backNavBarsArray[0]).addClass('currentNavBar');
		$(backNavBarsArray[0]).addClass('activeNavBar');
		$(backNavBarsArray[0]).removeClass('deactiveNavBar');
		$(backNavBarsArray[0]).removeClass('prevNavBar');
	}


	function setCurrentSectionNameById(){
		setTimeout(function(){
			setCurrentSectionId = $('.is-active').attr('id');
			setCurrentSectionName = setCurrentSectionId.replace('Wrapper', '');
			setCurrentSectionName = setCurrentSectionName.replace('Cover', '');
			setCurrentSectionName = setCurrentSectionName.replace('Carousel', '');
			setCurrentSectionName = setCurrentSectionName.toLowerCase();
			initURL = "?";
			setCurrentSectionName = initURL.concat(setCurrentSectionName);

			console.log('Name to put on URL: ' + setCurrentSectionName);
			window.history.pushState("object or string", "section", setCurrentSectionName);
		}, transitionsTiming);
	}



