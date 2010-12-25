/**
 * FINDER/ITUNES SIDEBAR TREE
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
	var _ = DOMBuilder;

	$.fn.mkSidebar = function(tree) {

		var $this = $(this),
			title;

		for (title in tree) {
			if (tree.hasOwnProperty(title)) {
				this.get(0).appendChild(_.DOM([
					_('h5').html(title),
					_('ul').child($.map(tree[title], function(e, i) {
						return _('li').child(
							_('a', { 'href':e.href, 'target':e.target }).html(e.label)
						);
					}))
				]));
			}
		}

		// Select the first choice by default
		$this.find('ul li a:first').addClass('selected');

		$this.delegate('ul li a', 'click', function(evt) {
			$this.find(evt.handleObj.selector).removeClass('selected');
			$(this).addClass('selected');
		});

		return this;
	};
})(jQuery);
