(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{130:function(e,t,r){"use strict";r.d(t,"a",(function(){return d})),r.d(t,"b",(function(){return m}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=a.a.createContext({}),p=function(e){var t=a.a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},d=function(e){var t=p(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},u=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=p(r),u=n,m=d["".concat(c,".").concat(u)]||d[u]||b[u]||o;return r?a.a.createElement(m,i(i({ref:t},s),{},{components:r})):a.a.createElement(m,i({ref:t},s))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,c=new Array(o);c[0]=u;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:n,c[1]=i;for(var s=2;s<o;s++)c[s]=r[s];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,r)}u.displayName="MDXCreateElement"},92:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return i})),r.d(t,"rightToc",(function(){return l})),r.d(t,"default",(function(){return p}));var n=r(3),a=r(7),o=(r(0),r(130)),c={id:"workflows-cwl",title:"Run CWL workflows"},i={unversionedId:"workflows-cwl",id:"workflows-cwl",isDocsHomePage:!1,title:"Run CWL workflows",description:"The Common Workflow Language (CWL) is an open standard for describing analysis workflows and tools in a way that makes them portable and scalable across a variety of software and hardware environments.",source:"@site/docs/workflows-cwl.md",slug:"/workflows-cwl",permalink:"/dsri-documentation/docs/workflows-cwl",editUrl:"https://github.com/MaastrichtU-IDS/dsri-documentation/edit/master/website/docs/workflows-cwl.md",version:"current",lastUpdatedBy:"Vincent Emonet",lastUpdatedAt:1612276035,sidebar:"docs",previous:{title:"Run Nextflow workflows",permalink:"/dsri-documentation/docs/workflows-nextflow"}},l=[{value:"Clone the repository",id:"clone-the-repository",children:[]},{value:"Start pod",id:"start-pod",children:[]},{value:"Delete created pod",id:"delete-created-pod",children:[]}],s={rightToc:l};function p(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},s,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"The ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://www.commonwl.org/"}),"Common Workflow Language")," (CWL) is an open standard for describing analysis workflows and tools in a way that makes them portable and scalable across a variety of software and hardware environments."),Object(o.b)("p",null,"We use the ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/Duke-GCB/calrissian"}),"CWL Calrissian")," implementation, note that this project is young and still in development, feel free to report issues and contribute to its documentation."),Object(o.b)("h2",{id:"clone-the-repository"},"Clone the repository"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"Git clone in ",Object(o.b)("inlineCode",{parentName:"li"},"/calrissian")," on a ",Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"/dsri-documentation/docs/openshift-storage"}),"persistent volume")," on the cluster from a terminal. ")),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-shell"}),"cd /data/calrissian\ngit clone --recursive https://github.com/MaastrichtU-IDS/d2s-project-template.git\ncd d2s-project-template\n")),Object(o.b)("ol",{start:2},Object(o.b)("li",{parentName:"ol"},"You will need to create the folder for the workflow output data, in our example it is ",Object(o.b)("inlineCode",{parentName:"li"},"output-data"),":")),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-shell"}),"mkdir /data/calrissian/output-data\n")),Object(o.b)("ol",{start:3},Object(o.b)("li",{parentName:"ol"},"You might need to give permissions (CWL execution will fail due to permissions issues otherwise).")),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-shell"}),"chmod -R 777 /data/calrissian\n")),Object(o.b)("h2",{id:"start-pod"},"Start pod"),Object(o.b)("p",null,"Start the CWL execution from your computer using the ",Object(o.b)("inlineCode",{parentName:"p"},"oc")," client. Define the CWL command arguments to run in ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/MaastrichtU-IDS/d2s-core/blob/master/support/run-workflows-cwl.yaml"}),"run-workflows-cwl.yaml")," (be careful to properly define the paths to the CWL files in the pod storage)."),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-shell"}),"oc create -f d2s-core/support/run-workflows-cwl.yaml\n")),Object(o.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(o.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"}),Object(o.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})))),"Delete the pod")),Object(o.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"You will need to delete the pod if you want to re-create it."))),Object(o.b)("h2",{id:"delete-created-pod"},"Delete created pod"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-shell"}),"oc delete -f d2s-core/support/run-workflows-cwl.yaml\n")))}p.isMDXComponent=!0}}]);