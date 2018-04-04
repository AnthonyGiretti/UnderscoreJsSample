/* debounce_.debounce(function, wait, [immediate]) 
Creates and returns a new debounced version of the passed function which will postpone its execution until after wait milliseconds have elapsed since the last time it was invoked. Useful for implementing behavior that should only happen after the input has stopped arriving. For example: rendering a preview of a Markdown comment, recalculating a layout after the window has stopped being resized, and so on.

At the end of the wait interval, the function will be called with the arguments that were passed most recently to the debounced function.

Pass true for the immediate argument to cause debounce to trigger the function on the leading instead of the trailing edge of the wait interval. 
Useful in circumstances like preventing accidental double-clicks on a "submit" button from firing a second time. */

var _ = require('underscore');

var lazyLayout = _.debounce(calculateLayout, 300);
$(window).resize(lazyLayout);