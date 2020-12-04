(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{127:function(e,t,a){"use strict";a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return u}));var n=a(0),l=a.n(n);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var i=l.a.createContext({}),b=function(e){var t=l.a.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=b(e.components);return l.a.createElement(i.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return l.a.createElement(l.a.Fragment,{},t)}},h=l.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,c=e.parentName,i=s(e,["components","mdxType","originalType","parentName"]),p=b(a),h=n,u=p["".concat(c,".").concat(h)]||p[h]||m[h]||r;return a?l.a.createElement(u,o(o({ref:t},i),{},{components:a})):l.a.createElement(u,o({ref:t},i))}));function u(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,c=new Array(r);c[0]=h;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:n,c[1]=o;for(var i=2;i<r;i++)c[i]=a[i];return l.a.createElement.apply(null,c)}return l.a.createElement.apply(null,a)}h.displayName="MDXCreateElement"},70:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return o})),a.d(t,"rightToc",(function(){return s})),a.d(t,"default",(function(){return b}));var n=a(3),l=a(7),r=(a(0),a(127)),c={id:"helm",title:"Start from Helm charts"},o={unversionedId:"helm",id:"helm",isDocsHomePage:!1,title:"Start from Helm charts",description:"Helm is a popular package manager for Kubernetes. It allows you to easily deploy Helm Charts built by the community",source:"@site/docs/helm.md",slug:"/helm",permalink:"/dsri-documentation/docs/helm",editUrl:"https://github.com/MaastrichtU-IDS/dsri-documentation/edit/master/website/docs/helm.md",version:"current",lastUpdatedBy:"Vincent Emonet",lastUpdatedAt:1607083549,sidebar:"docs",previous:{title:"Start from Dockerfile",permalink:"/dsri-documentation/docs/guide-dockerfile-to-openshift"},next:{title:"Start a Spark cluster",permalink:"/dsri-documentation/docs/deploy-spark"}},s=[{value:"Install the Helm client",id:"install-the-helm-client",children:[{value:"Install Golang",id:"install-golang",children:[]},{value:"Install Helm",id:"install-helm",children:[]},{value:"Check Helm installation",id:"check-helm-installation",children:[]}]},{value:"Install a Helm chart",id:"install-a-helm-chart",children:[{value:"Start a MySQL database with Helm",id:"start-a-mysql-database-with-helm",children:[]},{value:"Uninstall the application",id:"uninstall-the-application",children:[]},{value:"Set deployment parameters",id:"set-deployment-parameters",children:[]}]}],i={rightToc:s};function b(e){var t=e.components,a=Object(l.a)(e,["components"]);return Object(r.b)("wrapper",Object(n.a)({},i,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://helm.sh/"}),"Helm")," is a popular package manager for ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://kubernetes.io/"}),"Kubernetes"),". It allows you to easily deploy ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://hub.helm.sh/"}),"Helm Charts")," built by the community"),Object(r.b)("p",null,"You can explore published Helm charts at ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://hub.helm.sh"}),"https://hub.helm.sh \u26f5")," "),Object(r.b)("h2",{id:"install-the-helm-client"},"Install the Helm client"),Object(r.b)("h3",{id:"install-golang"},"Install Golang"),Object(r.b)("p",null,"Go lang is required to run Helm. Install ",Object(r.b)("inlineCode",{parentName:"p"},"go 1.14.4")," on Linux, you can find instructions for MacOS, Windows and newer versions at ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://golang.org/dl"}),"https://golang.org/dl")),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-shell"}),'wget https://dl.google.com/go/go1.14.4.linux-amd64.tar.gz\n\n# Extract to /usr/local\ntar -C /usr/local -xzf go1.14.4.linux-amd64.tar.gz\n\n# Add Go to path in .profile\necho "export PATH=$PATH:/usr/local/go/bin" >> ~/.profile\n')),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"Restart your laptop for the changes to take effects or execute ",Object(r.b)("inlineCode",{parentName:"p"},"source ~/.profile"))),Object(r.b)("h3",{id:"install-helm"},"Install Helm"),Object(r.b)("p",null,Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://helm.sh/docs/intro/install/"}),"Install Helm 3")," in your computer terminal."),Object(r.b)("h4",{id:"install-on-linux"},"Install on Linux"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-shell"}),"curl https://raw.githubusercontent.com/helm/helm/master/scripts/get-helm-3 | bash\n")),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"See ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://helm.sh/docs/intro/install/#from-the-binary-releases"}),"Helm documentation for Linux"),".")),Object(r.b)("h4",{id:"install-on-macos"},"Install on MacOS"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-shell"}),"brew install helm\n")),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"See ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://helm.sh/docs/intro/install/#from-homebrew-macos"}),"Helm documentation for MacOS"),".")),Object(r.b)("h4",{id:"install-on-windows"},"Install on Windows"),Object(r.b)("p",null,"Install using ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://chocolatey.org/"}),"Chocolatey"),"."),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-shell"}),"choco install kubernetes-helm\n")),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"See ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://helm.sh/docs/intro/install/#from-chocolatey-windows"}),"Helm documentation for Windows"),".")),Object(r.b)("h3",{id:"check-helm-installation"},"Check Helm installation"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-shell"}),"helm version\n")),Object(r.b)("h2",{id:"install-a-helm-chart"},"Install a Helm chart"),Object(r.b)("p",null,"Explore published Helm charts at ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://hub.helm.sh"}),"https://hub.helm.sh \u26f5")),Object(r.b)("h3",{id:"start-a-mysql-database-with-helm"},"Start a MySQL database with Helm"),Object(r.b)("p",null,"Example from the ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://docs.openshift.com/container-platform/4.3/cli_reference/helm_cli/getting-started-with-helm-on-openshift-container-platform.html"}),"OpenShift 4.3 documentation"),". See also the ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://helm.sh/docs/intro/using_helm/"}),"official Helm documentation"),"."),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"Add the repository of official Helm charts to your local Helm client:")),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"helm repo add stable https://kubernetes-charts.storage.googleapis.com/\n")),Object(r.b)("ol",{start:2},Object(r.b)("li",{parentName:"ol"},"Update the repository:")),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"helm repo update\n")),Object(r.b)("ol",{start:3},Object(r.b)("li",{parentName:"ol"},"Install an example MySQL chart, and start the application named ",Object(r.b)("inlineCode",{parentName:"li"},"example-mysql"),":")),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"helm install example-mysql stable/mysql\n")),Object(r.b)("div",{className:"admonition admonition-info alert alert--info"},Object(r.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(r.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"info")),Object(r.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"The instructions to retrieve the admin password and connect to the database will be displayed in the terminal. "),Object(r.b)("p",{parentName:"div"},"Retrieve the database password with this command (N.B.: ",Object(r.b)("inlineCode",{parentName:"p"},"kubectl")," can also be used in place of ",Object(r.b)("inlineCode",{parentName:"p"},"oc"),"):"),Object(r.b)("pre",{parentName:"div"},Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),'oc get secret example-mysql -o jsonpath="{.data.mysql-root-password}" | base64 --decode; echo\n')))),Object(r.b)("ol",{start:4},Object(r.b)("li",{parentName:"ol"},"Verify that the chart has installed successfully:")),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"helm list\n")),Object(r.b)("ol",{start:5},Object(r.b)("li",{parentName:"ol"},"Expose the MySQL service as a route:")),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"oc expose service example-mysql\noc get routes\n")),Object(r.b)("p",null,"Or port-forward to http://localhost:3306"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"oc port-forward svc/example-mysql 3306\n")),Object(r.b)("h3",{id:"uninstall-the-application"},"Uninstall the application"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"helm uninstall example-mysql\n")),Object(r.b)("h3",{id:"set-deployment-parameters"},"Set deployment parameters"),Object(r.b)("p",null,"You can also define deployment parameters when installing a Helm chart, such as the ",Object(r.b)("strong",{parentName:"p"},"service account")," and ",Object(r.b)("strong",{parentName:"p"},"node selector"),". "),Object(r.b)("p",null,"For example, here we make sure the application will run on DSRI CPU nodes and use the ",Object(r.b)("inlineCode",{parentName:"p"},"anyuid")," service account:"),Object(r.b)("p",null,"Add Bitnami repository:"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"helm repo add bitnami https://charts.bitnami.com/bitnami\n")),Object(r.b)("p",null,"Install and start Postgresql:"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"helm install postgresql-db bitnami/postgresql --set nodeSelector.dsri.unimaas.nl/cpu=true --set serviceAccount.name=anyuid\n")))}b.isMDXComponent=!0}}]);