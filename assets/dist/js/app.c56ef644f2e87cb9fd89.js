/*!
 * @project        sarnia.ca Theme
 * @name           app.c56ef644f2e87cb9fd89.js
 * @author         IT Support
 * @build          Wed, Aug 7, 2019 12:01 PM ET
 * @release        1d7efb7ea74096fe5f5217d9356618bfbf5165a4 [master]
 * @copyright      Copyright (c) 2019 Corporation of the City of Sarnia
 *
 */!function(e){var n={};function t(o){if(n[o])return n[o].exports;var r=n[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,t),r.l=!0,r.exports}t.m=e,t.c=n,t.d=function(e,n,o){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:o})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(t.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)t.d(o,r,function(n){return e[n]}.bind(null,r));return o},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="/dist/",t(t.s=0)}([function(e,n,t){"use strict";t.r(n);t(1),t(2),t(3)},function(e,n){},function(e,n){var t;(t=window.jQuery)(document).ready(function(){var e=t(".wrap"),n=t(".feature-notification"),o=t(".js-primary-menu__toggle");t(".js-accordion__toggle").on("click",function(){t(this).toggleClass("js-active")}),o.on("click",function(){e.hasClass("js-nav_is_open")?setTimeout(function(){e.removeClass("js-nav_is_visible")},1e3):e.addClass("js-nav_is_visible"),e.toggleClass("js-nav_is_open"),n.toggleClass("js-nav_is_open")})})},function(e,n){var t;(t=jQuery)(function(){var e=SarniaSearchAutocomplete.url+"?action=auto_search";t(".searchform input[name=s]").autocomplete({source:function(n,o){t.getJSON(e,{term:n.term},function(e){o(t.map(e,function(e){return{label:t("<span></span>").html(e.label).text(),link:e.link}}))})},delay:500,minLength:3,select:function(e,n){n.item.link&&(window.location.href=n.item.link)}})})}]);
//# sourceMappingURL=app.c56ef644f2e87cb9fd89.js.map