(function(t){function e(e){for(var r,i,s=e[0],c=e[1],l=e[2],f=0,p=[];f<s.length;f++)i=s[f],Object.prototype.hasOwnProperty.call(a,i)&&a[i]&&p.push(a[i][0]),a[i]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(t[r]=c[r]);u&&u(e);while(p.length)p.shift()();return o.push.apply(o,l||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],r=!0,s=1;s<n.length;s++){var c=n[s];0!==a[c]&&(r=!1)}r&&(o.splice(e--,1),t=i(i.s=n[0]))}return t}var r={},a={app:0},o=[];function i(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=t,i.c=r,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)i.d(n,r,function(e){return t[e]}.bind(null,r));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/nicolealli/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=e,s=s.slice();for(var l=0;l<s.length;l++)e(s[l]);var u=c;o.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";n("85ec")},"1c30":function(t,e,n){},"3bba":function(t,e,n){"use strict";n("df8f")},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("Header"),n("router-view"),n("Footer")],1)},o=[],i=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("footer",{staticClass:"footer",attrs:{id:"footer"}},[r("div",{staticClass:"footer__grid"},[r("div",{staticClass:"footer__col-1"},[r("h2",{staticClass:"text--thick"},[t._v("Contact")]),r("ul",{staticClass:"contact-list"},[t._m(0),r("li",{staticClass:"contact-list__item"},[r("a",{staticClass:"link text--thick",attrs:{href:"https://www.linkedin.com/in/nicole-alli/",target:"_blank"}},[t._v(" linkedin "),r("img",{staticClass:"external-icon",attrs:{src:t.externalLink,alt:"opens in new window"}})])]),r("li",{staticClass:"contact-list__item"},[r("a",{staticClass:"link text--thick",attrs:{href:"https://twitter.com/ItsTheNicoleA",target:"_blank"}},[t._v(" twitter "),r("img",{staticClass:"external-icon",attrs:{src:t.externalLink,alt:"opens in new window"}})])])])]),r("div",{staticClass:"footer__col-2"},[r("figure",[r("img",{attrs:{src:n("d47a"),alt:"Coco"}}),r("figcaption",[t._v(" Please enjoy this photo of my very fluffy cat, Coco. ")])])])])])},s=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("li",{staticClass:"contact-list__item"},[n("a",{staticClass:"link text--thick",attrs:{href:"mailto:alli.nicolette@gmail.com"}},[t._v(" email ")])])}],c=n("800d"),l=n.n(c),u={name:"Footer",data:function(){return{externalLink:l.a}}},f=u,p=(n("3bba"),n("2877")),h=Object(p["a"])(f,i,s,!1,null,"4e9fc96d",null),d=h.exports,m=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("header",{staticClass:"header"},[n("nav",{staticClass:"main-nav",attrs:{id:"main-nav"}},[n("router-link",{staticClass:"text--thick",attrs:{to:{path:"/"}}},[t._v(" Home ")]),n("router-link",{staticClass:"text--thick",attrs:{to:{path:"/",hash:"#about"}}},[t._v(" About ")]),n("router-link",{staticClass:"text--thick",attrs:{to:{path:"/",hash:"#portfolio"}}},[t._v(" Portfolio ")])],1),t._m(0)])},_=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("span",{staticClass:"header__resume"},[n("a",{staticClass:"header__resume-link text--thick",attrs:{href:"https://resume.creddle.io/resume/gzpy3v9gj6h",target:"_blank"}},[t._v(" Resume ")])])}],v={name:"Header"},b=v,g=(n("d5e2"),Object(p["a"])(b,m,_,!1,null,"5ca7e21e",null)),k=g.exports,x={name:"App",components:{Footer:d,Header:k}},w=x,C=(n("034f"),Object(p["a"])(w,a,o,!1,null,null,null)),y=C.exports,j=n("8c4f"),O=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},P=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("main",{staticClass:"home"},[n("h1",[t._v("Under construction")])])}],$={name:"Home",components:{},data:function(){return{components:["Hero","About","Portfolio"]}}},E=$,H=Object(p["a"])(E,O,P,!1,null,null,null),S=H.exports;r["a"].use(j["a"]);var A=[{path:"/",name:"Home",component:S}],L=new j["a"]({mode:"history",base:"/nicolealli/",routes:A,scrollBehavior:function(t){if(t.hash)return{selector:t.hash}}}),M=L,T=n("2f62");r["a"].use(T["a"]);var F=new T["a"].Store({state:{},mutations:{},actions:{},modules:{}});r["a"].config.productionTip=!1,new r["a"]({router:M,store:F,render:function(t){return t(y)}}).$mount("#app")},"800d":function(t,e,n){t.exports=n.p+"img/externalLink.cd7b69b8.svg"},"85ec":function(t,e,n){},d47a:function(t,e,n){t.exports=n.p+"img/coco.493d66e1.jpg"},d5e2:function(t,e,n){"use strict";n("1c30")},df8f:function(t,e,n){}});
//# sourceMappingURL=app.b8375c17.js.map