(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{130:function(e,t,a){"use strict";a.d(t,"a",(function(){return l})),a.d(t,"b",(function(){return u}));var n=a(0),r=a.n(n);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=r.a.createContext({}),b=function(e){var t=r.a.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},l=function(e){var t=b(e.components);return r.a.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),l=b(a),d=n,u=l["".concat(o,".").concat(d)]||l[d]||m[d]||i;return a?r.a.createElement(u,s(s({ref:t},p),{},{components:a})):r.a.createElement(u,s({ref:t},p))}));function u(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,o=new Array(i);o[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:n,o[1]=s;for(var p=2;p<i;p++)o[p]=a[p];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,a)}d.displayName="MDXCreateElement"},79:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return o})),a.d(t,"metadata",(function(){return s})),a.d(t,"rightToc",(function(){return c})),a.d(t,"default",(function(){return b}));var n=a(3),r=a(7),i=(a(0),a(130)),o={id:"openshift-storage",title:"Storage and restrictions"},s={unversionedId:"openshift-storage",id:"openshift-storage",isDocsHomePage:!1,title:"Storage and restrictions",description:"OpenShift images restrictions",source:"@site/docs/openshift-storage.md",slug:"/openshift-storage",permalink:"/dsri-documentation/docs/openshift-storage",editUrl:"https://github.com/MaastrichtU-IDS/dsri-documentation/edit/master/website/docs/openshift-storage.md",version:"current",lastUpdatedBy:"Vincent Emonet",lastUpdatedAt:1610465500,sidebar:"docs",previous:{title:"Command Line Interface",permalink:"/dsri-documentation/docs/openshift-commands"},next:{title:"Prepare your project",permalink:"/dsri-documentation/docs/prepare-project-for-dsri"}},c=[{value:"OpenShift images restrictions",id:"openshift-images-restrictions",children:[{value:"OpenShift optimized images",id:"openshift-optimized-images",children:[]},{value:"Regular Docker images",id:"regular-docker-images",children:[]}]},{value:"Storage solutions",id:"storage-solutions",children:[{value:"Request a static persistent volumes",id:"request-a-static-persistent-volumes",children:[]},{value:"Use the dynamic storage",id:"use-the-dynamic-storage",children:[]},{value:"Use the ephemeral storage",id:"use-the-ephemeral-storage",children:[]}]}],p={rightToc:c};function b(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},p,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"openshift-images-restrictions"},"OpenShift images restrictions"),Object(i.b)("p",null,"OpenShift prevent running regular Docker images by default, and enforce to run images as a restricted user."),Object(i.b)("h3",{id:"openshift-optimized-images"},"OpenShift optimized images"),Object(i.b)("p",null,"Some Docker images has been optimized to run in OpenShift, those images can use the ",Object(i.b)("strong",{parentName:"p"},"Dynamic storage")," feature, and automatically store persistent data."),Object(i.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"}),Object(i.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})))),"For most images")),Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"To run a regular Docker image, see below."))),Object(i.b)("h3",{id:"regular-docker-images"},"Regular Docker images"),Object(i.b)("p",null,"Most Docker images run with a specific user (e.g. the ",Object(i.b)("inlineCode",{parentName:"p"},"root")," user) and have not been optimized to comply with OpenShift requirements. In this case your project will need to be enable to run root containers (aka. anyuid) by the DSRI support team."),Object(i.b)("div",{className:"admonition admonition-warning alert alert--danger"},Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(i.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"})))),"Require persistent storage created")),Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},Object(i.b)("strong",{parentName:"p"},"Dynamic storage")," does not work with regular Docker images, you will need to request a ",Object(i.b)("strong",{parentName:"p"},"Persistent storage")," to securely store your data."))),Object(i.b)("h2",{id:"storage-solutions"},"Storage solutions"),Object(i.b)("p",null,"Different storages can be used when running services on the DSRI:"),Object(i.b)("p",null,"\ud83e\udd8b ",Object(i.b)("strong",{parentName:"p"},"Ephemeral storage"),": storage is bound to the pod, data will be lost when the pod is deleted (but this deployment does not require to request the creation of a persistent storage, and is faster to test code)."),Object(i.b)("p",null,"\u26a1 ",Object(i.b)("strong",{parentName:"p"},"Dynamic storage"),":  automatically create a persistent storage when starting an application. Can also be created in the OpenShift web UI, using the ",Object(i.b)("inlineCode",{parentName:"p"},"dynamic-maprfs")," Storage Class (not working with container running as root, use Jupyter S2I deployments with this storage)"),Object(i.b)("p",null,"\ud83d\uddc4\ufe0f ",Object(i.b)("strong",{parentName:"p"},"Persistent storage"),":  a persistent storage can be created by the DSRI team for a persistent storage of the data. ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"/dsri-documentation/help"}),"Contact the DSRI team")," to request a persistent storage. "),Object(i.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"}),Object(i.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})))),"Storage per project")),Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"A storage (aka. Persistent Volume Claim) is only accessible in the project where it has been created."))),Object(i.b)("h3",{id:"request-a-static-persistent-volumes"},"Request a static persistent volumes"),Object(i.b)("p",null,"Static persistent volumes provides a sustainable persistent storage over time for applications that need to run regular Docker images (which usually use the ",Object(i.b)("inlineCode",{parentName:"p"},"root")," user)."),Object(i.b)("div",{className:"admonition admonition-info alert alert--info"},Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(i.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"Contact us")),Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"/dsri-documentation/help"}),"Contact the DSRI support team \ud83d\udcec")," to request a static persistent volume"))),Object(i.b)("h3",{id:"use-the-dynamic-storage"},"Use the dynamic storage"),Object(i.b)("div",{className:"admonition admonition-warning alert alert--danger"},Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(i.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"})))),"Not for root containers")),Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"This storage solution is not compatible with applications using the ",Object(i.b)("inlineCode",{parentName:"p"},"root")," user, ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"/dsri-documentation/help"}),"contact the DSRI support team \ud83d\udcec")," to request a persistent storage."))),Object(i.b)("p",null,"Dynamic ",Object(i.b)("strong",{parentName:"p"},"persistent")," volumes can be created automatically by an application template, and used for application with an image optimized for OpenShift."),Object(i.b)("p",null,"Dynamic storage can also be created dynamically, go to ",Object(i.b)("strong",{parentName:"p"},"Storage")," on the left sidebar in a project:"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"Click ",Object(i.b)("strong",{parentName:"li"},"Create Storage")," top right of the Storage page."),Object(i.b)("li",{parentName:"ol"},"Storage class: ",Object(i.b)("strong",{parentName:"li"},"dynamic-maprfs")),Object(i.b)("li",{parentName:"ol"},"Access Mode:",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"Single User (RWO)"),": only the user who created this volume can read/write to this volume."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"Shared Access (RWX)"),": all users with access to the projects can read/write this volume."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"Read Only (ROX)"),": all users with access to the projects can read this volume.")))),Object(i.b)("h3",{id:"use-the-ephemeral-storage"},"Use the ephemeral storage"),Object(i.b)("div",{className:"admonition admonition-warning alert alert--danger"},Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(i.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"})))),"Disabled")),Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"We currently disabled this solution by default, as it was confusing for users and would lead to data loss."))),Object(i.b)("p",null,"When creating a pod, OpenShift will by default use ephemeral storage. It creates a volumes bind to the pod. So the volume will be deleted."),Object(i.b)("p",null,"It is recommended to use dynamic provisioning for a more sustainable storage solution. But ephemeral storage can be sufficient for testing."))}b.isMDXComponent=!0}}]);