!function(e,n){"object"==typeof exports&&"object"==typeof module?module.exports=n():"function"==typeof define&&define.amd?define([],n):"object"==typeof exports?exports["video/bvid-convert"]=n():e["video/bvid-convert"]=n()}(self,(function(){return function(){var e={309:function(e,n,t){var i=t(645)((function(e){return e[1]}));i.push([e.id,".bvid-convert {\n  order: -1;\n  flex-direction: column;\n  border-radius: 4px;\n  padding: 6px 8px;\n  width: 100%;\n  -webkit-user-select: text;\n          user-select: text;\n  box-sizing: border-box;\n  box-shadow: 0 0 0 1px rgba(136,136,136,0.26667);\n  background-color: #fff;\n}\nbody.dark .bvid-convert {\n  background-color: #333;\n}\n.bvid-convert-item {\n  font-size: 14px;\n  display: flex;\n  align-items: center;\n  grid-gap: 6px;\n  gap: 6px;\n}\n.bvid-convert-item-copy {\n  transition: transform 0.3s ease-out;\n  cursor: pointer;\n}\n.bvid-convert-item-copy:active {\n  transform: scale(0.9);\n}",""]),e.exports=i},645:function(e){"use strict";
// eslint-disable-next-line func-names
e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t=e(n);return n[2]?"@media ".concat(n[2]," {").concat(t,"}"):t})).join("")},
// eslint-disable-next-line func-names
n.i=function(e,t,i){"string"==typeof e&&(
// eslint-disable-next-line no-param-reassign
e=[[null,e,""]]);var o={};if(i)for(var r=0;r<this.length;r++){
// eslint-disable-next-line prefer-destructuring
var c=this[r][0];null!=c&&(o[c]=!0)}for(var a=0;a<e.length;a++){var s=[].concat(e[a]);i&&o[s[0]]||(t&&(s[2]?s[2]="".concat(t," and ").concat(s[2]):s[2]=t),n.push(s))}},n}},379:function(e,n,t){"use strict";var i,o=function(){return void 0===i&&(
// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
// @see https://github.com/webpack-contrib/style-loader/issues/177
i=Boolean(window&&document&&document.all&&!window.atob)),i},r=function(){var e={};return function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}e[n]=t}return e[n]}}(),c=[];function a(e){for(var n=-1,t=0;t<c.length;t++)if(c[t].identifier===e){n=t;break}return n}function s(e,n){for(var t={},i=[],o=0;o<e.length;o++){var r=e[o],s=n.base?r[0]+n.base:r[0],d=t[s]||0,u="".concat(s," ").concat(d);t[s]=d+1;var l=a(u),f={css:r[1],media:r[2],sourceMap:r[3]};-1!==l?(c[l].references++,c[l].updater(f)):c.push({identifier:u,updater:m(f,n),references:1}),i.push(u)}return i}function d(e){var n=document.createElement("style"),i=e.attributes||{};if(void 0===i.nonce){var o=t.nc;o&&(i.nonce=o)}if(Object.keys(i).forEach((function(e){n.setAttribute(e,i[e])})),"function"==typeof e.insert)e.insert(n);else{var c=r(e.insert||"head");if(!c)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");c.appendChild(n)}return n}var u,l=(u=[],function(e,n){return u[e]=n,u.filter(Boolean).join("\n")});function f(e,n,t,i){var o=t?"":i.media?"@media ".concat(i.media," {").concat(i.css,"}"):i.css;if(e.styleSheet)e.styleSheet.cssText=l(n,o);else{var r=document.createTextNode(o),c=e.childNodes;c[n]&&e.removeChild(c[n]),c.length?e.insertBefore(r,c[n]):e.appendChild(r)}}function v(e,n,t){var i=t.css,o=t.media,r=t.sourceMap;if(o?e.setAttribute("media",o):e.removeAttribute("media"),r&&"undefined"!=typeof btoa&&(i+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(r))))," */")),e.styleSheet)e.styleSheet.cssText=i;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(i))}}var p=null,b=0;function m(e,n){var t,i,o;if(n.singleton){var r=b++;t=p||(p=d(n)),i=f.bind(null,t,r,!1),o=f.bind(null,t,r,!0)}else t=d(n),i=v.bind(null,t,n),o=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)};return i(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap)return;i(e=n)}else o()}}e.exports=function(e,n){(n=n||{}).singleton||"boolean"==typeof n.singleton||(n.singleton=o());var t=s(e=e||[],n);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var i=0;i<t.length;i++){var o=a(t[i]);c[o].references--}for(var r=s(e,n),d=0;d<t.length;d++){var u=a(t[d]);0===c[u].references&&(c[u].updater(),c.splice(u,1))}t=r}}}},238:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return p}});var i=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"bvid-convert"},[e.aid&&e.bvid?[t("div",{staticClass:"bvid-convert-item"},[e._v("\n      "+e._s(e.aid)+"\n      "),t("div",{staticClass:"bvid-convert-item-copy",attrs:{title:"复制链接"},on:{click:function(n){return e.copyLink("aid")}}},[t("VIcon",{attrs:{size:16,icon:e.aidCopyed?"mdi-check":"mdi-link"}})],1)]),e._v(" "),t("div",{staticClass:"bvid-convert-item"},[e._v("\n      "+e._s(e.bvid)+"\n      "),t("div",{staticClass:"bvid-convert-item-copy",attrs:{title:"复制链接"},on:{click:function(n){return e.copyLink("bvid")}}},[t("VIcon",{attrs:{size:16,icon:e.bvidCopyed?"mdi-check":"mdi-link"}})],1)])]:e._e()],2)};i._withStripped=!0;var o=coreApis.observer,r=t(569),c=coreApis.ui,a=Vue.extend({components:{VIcon:c.VIcon},data:()=>({aid:"",aidCopyed:!1,bvid:"",bvidCopyed:!1}),async mounted(){(0,o.videoChange)((async()=>{this.aid=`av${unsafeWindow.aid}`,this.bvid=unsafeWindow.bvid;const e=await(0,r.select)(".av-link,.bv-link,.bvid-link");e&&(this.bvid=e.innerHTML.trim())}))},methods:{async copyLink(e){if(this[`${e}Copyed`])return;const n=window.location.search,t=document.URL.replace(n,"").replace(/\/[^\/]+$/,`/${this[e]}`)+n;await navigator.clipboard.writeText(t),this[`${e}Copyed`]=!0,setTimeout((()=>this[`${e}Copyed`]=!1),1e3)}}}),s=t(379),d=t.n(s),u=t(309),l=t.n(u),f={insert:"head",singleton:!1};d()(l(),f),l().locals;var v=function(e,n,t,i,o,r,c,a){var s,d="function"==typeof e?e.options:e;if(n&&(d.render=n,d.staticRenderFns=t,d._compiled=!0),i&&(d.functional=!0),r&&(d._scopeId="data-v-"+r),c?(s=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),o&&o.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(c)},d._ssrRegister=s):o&&(s=a?function(){o.call(this,(d.functional?this.parent:this).$root.$options.shadowRoot)}:o),s)if(d.functional){d._injectStyles=s;var u=d.render;d.render=function(e,n){return s.call(n),u(e,n)}}else{var l=d.beforeCreate;d.beforeCreate=l?[].concat(l,s):[s]}return{exports:e,options:d}}(a,i,[],!1,null,null,null);v.options.__file="registry/lib/components/video/bvid-convert/BvidConvert.vue";var p=v.exports},569:function(e){"use strict";e.exports=coreApis.spinQuery}},n={};function t(i){var o=n[i];if(void 0!==o)return o.exports;var r=n[i]={id:i,exports:{}};return e[i](r,r.exports,t),r.exports}t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,{a:n}),n},t.d=function(e,n){for(var i in n)t.o(n,i)&&!t.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:n[i]})},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var i={};return function(){"use strict";t.d(i,{component:function(){return o}});var e=t(569),n=coreApis.utils.urls;const o={name:"bvidConvert",displayName:"BV 号转换",entry:none,description:{"zh-CN":"在功能面板中显示视频的 AV 号和 BV 号."},tags:[componentsTags.video,componentsTags.utils],widget:{component:()=>Promise.resolve().then(t.bind(t,238)).then((e=>e.default)),condition:e.hasVideo},urlInclude:n.videoAndBangumiUrls,commitHash:"758500b73a42eb701eb7723934900e124e4e1ddc"}}(),i=i.component}()}));