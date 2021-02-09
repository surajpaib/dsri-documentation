(window.webpackJsonp=window.webpackJsonp||[]).push([[85],{154:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return o})),a.d(t,"metadata",(function(){return s})),a.d(t,"rightToc",(function(){return c})),a.d(t,"default",(function(){return p}));var n=a(3),i=a(7),r=(a(0),a(165)),o={id:"catalog-utilities",title:"Utilities"},s={unversionedId:"catalog-utilities",id:"catalog-utilities",isDocsHomePage:!1,title:"Utilities",description:"Feel free to propose new services using pull requests or request new ones by creating a new issues.",source:"@site/docs/catalog-utilities.md",slug:"/catalog-utilities",permalink:"/dsri-documentation/docs/catalog-utilities",editUrl:"https://github.com/MaastrichtU-IDS/dsri-documentation/edit/master/website/docs/catalog-utilities.md",version:"current",lastUpdatedBy:"Vincent Emonet",lastUpdatedAt:1612893128,sidebar:"docs",previous:{title:"GPU applications",permalink:"/dsri-documentation/docs/deploy-on-gpu"},next:{title:"Deploy from a Dockerfile",permalink:"/dsri-documentation/docs/guide-dockerfile-to-openshift"}},c=[{value:"Ubuntu",id:"ubuntu",children:[]},{value:"File browser",id:"file-browser",children:[]}],l={rightToc:c};function p(e){var t=e.components,a=Object(i.a)(e,["components"]);return Object(r.b)("wrapper",Object(n.a)({},l,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"Feel free to propose new services using ",Object(r.b)("a",{parentName:"p",href:"https://github.com/MaastrichtU-IDS/dsri-documentation/pulls"},"pull requests")," or request new ones by creating a ",Object(r.b)("a",{parentName:"p",href:"https://github.com/MaastrichtU-IDS/dsri-documentation/issues"},"new issues"),"."),Object(r.b)("h2",{id:"ubuntu"},"Ubuntu"),Object(r.b)("p",null,"Start Ubuntu with the ",Object(r.b)("inlineCode",{parentName:"p"},"root")," user which has ",Object(r.b)("inlineCode",{parentName:"p"},"sudo")," permissions to install anything."),Object(r.b)("p",null,"Add the ",Object(r.b)("a",{parentName:"p",href:"https://github.com/MaastrichtU-IDS/dsri-openshift-applications/blob/main/templates-anyuid/template-ubuntu-root-persistent.yml"},"template")," to your project:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-bash"},"oc apply -f https://raw.githubusercontent.com/MaastrichtU-IDS/dsri-openshift-applications/main/templates-anyuid/template-ubuntu-root-persistent.yml\n")),Object(r.b)("p",null,"This template uses the Ubuntu image hosted on DockerHub, see its documentation at ",Object(r.b)("a",{parentName:"p",href:"https://hub.docker.com/r/ubuntu"},"https://hub.docker.com/r/ubuntu")),Object(r.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(r.b)("div",{parentName:"div",className:"admonition-heading"},Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",{parentName:"h5",className:"admonition-icon"},Object(r.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},Object(r.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"Root permission required")),Object(r.b)("div",{parentName:"div",className:"admonition-content"},Object(r.b)("p",{parentName:"div"},"\ud83d\udd12 You need root containers enabled (aka. anyuid) in your project to start this application."))),Object(r.b)("div",{className:"admonition admonition-info alert alert--info"},Object(r.b)("div",{parentName:"div",className:"admonition-heading"},Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",{parentName:"h5",className:"admonition-icon"},Object(r.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(r.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Persistent data folder")),Object(r.b)("div",{parentName:"div",className:"admonition-content"},Object(r.b)("p",{parentName:"div"},"\ud83d\udcc2 Use the ",Object(r.b)("inlineCode",{parentName:"p"},"/root")," folder (home of the root user) to store your data in the existing persistent storage"),Object(r.b)("p",{parentName:"div"},"We enabled the port ",Object(r.b)("inlineCode",{parentName:"p"},"8080")," in the Ubuntu container if you need to deploy applications."))),Object(r.b)("p",null,"To quickly access it from the terminal you can use the ",Object(r.b)("strong",{parentName:"p"},"Terminal")," tab in the pod page, or via your local terminal:"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Get the Ubuntu pod ID:"),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",{parentName:"pre",className:"language-bash"},"oc get pods\n"))),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Connect to it:"),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",{parentName:"pre",className:"language-bash"},"oc rsh POD_ID\n"))),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Enable Bash in the Ubuntu container (if it starts with the Shell)"),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",{parentName:"pre",className:"language-bash"},"bash\n")))),Object(r.b)("img",{src:"/dsri-documentation/img/screenshot-deploy-ubuntu.png",alt:"Deploy Ubuntu",style:{maxWidth:"100%",maxHeight:"100%"}}),Object(r.b)("h2",{id:"file-browser"},"File browser"),Object(r.b)("p",null,"Deploy a file browser on your persistent volume. This will provide a web UI to upload and download data to your DSRI persistent volume in case you need it (JupyterLab, RStudio and VisualStudio Code server already include a file browser)"),Object(r.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(r.b)("div",{parentName:"div",className:"admonition-heading"},Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",{parentName:"h5",className:"admonition-icon"},Object(r.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},Object(r.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"Root permission required")),Object(r.b)("div",{parentName:"div",className:"admonition-content"},Object(r.b)("p",{parentName:"div"},"\ud83d\udd12 You need root containers enabled (aka. anyuid) in your project to start this application."))),Object(r.b)("p",null,"Add the file browser template:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-bash"},"oc apply -f https://raw.githubusercontent.com/MaastrichtU-IDS/dsri-openshift-applications/main/templates-anyuid/template-filebrowser.yml\n")),Object(r.b)("p",null,"Then the file browser can be deployed from the ",Object(r.b)("a",{parentName:"p",href:"https://console-openshift-console.apps.dsri2.unimaas.nl/console/catalog"},"OpenShift Catalog"),":"),Object(r.b)("img",{src:"/dsri-documentation/img/screenshot-deploy-filebrowser.png",alt:"Deploy File browser",style:{maxWidth:"100%",maxHeight:"100%"}}),Object(r.b)("p",null,"We can only deploy file browser as a Persistent deployment."),Object(r.b)("p",null,"\ud83d\uddc4\ufe0f ",Object(r.b)("strong",{parentName:"p"},"Persistent"),": use an existing Persistent Volume Claim (PVC) for a persistent storage of the data."),Object(r.b)("p",null,"The following parameters can be provided:"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"Provide a unique ",Object(r.b)("strong",{parentName:"li"},"Application name"),". It will be used to generate the application URL."),Object(r.b)("li",{parentName:"ol"},"The ",Object(r.b)("strong",{parentName:"li"},"Storage name")," of the Persistent Volume Claim  (PVC) that will be exposed by the filebrowser."),Object(r.b)("li",{parentName:"ol"},Object(r.b)("strong",{parentName:"li"},"Storage subpath")," in the the Persistent Volume Claim that will be exposed by the filebrowser. Let it empty to use the Root folder of the persistent volume.")),Object(r.b)("p",null,"You can find the Storage name if you Go to the deployments page > Storage panel."),Object(r.b)("p",null,"This deployment require to have  root user enabled on your project. Contact the ",Object(r.b)("a",{parentName:"p",href:"mailto:dsri-support-l@maastrichtuniversity.nl"},"DSRI support team"),"  or create a ",Object(r.b)("a",{parentName:"p",href:"https://github.com/MaastrichtU-IDS/dsri-documentation/issues"},"new issues")," to request root access or to create persistent volume for your project if you don't have them ."),Object(r.b)("div",{className:"admonition admonition-info alert alert--info"},Object(r.b)("div",{parentName:"div",className:"admonition-heading"},Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",{parentName:"h5",className:"admonition-icon"},Object(r.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(r.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Credentials")),Object(r.b)("div",{parentName:"div",className:"admonition-content"},Object(r.b)("p",{parentName:"div"},"Default credentials will be username ",Object(r.b)("inlineCode",{parentName:"p"},"admin")," and password ",Object(r.b)("inlineCode",{parentName:"p"},"admin")))),Object(r.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(r.b)("div",{parentName:"div",className:"admonition-heading"},Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",{parentName:"h5",className:"admonition-icon"},Object(r.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},Object(r.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"Change password")),Object(r.b)("div",{parentName:"div",className:"admonition-content"},Object(r.b)("p",{parentName:"div"},"Please ",Object(r.b)("strong",{parentName:"p"},"change the password in the Filebrowser Web UI")," once it has been created."))),Object(r.b)("img",{src:"/dsri-documentation/img/screenshot-filebrowser-login.png",alt:"File browser Web UI",style:{maxWidth:"50%",maxHeight:"50%"}}))}p.isMDXComponent=!0},165:function(e,t,a){"use strict";a.d(t,"a",(function(){return b})),a.d(t,"b",(function(){return u}));var n=a(0),i=a.n(n);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var l=i.a.createContext({}),p=function(e){var t=i.a.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},b=function(e){var t=p(e.components);return i.a.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},d=i.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,o=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),b=p(a),d=n,u=b["".concat(o,".").concat(d)]||b[d]||m[d]||r;return a?i.a.createElement(u,s(s({ref:t},l),{},{components:a})):i.a.createElement(u,s({ref:t},l))}));function u(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,o=new Array(r);o[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:n,o[1]=s;for(var l=2;l<r;l++)o[l]=a[l];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,a)}d.displayName="MDXCreateElement"}}]);