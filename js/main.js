jQuery(document).ready(function($) {

	// GLOBAL VARS
		// LOAD CURRENT SECTION
		var currentSectionName = window.location.search;
		// SCROLL LISTENER
		var canScroll;
		var transitionsTiming = 900;
		var pauseToLoadSection = 1000;
		var currentSectionId = 0;
		// INTRO ANIMATION
		var mainLogoDuration;


	// LOAD CURRENT SECTION BY URL
	currentSectionName = currentSectionName.replace('?section=', '');

	if (currentSectionName != ''){
		openSection(currentSectionName);
		console.log('Section name: ' + currentSectionName);
		console.log('URL value: ' + window.location.search);
	} else {
		openSection('index');
		console.log('Section name: Index');
	}

	function openSection(section){
		console.log('Open Section Triggered');

		if (section == 'index') {
			currentSectionId = 0;
			$('#indexWrapper').addClass('is-active');
			$('#welcomeWrapper').addClass('coming-up');
			$('#servicesWrapper').addClass('coming-up');
			$('#corporateIdentity').addClass('coming-up');
			$('#logosCarousel').addClass('coming-up');

		} else if (section == 'welcome') {
			currentSectionId = 1;
			$('#indexWrapper').addClass('passed-up');
			$('#welcomeWrapper').addClass('is-active');
			$('#servicesWrapper').addClass('coming-up');
			$('#corporateIdentity').addClass('coming-up');
			$('#logosCarousel').addClass('coming-up');
			
		} else if (section == 'services') {
			currentSectionId = 2;
			$('#indexWrapper').addClass('passed-up');
			$('#welcomeWrapper').addClass('passed-up');
			$('#servicesWrapper').addClass('is-active');
			$('#corporateIdentity').addClass('coming-up');
			$('#logosCarousel').addClass('coming-up');
			
		} else if (section == 'identity') {
			currentSectionId = 3;
			$('#indexWrapper').addClass('passed-up');
			$('#welcomeWrapper').addClass('passed-up');
			$('#servicesWrapper').addClass('passed-up');
			$('#corporateIdentity').addClass('is-active');
			$('#logosCarousel').addClass('coming-up');
			
		} else if (section == 'logos') {
			currentSectionId = 4;
			$('#indexWrapper').addClass('passed-up');
			$('#welcomeWrapper').addClass('passed-up');
			$('#servicesWrapper').addClass('passed-up');
			$('#corporateIdentity').addClass('passed-up');
			$('#logosCarousel').addClass('is-active');

		}
	}
	
	// SCROLL LISTENER

	$('#mbrtWrapper').on('mousewheel', function(event) {

		// CONTROL TRIGGERING
		// Change section only if the current section has been fully loaded
		if(canScroll && event.deltaY != 0){
			canScroll = false;
			console.log('Scroll started.');
	    	console.log(event.deltaX, event.deltaY, event.deltaFactor);
	    	setTimeout(function(){
	    		canScroll = true;
	    	},transitionsTiming + pauseToLoadSection);


    		// Detect if user is scrolling down
	    	if (event.deltaY < 0) {
	    		// CONDITIONAL TO KNOW WHAT SECTION IS
		    	switch (currentSectionId) {
		    		// From Index to Welcome Section
		    		case 0:
		    			currentSectionId = 1;
	    				navigateNextSection($('#indexWrapper'), $('#welcomeWrapper'));
	    				window.history.pushState("object or string", "section", "?section=welcome");
			    		break;

		    		 // From Welcome to Services Section
		    		 case 1:
		    		 	currentSectionId = 2;
		    		 	navigateNextSection($('#welcomeWrapper'), $('#servicesWrapper'));
		    		 	window.history.pushState("object or string", "section", "?section=services");
		    		 	break;
	    		 	case 2:
	    		 		currentSectionId = 3;
	    		 		navigateNextSection($('#servicesWrapper'), $('#corporateIdentity'));
	    		 		window.history.pushState("object or string", "section", "?section=identity");
    		 			break;

		 			case 3:
		 				currentSectionId = 4;
		 				navigateNextSection($('#corporateIdentity'), $('#logosCarousel'));
		 				window.history.pushState("object or string", "section", "?section=logos");
		 				break;
		    	}
	    	}
    		// Detect if user is scrolling up
    		else if ( event.deltaY > 0){
    			// CONDITIONAL TO KNOW WHAT SECTION IS
		    	switch (currentSectionId) {
		    		case 0:
	    				event.preventDefault();
	    				console.log("You can't scroll higher");
			    		break;

		    		case 1:
		    			currentSectionId = 0;
		    			navigatePrevSection($('#welcomeWrapper'), $('#indexWrapper'));
		    			window.history.pushState("object or string", "section", "?section=index");
		    			break;

		    		case 2:
		    			currentSectionId = 1;
		    			navigatePrevSection($('#servicesWrapper'), $('#welcomeWrapper'));
		    			window.history.pushState("object or string", "section", "?section=welcome");
		    			break;

	    			case 3:
	    				currentSectionId = 2;
	    				navigatePrevSection($('#corporateIdentity'), $('#servicesWrapper'));
	    				window.history.pushState("object or string", "section", "?section=services");
	    				break;

    				case 4:
    					currentSectionId = 3;
    					navigatePrevSection($('#logosCarousel'), $('#corporateIdentity'));
    					window.history.pushState("object or string", "section", "?section=identity");
    					break;
		    	}
    		}
	    		
		} else{
			// PREVENT OVERLAPING CHANGE SECTION ANIMATIONS
			// If there is an animation running to change the section, wait until it's over to change of section again
			event.preventDefault();
			console.log("You can't scroll yet, canScroll: " + canScroll);
		}
	});

	// INTRO ANIMATION
	canScroll = false;
	mainLogoDuration = 0;
	$('#mainLogo').append('<img id="mbrtGIF" src="img/brand/main_logo.gif?' + Math.random() + '" alt="Mandelbrot Brands Studio">');
	setTimeout(function(){
		canScroll = true;
	}, mainLogoDuration);



	// HELPER FUNCTIONS
		// CHANGE TO PREVIOUS OR NEXT SECTION
		function navigateNextSection(fromThis, toThis){
			fromThis.addClass('passed-up');
    		fromThis.removeClass('is-active');

    		toThis.addClass('is-active');
    		toThis.removeClass('coming-up');
		}

		function navigatePrevSection(fromThis, toThis){
			fromThis.addClass('coming-up');
    		fromThis.removeClass('is-active');

    		toThis.addClass('is-active');
    		toThis.removeClass('passed-up');
		}

});