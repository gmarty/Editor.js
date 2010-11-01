/**
 * UTF-8 data encode / decode
 * http://www.webtoolkit.info/
 */
var Utf8={encode:function(a){if(!a.length)return"";a=a.replace(/\r\n/g,"\n");for(var b="",d=a.length,c=0;c<d;c++){var e=a.charCodeAt(c);if(e<128)b+=String.fromCharCode(e);else{if(e>127&&e<2048)b+=String.fromCharCode(e>>6|192);else{b+=String.fromCharCode(e>>12|224);b+=String.fromCharCode(e>>6&63|128)}b+=String.fromCharCode(e&63|128)}}return b},decode:function(a){if(!a.length)return"";for(var b="",d=0,c=c1=c2=0,e=a.length;d<e;){c=a.charCodeAt(d);if(c<128){b+=String.fromCharCode(c);d++}else if(c>191&&
c<224){c2=a.charCodeAt(d+1);b+=String.fromCharCode((c&31)<<6|c2&63);d+=2}else{c2=a.charCodeAt(d+1);c3=a.charCodeAt(d+2);b+=String.fromCharCode((c&15)<<12|(c2&63)<<6|c3&63);d+=3}}return b}};
