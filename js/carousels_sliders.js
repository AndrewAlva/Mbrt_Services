$(document).ready(function() {
	Logos.init();

	// INTERACTION BY ARROWS CLICK
		// Next Project Interaction | Arrows Nav Click
		$('#section-4').on('click', '.rightArrow a', function(event) {
			event.preventDefault();
			Logos.next();
		});

		// Previous Project Interaction | Arrows Nav Click
		$('#section-4').on('click', '.leftArrow a', function(event) {
			event.preventDefault();
			Logos.prev();
		});

	// INTERACTION BY BOTTOM NAV BARS
	$('#section-4').on('click', '.singleBar', function(event) {
		event.preventDefault();
		var projectId = $(this).data('loadprojectid');
		Logos.goTo(projectId);
	});
	
	// INTERACTION BY KEYBOARD ARROWS
	$(document).keyup(function(event) {
		// TRIGGER THE KEY INTERACTION FUNCTIONS OF THE CURRENT CAROUSEL SECTION
		// RIGHT ARROW INTERACTION (KEYCODE = 39)
		if (event.keyCode == 39 ){
			event.preventDefault();
			Logos.next();
		}

		// LEFT ARROW INTERACTION (KEYCODE = 37)
		if (event.keyCode == 37){
			event.preventDefault();
			Logos.prev();
		}
	});
	
	// INTERACTION BY HORIZONTAL SCROLLING
	// $('#mbrtWrapper').on('mousewheel', function(event) {
	// 	if (Slider.sectionActive == 4) {};
	// });
});


// Logos Carousel object
	var Logos = {
		// Flag to prevent overlapping transitions between sections
		canScroll: true,

		// Set the array with all the screens to manipulate
		projects: [],

		// Declare current active section variable
		activeProject: 0,

		// Duration of transition animations
		duration: 1400,

		// Initiate function
		init: function(){
			// Init the array of projects images to slide
			Logos.projects = $('#section-4').find('.projectPhoto');
		},

		// Go prev project, only if there is a prev project to go
		prev: function(){
			var index = Logos.activeProject - 1;
			if (index >= 0) {
				Logos.goTo(index);
			} else {
				console.log("There aren't more projects backward to show");
			};
		},

		// Go next project, only if there is a next project to go
		next: function(){
			var index = Logos.activeProject + 1;
			if (index < Logos.projects.length) {
				Logos.goTo(index);
			} else {
				console.log("There aren't more projects forward to show, let's go to next section");
				Slider.next();
			};
		},

		// Navigation function, "index" is the desired project to go
		goTo: function(index){
			// Change of project only after any transition ends
			if (Logos.canScroll == true && Logos.activeProject != index) {
				// Turn off the flag to prevent overlapping section transitions
				Logos.canScroll = false;

				// Declare variables to define the direction of transition animations
				var currentProjectMove;
				var newProjectMove;

				// Detect if user is going to the Next or Prev project, first if check forward move
				if (Logos.activeProject < index) {
					currentProjectMove = 'left';
					newProjectMove = 'right';
				} else if (Logos.activeProject > index) {
					currentProjectMove = 'right';
					newProjectMove = 'left';
				};

				// Style the nav bars of the project
				Logos.setNavs(index);

				// Move the current project outside the wrapper
				$('#logos-' + Logos.activeProject).addClass(currentProjectMove);

				// Set the new project in position to enter
				$('#logos-' + index).addClass(newProjectMove);
				$('#logos-' + index).addClass('active');

				// Make a tiny pause (100ms) until the new project is in position
				setTimeout(function(){
					// Move the new project into the wrapper
					$('#logos-' + index).removeClass(newProjectMove);

					// Wait until the new project is in position, then disappear the old active project, update the activeProject var and turn on the 'canScroll' flag again
					setTimeout(function(){
						$('#logos-' + Logos.activeProject).removeClass('active');
						$('#logos-' + Logos.activeProject).removeClass(currentProjectMove);
						Logos.setStates(index);
						Logos.canScroll = true;

					}, Logos.duration);
				}, 100);
			};
		},

		// Update 'active project var' according to goTo(this_slide) function result
		setStates: function(index){
			Logos.activeProject = index;
		},

		// Animate the pagination nav bars according to the new showing project. Functionality very similar as goTo() method
		setNavs: function(index){
			// Declare variables to define the direction of nav bars animation
			var currentBarMove;
			var newBarMove;

			// Detect if user is going to Next or Prev project, first if check forward movement
			if (Logos.activeProject < index) {
				currentBarMove = 'right';
				newBarMove = 'left';

			} else if (Logos.activeProject > index) {
				currentBarMove = 'left';
				newBarMove = 'right';
			};

			// Move the current project bar outside the wrapper
			$('#logosBar-' + Logos.activeProject).addClass(currentBarMove);

			// Set the new project bar in position to enter
			$('#logosBar-' + index).addClass(newBarMove);
			$('#logosBar-' + index).addClass('active');

			// Make a tiny pause (100ms) to set the new project bar in position
			setTimeout(function(){
				$('#logosBar-' + index).removeClass(newBarMove);

				// Wait until the new project bar is in position, then disappear the old active bar
				setTimeout(function(){
					$('#logosBar-' + Logos.activeProject).removeClass('active');
					$('#logosBar-' + Logos.activeProject).removeClass(currentBarMove);
				}, Logos.duration);
			}, 100);
		}
	}

// End Logos Carousel object








function objCarousel(projects, init){
	this.canScroll = true;
	this.projects = projects;
	this.duration = 600;
	this.init = init;
}