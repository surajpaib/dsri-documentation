(window.webpackJsonp=window.webpackJsonp||[]).push([[59],{127:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return c})),r.d(t,"rightToc",(function(){return s})),r.d(t,"default",(function(){return p}));var n=r(3),a=r(7),o=(r(0),r(172)),i={id:"catalog-imaging",title:"Imaging softwares"},c={unversionedId:"catalog-imaging",id:"catalog-imaging",isDocsHomePage:!1,title:"Imaging softwares",description:"Feel free to propose new services using pull requests, or to request them by creating new issues.",source:"@site/docs/catalog-imaging.md",slug:"/catalog-imaging",permalink:"/dsri-documentation/docs/catalog-imaging",editUrl:"https://github.com/MaastrichtU-IDS/dsri-documentation/edit/master/website/docs/catalog-imaging.md",version:"current",lastUpdatedBy:"Binosha",lastUpdatedAt:1618504057,sidebar:"docs",previous:{title:"Genomics",permalink:"/dsri-documentation/docs/catalog-genomics"},next:{title:"GPU applications",permalink:"/dsri-documentation/docs/deploy-on-gpu"}},s=[{value:"CellProfiler",id:"cellprofiler",children:[]}],l={rightToc:s};function p(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Feel free to propose new services using ",Object(o.b)("a",{parentName:"p",href:"https://github.com/MaastrichtU-IDS/dsri-documentation/pulls"},"pull requests"),", or to request them by creating ",Object(o.b)("a",{parentName:"p",href:"https://github.com/MaastrichtU-IDS/dsri-documentation/issues"},"new issues"),"."),Object(o.b)("h2",{id:"cellprofiler"},"CellProfiler"),Object(o.b)("p",null,"Cell image analysis software. See ",Object(o.b)("a",{parentName:"p",href:"https://cellprofiler.org/home"},"their website"),"."),Object(o.b)("p",null,"You can start a container using the ",Object(o.b)("strong",{parentName:"p"},"CellProfiler")," template in the ",Object(o.b)("a",{parentName:"p",href:"https://console-openshift-console.apps.dsri2.unimaas.nl/console/catalog"},"Catalog web UI")," (make sure the ",Object(o.b)("strong",{parentName:"p"},"Templates")," checkbox is checked)"),Object(o.b)("p",null,"This template uses the ",Object(o.b)("a",{parentName:"p",href:"https://hub.docker.com/r/cellprofiler/cellprofiler"},"official CellProfiler image")," hosted on DockerHub"),Object(o.b)("div",{className:"admonition admonition-info alert alert--info"},Object(o.b)("div",{parentName:"div",className:"admonition-heading"},Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",{parentName:"h5",className:"admonition-icon"},Object(o.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(o.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Persistent data folder")),Object(o.b)("div",{parentName:"div",className:"admonition-content"},Object(o.b)("p",{parentName:"div"},"\ud83d\udcc2 Use the ",Object(o.b)("inlineCode",{parentName:"p"},"/usr/local/src/work")," folder (home of the root user) to store your data in the existing persistent storage. You can find the persistent volumes in the DSRI web UI, go to the ",Object(o.b)("strong",{parentName:"p"},"Administrator")," view > ",Object(o.b)("strong",{parentName:"p"},"Storage")," > ",Object(o.b)("strong",{parentName:"p"},"Persistent Volume Claims"),"."))),Object(o.b)("p",null,"Once the CellProfiler has been started you can access it through the pod terminal (in the DSRI web UI, or using ",Object(o.b)("inlineCode",{parentName:"p"},"oc rsh POD_ID"),")"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-bash"},"cellprofiler --help\ncellprofiler --run\ncellprofiler --run-headless\n")))}p.isMDXComponent=!0},172:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return d}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=a.a.createContext({}),p=function(e){var t=a.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},u=function(e){var t=p(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=p(r),b=n,d=u["".concat(i,".").concat(b)]||u[b]||m[b]||o;return r?a.a.createElement(d,c(c({ref:t},l),{},{components:r})):a.a.createElement(d,c({ref:t},l))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=b;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var l=2;l<o;l++)i[l]=r[l];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"}}]);