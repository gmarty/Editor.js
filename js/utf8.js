/**
 * UTF-8 data decode
 * http://www.webtoolkit.info/
 */
var Utf8={decode:function(c){for(var d="",a=0,b=c1=c2=0;a<c.length;){b=c.charCodeAt(a);if(b<128){d+=String.fromCharCode(b);a++}else if(b>191&&b<224){c2=c.charCodeAt(a+1);d+=String.fromCharCode((b&31)<<6|c2&63);a+=2}else{c2=c.charCodeAt(a+1);c3=c.charCodeAt(a+2);d+=String.fromCharCode((b&15)<<12|(c2&63)<<6|c3&63);a+=3}}return d}};
