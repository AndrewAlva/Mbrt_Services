// VARS SCROLL LISTENER
var canScroll = true;
var transitionsTiming = 900;
var pauseToLoadSection = 1000;
var currentSectionId = 0;


	// SCROLL LISTENER
	$('#mbrtWrapper').on('mousewheel', function(event) {

		// CONTROL TRIGGERING
		// Change section only if the current section has been fully loaded
		if(canScroll && event.deltaY != 0){
			canScroll = false;
	    	setTimeout(function(){
	    		canScroll = true;
	    	},transitionsTiming + pauseToLoadSection);

	    	// CHECK IF JS IS DETECTING MOUSEWHEEL
			console.log('Scroll started.');
	  		console.log(event.deltaX, event.deltaY, event.deltaFactor);


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
	    		 		navigateNextSection($('#servicesWrapper'), $('#brandingCover'));
	    		 		window.history.pushState("object or string", "section", "?section=branding");
			 			break;

		 			case 3:
		 				currentSectionId = 4;
		 				navigateNextSection($('#brandingCover'), $('#logosCarousel'));
		 				window.history.pushState("object or string", "section", "?section=logos");
		 				break;

		 			case 4:
		 				currentSectionId = 5;
		 				navigateNextSection($('#logosCarousel'), $('#stationeryCarousel'));
		 				window.history.pushState("object or string", "section", "?section=stationery");
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
	    				navigatePrevSection($('#brandingCover'), $('#servicesWrapper'));
	    				window.history.pushState("object or string", "section", "?section=services");
	    				break;

					case 4:
						currentSectionId = 3;
						navigatePrevSection($('#logosCarousel'), $('#brandingCover'));
						window.history.pushState("object or string", "section", "?section=branding");
						break;

					case 5:
						currentSectionId = 4;
						navigatePrevSection($('#stationeryCarousel'), $('#logosCarousel'));
						window.history.pushState("object or string", "section", "?section=logos");
						break;
		    	}
			}
	    		
		} else{
			// PREVENT OVERLAPING CHANGE SECTION ANIMATIONS
			// If there is an animation running to change the section, wait until it's over to change of section again
			event.preventDefault();

			// NOTICE YOU HAVE TO WAIT TO SCROLL AGAIN
			console.log("You can't scroll yet, canScroll: " + canScroll);
		}
	});

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
