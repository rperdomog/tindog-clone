(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{386:function(n,e,t){"use strict";t.r(e),t.d(e,"SlidesGo",function(){return o});var r=t(5),a=t(2),s=t.n(a),l=t(7),o=function(){function o(){this.container="slides-go",o.instance||(o.instance=this)}return o.get=function(){var n=Object(r.a)(s.a.mark(function n(){return s.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Object(l.a)(""+o.api);case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}},n)}));return function(){return n.apply(this,arguments)}}(),o.prototype.getBanner=function(){var e=Object(r.a)(s.a.mark(function n(e){return s.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:o.get().then(function(n){e.innerHTML=o.inner({resources:o.getRandom(n),URL_STATIC_IMG:URL_STATIC_IMG,messages:messages})}).catch(function(n){console.log(n)});case 1:case"end":return n.stop()}},n)}));return function(n){return e.apply(this,arguments)}}(),o.getRandom=function(n){for(var e=o.maxElements,t=new Array(e),r=n.length,a=new Array(r);e--;){var s=Math.floor(Math.random()*r);t[e]=n[s in a?a[s]:s],a[s]=--r in a?a[r]:r}return t},o}(),a=(o.api=BASE_URL+"ajax/slides-go",o.inner=t(600),o.maxElements=10,o.globalVariables=["ACCOUNTS_BASE_URL","BASE_URL","STATIC_URL","URL_STATIC_IMG","LANGUAGE_SHORT"],new o);e.default=a},600:function(n,e,t){t=t(4);n.exports=(t.default||t).template({1:function(n,e,t,r,a){var s=n.lambda,o=n.escapeExpression,n=n.lookupProperty||function(n,e){if(Object.prototype.hasOwnProperty.call(n,e))return n[e]};return'                <div class="col sp-slidesgo__element">\n                    <a  rel="nofollow" href="'+o(s(null!=e?n(e,"url"):e,e))+'" target="_blank">\n                        <img src="'+o(s(null!=e?n(e,"image"):e,e))+'">\n                    </a>\n                </div>\n'},compiler:[8,">= 4.3.0"],main:function(n,e,t,r,a){var s,o=null!=e?e:n.nullContext||{},l=n.lookupProperty||function(n,e){if(Object.prototype.hasOwnProperty.call(n,e))return n[e]};return'<section id="sp-slidesgo" class="sp-slidesgo">\n    <div class="sp-slidesgo__header row row--vertical-center row--horizontal-center">\n        <a  rel="nofollow" href="https://www.slidesgo.com" target="_blank">\n            <img src="'+n.escapeExpression("function"==typeof(s=null!=(s=l(t,"URL_STATIC_IMG")||(null!=e?l(e,"URL_STATIC_IMG"):e))?s:n.hooks.helperMissing)?s.call(o,{name:"URL_STATIC_IMG",hash:{},data:a,loc:{start:{line:4,column:22},end:{line:4,column:40}}}):s)+'slidesgo.svg" title="Slidesgo" alt="Slidesgo" width="130" class="block">\n        </a>\n        <p class="mg-none mg-left-lv2-i alignc">\n            '+(null!=(s=n.lambda(null!=(s=null!=(s=null!=e?l(e,"messages"):e)?l(s,"slidesgo"):s)?l(s,"banner_text"):s,e))?s:"")+'\n        </p>\n    </div>\n    <div class="sp-slidesgo__list">\n        <div class="row">\n'+(null!=(s=l(t,"each").call(o,null!=e?l(e,"resources"):e,{name:"each",hash:{},fn:n.program(1,a,0),inverse:n.noop,data:a,loc:{start:{line:12,column:12},end:{line:18,column:21}}}))?s:"")+"        </div>\n    </div>\n</section>\n"},useData:!0})}}]);
//# sourceMappingURL=28.0e905de644c8f45d7e32.js.map