/**
 * Created by Keen on 2015/11/11.
 */

/*字符串的trim方法*/
String.prototype.trim = function () {
    return this.replace(/(^\s*)|(\s*$)/g, "");
};

/*字符串的长度，双字节字符长度记为2*/
String.prototype.len = function () {
    return this.replace(/[^\x00-\xff]/g, "aa").length;
};

String.prototype.getRomdanCode = function () {
    return ("" + Math.random()).replace(/\D/g, "");
};