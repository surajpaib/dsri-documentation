(window.webpackJsonp=window.webpackJsonp||[]).push([[103],{170:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(173),c=n(22),l=n(26),i=n(183),s=n(3),u=n(7),p=n(174),m=n(175),d=n(214),b=n(222),f=n(223),y=n(221),h=n(176),g=n(184),v=n(232),k=n(80),j=n.n(k),O=["item","onItemClick","collapsible","activePath"],E=["item","onItemClick","activePath","collapsible"];var C=function e(t,n){return"link"===t.type?Object(m.isSamePath)(t.href,n):"category"===t.type&&t.items.some((function(t){return e(t,n)}))};function N(e){var t,n,o,c=e.item,l=e.onItemClick,i=e.collapsible,m=e.activePath,d=Object(u.a)(e,O),b=c.items,f=c.label,y=C(c,m),h=(n=y,o=Object(a.useRef)(n),Object(a.useEffect)((function(){o.current=n}),[n]),o.current),g=Object(a.useState)((function(){return!!i&&(!y&&c.collapsed)})),v=g[0],k=g[1],E=Object(a.useRef)(null),N=Object(a.useState)(void 0),x=N[0],P=N[1],T=function(e){var t;void 0===e&&(e=!0),P(e?(null===(t=E.current)||void 0===t?void 0:t.scrollHeight)+"px":void 0)};Object(a.useEffect)((function(){y&&!h&&v&&k(!1)}),[y,h,v]);var S=Object(a.useCallback)((function(e){e.preventDefault(),x||T(),setTimeout((function(){return k((function(e){return!e}))}),100)}),[x]);return 0===b.length?null:r.a.createElement("li",{className:Object(p.a)("menu__list-item",{"menu__list-item--collapsed":v}),key:f},r.a.createElement("a",Object(s.a)({className:Object(p.a)("menu__link",(t={"menu__link--sublist":i,"menu__link--active":i&&y},t[j.a.menuLinkText]=!i,t)),onClick:i?S:void 0,href:i?"#!":void 0},d),f),r.a.createElement("ul",{className:"menu__list",ref:E,style:{height:x},onTransitionEnd:function(){v||T(!1)}},b.map((function(e){return r.a.createElement(w,{tabIndex:v?"-1":"0",key:e.label,item:e,onItemClick:l,collapsible:i,activePath:m})}))))}function x(e){var t=e.item,n=e.onItemClick,a=e.activePath,o=(e.collapsible,Object(u.a)(e,E)),c=t.href,l=t.label,i=C(t,a);return r.a.createElement("li",{className:"menu__list-item",key:l},r.a.createElement(h.a,Object(s.a)({className:Object(p.a)("menu__link",{"menu__link--active":i}),to:c},Object(g.a)(c)?{isNavLink:!0,exact:!0,onClick:n}:{target:"_blank",rel:"noreferrer noopener"},o),l))}function w(e){switch(e.item.type){case"category":return r.a.createElement(N,e);case"link":default:return r.a.createElement(x,e)}}var P=function(e){var t,n,o=e.path,c=e.sidebar,l=e.sidebarCollapsible,i=void 0===l||l,s=e.onCollapse,u=e.isHidden,h=Object(a.useState)(!1),g=h[0],k=h[1],O=Object(m.useThemeConfig)(),E=O.navbar.hideOnScroll,C=O.hideableSidebar,N=Object(d.a)().isAnnouncementBarClosed,x=Object(y.a)().scrollY;Object(b.a)(g);var P=Object(f.a)();return Object(a.useEffect)((function(){P===f.b.desktop&&k(!1)}),[P]),r.a.createElement("div",{className:Object(p.a)(j.a.sidebar,(t={},t[j.a.sidebarWithHideableNavbar]=E,t[j.a.sidebarHidden]=u,t))},E&&r.a.createElement(v.a,{tabIndex:-1,className:j.a.sidebarLogo}),r.a.createElement("div",{className:Object(p.a)("menu","menu--responsive","thin-scrollbar",j.a.menu,(n={"menu--show":g},n[j.a.menuWithAnnouncementBar]=!N&&0===x,n))},r.a.createElement("button",{"aria-label":g?"Close Menu":"Open Menu","aria-haspopup":"true",className:"button button--secondary button--sm menu__button",type:"button",onClick:function(){k(!g)}},g?r.a.createElement("span",{className:Object(p.a)(j.a.sidebarMenuIcon,j.a.sidebarMenuCloseIcon)},"\xd7"):r.a.createElement("svg",{"aria-label":"Menu",className:j.a.sidebarMenuIcon,xmlns:"http://www.w3.org/2000/svg",height:24,width:24,viewBox:"0 0 32 32",role:"img",focusable:"false"},r.a.createElement("title",null,"Menu"),r.a.createElement("path",{stroke:"currentColor",strokeLinecap:"round",strokeMiterlimit:"10",strokeWidth:"2",d:"M4 7h22M4 15h22M4 23h22"}))),r.a.createElement("ul",{className:"menu__list"},c.map((function(e){return r.a.createElement(w,{key:e.label,item:e,onItemClick:function(e){e.target.blur(),k(!1)},collapsible:i,activePath:o})})))),C&&r.a.createElement("button",{type:"button",title:"Collapse sidebar","aria-label":"Collapse sidebar",className:Object(p.a)("button button--secondary button--outline",j.a.collapseSidebarButton),onClick:s}))},T=n(196),S=n(213),_=n(179),D=n(81),I=n.n(D);function L(e){var t,n,l,s,u=e.currentDocRoute,d=e.versionMetadata,b=e.children,f=Object(c.default)(),y=f.siteConfig,h=f.isClient,g=d.pluginId,v=d.permalinkToSidebar,k=d.docsSidebars,j=d.version,O=v[u.path],E=k[O],C=Object(a.useState)(!1),N=C[0],x=C[1],w=Object(a.useState)(!1),S=w[0],_=w[1],D=Object(a.useCallback)((function(){S&&_(!1),x(!N)}),[S]);return r.a.createElement(i.a,{key:h,searchMetadatas:{version:j,tag:Object(m.docVersionSearchTag)(g,j)}},r.a.createElement("div",{className:I.a.docPage},E&&r.a.createElement("div",{className:Object(p.a)(I.a.docSidebarContainer,(t={},t[I.a.docSidebarContainerHidden]=N,t)),onTransitionEnd:function(e){e.currentTarget.classList.contains(I.a.docSidebarContainer)&&N&&_(!0)},role:"complementary"},r.a.createElement(P,{key:O,sidebar:E,path:u.path,sidebarCollapsible:null===(n=null===(l=y.themeConfig)||void 0===l?void 0:l.sidebarCollapsible)||void 0===n||n,onCollapse:D,isHidden:S}),S&&r.a.createElement("div",{className:I.a.collapsedDocSidebar,title:"Expand sidebar","aria-label":"Expand sidebar",tabIndex:0,role:"button",onKeyDown:D,onClick:D})),r.a.createElement("main",{className:I.a.docMainContainer},r.a.createElement("div",{className:Object(p.a)("container padding-vert--lg",I.a.docItemWrapper,(s={},s[I.a.docItemWrapperEnhanced]=N,s))},r.a.createElement(o.a,{components:T.a},b)))))}t.default=function(e){var t=e.route.routes,n=e.versionMetadata,a=e.location,o=t.find((function(e){return Object(_.matchPath)(a.pathname,e)}));return o?r.a.createElement(L,{currentDocRoute:o,versionMetadata:n},Object(l.a)(t)):r.a.createElement(S.default,e)}},173:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return b}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=r.a.createContext({}),u=function(e){var t=r.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=u(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),p=u(n),d=a,b=p["".concat(c,".").concat(d)]||p[d]||m[d]||o;return n?r.a.createElement(b,l(l({ref:t},s),{},{components:n})):r.a.createElement(b,l({ref:t},s))}));function b(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,c=new Array(o);c[0]=d;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:a,c[1]=l;for(var s=2;s<o;s++)c[s]=n[s];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},193:function(e,t,n){"use strict";const a=(e,{target:t=document.body}={})=>{const n=document.createElement("textarea"),a=document.activeElement;n.value=e,n.setAttribute("readonly",""),n.style.contain="strict",n.style.position="absolute",n.style.left="-9999px",n.style.fontSize="12pt";const r=document.getSelection();let o=!1;r.rangeCount>0&&(o=r.getRangeAt(0)),t.append(n),n.select(),n.selectionStart=0,n.selectionEnd=e.length;let c=!1;try{c=document.execCommand("copy")}catch(l){}return n.remove(),o&&(r.removeAllRanges(),r.addRange(o)),a&&a.focus(),c};e.exports=a,e.exports.default=a},194:function(e,t){function n(e){let t,n=[];for(let a of e.split(",").map(e=>e.trim()))if(/^-?\d+$/.test(a))n.push(parseInt(a,10));else if(t=a.match(/^(-?\d+)(-|\.\.\.?|\u2025|\u2026|\u22EF)(-?\d+)$/)){let[e,a,r,o]=t;if(a&&o){a=parseInt(a),o=parseInt(o);const e=a<o?1:-1;"-"!==r&&".."!==r&&"\u2025"!==r||(o+=e);for(let t=a;t!==o;t+=e)n.push(t)}}return n}t.default=n,e.exports=n},196:function(e,t,n){"use strict";var a=n(3),r=n(0),o=n.n(r),c=n(176),l=n(174),i={plain:{backgroundColor:"#2a2734",color:"#9a86fd"},styles:[{types:["comment","prolog","doctype","cdata","punctuation"],style:{color:"#6c6783"}},{types:["namespace"],style:{opacity:.7}},{types:["tag","operator","number"],style:{color:"#e09142"}},{types:["property","function"],style:{color:"#9a86fd"}},{types:["tag-id","selector","atrule-id"],style:{color:"#eeebff"}},{types:["attr-name"],style:{color:"#c4b9fe"}},{types:["boolean","string","entity","url","attr-value","keyword","control","directive","unit","statement","regex","at-rule","placeholder","variable"],style:{color:"#ffcc99"}},{types:["deleted"],style:{textDecorationLine:"line-through"}},{types:["inserted"],style:{textDecorationLine:"underline"}},{types:["italic"],style:{fontStyle:"italic"}},{types:["important","bold"],style:{fontWeight:"bold"}},{types:["important"],style:{color:"#c4b9fe"}}]},s={Prism:n(23).a,theme:i};function u(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function p(){return(p=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}var m=/\r\n|\r|\n/,d=function(e){0===e.length?e.push({types:["plain"],content:"\n",empty:!0}):1===e.length&&""===e[0].content&&(e[0].content="\n",e[0].empty=!0)},b=function(e,t){var n=e.length;return n>0&&e[n-1]===t?e:e.concat(t)},f=function(e,t){var n=e.plain,a=Object.create(null),r=e.styles.reduce((function(e,n){var a=n.languages,r=n.style;return a&&!a.includes(t)||n.types.forEach((function(t){var n=p({},e[t],r);e[t]=n})),e}),a);return r.root=n,r.plain=p({},n,{backgroundColor:null}),r};function y(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&-1===t.indexOf(a)&&(n[a]=e[a]);return n}var h=function(e){function t(){for(var t=this,n=[],a=arguments.length;a--;)n[a]=arguments[a];e.apply(this,n),u(this,"getThemeDict",(function(e){if(void 0!==t.themeDict&&e.theme===t.prevTheme&&e.language===t.prevLanguage)return t.themeDict;t.prevTheme=e.theme,t.prevLanguage=e.language;var n=e.theme?f(e.theme,e.language):void 0;return t.themeDict=n})),u(this,"getLineProps",(function(e){var n=e.key,a=e.className,r=e.style,o=p({},y(e,["key","className","style","line"]),{className:"token-line",style:void 0,key:void 0}),c=t.getThemeDict(t.props);return void 0!==c&&(o.style=c.plain),void 0!==r&&(o.style=void 0!==o.style?p({},o.style,r):r),void 0!==n&&(o.key=n),a&&(o.className+=" "+a),o})),u(this,"getStyleForToken",(function(e){var n=e.types,a=e.empty,r=n.length,o=t.getThemeDict(t.props);if(void 0!==o){if(1===r&&"plain"===n[0])return a?{display:"inline-block"}:void 0;if(1===r&&!a)return o[n[0]];var c=a?{display:"inline-block"}:{},l=n.map((function(e){return o[e]}));return Object.assign.apply(Object,[c].concat(l))}})),u(this,"getTokenProps",(function(e){var n=e.key,a=e.className,r=e.style,o=e.token,c=p({},y(e,["key","className","style","token"]),{className:"token "+o.types.join(" "),children:o.content,style:t.getStyleForToken(o),key:void 0});return void 0!==r&&(c.style=void 0!==c.style?p({},c.style,r):r),void 0!==n&&(c.key=n),a&&(c.className+=" "+a),c})),u(this,"tokenize",(function(e,t,n,a){var r={code:t,grammar:n,language:a,tokens:[]};e.hooks.run("before-tokenize",r);var o=r.tokens=e.tokenize(r.code,r.grammar,r.language);return e.hooks.run("after-tokenize",r),o}))}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.render=function(){var e=this.props,t=e.Prism,n=e.language,a=e.code,r=e.children,o=this.getThemeDict(this.props),c=t.languages[n];return r({tokens:function(e){for(var t=[[]],n=[e],a=[0],r=[e.length],o=0,c=0,l=[],i=[l];c>-1;){for(;(o=a[c]++)<r[c];){var s=void 0,u=t[c],p=n[c][o];if("string"==typeof p?(u=c>0?u:["plain"],s=p):(u=b(u,p.type),p.alias&&(u=b(u,p.alias)),s=p.content),"string"==typeof s){var f=s.split(m),y=f.length;l.push({types:u,content:f[0]});for(var h=1;h<y;h++)d(l),i.push(l=[]),l.push({types:u,content:f[h]})}else c++,t.push(u),n.push(s),a.push(0),r.push(s.length)}c--,t.pop(),n.pop(),a.pop(),r.pop()}return d(l),i}(void 0!==c?this.tokenize(t,a,c,n):[a]),className:"prism-code language-"+n,style:void 0!==o?o.root:{},getLineProps:this.getLineProps,getTokenProps:this.getTokenProps})},t}(r.Component),g=n(193),v=n.n(g),k=n(194),j=n.n(k),O={plain:{color:"#bfc7d5",backgroundColor:"#292d3e"},styles:[{types:["comment"],style:{color:"rgb(105, 112, 152)",fontStyle:"italic"}},{types:["string","inserted"],style:{color:"rgb(195, 232, 141)"}},{types:["number"],style:{color:"rgb(247, 140, 108)"}},{types:["builtin","char","constant","function"],style:{color:"rgb(130, 170, 255)"}},{types:["punctuation","selector"],style:{color:"rgb(199, 146, 234)"}},{types:["variable"],style:{color:"rgb(191, 199, 213)"}},{types:["class-name","attr-name"],style:{color:"rgb(255, 203, 107)"}},{types:["tag","deleted"],style:{color:"rgb(255, 85, 114)"}},{types:["operator"],style:{color:"rgb(137, 221, 255)"}},{types:["boolean"],style:{color:"rgb(255, 88, 116)"}},{types:["keyword"],style:{fontStyle:"italic"}},{types:["doctype"],style:{color:"rgb(199, 146, 234)",fontStyle:"italic"}},{types:["namespace"],style:{color:"rgb(178, 204, 214)"}},{types:["url"],style:{color:"rgb(221, 221, 221)"}}]},E=n(192),C=n(175),N=function(){var e=Object(C.useThemeConfig)().prism,t=Object(E.a)().isDarkTheme,n=e.theme||O,a=e.darkTheme||n;return t?a:n},x=n(57),w=n.n(x),P=/{([\d,-]+)}/,T=function(e){void 0===e&&(e=["js","jsBlock","jsx","python","html"]);var t={js:{start:"\\/\\/",end:""},jsBlock:{start:"\\/\\*",end:"\\*\\/"},jsx:{start:"\\{\\s*\\/\\*",end:"\\*\\/\\s*\\}"},python:{start:"#",end:""},html:{start:"\x3c!--",end:"--\x3e"}},n=["highlight-next-line","highlight-start","highlight-end"].join("|"),a=e.map((function(e){return"(?:"+t[e].start+"\\s*("+n+")\\s*"+t[e].end+")"})).join("|");return new RegExp("^\\s*(?:"+a+")\\s*$")},S=/(?:title=")(.*)(?:")/,_=function(e){var t=e.children,n=e.className,c=e.metastring,i=Object(C.useThemeConfig)().prism,u=Object(r.useState)(!1),p=u[0],m=u[1],d=Object(r.useState)(!1),b=d[0],f=d[1];Object(r.useEffect)((function(){f(!0)}),[]);var y=Object(r.useRef)(null),g=[],k="",O=N();if(Array.isArray(t)&&(t=t.join("")),c&&P.test(c)){var E=c.match(P)[1];g=j()(E).filter((function(e){return e>0}))}c&&S.test(c)&&(k=c.match(S)[1]);var x=n&&n.replace(/language-/,"");!x&&i.defaultLanguage&&(x=i.defaultLanguage);var _=t.replace(/\n$/,"");if(0===g.length&&void 0!==x){for(var D,I="",L=function(e){switch(e){case"js":case"javascript":case"ts":case"typescript":return T(["js","jsBlock"]);case"jsx":case"tsx":return T(["js","jsBlock","jsx"]);case"html":return T(["js","jsBlock","html"]);case"python":case"py":return T(["python"]);default:return T()}}(x),M=t.replace(/\n$/,"").split("\n"),B=0;B<M.length;){var R=B+1,A=M[B].match(L);if(null!==A){switch(A.slice(1).reduce((function(e,t){return e||t}),void 0)){case"highlight-next-line":I+=R+",";break;case"highlight-start":D=R;break;case"highlight-end":I+=D+"-"+(R-1)+","}M.splice(B,1)}else B+=1}g=j()(I),_=M.join("\n")}var W=function(){v()(_),m(!0),setTimeout((function(){return m(!1)}),2e3)};return o.a.createElement(h,Object(a.a)({},s,{key:String(b),theme:O,code:_,language:x}),(function(e){var t,n=e.className,r=e.style,c=e.tokens,i=e.getLineProps,s=e.getTokenProps;return o.a.createElement(o.a.Fragment,null,k&&o.a.createElement("div",{style:r,className:w.a.codeBlockTitle},k),o.a.createElement("div",{className:w.a.codeBlockContent},o.a.createElement("div",{tabIndex:0,className:Object(l.a)(n,w.a.codeBlock,"thin-scrollbar",(t={},t[w.a.codeBlockWithTitle]=k,t))},o.a.createElement("div",{className:w.a.codeBlockLines,style:r},c.map((function(e,t){1===e.length&&""===e[0].content&&(e[0].content="\n");var n=i({line:e,key:t});return g.includes(t+1)&&(n.className=n.className+" docusaurus-highlight-code-line"),o.a.createElement("div",Object(a.a)({key:t},n),e.map((function(e,t){return o.a.createElement("span",Object(a.a)({key:t},s({token:e,key:t})))})))})))),o.a.createElement("button",{ref:y,type:"button","aria-label":"Copy code to clipboard",className:Object(l.a)(w.a.copyButton),onClick:W},p?"Copied":"Copy")))}))},D=n(7),I=(n(58),n(59)),L=n.n(I),M=["id"],B=function(e){return function(t){var n,a=t.id,r=Object(D.a)(t,M),c=Object(C.useThemeConfig)().navbar.hideOnScroll;return a?o.a.createElement(e,r,o.a.createElement("a",{"aria-hidden":"true",tabIndex:-1,className:Object(l.a)("anchor",(n={},n[L.a.enhancedAnchor]=!c,n)),id:a}),r.children,o.a.createElement("a",{className:"hash-link",href:"#"+a,title:"Direct link to heading"},"#")):o.a.createElement(e,r)}},R=n(60),A=n.n(R),W={code:function(e){var t=e.children;return"string"==typeof t?t.includes("\n")?o.a.createElement(_,e):o.a.createElement("code",e):t},a:function(e){return o.a.createElement(c.a,e)},pre:function(e){return o.a.createElement("div",Object(a.a)({className:A.a.mdxCodeBlock},e))},h1:B("h1"),h2:B("h2"),h3:B("h3"),h4:B("h4"),h5:B("h5"),h6:B("h6")};t.a=W},213:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(183);t.default=function(){return r.a.createElement(o.a,{title:"Page Not Found"},r.a.createElement("main",{className:"container margin-vert--xl"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col col--6 col--offset-3"},r.a.createElement("h1",{className:"hero__title"},"Page Not Found"),r.a.createElement("p",null,"We could not find what you were looking for."),r.a.createElement("p",null,"Please contact the owner of the site that linked you to the original URL and let them know their link is broken.")))))}}}]);