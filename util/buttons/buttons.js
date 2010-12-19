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
			opt = opt || {},
			dom, key, event;


		// Handle classnames
		if (opt['class'] !== undefined && typeof opt['class'] === 'string') {
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
	},

	ButtonGroup = function(buttons, type) {

		return _('div', { 'class':'mimetikit-button-group' }).child(function(buttons) {

			var i, max;

			if (typeof buttons !== 'object' || typeof buttons.length !== 'number' || typeof buttons.splice !== 'function') {
				buttons = [buttons];
			}

			if (typeof type === undefined || typeof type === null) {
				type = '';
			}

			buttons[0].className += ' btn-left';
			buttons[buttons.length - 1].className += ' btn-right';

			if (type !== '') {
				for (i = 0, max = buttons.length; i < max; i++) {
					buttons[i].className += ' ' + type;
				}
			}

			return buttons;

		}(buttons)).asDOM();
	};

	// Expose to the global scope
	window.MimetiKit.Button = Button;
	window.MimetiKit.ButtonGroup = ButtonGroup;

})(jQuery);
