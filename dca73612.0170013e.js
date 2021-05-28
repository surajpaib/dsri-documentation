(window.webpackJsonp=window.webpackJsonp||[]).push([[87],{156:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return l})),a.d(t,"rightToc",(function(){return c})),a.d(t,"default",(function(){return d}));var n=a(3),o=a(7),r=(a(0),a(173)),i={id:"openshift-load-data",title:"Upload data"},l={unversionedId:"openshift-load-data",id:"openshift-load-data",isDocsHomePage:!1,title:"Upload data",description:"In RStudio, JupyterLab and VSCode",source:"@site/docs/openshift-load-data.md",slug:"/openshift-load-data",permalink:"/dsri-documentation/docs/openshift-load-data",editUrl:"https://github.com/MaastrichtU-IDS/dsri-documentation/edit/master/website/docs/openshift-load-data.md",version:"current",lastUpdatedBy:"Vincent Emonet",lastUpdatedAt:1622216364,sidebar:"docs",previous:{title:"Install the client",permalink:"/dsri-documentation/docs/openshift-install"},next:{title:"Delete an application",permalink:"/dsri-documentation/docs/openshift-delete-services"}},c=[{value:"In RStudio, JupyterLab and VSCode",id:"in-rstudio-jupyterlab-and-vscode",children:[]},{value:"Copy large files with the terminal",id:"copy-large-files-with-the-terminal",children:[{value:"Copy from local to pod",id:"copy-from-local-to-pod",children:[]},{value:"Copy from pod to local",id:"copy-from-pod-to-local",children:[]}]},{value:"Synchronizes files with <code>oc rsync</code>",id:"synchronizes-files-with-oc-rsync",children:[{value:"Sync local to pod",id:"sync-local-to-pod",children:[]},{value:"Sync pod to local",id:"sync-pod-to-local",children:[]},{value:"More options",id:"more-options",children:[]}]},{value:"One-liner",id:"one-liner",children:[]}],p={rightToc:c};function d(e){var t=e.components,a=Object(o.a)(e,["components"]);return Object(r.b)("wrapper",Object(n.a)({},p,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h2",{id:"in-rstudio-jupyterlab-and-vscode"},"In RStudio, JupyterLab and VSCode"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"If you are using ",Object(r.b)("strong",{parentName:"li"},"JupyterLab")," or ",Object(r.b)("strong",{parentName:"li"},"VSCode")," you should be able to load data to the container by simply ",Object(r.b)("strong",{parentName:"li"},"drag and drop the files to upload")," in the JupyterLab/VSCode web UI."),Object(r.b)("li",{parentName:"ul"},"For ",Object(r.b)("strong",{parentName:"li"},"RStudio"),", use the Upload file button in the RStudio web UI to upload files from your computer to the RStudio workspace.")),Object(r.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(r.b)("div",{parentName:"div",className:"admonition-heading"},Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",{parentName:"h5",className:"admonition-icon"},Object(r.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},Object(r.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"File too big")),Object(r.b)("div",{parentName:"div",className:"admonition-content"},Object(r.b)("p",{parentName:"div"},"If those solutions don't work due to the files size, try one of the solutions below."))),Object(r.b)("h2",{id:"copy-large-files-with-the-terminal"},"Copy large files with the terminal"),Object(r.b)("p",null,"The quickest way to upload large files or folders from a laptop or server to the DSRI is to use the ",Object(r.b)("inlineCode",{parentName:"p"},"oc")," command line interface."),Object(r.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(r.b)("div",{parentName:"div",className:"admonition-heading"},Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",{parentName:"h5",className:"admonition-icon"},Object(r.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},Object(r.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Install the client")),Object(r.b)("div",{parentName:"div",className:"admonition-content"},Object(r.b)("p",{parentName:"div"},"To install the ",Object(r.b)("inlineCode",{parentName:"p"},"oc")," client on your laptop/server, visit the ",Object(r.b)("a",{parentName:"p",href:"/docs/openshift-install"},"Install the client")," page"))),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"oc cp")," directly copy, and overwrite existing files, from a laptop or server to an Application pod on the DSRI."),Object(r.b)("p",null,"First get the ",Object(r.b)("inlineCode",{parentName:"p"},"<pod_id>")," using your application name:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-shell"},"oc get pod --selector app=<my_application_name>\n")),Object(r.b)("h3",{id:"copy-from-local-to-pod"},"Copy from local to pod"),Object(r.b)("p",null,"Folders are uploaded recursively by default:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-shell"},"oc cp <folder_to_copy> <pod_id>:<absolute_path_in_pod>\n")),Object(r.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(r.b)("div",{parentName:"div",className:"admonition-heading"},Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",{parentName:"h5",className:"admonition-icon"},Object(r.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},Object(r.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"Use absolute path in the pod")),Object(r.b)("div",{parentName:"div",className:"admonition-content"},Object(r.b)("p",{parentName:"div"},"You need to provide the absolute (full) path where you want to copy it in the pod. Use your application workspace path, e.g. ",Object(r.b)("inlineCode",{parentName:"p"},"/home/jovyan")," for JupyterLab or ",Object(r.b)("inlineCode",{parentName:"p"},"/home/rstudio")," for RStudio)"))),Object(r.b)("p",null,"For example:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-shell"},"oc cp my-folder jupyterlab-000:/home/jovyan\n")),Object(r.b)("p",null,"You can also use this one-liner to automatically get the pod ID based on your app label:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-bash"},"oc get pod --selector app=<my_application_name> | xargs -I{} oc cp <folder_to_copy> {}:<absolute_path_in_pod>\n")),Object(r.b)("h3",{id:"copy-from-pod-to-local"},"Copy from pod to local"),Object(r.b)("p",null,"Just do the inverse:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-shell"},"oc cp <pod_ID>:<path_to_copy> <local_destination>\n")),Object(r.b)("h2",{id:"synchronizes-files-with-oc-rsync"},"Synchronizes files with ",Object(r.b)("inlineCode",{parentName:"h2"},"oc rsync")),Object(r.b)("p",null,"If you have a lot of large files and/or they are updated regularly, you can use ",Object(r.b)("inlineCode",{parentName:"p"},"rsync")," as it synchronizes the files if they already exist, preventing duplication and making synchronization faster.  You can also see the progress with ",Object(r.b)("inlineCode",{parentName:"p"},"rsync")," which you cannot with ",Object(r.b)("inlineCode",{parentName:"p"},"cp"),". And if the upload is stopped for any reason ",Object(r.b)("inlineCode",{parentName:"p"},"rsync")," should pick it up from where it stopped (instead of restarting from scratch like ",Object(r.b)("inlineCode",{parentName:"p"},"oc cp")," does)"),Object(r.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(r.b)("div",{parentName:"div",className:"admonition-heading"},Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",{parentName:"h5",className:"admonition-icon"},Object(r.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},Object(r.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),Object(r.b)("div",{parentName:"div",className:"admonition-content"},Object(r.b)("p",{parentName:"div"},"Rsync does not work with symlinks (created with ",Object(r.b)("inlineCode",{parentName:"p"},"ln -s"),")"))),Object(r.b)("h3",{id:"sync-local-to-pod"},"Sync local to pod"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-shell"},"oc rsync --progress <folder_to_sync> <pod-id>:<sync_path_in_pod>\n")),Object(r.b)("p",null,"You can also use this one-liner to automatically get the pod ID based on your app label:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-bash"},"oc get pod --selector app=<my_application_name> | xargs -I{} oc rsync --progress <folder_to_sync> {}:<absolute_path_in_pod>\n")),Object(r.b)("h3",{id:"sync-pod-to-local"},"Sync pod to local"),Object(r.b)("p",null,"Again, do the inverse:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-shell"},"oc rsync --progress <pod-id>:<folder_to_sync> <local_destination_to_sync>\n")),Object(r.b)("h3",{id:"more-options"},"More options"),Object(r.b)("p",null,"You can use more options to improve the upload of large files:"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"th"},"--compress")),Object(r.b)("th",{parentName:"tr",align:null},"compress file data during the transfer"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"--delete")),Object(r.b)("td",{parentName:"tr",align:null},"delete files not present in source")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"--watch")),Object(r.b)("td",{parentName:"tr",align:null},"Watch directory for changes and resync automatically")))),Object(r.b)("h2",{id:"one-liner"},"One-liner"))}d.isMDXComponent=!0},173:function(e,t,a){"use strict";a.d(t,"a",(function(){return s})),a.d(t,"b",(function(){return u}));var n=a(0),o=a.n(n);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var p=o.a.createContext({}),d=function(e){var t=o.a.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},s=function(e){var t=d(e.components);return o.a.createElement(p.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},m=o.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,i=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),s=d(a),m=n,u=s["".concat(i,".").concat(m)]||s[m]||b[m]||r;return a?o.a.createElement(u,l(l({ref:t},p),{},{components:a})):o.a.createElement(u,l({ref:t},p))}));function u(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,i=new Array(r);i[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var p=2;p<r;p++)i[p]=a[p];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,a)}m.displayName="MDXCreateElement"}}]);