import './index.css';

import { ScrollMagic } from 'scrollmagic';

/*
 * - modern features (IntersectionObserver, ResizeObserver)
 * - modern integration (ES6), ready for react/angular
 * - triming the fat: simpler interface (only one export, less options)
 * - strict type safety (typescript)
 * - smallest possible footprint
 * - standalone, no deps
 * - better error management (not afraid to throw)
 */

/**
 * options (all optional):
 *   element 		(default null)		-> element whose top/left position is used to define a start position
 *   scrollParent 	(default window)	-> parent element, that is being scrolled in
 *   vertical 		(default true)		-> scroll direction, true = vertical, false = horizontal
 *		* the below options behave like css would *
 *   triggerStart 	(default null) 		-> start inset relative to scroll parent (0 = top, 100% = bottom)
 *   triggerEnd 	(default null) 		-> end inset relative to scroll parent (0 = bottom, 100% = top)
 *   elementStart 	(default 0) 		-> start inset relative to element (5 = 5px below top, 100% = bottom)
 *   elementEnd 	(default 0) 		-> end inset relative to element (5 = 5px above bottom, 100% = top)
 *
 * null values mean that the library will try to infer what the most useful value is.
 * 	- for element 						-> first child of scrollParent will be used (window -> body)
 *  - for triggerStart / triggerEnd 	-> if element is supplied => 100%, if no element is supplied => 0
 *
 *  * all options are also getters/setters, which can be updated on the fly (i.e. instance.elementStart = 5) *
 *
 * additional getters:
 *   instance.progress 					-> value between 0 and 1, reflecting how much of the scene has been scrolled past
 *   instance.scrollOffset 				-> object containing the effective scrollParent scroll position for the start end end for the scene
 *   instance.computedOptions 			-> object containing the computed results of the options (i.e. .elementEnd calculates based on the current element size)
 *
 * methods:
 *   scene.on('eventname', callback) 	-> adds event listeners
 *   scene.off('eventname', callback) 	-> removes event listeners
 *   scene.subscribe 					-> same as on, but returns function to remove listeners again
 *   destroy 							-> kills instance and frees up memory
 *
 * static:
 *   ScrollMagic.default(options?)		-> gets and/or sets defaults, which will be used for all subsequently created scenes
 *
 * events:
 * 	 event.target 						-> instance
 * 	 event.direction 					-> 'forward' or 'reverse', reflecting scroll direction, when event was triggered
 * 	 event.location 					-> 'start', 'end' or 'inside', reflecting where the event hit
 *	 event.type -> well... the event type... what were you thinking?
 *
 *
 * still on the roadmap:
 * - pins (plugin?)
 * - class toggles (plugin?)
 */

// ! all right, enough foreplay, let's get to the juicy bit !

// setting stuff to window properties, to be able to play around in console
window.ScrollMagic = ScrollMagic;

// to get/set defaults
// ScrollMagic.default({ triggerStart: 0 });

// default: starts when element enters the scrollParent, ends, when it leaves it.
window.a = new ScrollMagic({
	element: '#a',
});

// starts when it touches the top, ends when it stops touching the bottom
window.b = new ScrollMagic({
	element: '#b',
	triggerStart: 0, // touches top of scrollParent
	triggerEnd: 0, // stops touching bottom of scrollParent
});

// starts when it touches the center, ends when it stops touching the center
window.c = new ScrollMagic({
	element: '#c',
	triggerStart: 'center', // alias for 50%, equivalent in css: top: 50%
	triggerEnd: 'center', // alias for 50%, equivalent in css: bottom: 50%
});

// starts 50px before the center, ends 100px after passing it
window.d = new ScrollMagic({
	element: '#d',
	triggerStart: 'center',
	triggerEnd: 'center',
	elementStart: -50, // 50px above the element, equivalent in css: top: -50px
	elementEnd: -100, // 100px below the element, equivalent in css: bottom: -100px
});

// starts when touching the center, ends after 150px are scrolled, regardless of element height
window.e = new ScrollMagic({
	element: '#e',
	triggerStart: 'center',
	triggerEnd: 'center',
	elementEnd: (size) => size - 150, // equivalent in css: bottom: calc(100% - 150px)
});

// starts when fully visible, ends when starting to disappear
window.f = new ScrollMagic({
	element: '#f',
	elementStart: '100%', // offset start by element height
	elementEnd: '100%', // offset end by element height
});

// ! below are just some listeners to make the demo look nice.
const toggleClass = (e) => {
	const elem = e.target.computedOptions.element;
	if ('enter' === e.type) {
		elem.classList.add('active');
		return;
	}
	elem.classList.remove('active');
};
const updateProgressBar = (e) => {
	const elem = e.target.computedOptions.element;
	elem.style.setProperty('--progress', `${e.target.progress * 100}%`);
};

const setUpListeners = (name) => {
	const log = (e) => {
		if ('progress' === e.type) {
			console.log(`%c${name}`, `color: red`, `${e.direction} - progress:`, e.target.progress);
			return;
		}
		console.log(`%c${name} %c${e.direction} - ${e.type} (${e.location})`, 'color: red', 'color: green');
	};
	window[name]
		.on('enter', log)
		.on('leave', log)
		.on('progress', log)
		.on('progress', updateProgressBar)
		.on('enter', toggleClass)
		.on('leave', toggleClass);
};

['a', 'b', 'c', 'd', 'e', 'f'].forEach(setUpListeners);
