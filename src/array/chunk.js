"use strict";
exports.__esModule = true;
exports.chunk = function (array, size) {
    var res = [];
    for (var i = 0; i < array.length; i += size) {
        res.push(array.slice(i, i + size));
    }
    // console.log(res);
    return res;
};
// chunk([1,2,3,4], 3);
//
