(window.webpackJsonp=window.webpackJsonp||[]).push([[44,9,10],{127:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(138),i=a(178),o=a(131);var c=function(e){var t=e.nextItem,a=e.prevItem;return r.a.createElement("nav",{className:"pagination-nav","aria-label":"Blog post page navigation"},r.a.createElement("div",{className:"pagination-nav__item"},a&&r.a.createElement(o.a,{className:"pagination-nav__link",to:a.permalink},r.a.createElement("div",{className:"pagination-nav__sublabel"},"Newer Post"),r.a.createElement("div",{className:"pagination-nav__label"},"\xab ",a.title))),r.a.createElement("div",{className:"pagination-nav__item pagination-nav__item--next"},t&&r.a.createElement(o.a,{className:"pagination-nav__link",to:t.permalink},r.a.createElement("div",{className:"pagination-nav__sublabel"},"Older Post"),r.a.createElement("div",{className:"pagination-nav__label"},t.title," \xbb"))))},s=a(179),m=a(151);t.default=function(e){var t=e.content,a=e.sidebar,n=t.frontMatter,o=t.metadata,d=o.title,u=o.description,g=o.nextItem,f=o.prevItem,v=o.editUrl,p=n.hide_table_of_contents;return r.a.createElement(l.a,{title:d,description:u,wrapperClassName:"blog-wrapper"},t&&r.a.createElement("div",{className:"container margin-vert--lg"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col col--2"},r.a.createElement(s.a,{sidebar:a})),r.a.createElement("main",{className:"col col--8"},r.a.createElement(i.a,{frontMatter:n,metadata:o,isBlogPostPage:!0},r.a.createElement(t,null)),r.a.createElement("div",null,v&&r.a.createElement("a",{href:v,target:"_blank",rel:"noreferrer noopener"},r.a.createElement("svg",{fill:"currentColor",height:"1.2em",width:"1.2em",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 40 40",style:{marginRight:"0.3em",verticalAlign:"sub"}},r.a.createElement("g",null,r.a.createElement("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"}))),"Edit this page")),(g||f)&&r.a.createElement("div",{className:"margin-vert--xl"},r.a.createElement(c,{nextItem:g,prevItem:f}))),!p&&t.rightToc&&r.a.createElement("div",{className:"col col--2"},r.a.createElement(m.a,{headings:t.rightToc})))))}},137:function(e,t,a){"use strict";a.d(t,"c",(function(){return n})),a.d(t,"d",(function(){return r})),a.d(t,"a",(function(){return l})),a.d(t,"b",(function(){return i})),a.d(t,"f",(function(){return o})),a.d(t,"e",(function(){return c}));a(135);var n=["en"],r=!1,l=null,i="8f19d7c5",o=8,c=50},140:function(e,t,a){"use strict";var n=a(3),r=a(7),l=a(0),i=a.n(l),o=a(129),c=a(131),s=a(130),m=a(132);a(54);function d(e){var t=e.to,a=e.href,l=e.label,o=e.prependBaseUrlToHref,s=Object(r.a)(e,["to","href","label","prependBaseUrlToHref"]),d=Object(m.a)(t),u=Object(m.a)(a,{forcePrependBaseUrl:!0});return i.a.createElement(c.a,Object(n.a)({className:"footer__link-item"},a?{target:"_blank",rel:"noopener noreferrer",href:o?u:a}:{to:d},s),l)}t.a=function(){var e,t=Object(s.useThemeConfig)().footer,a=t||{},n=a.copyright,r=a.links,l=void 0===r?[]:r,c=a.logo,u=void 0===c?{}:c;return Object(m.a)(u.src),t?i.a.createElement("footer",{className:Object(o.a)("footer",{"footer--dark":"dark"===t.style})},i.a.createElement("div",{className:"container"},l&&l.length>0&&i.a.createElement("div",{className:"row footer__links"},l.map((function(e,t){return i.a.createElement("div",{key:t,className:"col footer__col"},null!=e.title?i.a.createElement("h4",{className:"footer__title"},e.title):null,null!=e.items&&Array.isArray(e.items)&&e.items.length>0?i.a.createElement("ul",{className:"footer__items"},e.items.map((function(e,t){return e.html?i.a.createElement("li",{key:t,className:"footer__item",dangerouslySetInnerHTML:{__html:e.html}}):i.a.createElement("li",{key:e.href||e.to,className:"footer__item"},i.a.createElement(d,e))}))):null)}))),(u||n)&&i.a.createElement("div",{className:"text--center"},i.a.createElement("div",null,i.a.createElement("a",((e={rel:"license",href:"https://creativecommons.org/licenses/by/4.0/",title:"Creative Commons Attribution 4.0 International license",target:"_blank"}).rel="noopener noreferrer",e),i.a.createElement("img",{src:"/dsri-documentation/img/cc-by.svg",alt:"cc by license"}))),i.a.createElement("div",{style:{marginBottom:"10px"},dangerouslySetInnerHTML:{__html:n}}),i.a.createElement("div",{style:{marginBottom:"10px",color:"grey"}},"We track page views and users demographics using Google Analytics to improve our users experience. ",i.a.createElement("a",{href:"https://policies.google.com/technologies/partner-sites"},"See how Google uses collected informations"),".",i.a.createElement("br",null),"You can prevent Google Analytics tracking by enabling ",i.a.createElement("a",{href:"https://blog.mozilla.org/blog/2019/06/04/firefox-now-available-with-enhanced-tracking-protection-by-default/"},"Firefox Tracking Protection"),", installing ",i.a.createElement("a",{href:"https://chrome.google.com/webstore/detail/ublock-origin/cjpalhdlnbpafiamejdnhcphjbkeiagm?hl=fr"},"uBlock Origin add-on"),", or using the official ",i.a.createElement("a",{href:"https://tools.google.com/dlpage/gaoptout/"},"Google Analytics Opt-out add-on"),".")))):null}},151:function(e,t,a){"use strict";var n=a(0),r=a.n(n),l=a(129);var i=function(e,t,a){var r=Object(n.useState)(void 0),l=r[0],i=r[1];Object(n.useEffect)((function(){function n(){var n=function(){var e=Array.from(document.getElementsByClassName("anchor")),t=e.find((function(e){return e.getBoundingClientRect().top>=a}));if(t){if(t.getBoundingClientRect().top>=a){var n=e[e.indexOf(t)-1];return null!=n?n:t}return t}return e[e.length-1]}();if(n)for(var r=0,o=!1,c=document.getElementsByClassName(e);r<c.length&&!o;){var s=c[r],m=s.href,d=decodeURIComponent(m.substring(m.indexOf("#")+1));n.id===d&&(l&&l.classList.remove(t),s.classList.add(t),i(s),o=!0),r+=1}}return document.addEventListener("scroll",n),document.addEventListener("resize",n),n(),function(){document.removeEventListener("scroll",n),document.removeEventListener("resize",n)}}))},o=a(56),c=a.n(o),s="table-of-contents__link";function m(e){var t=e.headings,a=e.isChild;return t.length?r.a.createElement("ul",{className:a?"":"table-of-contents table-of-contents__left-border"},t.map((function(e){return r.a.createElement("li",{key:e.id},r.a.createElement("a",{href:"#"+e.id,className:s,dangerouslySetInnerHTML:{__html:e.value}}),r.a.createElement(m,{isChild:!0,headings:e.children}))}))):null}t.a=function(e){var t=e.headings;return i(s,"table-of-contents__link--active",100),r.a.createElement("div",{className:Object(l.a)(c.a.tableOfContents,"thin-scrollbar")},r.a.createElement(m,{headings:t}))}}}]);