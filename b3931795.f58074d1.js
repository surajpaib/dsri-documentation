(window.webpackJsonp=window.webpackJsonp||[]).push([[63],{132:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return r})),a.d(t,"metadata",(function(){return c})),a.d(t,"rightToc",(function(){return s})),a.d(t,"default",(function(){return l}));var n=a(3),o=a(7),i=(a(0),a(165)),r={id:"okd3-deploy-from-template",title:"Quickstart with templates"},c={unversionedId:"okd3-deploy-from-template",id:"okd3-deploy-from-template",isDocsHomePage:!1,title:"Quickstart with templates",description:"The easiest to get started with the DSRI is to use the predefined templates to deploy an application.",source:"@site/docs/okd3-deploy-from-template.md",slug:"/okd3-deploy-from-template",permalink:"/dsri-documentation/docs/okd3-deploy-from-template",editUrl:"https://github.com/MaastrichtU-IDS/dsri-documentation/edit/master/website/docs/okd3-deploy-from-template.md",version:"current",lastUpdatedBy:"Binosha",lastUpdatedAt:1612526368,sidebar:"docs",previous:{title:"Access the OKD 3.11 cluster",permalink:"/dsri-documentation/docs/okd3-access-dsri"},next:{title:"Install the oc client",permalink:"/dsri-documentation/docs/okd3-openshift-install"}},s=[{value:"Access the catalog",id:"access-the-catalog",children:[]},{value:"Start an application using a template",id:"start-an-application-using-a-template",children:[]},{value:"Stop your application",id:"stop-your-application",children:[]}],p={rightToc:s};function l(e){var t=e.components,a=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},p,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"The easiest to get started with the DSRI is to use the predefined templates to deploy an application."),Object(i.b)("h2",{id:"access-the-catalog"},"Access the catalog"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},Object(i.b)("strong",{parentName:"li"},"Access the templates catalog")," in your project:")),Object(i.b)("img",{src:"/dsri-documentation/img/screenshot_access_catalog.png",alt:"Access catalog",style:{maxWidth:"100%",maxHeight:"100%"}}),Object(i.b)("ol",{start:2},Object(i.b)("li",{parentName:"ol"},Object(i.b)("strong",{parentName:"li"},"Filter the templates catalog")," to only see data science applications:")),Object(i.b)("img",{src:"/dsri-documentation/img/screenshot_filter_templates.png",alt:"Filter templates catalog",style:{maxWidth:"100%",maxHeight:"100%"}}),Object(i.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(i.b)("div",{parentName:"div",className:"admonition-heading"},Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",{parentName:"h5",className:"admonition-icon"},Object(i.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},Object(i.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Enable more applications in your catalog")),Object(i.b)("div",{parentName:"div",className:"admonition-content"},Object(i.b)("p",{parentName:"div"},"You might wonder why do you see less templates in your project? Because templates need to be earned! \ud83c\udfc6 "),Object(i.b)("p",{parentName:"div"},"Get started with deploying, and using a service on the DSRI, then we will be able to give you access to more advanced uses of the DSRI!"))),Object(i.b)("h2",{id:"start-an-application-using-a-template"},"Start an application using a template"),Object(i.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(i.b)("div",{parentName:"div",className:"admonition-heading"},Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",{parentName:"h5",className:"admonition-icon"},Object(i.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},Object(i.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"Root permission required")),Object(i.b)("div",{parentName:"div",className:"admonition-content"},Object(i.b)("p",{parentName:"div"},"\ud83d\udd12 You will need root containers (aka. anyuid) to have been enabled by the DSRI team to be able to start applications with the root user."))),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Click on the template")," of the application you want to start, in this example we will use ",Object(i.b)("strong",{parentName:"p"},"RStudio"),", but you can easily try the same with ",Object(i.b)("strong",{parentName:"p"},"VisualStudio Code")," and ",Object(i.b)("strong",{parentName:"p"},"JupyterLab"),"."),Object(i.b)("p",null,"You can view this 1 minute video to guide you through the process to get the storage name, then to start, and access a RStudio application:"),Object(i.b)("div",{className:"container"},Object(i.b)("video",{width:"100%",height:"100%",autoplay:!0,muted:!0,loop:!0,controls:!0},Object(i.b)("source",{src:"/dsri-documentation/img/screencast_dsri_deploy_template.webm",type:"video/webm"}))),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Retrieve the name of the storage you are going to use to host your application data")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Check the informations about the applications you are going to start (such as the path of the persistent storage in the container application, or if this application run as root)"))),Object(i.b)("img",{src:"/dsri-documentation/img/screenshot_template_information.png",alt:"Filter templates catalog",style:{maxWidth:"100%",maxHeight:"100%"}}),Object(i.b)("ol",{start:2},Object(i.b)("li",{parentName:"ol"},"Provide a few informations to configure your application:")),Object(i.b)("img",{src:"/dsri-documentation/img/screenshot_template_configuration.png",alt:"Filter templates catalog",style:{maxWidth:"100%",maxHeight:"100%"}}),Object(i.b)("ol",{start:3},Object(i.b)("li",{parentName:"ol"},"Click on the ",Object(i.b)("strong",{parentName:"li"},"Create")," button.")),Object(i.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(i.b)("div",{parentName:"div",className:"admonition-heading"},Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",{parentName:"h5",className:"admonition-icon"},Object(i.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},Object(i.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Application started")),Object(i.b)("div",{parentName:"div",className:"admonition-content"},Object(i.b)("p",{parentName:"div"},"Your application is starting on the DSRI! Go back to your project ",Object(i.b)("strong",{parentName:"p"},"Overview")," page to find it! It can take from a few seconds up to a few minutes to deploy \ud83d\udd50"))),Object(i.b)("h2",{id:"stop-your-application"},"Stop your application"),Object(i.b)("p",null,"When you are not using your application anymore you can stop the pod. If you are using a Dynamic or Persistent storage you can restart the pod and continue working with all your data in the same state as you left it."),Object(i.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(i.b)("div",{parentName:"div",className:"admonition-heading"},Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",{parentName:"h5",className:"admonition-icon"},Object(i.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},Object(i.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"Do not waste resources")),Object(i.b)("div",{parentName:"div",className:"admonition-content"},Object(i.b)("p",{parentName:"div"},"Please think of stopping applications you are not using to avoid consuming unnecessary resources."))),Object(i.b)("p",null,"On the ",Object(i.b)("strong",{parentName:"p"},"Overview")," page click on the down arrow \u2b07\ufe0f next to the number of pods deployed."),Object(i.b)("img",{src:"/dsri-documentation/img/screenshot_scaledown_pod.png",alt:"Scale down pod",style:{maxWidth:"100%",maxHeight:"100%"}}),Object(i.b)("p",null,"You can then restart the pod by clicking the up arrow \u2b06\ufe0f"))}l.isMDXComponent=!0},165:function(e,t,a){"use strict";a.d(t,"a",(function(){return d})),a.d(t,"b",(function(){return u}));var n=a(0),o=a.n(n);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var p=o.a.createContext({}),l=function(e){var t=o.a.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},d=function(e){var t=l(e.components);return o.a.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},b=o.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,r=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=l(a),b=n,u=d["".concat(r,".").concat(b)]||d[b]||m[b]||i;return a?o.a.createElement(u,c(c({ref:t},p),{},{components:a})):o.a.createElement(u,c({ref:t},p))}));function u(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,r=new Array(i);r[0]=b;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:n,r[1]=c;for(var p=2;p<i;p++)r[p]=a[p];return o.a.createElement.apply(null,r)}return o.a.createElement.apply(null,a)}b.displayName="MDXCreateElement"}}]);