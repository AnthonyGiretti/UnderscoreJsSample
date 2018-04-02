/* reduce_.reduce(list, iteratee, [memo], [context]) Aliases: inject, foldl 
Also known as inject and foldl, reduce boils down a list of values into a single value. 
Memo is the initial state of the reduction, and each successive step of it should be returned by iteratee. 
The iteratee is passed four arguments: the memo, then the value and index (or key) of the iteration, and finally a reference to the entire list.

If no memo is passed to the initial invocation of reduce, the iteratee is not invoked on the first element of the list. 
The first element is instead passed as the memo in the invocation of the iteratee on the next element in the list.*/

var _ = require('underscore');

var value = _.reduce(["Apple", "Banana", "Grapefruit"], function(memo, value, index) {
    
    if (index == 0)
        return `I love ${value}`;
    else
        return `${memo} and ${value}`;

},"");
console.log(value);