(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{173:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return u}));var a=n(0),o=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=o.a.createContext({}),d=function(e){var t=o.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},b=function(e){var t=d(e.components);return o.a.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},m=o.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),b=d(n),m=a,u=b["".concat(c,".").concat(m)]||b[m]||s[m]||r;return n?o.a.createElement(u,l(l({ref:t},p),{},{components:n})):o.a.createElement(u,l({ref:t},p))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,c=new Array(r);c[0]=m;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:a,c[1]=l;for(var p=2;p<r;p++)c[p]=n[p];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},94:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return p})),n.d(t,"default",(function(){return b}));var a=n(3),o=n(7),r=(n(0),n(173)),c=["components"],l={id:"openshift-commands",title:"Command Line Interface"},i={unversionedId:"openshift-commands",id:"openshift-commands",isDocsHomePage:!1,title:"Command Line Interface",description:"Overview",source:"@site/docs/openshift-commands.md",slug:"/openshift-commands",permalink:"/dsri-documentation/docs/openshift-commands",editUrl:"https://github.com/MaastrichtU-IDS/dsri-documentation/edit/master/website/docs/openshift-commands.md",version:"current",lastUpdatedBy:"Vincent Emonet",lastUpdatedAt:1622222261,sidebar:"docs",previous:{title:"Login to Docker registries",permalink:"/dsri-documentation/docs/login-docker-registry"},next:{title:"Data storage",permalink:"/dsri-documentation/docs/openshift-storage"}},p=[{value:"Overview",id:"overview",children:[]},{value:"Projects",id:"projects",children:[{value:"List projects",id:"list-projects",children:[]},{value:"Connect to project",id:"connect-to-project",children:[]}]},{value:"ImageStreams",id:"imagestreams",children:[]},{value:"Pods",id:"pods",children:[{value:"Create pod from YAML",id:"create-pod-from-yaml",children:[]},{value:"List pods",id:"list-pods",children:[]},{value:"Get specific pod",id:"get-specific-pod",children:[]},{value:"Remote Shell connection",id:"remote-shell-connection",children:[]},{value:"Execute command in pod",id:"execute-command-in-pod",children:[]},{value:"Delete pod",id:"delete-pod",children:[]},{value:"Get pod logs",id:"get-pod-logs",children:[]}]},{value:"Create app from template",id:"create-app-from-template",children:[{value:"Copy files",id:"copy-files",children:[]}]}],d={rightToc:p};function b(e){var t=e.components,n=Object(o.a)(e,c);return Object(r.b)("wrapper",Object(a.a)({},d,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h2",{id:"overview"},"Overview"),Object(r.b)("p",null,"Here is an overview of common ",Object(r.b)("inlineCode",{parentName:"p"},"oc")," commands:"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",{parentName:"tr",align:null},Object(r.b)("strong",{parentName:"th"},"Command")),Object(r.b)("th",{parentName:"tr",align:null},Object(r.b)("strong",{parentName:"th"},"Description")))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"oc login <host> -u <user>")),Object(r.b)("td",{parentName:"tr",align:null},"Login to the DSRI OpenShift cluster in your terminal")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"oc get projects")),Object(r.b)("td",{parentName:"tr",align:null},"List all available projects")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"oc project <project> ")),Object(r.b)("td",{parentName:"tr",align:null},"Switch to project")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"oc get pods ")),Object(r.b)("td",{parentName:"tr",align:null},"Get running pods (a pod can run one or multiple containers for your application)")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"oc rsh <pod_name> <command>")),Object(r.b)("td",{parentName:"tr",align:null},"Remote terminal connexion to a pod (Shell/Bash)")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"oc cp <from> <to>")),Object(r.b)("td",{parentName:"tr",align:null},"Copy files from host to container or vice versa, e.g. from host: ",Object(r.b)("inlineCode",{parentName:"td"},"oc cp <local dir> <pod>:<pod_dir>")," or from to host: ",Object(r.b)("inlineCode",{parentName:"td"},"oc cp <pod>:<pod_dir> <local dir>"))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"oc rsync <from> <to>")),Object(r.b)("td",{parentName:"tr",align:null},"Similar to rsync command on Linux to synchronize directories between container and host or the other way around")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"oc exec <pod_id> <folder_path>")),Object(r.b)("td",{parentName:"tr",align:null},"Execute command in pods")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"oc delete pod <pod_id>")),Object(r.b)("td",{parentName:"tr",align:null},"Delete pod")))),Object(r.b)("h2",{id:"projects"},"Projects"),Object(r.b)("h3",{id:"list-projects"},"List projects"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-shell"},"oc projects\n")),Object(r.b)("h3",{id:"connect-to-project"},"Connect to project"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-shell"},"oc project my-project\n")),Object(r.b)("hr",null),Object(r.b)("h2",{id:"imagestreams"},"ImageStreams"),Object(r.b)("p",null,"To update an ImageStream in your project to pull the latest update from the external repository (e.g. from ghcr.io or DockerHub):"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-bash"},"oc import-image <imagestream-id>\n")),Object(r.b)("hr",null),Object(r.b)("h2",{id:"pods"},"Pods"),Object(r.b)("h3",{id:"create-pod-from-yaml"},"Create pod from YAML"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-shell"},"oc create -f my-pod.yaml\n")),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"E.g. ",Object(r.b)("a",{parentName:"p",href:"https://github.com/MaastrichtU-IDS/d2s-core/blob/master/argo/d2s-pod-virtuoso.yaml"},"d2s-pod-virtuoso.yaml"),".")),Object(r.b)("h3",{id:"list-pods"},"List pods"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-shell"},"oc get pod\n")),Object(r.b)("p",null,"List running pods:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-bash"},"oc get pods --field-selector=status.phase=Running\n")),Object(r.b)("h3",{id:"get-specific-pod"},"Get specific pod"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-shell"},"oc get pod | grep <pod_id>\n")),Object(r.b)("p",null,"Using selector with Apache Flink as example, and showing only the pod id without header:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-bash"},"oc get pod --selector app=flink --selector component=jobmanager --no-headers -o=custom-columns=NAME:.metadata.name\n")),Object(r.b)("h3",{id:"remote-shell-connection"},"Remote Shell connection"),Object(r.b)("p",null,"Connect to a pod with ",Object(r.b)("a",{parentName:"p",href:"https://devhints.io/bash"},"Bash"),"."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-shell"},"oc rsh <pod_id>\n")),Object(r.b)("h3",{id:"execute-command-in-pod"},"Execute command in pod"),Object(r.b)("p",null,"Example creating a folder:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-shell"},"oc exec <pod_id> -- mkdir -p /mnt/workspace/resources\n")),Object(r.b)("h3",{id:"delete-pod"},"Delete pod"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-shell"},"oc delete pod <pod_id>\n")),Object(r.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(r.b)("div",{parentName:"div",className:"admonition-heading"},Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",{parentName:"h5",className:"admonition-icon"},Object(r.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},Object(r.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"Force pod deletion")),Object(r.b)("div",{parentName:"div",className:"admonition-content"},Object(r.b)("p",{parentName:"div"},"If the pod is not properly deleted, you can force its deletion:"),Object(r.b)("pre",{parentName:"div"},Object(r.b)("code",{parentName:"pre",className:"language-bash"},"oc delete pod --force --grace-period=0 <pod_id>\n")))),Object(r.b)("h3",{id:"get-pod-logs"},"Get pod logs"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-shell"},"oc logs -f <pod_id>\n")),Object(r.b)("div",{className:"admonition admonition-info alert alert--info"},Object(r.b)("div",{parentName:"div",className:"admonition-heading"},Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",{parentName:"h5",className:"admonition-icon"},Object(r.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(r.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Debug a pod")),Object(r.b)("div",{parentName:"div",className:"admonition-content"},Object(r.b)("p",{parentName:"div"},"Get more details on how to ",Object(r.b)("a",{parentName:"p",href:"/dsri-documentation/docs/guide-monitoring"},"debug a pod"),"."))),Object(r.b)("h2",{id:"create-app-from-template"},"Create app from template"),Object(r.b)("p",null,"Create app from template using the CLI and providing parameters as arguments:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-bash"},"oc new-app my-template -p APPLICATION_NAME=my-app,ADMIN_PASSWORD=mypassword\n")),Object(r.b)("p",null,"Example for the Semantic Web course notebooks:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-bash"},"oc new-app template-jupyterstack-notebook -p APPLICATION_NAME=swcourseName,NOTEBOOK_PASSWORD=PASSWORD\n\noc delete all --selector template=template-jupyterstack-notebook\n")),Object(r.b)("h3",{id:"copy-files"},"Copy files"),Object(r.b)("p",null,"See the ",Object(r.b)("a",{parentName:"p",href:"https://maastrichtu-ids.github.io/dsri-documentation/docs/openshift-load-data"},"Load data")," page."))}b.isMDXComponent=!0}}]);