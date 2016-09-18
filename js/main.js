	window.onload = function(){
		setTimeout(function(){
			// Fade out loader
			$('#mbrtLoader').addClass('crystalLoader');
			
			// Restart Intro gif animation
			$('#mbrtGIF').attr('src', 'img/brand/main_logo.gif?' + Math.random() + ' alt="Mandelbrot Brands Studio">');

			// Remove loader after fadeout is complete
			setTimeout(function(){$('#mbrtLoader').remove();},1600);
		}, transitionsTiming);
	};

	// VARS LOAD CURRENT SECTION
	var currentSectionId;
	var currentSectionName = window.location.search;
		
		
	// LOAD CURRENT SECTION BY URL
	currentSectionName = currentSectionName.replace('?', '');

	if (currentSectionName != ''){
		openSection(currentSectionName);
		// CHECK WHICH PARAMETERS WE ARE RECEIVING
		// console.log('Section name: ' + currentSectionName);
		// console.log('URL value: ' + window.location.search);
	} else {
		openSection('index');
		// console.log('Section name: Index');
	}


	// SCROLL TO WELCOME SECTION ON CLICK AT '#START EXPLORING' ELEMENT
	$('#indexWrapper').on('click', '#startExploring', function(event) {
		event.preventDefault();
		// Set the delay to enable scrolling again after next section has totally updated its position
		delayBetweenSections();

		// Make the move between '.main section' objects to the next section
		scrollNextSection();

		// Enable the main navigators: 'right nav bars' and 'top left logo'
		showMainNavs();

		// Update the 'current section id' counter
		currentSectionId = 1;

		// And finally also update the showing URL with the name of the 'welcome' section
		window.history.pushState("object or string", "section", "?welcome");
	});

	// SCROLL TO THE INDEX SECTION ON CLICK AT 'TOP LEFT LOGO' ELEMENT
	$('#mbrtWrapper').on('click', '#topLeftLogo', function(event) {
		event.preventDefault();
		moveBackwardSections(0);
		hideMainNavs();
		resetNavBars();
		initNavBarsStyle(1);
	});

	

	// HELPER FUNCTIONS
		// INIT THE MAIN SECTION AND NAV BAR STYLES AT THE LOADING OF THE PAGE
		function openSection(section){


			if (section == 'index') {
				currentSectionId = 0;
				initNavBarsStyle(1);

			} else if (section == 'welcome') {
				currentSectionId = 1;
				initNavBarsStyle(currentSectionId);
				showMainNavs();
				
			} else if (section == 'services') {
				currentSectionId = 2;
				initNavBarsStyle(currentSectionId);
				showMainNavs();
				
			} else if (section == 'branding') {
				currentSectionId = 3;
				initNavBarsStyle(currentSectionId);
				showMainNavs();
				
			} else if (section == 'logos') {
				currentSectionId = 4;
				initNavBarsStyle(currentSectionId);
				showMainNavs();

			} else if (section == 'stationery') {
				currentSectionId = 5;
				initNavBarsStyle(currentSectionId);
				showMainNavs();

			} else if (section == 'communication') {
				currentSectionId = 6;
				initNavBarsStyle(currentSectionId);
				showMainNavs();

			} else if (section == 'packaging') {
				currentSectionId = 7;
				initNavBarsStyle(currentSectionId);
				showMainNavs();

			} else if (section == 'uniforms') {
				currentSectionId = 8;
				initNavBarsStyle(currentSectionId);
				showMainNavs();

			} else if (section == 'pos') {
				currentSectionId = 9;
				initNavBarsStyle(currentSectionId);
				showMainNavs();

			} else if (section == 'interiorism') {
				currentSectionId = 10;
				initNavBarsStyle(currentSectionId);
				showMainNavs();

			} else if (section == 'advertising') {
				currentSectionId = 11;
				initNavBarsStyle(currentSectionId);
				showMainNavs();

			} else if (section == 'web') {
				currentSectionId = 12;
				initNavBarsStyle(currentSectionId);
				showMainNavs();

			} else if (section == 'lucky') {
				currentSectionId = 13;
				initNavBarsStyle(currentSectionId);
				showMainNavs();

			} else if (section == 'camila') {
				currentSectionId = 14;
				initNavBarsStyle(currentSectionId);
				showMainNavs();

			} else if (section == 'contact') {
				currentSectionId = 15;
				initNavBarsStyle(currentSectionId);
				showMainNavs();

			} else {
				currentSectionId = 0;
				initNavBarsStyle(1);
			}

			initMainSectionsStyle(currentSectionId);
		}

		// ENABLE THE RIGHT NAV BARS AND THE TOP LEFT LOGO
		function showMainNavs(){
			elementsToShow = $('.animatableMainNav');

			elementsToShow.each(function(index, el) {
				setTimeout(function(){
					$(el).removeClass('hiddenMainNav');
					setTimeout(function(){
						$(el).removeClass('crystalMainNav');
					}, 10);
					
				}, index * 100);
			});
		}

		// DISABLE THE RIGHT NAV BARS AND THE TOP LEFT LOGO
		function hideMainNavs(){
			elementsToHide = $('.animatableMainNav');

			elementsToHide.each(function(index, el) {
				setTimeout(function(){
					$(el).addClass('crystalMainNav');
					setTimeout(function(){
						$(el).addClass('hiddenMainNav');
					}, 700);

				}, index * 100);
			});
		}

		// ENABLE THE PROPER WRAPPER OF THE SECTION, PUT THE 'COMING-UP' CLASS ON NEXT SECTIONS AND THE 'PASSED-UP' CLASS ON THE PREVIOUS SECTIONS
		function initMainSectionsStyle(sectionIdToLoad){
			allMainSections = $('.mainSection');

			for (var i = 0; i < 16; i++) {
				if (i <= sectionIdToLoad) {
					
					if (i == (sectionIdToLoad)){
						$(allMainSections[i]).addClass('is-active');

					} else{
						$(allMainSections[i]).addClass('passed-up');

					}

				} else {
					$(allMainSections[i]).addClass('coming-up');
				}

				
			};
		}

		// ENABLE THE PROPER NAV BAR OF THE SECTION, PUT THE 'NEXT NAV BAR' CLASS ON NEXT SECTIONS NAV BARS AND THE 'PREV NAV BAR' CLASS ON THE PREVIOUS SECTIONS NAV BARS
		function initNavBarsStyle(sectionIdToLoad){
			allNavBars = $('.navBar');

			if (sectionIdToLoad > 0) {

				for (var i = 0; i < 15; i++) {
					if (i < sectionIdToLoad) {
						
						if (i == (sectionIdToLoad - 1)){
							$(allNavBars[i]).addClass('currentNavBar');
							$(allNavBars[i]).addClass('activeNavBar');
						} else{
							$(allNavBars[i]).addClass('prevNavBar');
							$(allNavBars[i]).addClass('deactiveNavBar');
						}

					} else {
						$(allNavBars[i]).addClass('nextNavBar');
						$(allNavBars[i]).addClass('deactiveNavBar');
					}

					
				};
			};
		}
	
	









