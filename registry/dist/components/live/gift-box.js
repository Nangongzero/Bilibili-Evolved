!function(n,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports["live/gift-box"]=e():n["live/gift-box"]=e()}(self,(function(){return function(){var n={894:function(n,e,t){var o=t(645)((function(n){return n[1]}));o.push([n.id,".player-full-win .gift-control-section {\n  display: block !important;\n  left: unset;\n  bottom: unset;\n  top: 100vh;\n  right: 302px;\n}\n.player-full-win .z-gift-package .wrap {\n  right: 0;\n  bottom: 74px;\n}\n.player-full-win.hide-aside-area .gift-control-section {\n  right: 0;\n}\n\n.live-web-player-controller .fullscreen-gift-box {\n  display: none;\n}\n\n@media screen and (min-width: 1038px) {\n  .player-full-win:not(.fullscreen-gift-box-unloaded) .gift-control-panel .z-gift-package .arrow-bottom.popup::before, .player-full-win:not(.fullscreen-gift-box-unloaded) .gift-control-panel .z-gift-package .arrow-bottom.popup::after {\n    left: 50% !important;\n  }\n  .player-full-win:not(.fullscreen-gift-box-unloaded) .live-web-player-controller .control-area .fullscreen-gift-box {\n    display: flex;\n    align-self: center;\n    margin: 0 3px;\n    padding: 0 3px;\n    line-height: 36px;\n    cursor: pointer;\n    color: #FDFDFD;\n  }\n  .player-full-win:not(.fullscreen-gift-box-unloaded) .live-web-player-controller .control-area .fullscreen-gift-box:hover {\n    color: #FFF;\n  }\n}",""]),n.exports=o},645:function(n){"use strict";
// eslint-disable-next-line func-names
n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t=n(e);return e[2]?"@media ".concat(e[2]," {").concat(t,"}"):t})).join("")},
// eslint-disable-next-line func-names
e.i=function(n,t,o){"string"==typeof n&&(
// eslint-disable-next-line no-param-reassign
n=[[null,n,""]]);var r={};if(o)for(var l=0;l<this.length;l++){
// eslint-disable-next-line prefer-destructuring
var i=this[l][0];null!=i&&(r[i]=!0)}for(var a=0;a<n.length;a++){var c=[].concat(n[a]);o&&r[c[0]]||(t&&(c[2]?c[2]="".concat(t," and ").concat(c[2]):c[2]=t),e.push(c))}},e}},564:function(n,e,t){var o=t(894);o&&o.__esModule&&(o=o.default),n.exports="string"==typeof o?o:o.toString()}},e={};function t(o){var r=e[o];if(void 0!==r)return r.exports;var l=e[o]={id:o,exports:{}};return n[o](l,l.exports,t),l.exports}t.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return t.d(e,{a:e}),e},t.d=function(n,e){for(var o in e)t.o(e,o)&&!t.o(n,o)&&Object.defineProperty(n,o,{enumerable:!0,get:e[o]})},t.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)};var o={};return function(){"use strict";t.d(o,{component:function(){return c}});var n=coreApis.componentApis.live.liveControlBar,e=coreApis.style,r=coreApis.utils.urls,l=t(564),i=t.n(l);const a="fullscreen-gift-box",c={name:"liveGiftBox",displayName:"直播全屏包裹",description:{"zh-CN":"在直播的网页全屏(不能是全屏)模式下往控制栏添加包裹按钮."},urlInclude:r.liveUrls,tags:[componentsTags.live],entry:async()=>{let t;(0,n.waitForControlBar)({init:()=>(0,e.addStyle)(i(),"fullscreen-gift-box"),callback:async n=>{const e=dq(n,".right-area");if(e){if(!dq(e,".fullscreen-gift-box")){if(!t){const n=".gift-package";t=document.createElement("div"),t.innerHTML="包裹",t.classList.add(a),t.addEventListener("click",(()=>{dq(n)?.click()}))}e.appendChild(t)}}else console.warn("[fullscreenGiftBox] ref elements not found",null===e)}})},reload:()=>document.body.classList.remove("fullscreen-gift-box-unloaded"),unload:()=>document.body.classList.add("fullscreen-gift-box-unloaded"),commitHash:"259797c283aac82bb5ead0c2c214b08a12a37c25"}}(),o=o.component}()}));