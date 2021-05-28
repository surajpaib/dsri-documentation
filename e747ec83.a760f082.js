(window.webpackJsonp=window.webpackJsonp||[]).push([[91],{160:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return u}));var r=n(3),a=n(7),o=(n(0),n(173)),i=["components"],s={id:"glossary",title:"Glossary"},c={unversionedId:"glossary",id:"glossary",isDocsHomePage:!1,title:"Glossary",description:"Kubernetes",source:"@site/docs/glossary.md",slug:"/glossary",permalink:"/dsri-documentation/docs/glossary",editUrl:"https://github.com/MaastrichtU-IDS/dsri-documentation/edit/master/website/docs/glossary.md",version:"current",lastUpdatedBy:"Vincent Emonet",lastUpdatedAt:1622222261,sidebar:"docs",previous:{title:"Run CWL workflows",permalink:"/dsri-documentation/docs/workflows-cwl"},next:{title:"Introduction",permalink:"/dsri-documentation/docs/okd3-introduction"}},l=[{value:"Kubernetes",id:"kubernetes",children:[]},{value:"OpenShift",id:"openshift",children:[]},{value:"OKD",id:"okd",children:[]}],p={rightToc:l};function u(e){var t=e.components,n=Object(a.a)(e,i);return Object(o.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"kubernetes"},"Kubernetes"),Object(o.b)("p",null,Object(o.b)("a",{parentName:"p",href:"https://kubernetes.io/"},"Kubernetes")," is a portable, extensible, open-source platform for managing containerized workloads and services, that facilitates both declarative configuration and automation. It has a large, rapidly growing ecosystem. "),Object(o.b)("p",null,"Kubernetes services, support, and tools are widely available."),Object(o.b)("p",null,"Kubernetes, also known as K8s, is an open-source system for automating deployment, scaling, and management of containerized applications."),Object(o.b)("img",{src:"/dsri-documentation/img/glossary_kubernetes.png",alt:"Kubernetes Architecture",style:{maxWidth:"100%",maxHeight:"100%"}}),Object(o.b)("p",null,"More Information: ",Object(o.b)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/overview/what-is-kubernetes/"},"https://kubernetes.io/docs/concepts/overview/what-is-kubernetes/")),Object(o.b)("h2",{id:"openshift"},"OpenShift"),Object(o.b)("p",null,Object(o.b)("a",{parentName:"p",href:"https://www.openshift.com/"},"Red Hat OpenShift")," is a hybrid cloud, enterprise Kubernetes application platform, trusted by 2,000+ organizations."),Object(o.b)("p",null,"It includes "),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Container host and runtime"),Object(o.b)("li",{parentName:"ul"},"Enterprise Kubernetes"),Object(o.b)("li",{parentName:"ul"},"Validated integrations"),Object(o.b)("li",{parentName:"ul"},"Integrated container registry"),Object(o.b)("li",{parentName:"ul"},"Developer workflows"),Object(o.b)("li",{parentName:"ul"},"Easy access to services")),Object(o.b)("img",{src:"/dsri-documentation/img/glossary_openshift.png",alt:"Red Hat Openshift",style:{maxWidth:"100%",maxHeight:"100%"}}),Object(o.b)("h2",{id:"okd"},"OKD"),Object(o.b)("p",null,Object(o.b)("a",{parentName:"p",href:"https://www.okd.io/"},"OKD")," is a ",Object(o.b)("strong",{parentName:"p"},"distribution of Kubernetes")," optimized for continuous application development and multi-tenant deployment. OKD adds ",Object(o.b)("strong",{parentName:"p"},"developer and operations-centric")," tools on top of Kubernetes to enable rapid application development, easy deployment and scaling, and long-term lifecycle maintenance for small and large teams. OKD is a ",Object(o.b)("strong",{parentName:"p"},"sibling")," Kubernetes distribution to ",Object(o.b)("strong",{parentName:"p"},"Red Hat OpenShift")),Object(o.b)("p",null,Object(o.b)("a",{parentName:"p",href:"https://docs.okd.io/latest/welcome/index.html"},"OKD 4 Documentation")))}u.isMDXComponent=!0},173:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),p=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=p(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),u=p(n),d=r,m=u["".concat(i,".").concat(d)]||u[d]||b[d]||o;return n?a.a.createElement(m,s(s({ref:t},l),{},{components:n})):a.a.createElement(m,s({ref:t},l))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var l=2;l<o;l++)i[l]=n[l];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);