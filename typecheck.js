/**
 * Created by Keen on 2015/11/11.
 */

// 获取类型
var class2type = {};
Array.prototype.map.call("Boolean Number String Function Array Date RegExp Object Error".split(" "), function (item, index, array) {
    class2type["[object " + item + "]"] = item.toLowerCase();
});
var type = function (obj) {
    if (obj == null) {
        return obj + "";
    }
    console.log(typeof obj);
    return typeof obj === "object" || typeof obj === "function" ? class2type[class2type.toString.call(obj)] || "object" : typeof obj;
};
//console.log(type(""));
console.log(type({}));