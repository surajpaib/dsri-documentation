(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{172:function(e,t,a){"use strict";a.d(t,"a",(function(){return u})),a.d(t,"b",(function(){return d}));var i=a(0),n=a.n(i);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,i)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function b(e,t){if(null==e)return{};var a,i,n=function(e,t){if(null==e)return{};var a,i,n={},o=Object.keys(e);for(i=0;i<o.length;i++)a=o[i],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)a=o[i],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=n.a.createContext({}),l=function(e){var t=n.a.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},u=function(e){var t=l(e.components);return n.a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},m=n.a.forwardRef((function(e,t){var a=e.components,i=e.mdxType,o=e.originalType,r=e.parentName,s=b(e,["components","mdxType","originalType","parentName"]),u=l(a),m=i,d=u["".concat(r,".").concat(m)]||u[m]||p[m]||o;return a?n.a.createElement(d,c(c({ref:t},s),{},{components:a})):n.a.createElement(d,c({ref:t},s))}));function d(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=a.length,r=new Array(o);r[0]=m;var c={};for(var b in t)hasOwnProperty.call(t,b)&&(c[b]=t[b]);c.originalType=e,c.mdxType="string"==typeof e?e:i,r[1]=c;for(var s=2;s<o;s++)r[s]=a[s];return n.a.createElement.apply(null,r)}return n.a.createElement.apply(null,a)}m.displayName="MDXCreateElement"},76:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return r})),a.d(t,"metadata",(function(){return c})),a.d(t,"rightToc",(function(){return b})),a.d(t,"default",(function(){return l}));var i=a(3),n=a(7),o=(a(0),a(172)),r={id:"okd3-guide-publish-image",title:"Publish a Docker image"},c={unversionedId:"okd3-guide-publish-image",id:"okd3-guide-publish-image",isDocsHomePage:!1,title:"Publish a Docker image",description:"\u26a0\ufe0f DockerHub imposes strict pull limitations for clusters like the DSRI (using DockerHub might result in failing to pull your images on the DSRI).",source:"@site/docs/okd3-guide-publish-image.md",slug:"/okd3-guide-publish-image",permalink:"/dsri-documentation/docs/okd3-guide-publish-image",editUrl:"https://github.com/MaastrichtU-IDS/dsri-documentation/edit/master/website/docs/okd3-guide-publish-image.md",version:"current",lastUpdatedBy:"Vincent Emonet",lastUpdatedAt:1618491777,sidebar:"docs",previous:{title:"Prepare your project",permalink:"/dsri-documentation/docs/okd3-prepare-project-for-dsri"},next:{title:"Use secrets",permalink:"/dsri-documentation/docs/okd3-openshift-secret"}},b=[{value:"Login to Container Registries \ud83d\udd11",id:"login-to-container-registries-",children:[{value:"Login to GitHub Container Registry",id:"login-to-github-container-registry",children:[]},{value:"Login to quay.io",id:"login-to-quayio",children:[]},{value:"Login to DockerHub",id:"login-to-dockerhub",children:[]}]},{value:"Publish your image \ud83d\udce2",id:"publish-your-image-",children:[{value:"Publish to GitHub Container Registry",id:"publish-to-github-container-registry",children:[]},{value:"Publish to Quay.io",id:"publish-to-quayio",children:[]},{value:"Publish to DockerHub",id:"publish-to-dockerhub",children:[]},{value:"Use automated workflows",id:"use-automated-workflows",children:[]}]}],s={rightToc:b};function l(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(o.b)("wrapper",Object(i.a)({},s,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("div",{className:"admonition admonition-warning alert alert--danger"},Object(o.b)("div",{parentName:"div",className:"admonition-heading"},Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",{parentName:"h5",className:"admonition-icon"},Object(o.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},Object(o.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"DockerHub pull rates limitations")),Object(o.b)("div",{parentName:"div",className:"admonition-content"},Object(o.b)("p",{parentName:"div"},"\u26a0\ufe0f ",Object(o.b)("strong",{parentName:"p"},"DockerHub imposes strict pull limitations for clusters")," like the DSRI (using DockerHub might result in failing to pull your images on the DSRI). "),Object(o.b)("p",{parentName:"div"},"We highly recommend to ",Object(o.b)("strong",{parentName:"p"},"use the ",Object(o.b)("a",{parentName:"strong",href:"https://docs.github.com/en/free-pro-team@latest/packages/getting-started-with-github-container-registry/about-github-container-registry"},"GitHub Container Registry")," or ",Object(o.b)("a",{parentName:"strong",href:"https://quay.io/"},"RedHat quay.io Container Registry")," to publish public Docker images"),"."))),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"You can also login to DockerHub using a Secret in OpenShift to increase the pull rates limitations from 100 to 200 every 6 hours (this will mitigate the issue, but not solve it completely if you do not have a paid account on DockerHub):"),Object(o.b)("pre",{parentName:"blockquote"},Object(o.b)("code",{parentName:"pre",className:"language-bash"},"oc create secret docker-registry docker-hub-secret --docker-server=docker.io --docker-username=your-dockerhub-username --docker-password=your-dockerhub-password --docker-email=your-dockerhub-email\n"))),Object(o.b)("h2",{id:"login-to-container-registries-"},"Login to Container Registries \ud83d\udd11"),Object(o.b)("h3",{id:"login-to-github-container-registry"},"Login to GitHub Container Registry"),Object(o.b)("p",null,"Use your existing ",Object(o.b)("a",{parentName:"p",href:"https://github.com"},"GitHub")," account if you have one:"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"Create a ",Object(o.b)("strong",{parentName:"li"},"Personal Access Token")," for GitHub packages at ",Object(o.b)("strong",{parentName:"li"},Object(o.b)("a",{parentName:"strong",href:"https://github.com/settings/tokens/new"},"https://github.com/settings/tokens/new"))),Object(o.b)("li",{parentName:"ol"},"Provide a meaningful description for the token, and enable the following scopes when creating the token:",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"write:packages"),": publish container images to GitHub Container Registry"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"delete:packages"),": delete specified versions of private or public container images from GitHub Container Registry"))),Object(o.b)("li",{parentName:"ol"},"You might want to store this token in a safe place, as you will not be able to retrieve it later on github.com (you can still delete it, and create a new token easily if you lose your token)"),Object(o.b)("li",{parentName:"ol"},"\ud83d\udc68\u200d\ud83d\udcbb Log in to the GitHub Container Registry in your terminal (change ",Object(o.b)("inlineCode",{parentName:"li"},"USERNAME")," and ",Object(o.b)("inlineCode",{parentName:"li"},"ACCESS_TOKEN")," to yours):")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-bash"},'echo "ACCESS_TOKEN" | docker login ghcr.io -u USERNAME --password-stdin\n')),Object(o.b)("p",null,"On Windows use this command:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-bash"},'docker login ghcr.io -u USERNAME -p "ACCESS_TOKEN"\n')),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"See the ",Object(o.b)("a",{parentName:"p",href:"https://docs.github.com/en/free-pro-team@latest/packages/using-github-packages-with-your-projects-ecosystem/configuring-docker-for-use-with-github-packages"},"official GitHub documentation"),".")),Object(o.b)("h3",{id:"login-to-quayio"},"Login to quay.io"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"Create an account at ",Object(o.b)("a",{parentName:"li",href:"https://quay.io"},"https://quay.io")," "),Object(o.b)("li",{parentName:"ol"},"Login in your terminal (you will be asked for username and password)")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-bash"},"docker login quay.io\n")),Object(o.b)("h3",{id:"login-to-dockerhub"},"Login to DockerHub"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Get a ",Object(o.b)("a",{parentName:"p",href:"https://hub.docker.com/"},"DockerHub")," account at ",Object(o.b)("a",{parentName:"p",href:"https://hub.docker.com"},"https://hub.docker.com")," (you most probably already have one if you installed Docker Desktop)")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"\ud83d\udc69\u200d\ud83d\udcbb Run in your terminal:"))),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-bash"},"docker login\n")),Object(o.b)("ol",{start:3},Object(o.b)("li",{parentName:"ol"},"Provide your DockerHub username and password.")),Object(o.b)("h2",{id:"publish-your-image-"},"Publish your image \ud83d\udce2"),Object(o.b)("p",null,"Once you built a Docker image, and you logged in to a Container Registry, you might want to publish the image to pull and re-use it easily later."),Object(o.b)("h3",{id:"publish-to-github-container-registry"},"Publish to GitHub Container Registry"),Object(o.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(o.b)("div",{parentName:"div",className:"admonition-heading"},Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",{parentName:"h5",className:"admonition-icon"},Object(o.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},Object(o.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Free for public images")),Object(o.b)("div",{parentName:"div",className:"admonition-content"},Object(o.b)("p",{parentName:"div"},"The ",Object(o.b)("a",{parentName:"p",href:"https://docs.github.com/en/free-pro-team@latest/packages/getting-started-with-github-container-registry"},"GitHub Container Registry")," is still in beta but will be free for public images when fully released. It enables you to store your Docker images at the same place you keep your code! \ud83d\udce6"))),Object(o.b)("p",null,"Publish to your user Container Registry on GitHub:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-bash"},"docker build -t ghcr.io/github-username/my-image:latest .\ndocker push ghcr.io/github-username/my-image:latest\n")),Object(o.b)("p",null,"For example, to the ",Object(o.b)("a",{parentName:"p",href:"https://github.com/orgs/MaastrichtU-IDS/packages"},"MaastrichtU-IDS organization Container Registry on GitHub"),":"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-bash"},"docker build -t ghcr.io/maastrichtu-ids/jupyterlab:latest .\ndocker push ghcr.io/maastrichtu-ids/jupyterlab:latest\n")),Object(o.b)("div",{className:"admonition admonition-info alert alert--info"},Object(o.b)("div",{parentName:"div",className:"admonition-heading"},Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",{parentName:"h5",className:"admonition-icon"},Object(o.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(o.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Created automatically")),Object(o.b)("div",{parentName:"div",className:"admonition-content"},Object(o.b)("p",{parentName:"div"},"If the image does not exist, GitHub Container Registry will create it automatically and set it as ",Object(o.b)("strong",{parentName:"p"},"Private")," by default. You can easily change it to ",Object(o.b)("strong",{parentName:"p"},"Public")," in the image settings on github.com."))),Object(o.b)("h3",{id:"publish-to-quayio"},"Publish to Quay.io"),Object(o.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(o.b)("div",{parentName:"div",className:"admonition-heading"},Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",{parentName:"h5",className:"admonition-icon"},Object(o.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},Object(o.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Free for public images")),Object(o.b)("div",{parentName:"div",className:"admonition-content"},Object(o.b)("p",{parentName:"div"},"Quay.io is free for public images and does not restrict images pulls."))),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Create the image on ",Object(o.b)("a",{parentName:"p",href:"https://quay.io/"},"quay.io"))),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Build and push to ",Object(o.b)("a",{parentName:"p",href:"https://quay.io/"},"quay.io")))),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-bash"},"docker build -t ghcr.io/quay-username/my-image:latest .\ndocker push quay.io/quay-username/my-image:latest\n")),Object(o.b)("h3",{id:"publish-to-dockerhub"},"Publish to DockerHub"),Object(o.b)("div",{className:"admonition admonition-warning alert alert--danger"},Object(o.b)("div",{parentName:"div",className:"admonition-heading"},Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",{parentName:"h5",className:"admonition-icon"},Object(o.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},Object(o.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"DockerHub pull rates limitations")),Object(o.b)("div",{parentName:"div",className:"admonition-content"},Object(o.b)("p",{parentName:"div"},"\u26a0\ufe0f ",Object(o.b)("strong",{parentName:"p"},"DockerHub imposes strict pull limitations for clusters")," like the DSRI (using DockerHub might result in failing to pull your images on the DSRI). "),Object(o.b)("p",{parentName:"div"},"We highly recommend to ",Object(o.b)("strong",{parentName:"p"},"use the ",Object(o.b)("a",{parentName:"strong",href:"https://docs.github.com/en/free-pro-team@latest/packages/getting-started-with-github-container-registry/about-github-container-registry"},"GitHub Container Registry")," or ",Object(o.b)("a",{parentName:"strong",href:"https://quay.io/"},"RedHat quay.io Container Registry")," to publish public Docker images"),"."))),Object(o.b)("div",{className:"admonition admonition-info alert alert--info"},Object(o.b)("div",{parentName:"div",className:"admonition-heading"},Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",{parentName:"h5",className:"admonition-icon"},Object(o.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(o.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Logged in")),Object(o.b)("div",{parentName:"div",className:"admonition-content"},Object(o.b)("p",{parentName:"div"},"If you are login with your DockerHub user on the DSRI, it should allow you to pull DockerHub images in your project (see above)."))),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"Create the repository on ",Object(o.b)("a",{parentName:"li",href:"https://hub.docker.com/"},"DockerHub")," (attached to your user or an ",Object(o.b)("a",{parentName:"li",href:"https://hub.docker.com/orgs/umids/repositories"},"organization"),")"),Object(o.b)("li",{parentName:"ol"},"Build and push the image:")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-bash"},"docker build -t dockerhub-username/jupyterlab:latest .\ndocker push dockerhub-username/jupyterlab:latest\n")),Object(o.b)("p",null,"You can also change the name (aka. tag) of an existing image:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-bash"},"docker build -t my-jupyterlab .\ndocker tag my-jupyterlab ghcr.io/github-username/jupyterlab:latest\n")),Object(o.b)("h3",{id:"use-automated-workflows"},"Use automated workflows"),Object(o.b)("p",null,"You can automate the building and publication of Docker images using GitHub Actions workflows \ud83d\udd04"),Object(o.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(o.b)("div",{parentName:"div",className:"admonition-heading"},Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",{parentName:"h5",className:"admonition-icon"},Object(o.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},Object(o.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Use a working workflow as example")),Object(o.b)("div",{parentName:"div",className:"admonition-content"},Object(o.b)("p",{parentName:"div"},"\ud83d\udc40 Check the ",Object(o.b)("a",{parentName:"p",href:"https://github.com/MaastrichtU-IDS/get-started-with-docker/blob/main/.github/workflows/publish-docker.yml"},".github/workflows/publish-docker.yml file")," to see an example of a workflow to publish an image to the GitHub Container Registry."))),Object(o.b)("p",null,"\ud83d\udc69\u200d\ud83d\udcbb You only need to change the ",Object(o.b)("inlineCode",{parentName:"p"},"IMAGE_NAME"),", and use it in your GitHub repository to publish a Docker image for your application automatically! It will build from a ",Object(o.b)("inlineCode",{parentName:"p"},"Dockerfile")," at the root of the repository."),Object(o.b)("div",{className:"admonition admonition-info alert alert--info"},Object(o.b)("div",{parentName:"div",className:"admonition-heading"},Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",{parentName:"h5",className:"admonition-icon"},Object(o.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(o.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Workflow triggers")),Object(o.b)("div",{parentName:"div",className:"admonition-content"},Object(o.b)("p",{parentName:"div"},"The workflow can be easily configured to:"),Object(o.b)("ul",{parentName:"div"},Object(o.b)("li",{parentName:"ul"},"publish a new image to the ",Object(o.b)("inlineCode",{parentName:"li"},"latest")," tag at each push to the main branch"),Object(o.b)("li",{parentName:"ul"},"publish an image to a new tag if a release is pushed on GitHub (using the git tag)",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"e.g. ",Object(o.b)("inlineCode",{parentName:"li"},"v0.0.1")," published as image ",Object(o.b)("inlineCode",{parentName:"li"},"0.0.1"))))))))}l.isMDXComponent=!0}}]);