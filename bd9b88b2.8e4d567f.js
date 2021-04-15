(window.webpackJsonp=window.webpackJsonp||[]).push([[72],{141:function(e,t,o){"use strict";o.r(t),o.d(t,"frontMatter",(function(){return i})),o.d(t,"metadata",(function(){return c})),o.d(t,"rightToc",(function(){return d})),o.d(t,"default",(function(){return l}));var a=o(3),r=o(7),n=(o(0),o(172)),i={id:"okd3-prepare-project-for-dsri",title:"Prepare your project"},c={unversionedId:"okd3-prepare-project-for-dsri",id:"okd3-prepare-project-for-dsri",isDocsHomePage:!1,title:"Prepare your project",description:"Code in a git repository",source:"@site/docs/okd3-prepare-project-for-dsri.md",slug:"/okd3-prepare-project-for-dsri",permalink:"/dsri-documentation/docs/okd3-prepare-project-for-dsri",editUrl:"https://github.com/MaastrichtU-IDS/dsri-documentation/edit/master/website/docs/okd3-prepare-project-for-dsri.md",version:"current",lastUpdatedBy:"Binosha",lastUpdatedAt:1618504057,sidebar:"docs",previous:{title:"Storage and restrictions",permalink:"/dsri-documentation/docs/okd3-openshift-storage"},next:{title:"Publish a Docker image",permalink:"/dsri-documentation/docs/okd3-guide-publish-image"}},d=[{value:"Code in a git repository",id:"code-in-a-git-repository",children:[]},{value:"Develop locally or on the DSRI?",id:"develop-locally-or-on-the-dsri",children:[]},{value:"Define your deployment strategy",id:"define-your-deployment-strategy",children:[]},{value:"Get your data ready",id:"get-your-data-ready",children:[{value:"Data is on your local machine",id:"data-is-on-your-local-machine",children:[]},{value:"Data is on a server",id:"data-is-on-a-server",children:[]},{value:"Data is in a AWS S3 bucket",id:"data-is-in-a-aws-s3-bucket",children:[]}]}],s={rightToc:d};function l(e){var t=e.components,o=Object(r.a)(e,["components"]);return Object(n.b)("wrapper",Object(a.a)({},s,o,{components:t,mdxType:"MDXLayout"}),Object(n.b)("h2",{id:"code-in-a-git-repository"},"Code in a git repository"),Object(n.b)("p",null,"Using ",Object(n.b)("inlineCode",{parentName:"p"},"git")," is mandatory to deploy code on the DSRI. Store your code in a git repository to keep track of changes, and make it easier to share and re-use your code outside of your computer."),Object(n.b)("div",{className:"admonition admonition-info alert alert--info"},Object(n.b)("div",{parentName:"div",className:"admonition-heading"},Object(n.b)("h5",{parentName:"div"},Object(n.b)("span",{parentName:"h5",className:"admonition-icon"},Object(n.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(n.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Platform recommendations")),Object(n.b)("div",{parentName:"div",className:"admonition-content"},Object(n.b)("p",{parentName:"div"},"We recommend those platforms depending on your use-case:"),Object(n.b)("ul",{parentName:"div"},Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",{parentName:"li",href:"https://github.com"},"GitHub")," for public repositories"),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",{parentName:"li",href:"https://gitlab.maastrichtuniversity.nl"},"GitLab hosted at Maastricht University")," for private repositories")))),Object(n.b)("blockquote",null,Object(n.b)("p",{parentName:"blockquote"},"Any other git platform, such as BitBucket or gitlab.com, is fine too.")),Object(n.b)("h2",{id:"develop-locally-or-on-the-dsri"},"Develop locally or on the DSRI?"),Object(n.b)("p",null,"You can develop directly on the DSRI using VisualStudio Code or JupyterLab."),Object(n.b)("p",null,"If you prefer your local environment for development, and only run big tasks on the DSRI:"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Make sure your code ",Object(n.b)("strong",{parentName:"li"},"does not use absolute paths"),". For example, ",Object(n.b)("inlineCode",{parentName:"li"},"C://Desktop/myproject/data")," will not work when running on the DSRI, use a relative path such as ",Object(n.b)("inlineCode",{parentName:"li"},"../data")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("strong",{parentName:"li"},"Use ",Object(n.b)("inlineCode",{parentName:"strong"},"git"))," to synchronize your local development code with the code on the DSRI")),Object(n.b)("h2",{id:"define-your-deployment-strategy"},"Define your deployment strategy"),Object(n.b)("img",{src:"/dsri-documentation/img/dsri-deploy-flowchart.png",alt:"DSRI deployment flowchart",style:{maxWidth:"100%",maxHeight:"100%"}}),Object(n.b)("h2",{id:"get-your-data-ready"},"Get your data ready"),Object(n.b)("p",null,"If your project is using a large amount of data that cannot be pushed to a git repository, you will need to use a persistent storage to store your data on the DSRI. See the ",Object(n.b)("a",{parentName:"p",href:"/dsri-documentation/docs/openshift-storage"},"Storage on the DSRI")," documentation for more details about creating a persistent storage."),Object(n.b)("p",null,"Here are the options to upload your data to the DSRI storage:"),Object(n.b)("h3",{id:"data-is-on-your-local-machine"},"Data is on your local machine"),Object(n.b)("p",null,"If the data is stored on a local machine, such as your computer:"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Drag and drop files from your computer to the VisualStudio Code or JupyterLab web UI, if applicable."),Object(n.b)("li",{parentName:"ul"},"Otherwise, use the ",Object(n.b)("inlineCode",{parentName:"li"},"oc cp")," command to copy data to your application pod. See the ",Object(n.b)("a",{parentName:"li",href:"/dsri-documentation/docs/openshift-load-data"},"Load data")," documentation page for more informations.")),Object(n.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(n.b)("div",{parentName:"div",className:"admonition-heading"},Object(n.b)("h5",{parentName:"div"},Object(n.b)("span",{parentName:"h5",className:"admonition-icon"},Object(n.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},Object(n.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"Upload to persistent storage")),Object(n.b)("div",{parentName:"div",className:"admonition-content"},Object(n.b)("p",{parentName:"div"},"Make sure you ",Object(n.b)("strong",{parentName:"p"},"upload the data to a folder mounted on a persistent storage")," in the pod to avoid losing your data if the pod restarts."))),Object(n.b)("h3",{id:"data-is-on-a-server"},"Data is on a server"),Object(n.b)("p",null,"Same as for your laptop, you will need to install and use the ",Object(n.b)("inlineCode",{parentName:"p"},"oc cp")," command to copy data to your application pod. See the ",Object(n.b)("a",{parentName:"p",href:"/dsri-documentation/docs/openshift-load-data"},"Load data")," documentation page for more informations."),Object(n.b)("h3",{id:"data-is-in-a-aws-s3-bucket"},"Data is in a AWS S3 bucket"),Object(n.b)("blockquote",null,Object(n.b)("p",{parentName:"blockquote"},"To be developed")))}l.isMDXComponent=!0},172:function(e,t,o){"use strict";o.d(t,"a",(function(){return p})),o.d(t,"b",(function(){return m}));var a=o(0),r=o.n(a);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function i(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,a)}return o}function c(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?i(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function d(e,t){if(null==e)return{};var o,a,r=function(e,t){if(null==e)return{};var o,a,r={},n=Object.keys(e);for(a=0;a<n.length;a++)o=n[a],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)o=n[a],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var s=r.a.createContext({}),l=function(e){var t=r.a.useContext(s),o=t;return e&&(o="function"==typeof e?e(t):c(c({},t),e)),o},p=function(e){var t=l(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},b=r.a.forwardRef((function(e,t){var o=e.components,a=e.mdxType,n=e.originalType,i=e.parentName,s=d(e,["components","mdxType","originalType","parentName"]),p=l(o),b=a,m=p["".concat(i,".").concat(b)]||p[b]||u[b]||n;return o?r.a.createElement(m,c(c({ref:t},s),{},{components:o})):r.a.createElement(m,c({ref:t},s))}));function m(e,t){var o=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var n=o.length,i=new Array(n);i[0]=b;var c={};for(var d in t)hasOwnProperty.call(t,d)&&(c[d]=t[d]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var s=2;s<n;s++)i[s]=o[s];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,o)}b.displayName="MDXCreateElement"}}]);