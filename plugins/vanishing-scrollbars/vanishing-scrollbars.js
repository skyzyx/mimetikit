/**
 * VANISHING SCROLLBARS
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
		scrollbarWidth = 0;

	/*******************************************************************************************/
	/*! Copyright (c) 2008 Brandon Aaron (brandon.aaron@gmail.com || http://brandonaaron.net)
	 * Dual licensed under the MIT (http://www.opensource.org/licenses/mit-license.php)
	 * and GPL (http://www.opensource.org/licenses/gpl-license.php) licenses.
	 */
	$.getScrollbarWidth = function() {
		if (!scrollbarWidth) {
			var $div = $('<div />')
				.css({ width: 100, height: 100, overflow: 'auto', position: 'absolute', top: -1000, left: -1000 })
				.prependTo('body').append('<div />').find('div')
					.css({ width: '100%', height: 200 });
			scrollbarWidth = 100 - $div.width();
			$div.parent().remove();
		}
		return scrollbarWidth;
	};
	/*******************************************************************************************/

	$.fn.scrollbars = function() {

		var $this = $(this),
			$wrapper, $scrollbar,
			contentHeight, verticalPadding, multiplier, reverseMultiplier;

		// Add a classname, wrap it in a container, and add the scrollbar nodes
		$this.addClass('mimetikit-scrollbars').wrapInner(
			_('div', { 'class': 'mimetikit-scrollbars-inner'}).asDOM()
		).append(
			_('div', { 'class': 'mimetikit-scrollbar-vertical' }).child(
				_('div', { 'class': 'mimetikit-scrollbar' })
			).asDOM()
		);

		// Create and resize the wrapper
		$wrapper = $this.find('.mimetikit-scrollbars-inner');
		contentHeight = $wrapper.height();
		$wrapper.width($this.width());
		$wrapper.height($this.height());

		// Apply original element's padding to wrapper
		$wrapper.css({
			'paddingTop': $this.css('paddingTop'),
			'paddingRight': $this.css('paddingRight'),
			'paddingBottom': $this.css('paddingBottom'),
			'paddingLeft': $this.css('paddingLeft')
		});

		// Reset original element
		$this.css({
			'paddingTop': 0,
			'paddingRight': 0,
			'paddingBottom': 0,
			'paddingLeft': 0
		});

		// Adjust the viewport
		$this.width($wrapper.innerWidth() - $.getScrollbarWidth());
		$this.height($wrapper.innerHeight());

		// Scrollway
		$scrollway = $this.find('div.mimetikit-scrollbar-vertical');
		verticalPadding = parseInt($scrollway.css('paddingTop'), 10) + parseInt($scrollway.css('paddingBottom'), 10);
		$scrollway.css({
			'top': parseInt($scrollway.css('paddingTop'), 10),
			'paddingTop': 0,
			'paddingBottom': 0
		});
		$scrollway.height($scrollway.height() - verticalPadding);

		// Scrollbar
		$scrollbar = $this.find('div.mimetikit-scrollbar-vertical div.mimetikit-scrollbar');
		multiplier = $scrollway.height() / contentHeight;
		reverseMultiplier = contentHeight / $scrollway.height();

		// Adjust the height of the scrollbar based on a crap-ton of variables
		if (contentHeight < $wrapper.height()) {
			$scrollbar.height(0)
		}
		else {
			$scrollbar.height(
				Math.floor(
					multiplier * $scrollway.height()
				)
			);
		}

		// Move the scrollbar when we scroll
		$wrapper.scroll(function(evt) {
			$scrollbar.css({
				'top': $wrapper.scrollTop() * multiplier
			});
		});

		// Make the scrollbar draggable
		$scrollbar.draggable({
			'containment': 'parent',
			'axis': 'y'
		});

		// Handle dragging the scrollbar
		$scrollbar.bind('drag', function(evt) {
			$wrapper.scrollTop(parseInt($(this).css('top'), 10) * reverseMultiplier);
		});

		// Handle clicking on the scrollway
		$scrollway.click(function(evt) {

			// Instantiate some variables
			var scrollPosition = evt.offsetY - ($scrollbar.height() / 2),
				pagePosition = scrollPosition * reverseMultiplier,
				scrollMax = $scrollway.height() - $scrollbar.height(),
				options = {
					'duration': 200,
					'easing': 'easeOutQuad'
				};

			// Handle scrollPosition min/max
			if (scrollPosition < 0) {
				scrollPosition = 0;
			}
			else if (scrollPosition > scrollMax) {
				scrollPosition = scrollMax;
			}

			// Animate the scrollbar and content scroll positions
			$scrollbar.animate({
				'top': scrollPosition
			}, options);

			$wrapper.animate({
				'scrollTop': pagePosition
			}, options);
		});
	};
})(jQuery);
