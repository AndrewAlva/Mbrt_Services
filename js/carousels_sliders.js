
var Carousel = {
	Logos: {
		// Flag to prevent overlapping transitions between sections
		canScroll: true,

		// Set the array with all the screens to manipulate
		projects: [],

		// Set the slider main navigators objects
		navs: [],

		// Declare current active section variable
		activeProject: 0,

		// Duration of transition animations
		duration: 600,

		// Initiate function
		init: function(){},

		// Go prev section, only if there is a prev section to go
		prev: function(){},

		// Go next section, only if there is a next section to go
		next: function(){},

		// Navigation function
		goTo: function(index){},

		// Update ['sectionActive var', 'URL search value'] according to goTo() function
		setStates: function(index){},

		setNavs: function(index){}
	},



	Stationery: {
		canScroll: true
	}
}