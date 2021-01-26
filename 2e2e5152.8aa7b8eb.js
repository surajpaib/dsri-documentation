(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{130:function(e,t,a){"use strict";a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return u}));var n=a(0),i=a.n(n);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var b=i.a.createContext({}),l=function(e){var t=i.a.useContext(b),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},p=function(e){var t=l(e.components);return i.a.createElement(b.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},m=i.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,o=e.parentName,b=s(e,["components","mdxType","originalType","parentName"]),p=l(a),m=n,u=p["".concat(o,".").concat(m)]||p[m]||d[m]||r;return a?i.a.createElement(u,c(c({ref:t},b),{},{components:a})):i.a.createElement(u,c({ref:t},b))}));function u(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,o=new Array(r);o[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:n,o[1]=c;for(var b=2;b<r;b++)o[b]=a[b];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,a)}m.displayName="MDXCreateElement"},81:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return o})),a.d(t,"metadata",(function(){return c})),a.d(t,"rightToc",(function(){return s})),a.d(t,"default",(function(){return l}));var n=a(3),i=a(7),r=(a(0),a(130)),o={id:"guide-known-issues",title:"Known Issues"},c={unversionedId:"guide-known-issues",id:"guide-known-issues",isDocsHomePage:!1,title:"Known Issues",description:"DockerHub pull limitations",source:"@site/docs/guide-known-issues.md",slug:"/guide-known-issues",permalink:"/dsri-documentation/docs/guide-known-issues",editUrl:"https://github.com/MaastrichtU-IDS/dsri-documentation/edit/master/website/docs/guide-known-issues.md",version:"current",lastUpdatedBy:"Vincent Emonet",lastUpdatedAt:1611655382,sidebar:"docs",previous:{title:"Start a Spark cluster",permalink:"/dsri-documentation/docs/deploy-spark"},next:{title:"Command Line Interface",permalink:"/dsri-documentation/docs/openshift-commands"}},s=[{value:"DockerHub pull limitations",id:"dockerhub-pull-limitations",children:[]},{value:"Git authentication issue",id:"git-authentication-issue",children:[]},{value:"Filebrowser 403 forbidden",id:"filebrowser-403-forbidden",children:[]}],b={rightToc:s};function l(e){var t=e.components,a=Object(i.a)(e,["components"]);return Object(r.b)("wrapper",Object(n.a)({},b,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h2",{id:"dockerhub-pull-limitations"},"DockerHub pull limitations"),Object(r.b)("div",{className:"admonition admonition-warning alert alert--danger"},Object(r.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(r.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"})))),"Spot the issue")),Object(r.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"If the ",Object(r.b)("strong",{parentName:"p"},"Events")," tab show this error:"),Object(r.b)("pre",{parentName:"div"},Object(r.b)("code",Object(n.a)({parentName:"pre"},{}),"--\x3e Scaling filebrowser-case-1 to 1\nerror: update acceptor rejected my-app-1: pods for rc 'my-project/my-app-1' took longer than 600 seconds to become available\n")),Object(r.b)("p",{parentName:"div"},"Then check for the application ImageStream in ",Object(r.b)("strong",{parentName:"p"},"Build")," > ",Object(r.b)("strong",{parentName:"p"},"Images"),", and you might see this for your application image:"),Object(r.b)("pre",{parentName:"div"},Object(r.b)("code",Object(n.a)({parentName:"pre"},{}),"Internal error occurred: toomanyrequests: You have reached your pull rate limit. \nYou may increase the limit by authenticating and upgrading: https://www.docker.com/increase-rate-limit.\n")))),Object(r.b)("p",null,"You can solve this by creating a secret to login to DockerHub in your project:"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"oc -n <project> create secret docker-registry <secret-name> --docker-server=docker.io --docker-username=<dockerhub-username> --docker-password=<dockerhub-password> --docker-email=<email-address>\n")),Object(r.b)("p",null,"Linking the login secret to the default service account:"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"oc secrets link default <secret-name> --for=pull\n")),Object(r.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(r.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(r.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"tip")),Object(r.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"Login to DockerHub should raise the limitations"))),Object(r.b)("p",null,"To definitely solve this issue you can publish the DockerHub image to the ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://docs.github.com/en/packages/guides/about-github-container-registry"}),"GitHub Container Registry"),"."),Object(r.b)("p",null,"Follow those instructions on your laptop:"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://maastrichtu-ids.github.io/dsri-documentation/docs/guide-publish-image#login-to-github-container-registry"}),"Login to the GitHub Container Registry")," with ",Object(r.b)("inlineCode",{parentName:"p"},"docker login"),".")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Pull the docker image from "),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"docker pull myorg/myimage:latest\n"))),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Change its tag"),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"docker tag myorg/myimage:latest ghcr.io/maastrichtu-ids/myimage:latest\n"))),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Push it back to the GitHub Container Registry:"),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"docker push ghcr.io/maastrichtu-ids/myimage:latest\n")))),Object(r.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(r.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(r.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"Image created automatically")),Object(r.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"If the image does not exist, GitHub will create automatically when you push it for the first time! You can then head to your ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/orgs/MaastrichtU-IDS/packages"}),"organization ",Object(r.b)("strong",{parentName:"a"},"Packages")," tab")," to see the package."))),Object(r.b)("div",{className:"admonition admonition-info alert alert--info"},Object(r.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(r.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"Make it public")),Object(r.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"By default new images are set as ",Object(r.b)("inlineCode",{parentName:"p"},"Private"),", go to your ",Object(r.b)("strong",{parentName:"p"},"Package Settings"),", and click ",Object(r.b)("strong",{parentName:"p"},"Change Visibility")," to set it as ",Object(r.b)("inlineCode",{parentName:"p"},"Public"),", this avoids the need to login to pull the image."))),Object(r.b)("p",null,"You can update the image if you want access to the latest version, you can set a GitHub Actions workflow to do so."),Object(r.b)("p",null,"Finally you will need to update your DSRI deployment, or template, to use the newly created image on ",Object(r.b)("inlineCode",{parentName:"p"},"ghcr.io"),", and redeploy the application with the new template."),Object(r.b)("hr",null),Object(r.b)("h2",{id:"git-authentication-issue"},"Git authentication issue"),Object(r.b)("div",{className:"admonition admonition-warning alert alert--danger"},Object(r.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(r.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"})))),"warning")),Object(r.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"\u26a0\ufe0f remote: HTTP Basic: Access denied fatal: Authentication failed for"))),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"It happen every time when we forced to change the Windows password."),Object(r.b)("img",{class:"screenshot",src:"/dsri-documentation/img/authentication-issue.png",style:{zoom:"100%",maxHeight:"500px",maxWidth:"500px"}}),Object(r.b)("img",{class:"screenshot",src:"/dsri-documentation/img/git-authentication-issue.png",style:{zoom:"100%",maxHeight:"500px",maxWidth:"500px"}})),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Apply command from powershell ",Object(r.b)("strong",{parentName:"p"},"(run as administrator)")),Object(r.b)("p",{parentName:"li"},Object(r.b)("strong",{parentName:"p"},Object(r.b)("inlineCode",{parentName:"strong"},"git config --system --unset credential.helper")))),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"And then remove ",Object(r.b)("strong",{parentName:"p"},"gitconfig")," file from ",Object(r.b)("strong",{parentName:"p"},"C:\\Program Files\\Git\\mingw64/etc/"),' location (Note: this path will be different in MAC like "/Users/username")')),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"After that use git command like ",Object(r.b)("strong",{parentName:"p"},Object(r.b)("inlineCode",{parentName:"strong"},"git pull")," or ",Object(r.b)("inlineCode",{parentName:"strong"},"git push")),", it asked me for username and password. applying valid username and password and git command working."))),Object(r.b)("h5",{id:"windows"},"Windows:"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"Go to Windows ",Object(r.b)("strong",{parentName:"li"},"Credential Manager"),". This is done in a EN-US Windows by pressing the Windows Key and typing 'credential'. In other localized Windows variants you need to use the localized term.")),Object(r.b)("img",{class:"screenshot",src:"/dsri-documentation/img/windows-credentials.png",alt:"Windows Credentials",style:{zoom:"100%",maxHeight:"500px",maxWidth:"500px"}}),Object(r.b)("p",null,"   ",Object(r.b)("em",{parentName:"p"},"alternatively")," you can use the shortcut ",Object(r.b)("inlineCode",{parentName:"p"},"control /name Microsoft.CredentialManager")," in the run dialog (WIN+R)"),Object(r.b)("ol",{start:2},Object(r.b)("li",{parentName:"ol"},"Edit the git entry under Windows Credentials, replacing old password with the new one.")),Object(r.b)("h5",{id:"mac"},"Mac:"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},'cmd+space and type "KeyChain Access",')),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},'You should find a key with the name like "gitlab.*.com Access Key for user". You can order by date modified to find it more easily.'))),Object(r.b)("img",{class:"screenshot",src:"/dsri-documentation/img/Mac-git-autentication.png",alt:"Mac GIT Autentication",style:{zoom:"100%",maxHeight:"500px",maxWidth:"500px"}}),Object(r.b)("ol",{start:3},Object(r.b)("li",{parentName:"ol"},"Right click and delete.")),Object(r.b)("hr",null),Object(r.b)("h2",{id:"filebrowser-403-forbidden"},"Filebrowser 403 forbidden"),Object(r.b)("div",{className:"admonition admonition-warning alert alert--danger"},Object(r.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(r.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"})))),"Spot the issue")),Object(r.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"If you get 403 forbidden issue while try to upload folders / files or creating new folder / file "),Object(r.b)("pre",{parentName:"div"},Object(r.b)("code",Object(n.a)({parentName:"pre"},{}),"403 forbidden \n")))),Object(r.b)("img",{class:"screenshot",src:"/dsri-documentation/img/forbidden-issue.png",alt:"Forbidden Issue",style:{zoom:"100%",maxHeight:"500px",maxWidth:"500px"}}),Object(r.b)("p",null,"Above issue will occur if you are not using the ",Object(r.b)("strong",{parentName:"p"},"persistent storage"),"."),Object(r.b)("p",null,"A persistent storage can be created by the DSRI team for a persistent storage of the data. ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"http://localhost:3000/dsri-documentation/help"}),"Contact the DSRI team")," to request a persistent storage."),Object(r.b)("p",null,"You can find the persistent storage name as below"),Object(r.b)("img",{class:"screenshot",src:"/dsri-documentation/img/storage.png",alt:"Storage",style:{zoom:"100%",maxHeight:"500px",maxWidth:"500px"}}))}l.isMDXComponent=!0}}]);