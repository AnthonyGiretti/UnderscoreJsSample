/* reduceRight_.reduceRight(list, iteratee, [memo], [context]) Alias: foldr 
The right-associative version of reduce. Foldr is not as useful in JavaScript as it would be in a language with lazy evaluation.*/

var _ = require('underscore');

var value = _.reduceRight(["Apple", "Banana", "Grapefruit"], function(memo, value, index, list) {
    
    if (index == list.length - 1)
        return `I love ${value}`;
    else
        return `${memo} and ${value}`;
},"");
console.log(value);