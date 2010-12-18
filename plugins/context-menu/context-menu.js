/**
 * CONTEXT MENU
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

	$.fn.contextMenu = function(buttons) {

		var menu, $menu, $body, underTheMenu;

		// Generate menu
		document.body.appendChild(_.DOM(
			menu = _('div', { 'class':'mimetikit-context-container top' }).child([
				_('div', { 'class':'mimetikit-context-tip-top' }),
				_('div', { 'class':'mimetikit-context-choices' }).child(
					_('div', { 'class':'mimetikit-context-choices-visible' }).child(buttons)
				),
				_('div', { 'class':'mimetikit-context-tip-bottom' })
			]).asDOM()
		));

		// Default positioning
		$menu = $(menu);
		$body = $(document);
		underTheMenu = $(this).offset().top + $(this).outerHeight() + 10;

		$menu.offset({
			'left': -1000,
			'top': (underTheMenu - ($menu.outerHeight() * 0.05))
		});

		// Bind click event
		$(this).bind('click', function(evt) {

			evt.preventDefault();
			var callback, clickablePosition, menuPosition;

			clickablePosition = $(this).offset().left + ($(this).width() / 2);
			menuPosition = clickablePosition - ($menu.width() / 2);

			$menu.offset({
				'left': Math.floor(menuPosition)
			});

			$menu.animate({
				'top': underTheMenu,
				'opacity': 1
			}, {
				'duration': 150,
				'easing': 'easeOutQuad',
				'complete': function() {
					var $cb;
					$body.click($cb = function(evt) {

						$menu.animate({
							'top': (underTheMenu - ($menu.outerHeight() * 0.05)),
							'opacity': 0
						}, {
							'duration': 150,
							'easing': 'easeOutQuad',
							'complete': function() {
								$menu.offset({
									'left': -1000
								});
								$body.unbind('click', $cb);
							}
						});
					});
				}
			});
		});
	};
})(jQuery);
