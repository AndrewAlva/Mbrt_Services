

	// VARS SCROLL LISTENER
	var canScroll = true;
	var transitionsTiming = 900;
	var pauseToLoadSection = 500;
	var currentSectionId;
	var lastSectionId = 15;


		// SCROLL LISTENER
		$(document).on('mousewheel', function(event) {

			// CONTROL TRIGGERING
			// Change section only if the current section has been fully loaded
			if(canScroll && event.deltaY != 0){
				// DELAY DEACTIVATING AND REACTIVATING 'CAN SCROLL' FLAG WHILE SCROLLING BETWEEN SECTIONS
				delayBetweenSections();

		    	// CHECK IF JS IS DETECTING MOUSEWHEEL
				// console.log('Scroll started.');
		  		// console.log(event.deltaX, event.deltaY, event.deltaFactor);


				// Detect if user is scrolling down
		    	if (event.deltaY < 0 && currentSectionId < lastSectionId) {

		    		// CHANGE TO NEXT SECTION
			    	scrollNextSection();

		    		// CONDITIONAL TO KNOW WHAT SECTION IS
			    	switch (currentSectionId) {

			    		// From Index to Welcome Section
			    		case 0:
			    			showMainNavs();
			    			currentSectionId = 1;
		    				window.history.pushState("object or string", "section", "?section=welcome");
				    		break;

			    		// From Welcome to Services Section
			    		case 1:
			    		 	currentSectionId = 2;
			    		 	window.history.pushState("object or string", "section", "?section=services");
			    		 	break;

		    		 	// From Services to Branding cover Section
		    		 	case 2:
		    		 		currentSectionId = 3;
		    		 		window.history.pushState("object or string", "section", "?section=branding");
				 			break;

			 			// From Branding cover to Logos carousel Section
			 			case 3:
			 				currentSectionId = 4;
			 				window.history.pushState("object or string", "section", "?section=logos");
			 				break;

		 				// From Logos carousel to Stationery carousel Section
			 			case 4:
			 				currentSectionId = 5;
			 				window.history.pushState("object or string", "section", "?section=stationery");
			 				break;

		 				// From Stationery carousel to Brand Communication cover Section
			 			case 5:
			 				currentSectionId = 6;
			 				window.history.pushState("object or string", "section", "?section=communication");
			 				break;

		 				// From Brand Communication cover to Packaging Carousel Section
			 			case 6:
			 				currentSectionId = 7;
			 				window.history.pushState("object or string", "section", "?section=packaging");
			 				break;

		 				// From Packaging Carousel to Uniforms Carousel Section
			 			case 7:
			 				currentSectionId = 8;
			 				window.history.pushState("object or string", "section", "?section=uniforms");
			 				break;

		 				// From Uniforms Carousel to POS Carousel Section
			 			case 8:
			 				currentSectionId = 9;
			 				window.history.pushState("object or string", "section", "?section=pos");
			 				break;

		 				// From POS Carousel to Interiorism Carousel Section
			 			case 9:
			 				currentSectionId = 10;
			 				window.history.pushState("object or string", "section", "?section=interiorism");
			 				break;

		 				// From Interiorism Carousel to Advertisign Carousel Section
			 			case 10:
			 				currentSectionId = 11;
			 				window.history.pushState("object or string", "section", "?section=advertising");
			 				break;

		 				// From Advertising Carousel to Web Design & Development Cover Section
			 			case 11:
			 				currentSectionId = 12;
			 				window.history.pushState("object or string", "section", "?section=web");
			 				break;

		 				// From Web D&D Cover to Lucky Website Carousel Section
			 			case 12:
			 				currentSectionId = 13;
			 				window.history.pushState("object or string", "section", "?section=lucky");
			 				break;

		 				// From Lucky Website Carousel to Camila Website Carousel Section
			 			case 13:
			 				currentSectionId = 14;
			 				window.history.pushState("object or string", "section", "?section=camila");
			 				break;

		 				// From Camila Website Carousel to Contact Final Section
			 			case 14:
			 				currentSectionId = 15;
			 				window.history.pushState("object or string", "section", "?section=contact");
			 				break;
			    	}
		    	}
				// Detect if user is scrolling up
				else if ( event.deltaY > 0 && currentSectionId > 0){

					// CHANGE TO PREVIOUS SECTION
					scrollPreviousSection();

					// CONDITIONAL TO KNOW WHAT SECTION IS
			    	switch (currentSectionId) {

			    		// From Welcome to Index Section
			    		case 1:
			    			hideMainNavs();
			    			currentSectionId = 0;
			    			window.history.pushState("object or string", "section", "?section=index");
			    			break;

		    			// From Services to Welcome Section
			    		case 2:
			    			currentSectionId = 1;
			    			window.history.pushState("object or string", "section", "?section=welcome");
			    			break;

		    			// From Branding cover to Services Section
		    			case 3:
		    				currentSectionId = 2;
		    				window.history.pushState("object or string", "section", "?section=services");
		    				break;

	    				// From Logos carousel to Branding cover Section
						case 4:
							currentSectionId = 3;
							window.history.pushState("object or string", "section", "?section=branding");
							break;

						// From Stationery carousel to Logos carousel Section
						case 5:
							currentSectionId = 4;
							window.history.pushState("object or string", "section", "?section=logos");
							break;

						// From Brand Communications cover to Stationery carousel Section
						case 6:
							currentSectionId = 5;
							window.history.pushState("object or string", "section", "?section=stationery");
							break;

						// From Packaging Carousel to Brand Communications cover Section
						case 7:
							currentSectionId = 6;
							window.history.pushState("object or string", "section", "?section=communication");
							break;

						// From Uniforms Carousel to Packaging Carousel Section
						case 8:
							currentSectionId = 7;
							window.history.pushState("object or string", "section", "?section=packaging");
							break;

						// From POS Carousel to Uniforms Carousel Section
						case 9:
							currentSectionId = 8;
							window.history.pushState("object or string", "section", "?section=uniforms");
							break;

						// From Interiorism Carousel to POS Carousel Section
						case 10:
							currentSectionId = 9;
							window.history.pushState("object or string", "section", "?section=pos");
							break;

						// From Advertising Carousel to Interiorism Carousel Section
						case 11:
							currentSectionId = 10;
							window.history.pushState("object or string", "section", "?section=interiorism");
							break;

						// From Website Design & Development cover to Advertising Carousel Section
						case 12:
							currentSectionId = 11;
							window.history.pushState("object or string", "section", "?section=advertising");
							break;

						// From Lucky Website Carousel to Website Design & Development cover Section
						case 13:
							currentSectionId = 12;
							window.history.pushState("object or string", "section", "?section=web");
							break;

						// From Camila Website Carousel to Lucky Website Carousel Section
						case 14:
							currentSectionId = 13;
							window.history.pushState("object or string", "section", "?section=lucky");
							break;

						// From Contact Final Section to Camila Website Carousel Section
						case 15:
							currentSectionId = 14;
							window.history.pushState("object or string", "section", "?section=camila");
							break;
			    	}
				}
		    		
			} else{
				// PREVENT OVERLAPING CHANGE SECTION ANIMATIONS
				// If there is an animation running to change the section, wait until it's over to change of section again
				event.preventDefault();

				// NOTICE YOU HAVE TO WAIT TO SCROLL AGAIN
				// console.log("You can't scroll yet, canScroll: " + canScroll);
			}
		});

		// HELPER FUNCTIONS
			// CHANGE TO PREVIOUS OR NEXT SECTION BY ID
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


			// CHANGE OF SECTION BY CLASSES
			function scrollNextSection(){

				// CHANGE POSITION OF CURRENT SECTION TO 'PASSED' SECTION
				$('.is-active').addClass('passed-up');
				$('.is-active').removeClass('is-active');

				// CHANGE POSITION OF THE FIRST 'COMING UP' SECTION TO CURRENT 'ACTIVE' SECTION
				comingUpSections = $('#mbrtWrapper').find('.coming-up');
				$(comingUpSections[0]).addClass('is-active');
				$(comingUpSections[0]).removeClass('coming-up');
			}


			function scrollPreviousSection(){

				// CHANGE POSITION OF CURRENT SECTION TO 'COMING UP' SECTION
				$('.is-active').addClass('coming-up');
				$('.is-active').removeClass('is-active');

				// CHANGE POSITION OF THE LAST 'PASSED UP' SECTION TO CURRENT 'ACTIVE' SECTION
				passedUpSections = $('#mbrtWrapper').find('.passed-up');
				$(passedUpSections[passedUpSections.length - 1]).addClass('is-active');
				$(passedUpSections[passedUpSections.length - 1]).removeClass('passed-up');
			}

			// DELAY WHILE SCROLLING TO NEXT OR PREVIOUS SECTIONS
			function delayBetweenSections(){
				canScroll = false;
		    	setTimeout(function(){
		    		canScroll = true;
		    	},transitionsTiming + pauseToLoadSection);
			}









