!function(r,e){for(var n in e)r[n]=e[n]}(exports,function(r){var e={};function n(t){if(e[t])return e[t].exports;var o=e[t]={i:t,l:!1,exports:{}};return r[t].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=r,n.c=e,n.d=function(r,e,t){n.o(r,e)||Object.defineProperty(r,e,{enumerable:!0,get:t})},n.r=function(r){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(r,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(r,"__esModule",{value:!0})},n.t=function(r,e){if(1&e&&(r=n(r)),8&e)return r;if(4&e&&"object"==typeof r&&r&&r.__esModule)return r;var t=Object.create(null);if(n.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:r}),2&e&&"string"!=typeof r)for(var o in r)n.d(t,o,function(e){return r[e]}.bind(null,o));return t},n.n=function(r){var e=r&&r.__esModule?function(){return r.default}:function(){return r};return n.d(e,"a",e),e},n.o=function(r,e){return Object.prototype.hasOwnProperty.call(r,e)},n.p="",n(n.s=1)}([function(r,e){r.exports=require("vue")},function(r,e,n){"use strict";n.r(e);var t=n(0),o=n.n(t);o.a.regComponents=function(r){var e=this;r&&Object.keys(r).forEach((function(n){e.component(n,r[n])}))},o.a.usePlugins=function(r){if(!Array.isArray(r))throw"usePlugins 只能接收数组类型的参数";r.forEach((function(r){var e=r,n=null;Array.isArray(r)&&!r.install&&(e=r[0],n=r[1]),this.use(e,n)}),o.a)},o.a.regMixins=function(r){if(!Array.isArray(r))throw"regMixins 只能接收数组类型的参数";r.forEach((function(r){this.mixin(r)}),o.a)},o.a.byMergeStrategies={includeAllWihtArray:function(r,e,n){return e?r?Array.isArray(r)?r.concat(e):[r].concat(e):Array.isArray(e)?e:[e]:r}};var i={computed:{$allSlots:function(){return Object.values(this.$slots).reduce((function(r,e){return r.concat(e)}),[])}}};o.a.regMixins([i])}]));
//# sourceMappingURL=vue-exp.commonjs.js.map