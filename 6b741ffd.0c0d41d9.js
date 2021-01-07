(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{129:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),p=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=p(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=p(n),b=r,m=d["".concat(c,".").concat(b)]||d[b]||u[b]||o;return n?a.a.createElement(m,i(i({ref:t},s),{},{components:n})):a.a.createElement(m,i({ref:t},s))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,c=new Array(o);c[0]=b;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var s=2;s<o;s++)c[s]=n[s];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},92:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return p}));var r=n(3),a=n(7),o=(n(0),n(129)),c={id:"workflows-cwl",title:"Run CWL workflows"},i={unversionedId:"workflows-cwl",id:"workflows-cwl",isDocsHomePage:!1,title:"Run CWL workflows",description:"The Common Workflow Language (CWL) is an open standard for describing analysis workflows and tools in a way that makes them portable and scalable across a variety of software and hardware environments.",source:"@site/docs/workflows-cwl.md",slug:"/workflows-cwl",permalink:"/dsri-documentation/docs/workflows-cwl",editUrl:"https://github.com/MaastrichtU-IDS/dsri-documentation/edit/master/website/docs/workflows-cwl.md",version:"current",lastUpdatedBy:"Binosha",lastUpdatedAt:1610018381,sidebar:"docs",previous:{title:"Run Nextflow workflows",permalink:"/dsri-documentation/docs/workflows-nextflow"},next:{title:"Known Issues",permalink:"/dsri-documentation/docs/guide-known-issues"}},l=[{value:"Clone the repository",id:"clone-the-repository",children:[]},{value:"Start pod",id:"start-pod",children:[]},{value:"Delete created pod",id:"delete-created-pod",children:[]}],s={rightToc:l};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"The ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://www.commonwl.org/"}),"Common Workflow Language")," (CWL) is an open standard for describing analysis workflows and tools in a way that makes them portable and scalable across a variety of software and hardware environments."),Object(o.b)("p",null,"We use the ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/Duke-GCB/calrissian"}),"CWL Calrissian")," implementation, note that this project is young and still in development, feel free to report issues and contribute to its documentation."),Object(o.b)("h2",{id:"clone-the-repository"},"Clone the repository"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"Git clone in ",Object(o.b)("inlineCode",{parentName:"li"},"/calrissian")," on a ",Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"/dsri-documentation/docs/openshift-storage"}),"persistent volume")," on the cluster from a terminal. ")),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-shell"}),"cd /data/calrissian\ngit clone --recursive https://github.com/MaastrichtU-IDS/d2s-project-template.git\ncd d2s-project-template\n")),Object(o.b)("ol",{start:2},Object(o.b)("li",{parentName:"ol"},"You will need to create the folder for the workflow output data, in our example it is ",Object(o.b)("inlineCode",{parentName:"li"},"output-data"),":")),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-shell"}),"mkdir /data/calrissian/output-data\n")),Object(o.b)("ol",{start:3},Object(o.b)("li",{parentName:"ol"},"You might need to give permissions (CWL execution will fail due to permissions issues otherwise).")),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-shell"}),"chmod -R 777 /data/calrissian\n")),Object(o.b)("h2",{id:"start-pod"},"Start pod"),Object(o.b)("p",null,"Start the CWL execution from your computer using the ",Object(o.b)("inlineCode",{parentName:"p"},"oc")," client. Define the CWL command arguments to run in ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/MaastrichtU-IDS/d2s-core/blob/master/support/run-workflows-cwl.yaml"}),"run-workflows-cwl.yaml")," (be careful to properly define the paths to the CWL files in the pod storage)."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-shell"}),"oc create -f d2s-core/support/run-workflows-cwl.yaml\n")),Object(o.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(o.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(r.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(r.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"}),Object(o.b)("path",Object(r.a)({parentName:"svg"},{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})))),"caution")),Object(o.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"You will need to delete the pod if you want to re-create it."))),Object(o.b)("h2",{id:"delete-created-pod"},"Delete created pod"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-shell"}),"oc delete -f d2s-core/support/run-workflows-cwl.yaml\n")))}p.isMDXComponent=!0}}]);