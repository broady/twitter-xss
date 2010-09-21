jQuery.getScript("http://cornify.com/js/cornify.js");

setInterval(function() {
  typeof window["cornify_add"] != "undefined" && cornify_add();
}, 500);