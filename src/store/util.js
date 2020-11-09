const _ = require('lodash');

export function isSubset(source, target) {
    return !_.difference(_.flatten(source), _.flatten(target)).length;
}

export function presentItems(array1,array2) {
    return  _.intersectionWith(array1, array2, _.isEqual);
}