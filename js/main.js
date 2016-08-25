jQuery(document).ready(function($) {

	// VARS LOAD CURRENT SECTION
	var currentSectionName = window.location.search;
		
		
	// LOAD CURRENT SECTION BY URL
	currentSectionName = currentSectionName.replace('?section=', '');

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
	function openSection(section){
		// CHECK IF FUNCTION IS TRIGGERING
		// console.log('Open Section Triggered');

		if (section == 'index') {
			currentSectionId = 0;
			$('#indexWrapper').addClass('is-active');
			$('#welcomeWrapper').addClass('coming-up');
			$('#servicesWrapper').addClass('coming-up');
			$('#brandingCover').addClass('coming-up');
			$('#logosCarousel').addClass('coming-up');
			$('#stationeryCarousel').addClass('coming-up');

		} else if (section == 'welcome') {
			currentSectionId = 1;
			$('#indexWrapper').addClass('passed-up');
			$('#welcomeWrapper').addClass('is-active');
			$('#servicesWrapper').addClass('coming-up');
			$('#brandingCover').addClass('coming-up');
			$('#logosCarousel').addClass('coming-up');
			$('#stationeryCarousel').addClass('coming-up');
			
		} else if (section == 'services') {
			currentSectionId = 2;
			$('#indexWrapper').addClass('passed-up');
			$('#welcomeWrapper').addClass('passed-up');
			$('#servicesWrapper').addClass('is-active');
			$('#brandingCover').addClass('coming-up');
			$('#logosCarousel').addClass('coming-up');
			$('#stationeryCarousel').addClass('coming-up');
			
		} else if (section == 'branding') {
			currentSectionId = 3;
			$('#indexWrapper').addClass('passed-up');
			$('#welcomeWrapper').addClass('passed-up');
			$('#servicesWrapper').addClass('passed-up');
			$('#brandingCover').addClass('is-active');
			$('#logosCarousel').addClass('coming-up');
			$('#stationeryCarousel').addClass('coming-up');
			
		} else if (section == 'logos') {
			currentSectionId = 4;
			$('#indexWrapper').addClass('passed-up');
			$('#welcomeWrapper').addClass('passed-up');
			$('#servicesWrapper').addClass('passed-up');
			$('#brandingCover').addClass('passed-up');
			$('#logosCarousel').addClass('is-active');
			$('#stationeryCarousel').addClass('coming-up');

		} else if (section == 'stationery') {
			currentSectionId = 5;
			$('#indexWrapper').addClass('passed-up');
			$('#welcomeWrapper').addClass('passed-up');
			$('#servicesWrapper').addClass('passed-up');
			$('#brandingCover').addClass('passed-up');
			$('#logosCarousel').addClass('passed-up');
			$('#stationeryCarousel').addClass('is-active');

		}
	}
	
});