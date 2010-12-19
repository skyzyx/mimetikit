/**
 * DRAG-SELECT CHECKBOXES
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
	$.fn.dragSelectCheckboxes = function(delegateSelector) {

		var $this = $(this),
			cbOver, cbUp;

		$this.bind('mousedown', function(evt) {
			var lastElement = this;

			$this.delegate(delegateSelector, 'mouseover', cbOver = function(evt) {
				if (lastElement !== this) {
					lastElement = this;
					$checkbox = $(this).find('input:checkbox').get(0);
					$checkbox.checked = !$checkbox.checked;
				}
			});

			$(document.body).bind('mouseup', cbUp = function(evt) {
				$this.undelegate(delegateSelector, 'mouseover', cbOver);
				$this.unbind('mouseup', cbUp);
			});
		});
	};
})(jQuery);
