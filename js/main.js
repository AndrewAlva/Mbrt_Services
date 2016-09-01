


	// VARS LOAD CURRENT SECTION
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

	// INTRO GIF ANIMATION
	$('#mbrtGIF').attr('src', 'img/brand/main_logo.gif?' + Math.random() + ' alt="Mandelbrot Brands Studio">');


	// HELPER FUNCTIONS
		// ENABLE THE WRAPPER OF THE SECTION, PUT THE 'COMING-UP' CLASS ON NEXT SECTIONS AND THE 'PASSED-UP' CLASS ON THE PREVIOUS SECTIONS
		function openSection(section){


			if (section == 'index') {
				currentSectionId = 0;
				$('#indexWrapper').addClass('is-active');
				$('#welcomeWrapper').addClass('coming-up');
				$('#servicesWrapper').addClass('coming-up');
				$('#brandingCover').addClass('coming-up');
				$('#logosCarousel').addClass('coming-up');
				$('#stationeryCarousel').addClass('coming-up');
				$('#communicationCover').addClass('coming-up');
				$('#packagingCarousel').addClass('coming-up');
				$('#uniformsCarousel').addClass('coming-up');
				$('#POSCarousel').addClass('coming-up');
				$('#interiorismCarousel').addClass('coming-up');
				$('#advertisingCarousel').addClass('coming-up');
				$('#webCover').addClass('coming-up');
				$('#luckyCarousel').addClass('coming-up');
				$('#camilaCarousel').addClass('coming-up');
				$('#contactWrapper').addClass('coming-up');

			} else if (section == 'welcome') {
				currentSectionId = 1;
				initNavBarsStyle(currentSectionId);
				showMainNavs();
				$('#indexWrapper').addClass('passed-up');
				$('#welcomeWrapper').addClass('is-active');
				$('#servicesWrapper').addClass('coming-up');
				$('#brandingCover').addClass('coming-up');
				$('#logosCarousel').addClass('coming-up');
				$('#stationeryCarousel').addClass('coming-up');
				$('#communicationCover').addClass('coming-up');
				$('#packagingCarousel').addClass('coming-up');
				$('#uniformsCarousel').addClass('coming-up');
				$('#POSCarousel').addClass('coming-up');
				$('#interiorismCarousel').addClass('coming-up');
				$('#advertisingCarousel').addClass('coming-up');
				$('#webCover').addClass('coming-up');
				$('#luckyCarousel').addClass('coming-up');
				$('#camilaCarousel').addClass('coming-up');
				$('#contactWrapper').addClass('coming-up');
				
			} else if (section == 'services') {
				currentSectionId = 2;
				initNavBarsStyle(currentSectionId);
				showMainNavs();
				$('#indexWrapper').addClass('passed-up');
				$('#welcomeWrapper').addClass('passed-up');
				$('#servicesWrapper').addClass('is-active');
				$('#brandingCover').addClass('coming-up');
				$('#logosCarousel').addClass('coming-up');
				$('#stationeryCarousel').addClass('coming-up');
				$('#communicationCover').addClass('coming-up');
				$('#packagingCarousel').addClass('coming-up');
				$('#uniformsCarousel').addClass('coming-up');
				$('#POSCarousel').addClass('coming-up');
				$('#interiorismCarousel').addClass('coming-up');
				$('#advertisingCarousel').addClass('coming-up');
				$('#webCover').addClass('coming-up');
				$('#luckyCarousel').addClass('coming-up');
				$('#camilaCarousel').addClass('coming-up');
				$('#contactWrapper').addClass('coming-up');
				
			} else if (section == 'branding') {
				currentSectionId = 3;
				initNavBarsStyle(currentSectionId);
				showMainNavs();
				$('#indexWrapper').addClass('passed-up');
				$('#welcomeWrapper').addClass('passed-up');
				$('#servicesWrapper').addClass('passed-up');
				$('#brandingCover').addClass('is-active');
				$('#logosCarousel').addClass('coming-up');
				$('#stationeryCarousel').addClass('coming-up');
				$('#communicationCover').addClass('coming-up');
				$('#packagingCarousel').addClass('coming-up');
				$('#uniformsCarousel').addClass('coming-up');
				$('#POSCarousel').addClass('coming-up');
				$('#interiorismCarousel').addClass('coming-up');
				$('#advertisingCarousel').addClass('coming-up');
				$('#webCover').addClass('coming-up');
				$('#luckyCarousel').addClass('coming-up');
				$('#camilaCarousel').addClass('coming-up');
				$('#contactWrapper').addClass('coming-up');
				
			} else if (section == 'logos') {
				currentSectionId = 4;
				initNavBarsStyle(currentSectionId);
				showMainNavs();
				$('#indexWrapper').addClass('passed-up');
				$('#welcomeWrapper').addClass('passed-up');
				$('#servicesWrapper').addClass('passed-up');
				$('#brandingCover').addClass('passed-up');
				$('#logosCarousel').addClass('is-active');
				$('#stationeryCarousel').addClass('coming-up');
				$('#communicationCover').addClass('coming-up');
				$('#packagingCarousel').addClass('coming-up');
				$('#uniformsCarousel').addClass('coming-up');
				$('#POSCarousel').addClass('coming-up');
				$('#interiorismCarousel').addClass('coming-up');
				$('#advertisingCarousel').addClass('coming-up');
				$('#webCover').addClass('coming-up');
				$('#luckyCarousel').addClass('coming-up');
				$('#camilaCarousel').addClass('coming-up');
				$('#contactWrapper').addClass('coming-up');

			} else if (section == 'stationery') {
				currentSectionId = 5;
				initNavBarsStyle(currentSectionId);
				showMainNavs();
				$('#indexWrapper').addClass('passed-up');
				$('#welcomeWrapper').addClass('passed-up');
				$('#servicesWrapper').addClass('passed-up');
				$('#brandingCover').addClass('passed-up');
				$('#logosCarousel').addClass('passed-up');
				$('#stationeryCarousel').addClass('is-active');
				$('#communicationCover').addClass('coming-up');
				$('#packagingCarousel').addClass('coming-up');
				$('#uniformsCarousel').addClass('coming-up');
				$('#POSCarousel').addClass('coming-up');
				$('#interiorismCarousel').addClass('coming-up');
				$('#advertisingCarousel').addClass('coming-up');
				$('#webCover').addClass('coming-up');
				$('#luckyCarousel').addClass('coming-up');
				$('#camilaCarousel').addClass('coming-up');
				$('#contactWrapper').addClass('coming-up');

			} else if (section == 'communication') {
				currentSectionId = 6;
				initNavBarsStyle(currentSectionId);
				showMainNavs();
				$('#indexWrapper').addClass('passed-up');
				$('#welcomeWrapper').addClass('passed-up');
				$('#servicesWrapper').addClass('passed-up');
				$('#brandingCover').addClass('passed-up');
				$('#logosCarousel').addClass('passed-up');
				$('#stationeryCarousel').addClass('passed-up');
				$('#communicationCover').addClass('is-active');
				$('#packagingCarousel').addClass('coming-up');
				$('#uniformsCarousel').addClass('coming-up');
				$('#POSCarousel').addClass('coming-up');
				$('#interiorismCarousel').addClass('coming-up');
				$('#advertisingCarousel').addClass('coming-up');
				$('#webCover').addClass('coming-up');
				$('#luckyCarousel').addClass('coming-up');
				$('#camilaCarousel').addClass('coming-up');
				$('#contactWrapper').addClass('coming-up');

			} else if (section == 'packaging') {
				currentSectionId = 7;
				initNavBarsStyle(currentSectionId);
				showMainNavs();
				$('#indexWrapper').addClass('passed-up');
				$('#welcomeWrapper').addClass('passed-up');
				$('#servicesWrapper').addClass('passed-up');
				$('#brandingCover').addClass('passed-up');
				$('#logosCarousel').addClass('passed-up');
				$('#stationeryCarousel').addClass('passed-up');
				$('#communicationCover').addClass('passed-up');
				$('#packagingCarousel').addClass('is-active');
				$('#uniformsCarousel').addClass('coming-up');
				$('#POSCarousel').addClass('coming-up');
				$('#interiorismCarousel').addClass('coming-up');
				$('#advertisingCarousel').addClass('coming-up');
				$('#webCover').addClass('coming-up');
				$('#luckyCarousel').addClass('coming-up');
				$('#camilaCarousel').addClass('coming-up');
				$('#contactWrapper').addClass('coming-up');

			} else if (section == 'uniforms') {
				currentSectionId = 8;
				initNavBarsStyle(currentSectionId);
				showMainNavs();
				$('#indexWrapper').addClass('passed-up');
				$('#welcomeWrapper').addClass('passed-up');
				$('#servicesWrapper').addClass('passed-up');
				$('#brandingCover').addClass('passed-up');
				$('#logosCarousel').addClass('passed-up');
				$('#stationeryCarousel').addClass('passed-up');
				$('#communicationCover').addClass('passed-up');
				$('#packagingCarousel').addClass('passed-up');
				$('#uniformsCarousel').addClass('is-active');
				$('#POSCarousel').addClass('coming-up');
				$('#interiorismCarousel').addClass('coming-up');
				$('#advertisingCarousel').addClass('coming-up');
				$('#webCover').addClass('coming-up');
				$('#luckyCarousel').addClass('coming-up');
				$('#camilaCarousel').addClass('coming-up');
				$('#contactWrapper').addClass('coming-up');

			} else if (section == 'pos') {
				currentSectionId = 9;
				initNavBarsStyle(currentSectionId);
				showMainNavs();
				$('#indexWrapper').addClass('passed-up');
				$('#welcomeWrapper').addClass('passed-up');
				$('#servicesWrapper').addClass('passed-up');
				$('#brandingCover').addClass('passed-up');
				$('#logosCarousel').addClass('passed-up');
				$('#stationeryCarousel').addClass('passed-up');
				$('#communicationCover').addClass('passed-up');
				$('#packagingCarousel').addClass('passed-up');
				$('#uniformsCarousel').addClass('passed-up');
				$('#POSCarousel').addClass('is-active');
				$('#interiorismCarousel').addClass('coming-up');
				$('#advertisingCarousel').addClass('coming-up');
				$('#webCover').addClass('coming-up');
				$('#luckyCarousel').addClass('coming-up');
				$('#camilaCarousel').addClass('coming-up');
				$('#contactWrapper').addClass('coming-up');

			} else if (section == 'interiorism') {
				currentSectionId = 10;
				initNavBarsStyle(currentSectionId);
				showMainNavs();
				$('#indexWrapper').addClass('passed-up');
				$('#welcomeWrapper').addClass('passed-up');
				$('#servicesWrapper').addClass('passed-up');
				$('#brandingCover').addClass('passed-up');
				$('#logosCarousel').addClass('passed-up');
				$('#stationeryCarousel').addClass('passed-up');
				$('#communicationCover').addClass('passed-up');
				$('#packagingCarousel').addClass('passed-up');
				$('#uniformsCarousel').addClass('passed-up');
				$('#POSCarousel').addClass('passed-up');
				$('#interiorismCarousel').addClass('is-active');
				$('#advertisingCarousel').addClass('coming-up');
				$('#webCover').addClass('coming-up');
				$('#luckyCarousel').addClass('coming-up');
				$('#camilaCarousel').addClass('coming-up');
				$('#contactWrapper').addClass('coming-up');

			} else if (section == 'advertising') {
				currentSectionId = 11;
				initNavBarsStyle(currentSectionId);
				showMainNavs();
				$('#indexWrapper').addClass('passed-up');
				$('#welcomeWrapper').addClass('passed-up');
				$('#servicesWrapper').addClass('passed-up');
				$('#brandingCover').addClass('passed-up');
				$('#logosCarousel').addClass('passed-up');
				$('#stationeryCarousel').addClass('passed-up');
				$('#communicationCover').addClass('passed-up');
				$('#packagingCarousel').addClass('passed-up');
				$('#uniformsCarousel').addClass('passed-up');
				$('#POSCarousel').addClass('passed-up');
				$('#interiorismCarousel').addClass('passed-up');
				$('#advertisingCarousel').addClass('is-active');
				$('#webCover').addClass('coming-up');
				$('#luckyCarousel').addClass('coming-up');
				$('#camilaCarousel').addClass('coming-up');
				$('#contactWrapper').addClass('coming-up');

			} else if (section == 'web') {
				currentSectionId = 12;
				initNavBarsStyle(currentSectionId);
				showMainNavs();
				$('#indexWrapper').addClass('passed-up');
				$('#welcomeWrapper').addClass('passed-up');
				$('#servicesWrapper').addClass('passed-up');
				$('#brandingCover').addClass('passed-up');
				$('#logosCarousel').addClass('passed-up');
				$('#stationeryCarousel').addClass('passed-up');
				$('#communicationCover').addClass('passed-up');
				$('#packagingCarousel').addClass('passed-up');
				$('#uniformsCarousel').addClass('passed-up');
				$('#POSCarousel').addClass('passed-up');
				$('#interiorismCarousel').addClass('passed-up');
				$('#advertisingCarousel').addClass('passed-up');
				$('#webCover').addClass('is-active');
				$('#luckyCarousel').addClass('coming-up');
				$('#camilaCarousel').addClass('coming-up');
				$('#contactWrapper').addClass('coming-up');

			} else if (section == 'lucky') {
				currentSectionId = 13;
				initNavBarsStyle(currentSectionId);
				showMainNavs();
				$('#indexWrapper').addClass('passed-up');
				$('#welcomeWrapper').addClass('passed-up');
				$('#servicesWrapper').addClass('passed-up');
				$('#brandingCover').addClass('passed-up');
				$('#logosCarousel').addClass('passed-up');
				$('#stationeryCarousel').addClass('passed-up');
				$('#communicationCover').addClass('passed-up');
				$('#packagingCarousel').addClass('passed-up');
				$('#uniformsCarousel').addClass('passed-up');
				$('#POSCarousel').addClass('passed-up');
				$('#interiorismCarousel').addClass('passed-up');
				$('#advertisingCarousel').addClass('passed-up');
				$('#webCover').addClass('passed-up');
				$('#luckyCarousel').addClass('is-active');
				$('#camilaCarousel').addClass('coming-up');
				$('#contactWrapper').addClass('coming-up');

			} else if (section == 'camila') {
				currentSectionId = 14;
				initNavBarsStyle(currentSectionId);
				showMainNavs();
				$('#indexWrapper').addClass('passed-up');
				$('#welcomeWrapper').addClass('passed-up');
				$('#servicesWrapper').addClass('passed-up');
				$('#brandingCover').addClass('passed-up');
				$('#logosCarousel').addClass('passed-up');
				$('#stationeryCarousel').addClass('passed-up');
				$('#communicationCover').addClass('passed-up');
				$('#packagingCarousel').addClass('passed-up');
				$('#uniformsCarousel').addClass('passed-up');
				$('#POSCarousel').addClass('passed-up');
				$('#interiorismCarousel').addClass('passed-up');
				$('#advertisingCarousel').addClass('passed-up');
				$('#webCover').addClass('passed-up');
				$('#luckyCarousel').addClass('passed-up');
				$('#camilaCarousel').addClass('is-active');
				$('#contactWrapper').addClass('coming-up');

			} else if (section == 'contact') {
				currentSectionId = 15;
				initNavBarsStyle(currentSectionId);
				showMainNavs();
				$('#indexWrapper').addClass('passed-up');
				$('#welcomeWrapper').addClass('passed-up');
				$('#servicesWrapper').addClass('passed-up');
				$('#brandingCover').addClass('passed-up');
				$('#logosCarousel').addClass('passed-up');
				$('#stationeryCarousel').addClass('passed-up');
				$('#communicationCover').addClass('passed-up');
				$('#packagingCarousel').addClass('passed-up');
				$('#uniformsCarousel').addClass('passed-up');
				$('#POSCarousel').addClass('passed-up');
				$('#interiorismCarousel').addClass('passed-up');
				$('#advertisingCarousel').addClass('passed-up');
				$('#webCover').addClass('passed-up');
				$('#luckyCarousel').addClass('passed-up');
				$('#camilaCarousel').addClass('passed-up');
				$('#contactWrapper').addClass('is-active');

			} else {
				currentSectionId = 0;
				$('#indexWrapper').addClass('is-active');
				$('#welcomeWrapper').addClass('coming-up');
				$('#servicesWrapper').addClass('coming-up');
				$('#brandingCover').addClass('coming-up');
				$('#logosCarousel').addClass('coming-up');
				$('#stationeryCarousel').addClass('coming-up');
				$('#communicationCover').addClass('coming-up');
				$('#packagingCarousel').addClass('coming-up');
				$('#uniformsCarousel').addClass('coming-up');
				$('#POSCarousel').addClass('coming-up');
				$('#interiorismCarousel').addClass('coming-up');
				$('#advertisingCarousel').addClass('coming-up');
				$('#webCover').addClass('coming-up');
				$('#luckyCarousel').addClass('coming-up');
				$('#camilaCarousel').addClass('coming-up');
				$('#contactWrapper').addClass('coming-up');
			}
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
	
	









