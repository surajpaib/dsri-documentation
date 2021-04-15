(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{102:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return i})),a.d(t,"rightToc",(function(){return p})),a.d(t,"default",(function(){return b}));var n=a(3),r=a(7),o=(a(0),a(172)),c={id:"create-dsri-project",title:"Create a new Project"},i={unversionedId:"create-dsri-project",id:"create-dsri-project",isDocsHomePage:!1,title:"Create a new Project",description:"Create a project using the web UI",source:"@site/docs/create-dsri-project.md",slug:"/create-dsri-project",permalink:"/dsri-documentation/docs/create-dsri-project",editUrl:"https://github.com/MaastrichtU-IDS/dsri-documentation/edit/master/website/docs/create-dsri-project.md",version:"current",lastUpdatedBy:"Binosha",lastUpdatedAt:1618504057,sidebar:"docs",previous:{title:"Access the DSRI",permalink:"/dsri-documentation/docs/access-dsri"},next:{title:"Quickstart an application",permalink:"/dsri-documentation/docs/deploy-from-template"}},p=[{value:"Create a project using the web UI",id:"create-a-project-using-the-web-ui",children:[]},{value:"Create a project using the CLI",id:"create-a-project-using-the-cli",children:[]},{value:"Access permissions for developers to your project",id:"access-permissions-for-developers-to-your-project",children:[]},{value:"Delete a project using the web UI",id:"delete-a-project-using-the-web-ui",children:[]},{value:"Delete a project using the CLI",id:"delete-a-project-using-the-cli",children:[]}],s={rightToc:p};function b(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},s,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"create-a-project-using-the-web-ui"},"Create a project using the web UI"),Object(o.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(o.b)("div",{parentName:"div",className:"admonition-heading"},Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",{parentName:"h5",className:"admonition-icon"},Object(o.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},Object(o.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"Avoid creating multiple projects")),Object(o.b)("div",{parentName:"div",className:"admonition-content"},Object(o.b)("p",{parentName:"div"},"Try to avoid to create multiple projects for nothing please. Be responsible and delete applications you are not using anymore in your project to free resources, instead of creating a new project with a different number at the end."),Object(o.b)("p",{parentName:"div"},"It is also easier to connect your different applications containers and storages when you create them in the same project."))),Object(o.b)("p",null,"You can create a project using the ",Object(o.b)("strong",{parentName:"p"},"Developer")," perspective, as follows:"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Click the ",Object(o.b)("strong",{parentName:"p"},"Project")," drop-down menu to see a list of all available projects. Select ",Object(o.b)("strong",{parentName:"p"},"Create Project"),".")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"In the ",Object(o.b)("strong",{parentName:"p"},"Create Project")," dialog box, enter a unique name in the ",Object(o.b)("strong",{parentName:"p"},"Name")," field. Use a short and meaningful name for your project as the project identifier is unique across all projects, such as ",Object(o.b)("inlineCode",{parentName:"p"},"legal-text-analysis")," or ",Object(o.b)("inlineCode",{parentName:"p"},"ml-covid-pathways"))),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Add the ",Object(o.b)("strong",{parentName:"p"},"Display Name")," ",Object(o.b)("inlineCode",{parentName:"p"}," DSR Workshop"),"and ",Object(o.b)("strong",{parentName:"p"},"Description")," ",Object(o.b)("inlineCode",{parentName:"p"}," DSRI Community Workshop Projects"),"details for the project.")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Click ",Object(o.b)("strong",{parentName:"p"},"Create"),".")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Use the left navigation panel to navigate to the ",Object(o.b)("strong",{parentName:"p"},"Project")," view and see the dashboard for your project."))),Object(o.b)("img",{src:"/dsri-documentation/img/screenshot_create_project.png",alt:"Create Project",style:{maxWidth:"100%",maxHeight:"100%"}}),Object(o.b)("ol",{start:6},Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Optional:"),Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"Use the ",Object(o.b)("strong",{parentName:"li"},"Project")," drop-down menu at the top of the screen and select ",Object(o.b)("strong",{parentName:"li"},"all projects")," to list all of the projects in your cluster."),Object(o.b)("li",{parentName:"ul"},"Use the ",Object(o.b)("strong",{parentName:"li"},"Details")," tab to see the project details."),Object(o.b)("li",{parentName:"ul"},"If you have adequate permissions for a project, you can use the ",Object(o.b)("strong",{parentName:"li"},"Project Access")," tab to provide or revoke ",Object(o.b)("em",{parentName:"li"},"administrator"),", ",Object(o.b)("em",{parentName:"li"},"edit"),", and ",Object(o.b)("em",{parentName:"li"},"view")," privileges for the project.")))),Object(o.b)("h2",{id:"create-a-project-using-the-cli"},"Create a project using the CLI"),Object(o.b)("p",null,"You need to be logged in to the DSRI and ",Object(o.b)("a",{parentName:"p",href:"https://maastrichtu-ids.github.io/dsri-documentation/docs/openshift-install#login-in-the-terminal-with-oc"},"copy the login command"),"."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Run"),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",{parentName:"pre",className:"language-bash"},'oc new-project <project_name> --description="<description>" --display-name="<display_name>"\n'))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Example"),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",{parentName:"pre",className:"language-bash"},'oc new-project dsri-workshop --description="DSRI Workshop" \\\n    --display-name="DSRI Community Workshop Projects"\n')))),Object(o.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(o.b)("div",{parentName:"div",className:"admonition-heading"},Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",{parentName:"h5",className:"admonition-icon"},Object(o.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},Object(o.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"Reuse your project")),Object(o.b)("div",{parentName:"div",className:"admonition-content"},Object(o.b)("p",{parentName:"div"},"Only create new projects when it is necessary (for a new project). You can easily ",Object(o.b)("a",{parentName:"p",href:"https://maastrichtu-ids.github.io/dsri-documentation/docs/create-dsri-project#delete-a-project-using-the-web-ui"},"clean up your current project")," instead of creating a new one every time you want to try something."))),Object(o.b)("h2",{id:"access-permissions-for-developers-to-your-project"},"Access permissions for developers to your project"),Object(o.b)("p",null,"You can use the ",Object(o.b)("strong",{parentName:"p"},"Project")," view in the ",Object(o.b)("strong",{parentName:"p"},"Developer")," perspective to grant or revoke access permissions to your project."),Object(o.b)("p",null,"To add users to your project and provide ",Object(o.b)("strong",{parentName:"p"},"Admin"),", ",Object(o.b)("strong",{parentName:"p"},"Edit"),", or ",Object(o.b)("strong",{parentName:"p"},"View")," access to them:"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"In the ",Object(o.b)("strong",{parentName:"p"},"Developer")," perspective, navigate to the ",Object(o.b)("strong",{parentName:"p"},"Project")," view.")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"In the ",Object(o.b)("strong",{parentName:"p"},"Project")," page, select the ",Object(o.b)("strong",{parentName:"p"},"Project Access")," tab.")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Click ",Object(o.b)("strong",{parentName:"p"},"Add Access")," to add a new row of permissions to the default ones."),Object(o.b)("img",{src:"/dsri-documentation/img/screenshot_project_access.png",alt:"Project Access",style:{maxWidth:"100%",maxHeight:"100%"}}))),Object(o.b)("ol",{start:4},Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Enter the user name, click the ",Object(o.b)("strong",{parentName:"p"},"Select a role")," drop-down list, and select an appropriate role.")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Click ",Object(o.b)("strong",{parentName:"p"},"Save")," to add the new permissions."))),Object(o.b)("p",null,"You can also use:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"The ",Object(o.b)("strong",{parentName:"p"},"Select a role")," drop-down list, to modify the access permissions of an existing user.")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"The ",Object(o.b)("strong",{parentName:"p"},"Remove Access")," icon, to completely remove the access permissions of an existing user to the project."))),Object(o.b)("div",{className:"admonition admonition-info alert alert--info"},Object(o.b)("div",{parentName:"div",className:"admonition-heading"},Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",{parentName:"h5",className:"admonition-icon"},Object(o.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(o.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),Object(o.b)("div",{parentName:"div",className:"admonition-content"},Object(o.b)("p",{parentName:"div"},"  Advanced role-based access control is managed in the ",Object(o.b)("strong",{parentName:"p"},"Roles")," and ",Object(o.b)("strong",{parentName:"p"},"Roles Binding")," views in the ",Object(o.b)("strong",{parentName:"p"},"Administrator")," perspective"))),Object(o.b)("h2",{id:"delete-a-project-using-the-web-ui"},"Delete a project using the web UI"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Navigate to ",Object(o.b)("strong",{parentName:"p"},"Home")," \u2192 ",Object(o.b)("strong",{parentName:"p"},"Projects"),".")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Locate the project that you want to delete from the list of projects.")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"On the far right side of the project listing, select ",Object(o.b)("strong",{parentName:"p"},"Delete Project")," from the Options menu ",Object(o.b)("img",{parentName:"p",src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABsAAAAjCAIAAADqn+bCAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAA+0lEQVRIie2WMQqEMBBFJ47gUXRBLyBYqbUXULCx9CR2XsAb6AlUEM9kpckW7obdZhwWYWHXX/3i8TPJZEKEUgpOlXFu3JX4V4kmB2qaZhgGKSUiZlkWxzEBC84N9zxv27bdO47Tti0Bs3at4wBgXVca/lJnfN/XPggCGmadIwAsywIAiGhZFk1ydy2EYJKgGCqK4vZUVVU0zKpxnmftp2mi4S/1GhG1N82DMWNNYVmW4zgqpRAxTVMa5t4evlg11nXd9/1eY57nSZIQMKtG13WllLu3bbvrOgJmdUbHwfur8Xniqw6Hh5UYRdGDNowwDA+WvP4UV+JPJ94B1gKUWcTOCT0AAAAASUVORK5CYII=",alt:"kebab"}),".")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"When the ",Object(o.b)("strong",{parentName:"p"},"Delete Project")," pane opens, enter the name of the project that you want to delete in the field.")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Click ",Object(o.b)("strong",{parentName:"p"},"Delete"),"."),Object(o.b)("img",{src:"/dsri-documentation/img/screenshot_delete_project.png",alt:"Delete Project",style:{maxWidth:"100%",maxHeight:"100%"}}))),Object(o.b)("h2",{id:"delete-a-project-using-the-cli"},"Delete a project using the CLI"),Object(o.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(o.b)("div",{parentName:"div",className:"admonition-heading"},Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",{parentName:"h5",className:"admonition-icon"},Object(o.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},Object(o.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"Delete Project")),Object(o.b)("div",{parentName:"div",className:"admonition-content"},Object(o.b)("p",{parentName:"div"},"When you delete a project, the server updates the project status to ",Object(o.b)("strong",{parentName:"p"},"Terminating")," from ",Object(o.b)("strong",{parentName:"p"},"Active"),". Then, the server clears all content from a project that is in the ",Object(o.b)("strong",{parentName:"p"},"Terminating")," state before finally removing the project. While a project is in ",Object(o.b)("strong",{parentName:"p"},"Terminating")," status, you cannot add new content to the project. Projects can be deleted from the CLI or the web console."))),Object(o.b)("p",null,"You need to be logged in to the DSRI and ",Object(o.b)("a",{parentName:"p",href:"https://maastrichtu-ids.github.io/dsri-documentation/docs/openshift-install#login-in-the-terminal-with-oc"},"copy the login command"),"."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Run"),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",{parentName:"pre",className:"language-bash"},"oc delete project <project_name>\n")))),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Example"),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",{parentName:"pre",className:"language-bash"},"oc delete project dsri-workshop\n")))))}b.isMDXComponent=!0},172:function(e,t,a){"use strict";a.d(t,"a",(function(){return l})),a.d(t,"b",(function(){return j}));var n=a(0),r=a.n(n);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=r.a.createContext({}),b=function(e){var t=r.a.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},l=function(e){var t=b(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),l=b(a),d=n,j=l["".concat(c,".").concat(d)]||l[d]||m[d]||o;return a?r.a.createElement(j,i(i({ref:t},s),{},{components:a})):r.a.createElement(j,i({ref:t},s))}));function j(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,c=new Array(o);c[0]=d;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:n,c[1]=i;for(var s=2;s<o;s++)c[s]=a[s];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,a)}d.displayName="MDXCreateElement"}}]);