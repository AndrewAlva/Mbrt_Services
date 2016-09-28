	var Slider = {
		// Flag to prevent overlapping transitions between sections
		canScroll: true,

		// Set the array with all the screens to manipulate
		screens: [],

		// Set the names of all the screens
		screenNames: ['index', 'welcome', 'services', 'branding', 'logos', 'stationery', 'communication', 'packaging', 'uniforms', 'pos', 'interiorism', 'advertising', 'web', 'lucky', 'camila', 'contact' ],

		// Set the slider main navigators objects
		mainNavs: [],

		// Declare current active section variable
		sectionActive: 0,

		// Duration of transition animations
		duration: 600,

		// Initiate function
		init: function(){
			// Init the array of section screens to slide
			Slider.screens = $('.mainSection');
			// Init the array of main navigators
			Slider.mainNavs = $('.animatableMainNav');

			// Set the current active section
			// Get and clean URL Search
			urlSearch = window.location.search;
			urlSearch = urlSearch.replace('?', '');

			// Check if the search matches with the name of a section, if it does, get its ID and set the 'init states' with it, else set the 'init states' accord to the index section
			if (Slider.screenNames.indexOf(urlSearch) >= 0) {
				Slider.setStates(Slider.screenNames.indexOf(urlSearch));
			} else {
				Slider.setStates(0);
			};

			// Display the current active section
			$('#section-' + Slider.sectionActive).addClass('active');

			// If the user arrived to any section except index section show the main navs, else hide them
			if(Slider.sectionActive >= 1) Slider.showMainNavs();
			else Slider.hideMainNavs();
		},

		// Go prev section, only if there is a prev section to go
		prev: function(){
			var index = Slider.sectionActive - 1;
			if (index < 0) {
				console.log('You have reached the top of the slider.');
			} else {
				Slider.goTo(index);
			};

		},

		// Go next section, only if there is a next section to go
		next: function(){
			var index = Slider.sectionActive + 1;
			if (index >= Slider.screens.length) {
				console.log('You have reached the bottom of the slider.');
			} else {
				Slider.goTo(index);
			};

		},

		// Navigation function
		goTo: function(index){
			// Change of section only after any transition ends
			if (Slider.canScroll && Slider.sectionActive != index) {
				// Turn on the flag to prevent overlapping section transitions
				Slider.canScroll = false;

				// Check if the user is going/leaving the index section to hide/show the main navs
				if (index == 0 && Slider.sectionActive >= 1) Slider.hideMainNavs();
				else if (index >= 1 && Slider.sectionActive == 0) Slider.showMainNavs();

				// Declare variables to define the direction of the animations
				var currentSectionMove;
				var newSectionMove;

				// Detect if user is going to the Next or prev section, sectionActive < index means Next
				if (Slider.sectionActive < index){
					currentSectionMove = 'up';
					newSectionMove = 'down';
				} else if (Slider.sectionActive > index){
					currentSectionMove = 'down';
					newSectionMove = 'up';
				};

				// Move the current section outside the space
				$('#section-' + Slider.sectionActive).addClass(currentSectionMove);

				// Set the new section in position to enter
				$('#section-' + index).addClass(newSectionMove);
				$('#section-' + index).addClass('active');

				// Update active right nav bar
				Slider.setMainNavs(index);

				// Make a tiny pause(100ms) until the new section is in position
				setTimeout(function(){

					// Move the new section to show it
					$('#section-' + index).removeClass(newSectionMove);

					// Wait untill the new section is in position, then disappear the old current section, update the sectionActive var and turn on the 'canScroll' flag again
					setTimeout(function(){
						$('#section-' + Slider.sectionActive).removeClass('active');
						$('#section-' + Slider.sectionActive).removeClass(currentSectionMove);
						Slider.setStates(index);
						Slider.canScroll = true;
					}, (Slider.duration));

				},100);

			};
		},

		// Update ['sectionActive var', 'URL search value'] according to goTo() function
		setStates: function(index){
			Slider.sectionActive = index;

			// Update the search URL
			window.history.pushState("string", "section", "?".concat(Slider.screenNames[Slider.sectionActive]));
		},

		showMainNavs: function(){
			Slider.mainNavs.each(function(index, el) {
				setTimeout(function(){
					$(el).removeClass('hiddenMainNav');
					setTimeout(function(){
						$(el).removeClass('crystalMainNav');
					}, 10);
					
				}, index * 100);
			});

			// Active the current section nav bar
			Slider.setMainNavs(Slider.sectionActive);
		},

		hideMainNavs: function(){
			Slider.mainNavs.each(function(index, el) {
				setTimeout(function(){
					$(el).addClass('crystalMainNav');
					setTimeout(function(){
						$(el).addClass('hiddenMainNav');
					}, 700);

				}, index * 100);
			});

			// Also deactivate all nav bars
			$('.navBar').removeClass('activeNavBar');
		},

		setMainNavs: function(index){
			// If user went to any section except index section, update the 'right nav bar' active bar
			if(index >= 1) {
				$('.navBar').not('#navBar-' + index).removeClass('activeNavBar');
				$('#navBar-' + index).addClass('activeNavBar');
			}; 
		}
	}
