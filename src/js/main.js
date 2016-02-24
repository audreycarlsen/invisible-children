// require("./lib/social");
require("./lib/ads");
// var track = require("./lib/tracking");

require("component-responsive-frame/child");
var qsa = require("./lib/qsa");
var animateScroll = require("./lib/animateScroll");

qsa(".subhed a").forEach(function(a) {
  a.addEventListener("click", function(e) {
    var href = this.getAttribute("href");
    if (href.indexOf("#") != 0) return;
    var section = document.querySelector(href);
    if (!section) return;
    e.preventDefault();
    animateScroll(section);
    window.history.pushState(href, href, href);
  });
});
