/**
 * Created by Keen on 2015/11/11.
 */

// urlÌí¼Ó²ÎÊı
var addUrlParam = function (url, name, value) {
    url += (url.indexOf("?") == -1 ? "?" : "&");
    url += encodeURIComponent(name) + "=" + encodeURIComponent(value);
    return url;
};