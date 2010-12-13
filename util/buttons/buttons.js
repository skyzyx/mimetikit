/**
 * ButtonKit
 * Part of MimetiKit <http://github.com/skyzyx/mimetikit>
 * MIT Licensed - http://creativecommons.org/licenses/MIT/
 *
 * Usage documentation available at the project site.
 */

// ==ClosureCompiler==
// @compilation_level SIMPLE_OPTIMIZATIONS
// ==/ClosureCompiler==

/*jslint white: false, onevar: true, browser: true, undef: true, nomen: false, eqeqeq: true, plusplus: false, bitwise: true, regexp: true, strict: false, newcap: true, immed: false */
/*global window */


(function($) {

	var _ = DOMBuilder,
	Button = function(text, style, opt) {

		// Prep variables
		var classnames = [],
			events = [],
			dom, key, event;

		// Handle classnames
		if (typeof opt['class'] === 'string') {
			classnames = opt['class'].split(' ');
		}
		classnames.push('button');
		classnames.push(style);
		opt['class'] = classnames.join(' ');

		// Grab the event handlers
		for (key in opt) {
			if (opt.hasOwnProperty(key) && key.match(/^on/i)) {
				events[key] = opt[key];
				delete opt[key];
			}
		}

		// Generate DOM node
		dom = _('a', opt).html(text).asDOM();

		// Reapply the events with jQuery
		for (event in events) {
			if (events.hasOwnProperty(event)) {
				$(dom).bind(event.split('on')[1], events[event]);
			}
		}

		// Return the DOM node
		return dom;
	};

	// Expose to the global scope
	window.MimetiKit.Button = Button;

})(jQuery);
