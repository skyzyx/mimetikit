# MimetiKit

_MimetiKit_ is a UI toolkit that re-implements certain Mac OS X & iOS elements in HTML5, CSS3 and JavaScript. It is not intended for the browser; rather, it is intended for use with runtimes and frameworks such as:

* [Appcelerator Titanium](http://appcelerator.com)
* [PhoneGap](http://phonegap.com)
* [Adobe AIR](http://adobe.com/air)

...and other WebKit-based engines. MimetiKit is not tested with [Gecko](http://en.wikipedia.org/wiki/Gecko_%28layout_engine%29), [Trident](http://en.wikipedia.org/wiki/Trident_%28layout_engine%29) or [Presto](http://en.wikipedia.org/wiki/Presto_%28layout_engine%29) rendering engines.


## What does it mean?

**mimetic** |məˈmetik|  
adjective formal or technical  
relating to, constituting, or habitually practicing mimesis : mimetic patterns in butterflies.  

**mimesis** |məˈmēsis; mī-|  
noun formal or technical  
imitation, in particular  
- representation or imitation of the real world in art and literature.  
- the deliberate imitation of the behavior of one group of people by another as a factor in social change.  

**kit** |kit|  
noun  
a set of articles or equipment needed for a specific purpose : _a first-aid kit._  
- a set of all the parts needed to assemble something : _an aircraft kit._  
- Brit. the clothing and other items belonging to a soldier or used in an activity such as a sport : _boys in football kit._  

_MimetiKit_ is also a modified version of _mimetic polyalloy_ -- the liquid metal substance that the T-1000 was made out of in [Terminator 2: Judgement Day](http://www.imdb.com/title/tt0103064/). This is a play-on-words relating to the Appcelerator Titanium product.


## Goals

There are a few goals for this project.

* Run in WebKit-based runtimes and take advantage of all of the fancy WebKit features.
* Designed around desktop UIs first, mobile UIs second. Not intended for web UIs. YMMV.
* Built on top of jQuery. Framework independence may come later, but is not a priority now.
* Provide an _a-la-carte_ tookit (i.e., a set of loosely-coupled components). Use what you need; leave the rest.
* Produce simple, clean HTML with plenty of hooks for custom styling.


## Todos

Here is an initial list of things I want to build:

* Drag a list item out onto a canvas for dropping.
* iTunes/Finder sidebar tree.
* iPad-like context menus and tooltips.
* iOS-like scrolling list headers. (e.g. the headers stay at the top as the items scroll by.)
* Animated tab sections that resize appropriately as the tab content changes.
* Growl notification display & history. This blends ideas from Growl and Android notification history.
* Lists and grids where removed items fade before collapsing. Apply the reverse for adding items. Good for filtering.
* Table sorting where rows and columns visibly reorder themselves.
* Slick pagination logic.
* Vanishing iOS/iPhoto '11-style scrollbars.
* Buttons and buttonsets.
* DOM generation utility. This will be [DOMBuilder](http://github.com/skyzyx/dombuilder).
