(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{107:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return p})),n.d(t,"default",(function(){return s}));var a=n(3),o=n(7),r=(n(0),n(173)),i=["components"],l={id:"okd3-deploy-on-gpu",title:"Start on GPU"},c={unversionedId:"okd3-deploy-on-gpu",id:"okd3-deploy-on-gpu",isDocsHomePage:!1,title:"Start on GPU",description:"By default you do not have the permission to run pods on GPU",source:"@site/docs/okd3-deploy-on-gpu.md",slug:"/okd3-deploy-on-gpu",permalink:"/dsri-documentation/docs/okd3-deploy-on-gpu",editUrl:"https://github.com/MaastrichtU-IDS/dsri-documentation/edit/master/website/docs/okd3-deploy-on-gpu.md",version:"current",lastUpdatedBy:"Vincent Emonet",lastUpdatedAt:1622222261,sidebar:"docs",previous:{title:"Neuroscience research",permalink:"/dsri-documentation/docs/okd3-neuroscience"},next:{title:"Additional services",permalink:"/dsri-documentation/docs/okd3-deploy-additional-services"}},p=[{value:"JupyterLab on GPU",id:"jupyterlab-on-gpu",children:[]},{value:"VSCode on GPU",id:"vscode-on-gpu",children:[]}],b={rightToc:p};function s(e){var t=e.components,n=Object(o.a)(e,i);return Object(r.b)("wrapper",Object(a.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("div",{className:"admonition admonition-warning alert alert--danger"},Object(r.b)("div",{parentName:"div",className:"admonition-heading"},Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",{parentName:"h5",className:"admonition-icon"},Object(r.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},Object(r.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"Request GPU access")),Object(r.b)("div",{parentName:"div",className:"admonition-content"},Object(r.b)("p",{parentName:"div"},Object(r.b)("strong",{parentName:"p"},"By default you do not have the permission to run pods on GPU")," "),Object(r.b)("p",{parentName:"div"},"If you want to run on GPU, ",Object(r.b)("strong",{parentName:"p"},"contact the ",Object(r.b)("a",{parentName:"strong",href:"mailto:dsri-support-l@maastrichtuniversity.nl"},"DSRI support team")),", they will create the templates you need to start applications on GPU."))),Object(r.b)("h2",{id:"jupyterlab-on-gpu"},"JupyterLab on GPU"),Object(r.b)("p",null,"Once your project has been granted access to GPUs, you can deploy applications on GPU from the catalog:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Go to the ",Object(r.b)("a",{parentName:"li",href:"https://app.dsri.unimaas.nl:8443/console/catalog"},"Catalog web UI"),": ",Object(r.b)("strong",{parentName:"li"},"Add to Project")," > ",Object(r.b)("strong",{parentName:"li"},"Browse Catalog")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"Filter"),' the catalog on the publisher "',Object(r.b)("strong",{parentName:"li"},"Institute of Data Science, UM"),'"'),Object(r.b)("li",{parentName:"ul"},"Choose one of the available templates:",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"Pytorch on GPU with JupyterLab"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"Tensorflow on GPU with JupyterLab"))))),Object(r.b)("p",null,"The following parameters can be provided:"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"Provide a unique ",Object(r.b)("strong",{parentName:"li"},"Application name")),Object(r.b)("li",{parentName:"ol"},"Provide a ",Object(r.b)("strong",{parentName:"li"},"Notebook token")," (password to access the notebook)"),Object(r.b)("li",{parentName:"ol"},"The ",Object(r.b)("strong",{parentName:"li"},"number of GPUs")," used by the application."),Object(r.b)("li",{parentName:"ol"},Object(r.b)("strong",{parentName:"li"},"Storage name"),": the storage Persistent Volume Claim (PVC)"),Object(r.b)("li",{parentName:"ol"},Object(r.b)("strong",{parentName:"li"},"Storage subpath"),": path to the Notebook folder in the Persistent Volume Claim storage")),Object(r.b)("p",null,"Now that your template is created and its accessible from the ",Object(r.b)("strong",{parentName:"p"},"Overview")," page of OpenShift web UI."),Object(r.b)("h2",{id:"vscode-on-gpu"},"VSCode on GPU"),Object(r.b)("p",null,"2 templates are available to deploy VisualStudio Code on GPU:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Go to the ",Object(r.b)("a",{parentName:"li",href:"https://app.dsri.unimaas.nl:8443/console/catalog"},"Catalog web UI"),": ",Object(r.b)("strong",{parentName:"li"},"Add to Project")," > ",Object(r.b)("strong",{parentName:"li"},"Browse Catalog")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"Filter"),' the catalog on the publisher "',Object(r.b)("strong",{parentName:"li"},"Institute of Data Science, UM"),'"'),Object(r.b)("li",{parentName:"ul"},"Choose one of the available templates:",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"Tensorflow on GPU with VisualStudio")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"PyTorch on GPU with VisualStudio"))))),Object(r.b)("p",null,"For those pods VSCode cannot be accessed directly on a DSRI URL, you will need to forward the port to your localhost:"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},Object(r.b)("a",{parentName:"li",href:"/docs/openshift-install"},"Login to the DSRI")," using ",Object(r.b)("inlineCode",{parentName:"li"},"oc login")),Object(r.b)("li",{parentName:"ol"},"Get the pod ID")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-bash"},"oc get pods\n")),Object(r.b)("ol",{start:3},Object(r.b)("li",{parentName:"ol"},"Forward VSCode to http://localhost:8080")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-bash"},"oc port-forward <pod_id> 8080:8080\n")),Object(r.b)("ol",{start:4},Object(r.b)("li",{parentName:"ol"},"Access VisualStudio Code on http://localhost:8080")),Object(r.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(r.b)("div",{parentName:"div",className:"admonition-heading"},Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",{parentName:"h5",className:"admonition-icon"},Object(r.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},Object(r.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"Use Chrome")),Object(r.b)("div",{parentName:"div",className:"admonition-content"},Object(r.b)("p",{parentName:"div"},"We recommend to ",Object(r.b)("strong",{parentName:"p"},"use Google Chrome")," web browser as pasting in the terminal (",Object(r.b)("inlineCode",{parentName:"p"},"ctrl + shift + v"),") won't work on Firefox"))))}s.isMDXComponent=!0},173:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return m}));var a=n(0),o=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=o.a.createContext({}),b=function(e){var t=o.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=b(e.components);return o.a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},u=o.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,i=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),s=b(n),u=a,m=s["".concat(i,".").concat(u)]||s[u]||d[u]||r;return n?o.a.createElement(m,l(l({ref:t},p),{},{components:n})):o.a.createElement(m,l({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=u;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var p=2;p<r;p++)i[p]=n[p];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);