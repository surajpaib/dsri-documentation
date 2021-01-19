(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{101:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return p}));var o=n(3),a=n(7),r=(n(0),n(130)),i={id:"workflows-nextflow",title:"Run Nextflow workflows"},c={unversionedId:"workflows-nextflow",id:"workflows-nextflow",isDocsHomePage:!1,title:"Run Nextflow workflows",description:"Nextflow enables scalable and reproducible scientific workflows using software containers. It allows the adaptation of pipelines written in the most common scripting languages.",source:"@site/docs/workflows-nextflow.md",slug:"/workflows-nextflow",permalink:"/dsri-documentation/docs/workflows-nextflow",editUrl:"https://github.com/MaastrichtU-IDS/dsri-documentation/edit/master/website/docs/workflows-nextflow.md",version:"current",lastUpdatedBy:"Vincent Emonet",lastUpdatedAt:1611052207,sidebar:"docs",previous:{title:"Run Argo workflows",permalink:"/dsri-documentation/docs/workflows-argo"},next:{title:"Run CWL workflows",permalink:"/dsri-documentation/docs/workflows-cwl"}},l=[{value:"Install Nextflow",id:"install-nextflow",children:[]},{value:"Run workflow",id:"run-workflow",children:[]}],s={rightToc:l};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(r.b)("wrapper",Object(o.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"https://www.nextflow.io/"}),"Nextflow")," enables scalable and reproducible scientific workflows using software containers. It allows the adaptation of pipelines written in the most common scripting languages."),Object(r.b)("p",null,"Nextflow has been developed by the genomic research scientific community and is built to run bioinformatics pipeline."),Object(r.b)("p",null,"Define your workflow in a Bash script fashion, providing input, output and the command to run. Without the need to create and use Docker container for Conda pipelines"),Object(r.b)("h2",{id:"install-nextflow"},"Install Nextflow"),Object(r.b)("p",null,"Install the ",Object(r.b)("inlineCode",{parentName:"p"},"nextflow")," client on your computer:"),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-shell"}),"wget -qO- https://get.nextflow.io | bash\n")),Object(r.b)("div",{className:"admonition admonition-info alert alert--info"},Object(r.b)("div",Object(o.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(o.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(o.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(r.b)("path",Object(o.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"Official documentation")),Object(r.b)("div",Object(o.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"See the ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"https://www.nextflow.io/docs/latest/getstarted.html#installation"}),"Nextflow documentation"),"."))),Object(r.b)("h2",{id:"run-workflow"},"Run workflow"),Object(r.b)("p",null,"Try the hello world workflow from Nextflow using an existing storage:"),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-shell"}),"nextflow kuberun https://github.com/nextflow-io/hello -v pvc-mapr-projects-showcase:/data\n")),Object(r.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(r.b)("div",Object(o.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(o.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(o.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(r.b)("path",Object(o.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"Use Conda environments")),Object(r.b)("div",Object(o.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"You can easily ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"https://www.nextflow.io/docs/latest/conda.html"}),"define Conda environments and workflows")," with Nextflow."))))}p.isMDXComponent=!0},130:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return f}));var o=n(0),a=n.n(o);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),p=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},b=function(e){var t=p(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},w=a.a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),b=p(n),w=o,f=b["".concat(i,".").concat(w)]||b[w]||d[w]||r;return n?a.a.createElement(f,c(c({ref:t},s),{},{components:n})):a.a.createElement(f,c({ref:t},s))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=w;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var s=2;s<r;s++)i[s]=n[s];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}w.displayName="MDXCreateElement"}}]);