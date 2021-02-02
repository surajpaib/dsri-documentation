(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{130:function(e,t,a){"use strict";a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return j}));var n=a(0),c=a.n(n);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,c=function(e,t){if(null==e)return{};var a,n,c={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(c[a]=e[a]);return c}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(c[a]=e[a])}return c}var b=c.a.createContext({}),s=function(e){var t=c.a.useContext(b),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},p=function(e){var t=s(e.components);return c.a.createElement(b.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return c.a.createElement(c.a.Fragment,{},t)}},m=c.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,b=l(e,["components","mdxType","originalType","parentName"]),p=s(a),m=n,j=p["".concat(o,".").concat(m)]||p[m]||d[m]||i;return a?c.a.createElement(j,r(r({ref:t},b),{},{components:a})):c.a.createElement(j,r({ref:t},b))}));function j(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,o=new Array(i);o[0]=m;var r={};for(var l in t)hasOwnProperty.call(t,l)&&(r[l]=t[l]);r.originalType=e,r.mdxType="string"==typeof e?e:n,o[1]=r;for(var b=2;b<i;b++)o[b]=a[b];return c.a.createElement.apply(null,o)}return c.a.createElement.apply(null,a)}m.displayName="MDXCreateElement"},91:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return o})),a.d(t,"metadata",(function(){return r})),a.d(t,"rightToc",(function(){return l})),a.d(t,"default",(function(){return s}));var n=a(3),c=a(7),i=(a(0),a(130)),o={id:"openshift-delete-objects",title:"Delete objects (advanced)"},r={unversionedId:"openshift-delete-objects",id:"openshift-delete-objects",isDocsHomePage:!1,title:"Delete objects (advanced)",description:"This documentation provide guidelines to delete various types of objects in the OpenShift DSRI. Be careful when you are deleting object in your project, as it could be an object required to run an application.",source:"@site/docs/openshift-delete-objects.md",slug:"/openshift-delete-objects",permalink:"/dsri-documentation/docs/openshift-delete-objects",editUrl:"https://github.com/MaastrichtU-IDS/dsri-documentation/edit/master/website/docs/openshift-delete-objects.md",version:"current",lastUpdatedBy:"Vincent Emonet",lastUpdatedAt:1612276035,sidebar:"docs",previous:{title:"Use secrets",permalink:"/dsri-documentation/docs/openshift-secret"},next:{title:"Libraries for Machine Learning",permalink:"/dsri-documentation/docs/tools-machine-learning"}},l=[{value:"Delete an application",id:"delete-an-application",children:[]},{value:"Delete pod",id:"delete-pod",children:[]},{value:"Delete a project",id:"delete-a-project",children:[]},{value:"Delete persistent storage",id:"delete-persistent-storage",children:[]},{value:"Fix stuck deletions",id:"fix-stuck-deletions",children:[{value:"Stuck provisioned service",id:"stuck-provisioned-service",children:[]},{value:"Delete stuck project",id:"delete-stuck-project",children:[]}]}],b={rightToc:l};function s(e){var t=e.components,a=Object(c.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},b,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("div",{className:"admonition admonition-warning alert alert--danger"},Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(i.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"})))),"Be careful")),Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"This documentation provide guidelines to delete various types of objects in the OpenShift DSRI. Be careful when you are deleting object in your project, as it could be an object required to run an application."))),Object(i.b)("p",null,"It is recommend to use the ",Object(i.b)("inlineCode",{parentName:"p"},"oc")," tool to delete OpenShift objects, as it will allow to properly delete all objects related to specific deployments."),Object(i.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"}),Object(i.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})))),"Project")),Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"Make sure you are connected to the right project:"),Object(i.b)("pre",{parentName:"div"},Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-shell"}),"oc project my-project\n")))),Object(i.b)("h2",{id:"delete-an-application"},"Delete an application"),Object(i.b)("p",null,"The best way to make sure all objects related to your application have been deleted is to use the command line providing your application name."),Object(i.b)("p",null,"Different selectors can be used to easily delete all objects generated by an application deployment. 2 selectors can easily be found in the template configuration:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"app")," : the name you gave when creating your application"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"template")," : the name of the template you used to create the application. Use it only if you want to delete all applications created by a specific template.")),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-shell"}),"oc delete all,secret,configmaps,serviceaccount,rolebinding --selector app=my-application\n")),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"Delete storage if necessary from the OpenShift web UI.")),Object(i.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"}),Object(i.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})))),"Force deletion")),Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"You can force the deletion if the objects are not deleting properly:"),Object(i.b)("pre",{parentName:"div"},Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-shell"}),"oc delete all,secret,configmaps,serviceaccount,rolebinding --force --grace-period=0 --selector app=my-application\n")))),Object(i.b)("h2",{id:"delete-pod"},"Delete pod"),Object(i.b)("p",null,"Get the ID of the specific pod you want to delete:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-shell"}),"oc get pod\n")),Object(i.b)("p",null,"Use the pod ID retrieved to delete the pod:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-shell"}),"oc delete pod <POD_ID>\n")),Object(i.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"}),Object(i.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})))),"Force deletion")),Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"If the pod is not properly deleted, you can force its deletion:"),Object(i.b)("pre",{parentName:"div"},Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-shell"}),"oc delete pod --force --grace-period=0 <POD_ID>\n")))),Object(i.b)("h2",{id:"delete-a-project"},"Delete a project"),Object(i.b)("div",{className:"admonition admonition-warning alert alert--danger"},Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(i.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"})))),"Be careful")),Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"All objects and persistent storages in this project will be deleted and cannot be retrieved."))),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"To properly delete a project you need to first delete all objects in this project:")),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"oc delete all,configmap,pvc,serviceaccount,rolebinding,secret,serviceinstance --all -n <PROJECT_ID>\n")),Object(i.b)("ol",{start:2},Object(i.b)("li",{parentName:"ol"},"Then delete the project:")),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"oc delete project <PROJECT_ID>\n")),Object(i.b)("h2",{id:"delete-persistent-storage"},"Delete persistent storage"),Object(i.b)("div",{className:"admonition admonition-warning alert alert--danger"},Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(i.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"})))),"Be careful")),Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"All data stored in this persistent storage will be lost and cannot be retrieved."))),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"oc delete pvc storage-name\n")),Object(i.b)("h2",{id:"fix-stuck-deletions"},"Fix stuck deletions"),Object(i.b)("h3",{id:"stuck-provisioned-service"},"Stuck provisioned service"),Object(i.b)("p",null,"If a provisioned service is stuck on ",Object(i.b)("inlineCode",{parentName:"p"},"Marked for deletion")," you might need to set finalizers to null in the YAML."),Object(i.b)("p",null,"This can be done using the OpenShift web UI:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Go to the ",Object(i.b)("strong",{parentName:"p"},"Provisionned Service")," in the OpenShift UI overview")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Click on ",Object(i.b)("strong",{parentName:"p"},"Edit YAML"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Remove the ",Object(i.b)("strong",{parentName:"p"},"finalizers"),":"),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml"}),"  finalizers:\n    - kubernetes-incubator/service-catalog\n")))),Object(i.b)("p",null,"You can also do it using the ",Object(i.b)("inlineCode",{parentName:"p"},"oc")," CLI:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-shell"}),'oc get serviceinstance\n \n# Delete problematic line from serviceinstance to delete them\noc get serviceinstance -o yaml | grep Terminating | sed "/kubernetes-incubator/d"| oc apply -f - \n')),Object(i.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"}),Object(i.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})))),"No global catalog")),Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"The OpenShift Catalog does not handle deploying templates globally properly (on all projects). If a template is deployed globally, OpenShift will try to create unnecessary objects such as provisioned service (aka. ServiceInstance), or ClusterClasses. Those services are not used, and some of them cannot be deleted easily. "))),Object(i.b)("div",{className:"admonition admonition-info alert alert--info"},Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(i.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"Catalog per project ")),Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"At the moment it is more reliable to create the template in directly in your project if you need to use it multiple time."))),Object(i.b)("h3",{id:"delete-stuck-project"},"Delete stuck project"),Object(i.b)("p",null,"Project can get stuck as marked for deletion. Usually due to Objects still present in the project that are not terminated or ",Object(i.b)("inlineCode",{parentName:"p"},"finalizers")," left in the some objects YAML file."),Object(i.b)("p",null,"The following commands will allow you to clean up all the projects stuck in terminating state you have access to ."),Object(i.b)("p",null,"Force deletion of terminating projects:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"for i in $(oc get projects  | grep Terminating| awk '{print $1}'); do echo $i; oc delete project --force --grace-period=0 $i ; done\n")),Object(i.b)("p",null,"Delete all objects in terminating projects:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"for i in $(oc get projects  | grep Terminating| awk '{print $1}'); do echo $i; oc delete all,configmap,pvc,serviceaccount,rolebinding,secret,serviceinstance --force --grace-period=0 --all -n $i ; done\n")),Object(i.b)("p",null,"Remove Kubernetes finalizers from terminating projects:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),'for i in $(oc get projects  | grep Terminating| awk \'{print $1}\'); do echo $i; oc get project $i -o yaml | sed "/kubernetes/d" | sed "/finalizers:/d" | oc apply -f - ; done\n')),Object(i.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"}),Object(i.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})))),"Fix deletion")),Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"If ",Object(i.b)("inlineCode",{parentName:"p"},"ServiceInstances")," refuses to get deleted, try to remove kubernetes finalizers:"),Object(i.b)("pre",{parentName:"div"},Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-shell"}),"for i in $(oc get projects  | grep Terminating| awk '{print $1}'); do echo $i; oc get serviceinstance -n $i -o yaml | sed \"/kubernetes-incubator/d\"| oc apply -f - ; done\n")))),Object(i.b)("div",{className:"admonition admonition-info alert alert--info"},Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(i.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"Check deletion")),Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"Check if there are still objects in a project:"),Object(i.b)("pre",{parentName:"div"},Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"oc get all,configmap,pvc,serviceaccount,secret,rolebinding,serviceinstance\n")))))}s.isMDXComponent=!0}}]);