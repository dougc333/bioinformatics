!function(t){if("Intl"in this)t();else{var n=document.createElement("script");n.src="https://d3njjcbhbojbot.cloudfront.net/web/bundles/vendor/Intl.js.v0-1-4/Intl.en-US.js?features=Intl",n.onload=t,n.onerror=function(){console.error("Could not load polyfills script!"),t()},document.head.appendChild(n)}}(function(){webpackJsonp([63],{AQrm:function(module,exports,t){var n,e;n=[t,exports,module],void 0!==(e=function(require,exports,module){"use strict";function _classCallCheck(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}function getCurrentHref(){return window.location.href}function addMark(t){"undefined"!=typeof LUX&&LUX&&LUX.mark(t)}function mutationCallback(i,r){if(getCurrentHref()!==t)return void(void 0!==o&&o.destroy());var a={};i.forEach(function(t){if(t.type===e){if(!t.target.hasChildNodes())return;for(var i=t.target.firstChild;i;){if(i&&i.dataset&&i.dataset.elementtiming){var o=i.dataset.elementtiming;if(!a[o]){if(i.tagName===n){var r=new Image;r.onload=addMark.bind(null,i.dataset.elementtiming),r.src=i.src}else addMark(i.dataset.elementtiming);a[o]=!0}}i=i.nextSibling}}})}var t=getCurrentHref(),n="IMG",e="childList",i=function(){function ElementMonitor(t){_classCallCheck(this,ElementMonitor),this.onMutation=t.onMutation,this.observer=new MutationObserver(this.onMutation)}return ElementMonitor.prototype.initialize=function initialize(){this.observer.observe(document,{subtree:!0,attributes:!0,characterData:!0,childList:!0})},ElementMonitor.prototype.destroy=function destroy(){this.observer.disconnect()},ElementMonitor}(),o=new i({onMutation:mutationCallback});o.initialize()}.apply(exports,n))&&(module.exports=e)}},["AQrm"])});