(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{127:function(e,t,a){"use strict";a.d(t,"a",(function(){return u})),a.d(t,"b",(function(){return d}));var r=a(0),n=a.n(r);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function p(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var b=n.a.createContext({}),c=function(e){var t=n.a.useContext(b),a=t;return e&&(a="function"==typeof e?e(t):p(p({},t),e)),a},u=function(e){var t=c(e.components);return n.a.createElement(b.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},m=n.a.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,b=l(e,["components","mdxType","originalType","parentName"]),u=c(a),m=r,d=u["".concat(i,".").concat(m)]||u[m]||s[m]||o;return a?n.a.createElement(d,p(p({ref:t},b),{},{components:a})):n.a.createElement(d,p({ref:t},b))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=m;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:r,i[1]=p;for(var b=2;b<o;b++)i[b]=a[b];return n.a.createElement.apply(null,i)}return n.a.createElement.apply(null,a)}m.displayName="MDXCreateElement"},82:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return p})),a.d(t,"rightToc",(function(){return l})),a.d(t,"default",(function(){return c}));var r=a(3),n=a(7),o=(a(0),a(127)),i={id:"deploy-jupyter",title:"Start Jupyter Notebooks"},p={unversionedId:"deploy-jupyter",id:"deploy-jupyter",isDocsHomePage:!1,title:"Start Jupyter Notebooks",description:"Feel free to propose new deployments using pull requests or request new ones by creating a new issues.",source:"@site/docs/deploy-jupyter.md",slug:"/deploy-jupyter",permalink:"/dsri-documentation/docs/deploy-jupyter",editUrl:"https://github.com/MaastrichtU-IDS/dsri-documentation/edit/master/docs/docs/deploy-jupyter.md",version:"current",lastUpdatedBy:"Vincent Emonet",lastUpdatedAt:1607046772,sidebar:"docs",previous:{title:"Debug an application",permalink:"/dsri-documentation/docs/openshift-debug"},next:{title:"Start RStudio",permalink:"/dsri-documentation/docs/deploy-rstudio"}},l=[{value:"Start JupyterLab with the root user",id:"start-jupyterlab-with-the-root-user",children:[]},{value:"Start JupyterLab with restricted user",id:"start-jupyterlab-with-restricted-user",children:[]},{value:"Use git in JupyterLab",id:"use-git-in-jupyterlab",children:[]},{value:"Upload data to JupyterLab",id:"upload-data-to-jupyterlab",children:[]},{value:"Stop or delete JupyterLab",id:"stop-or-delete-jupyterlab",children:[]},{value:"Start JupyterHub",id:"start-jupyterhub",children:[]}],b={rightToc:l};function c(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},b,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Feel free to propose new deployments using ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/MaastrichtU-IDS/dsri-documentation/pulls"}),"pull requests")," or request new ones by creating a ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/MaastrichtU-IDS/dsri-documentation/issues"}),"new issues"),"."),Object(o.b)("h2",{id:"start-jupyterlab-with-the-root-user"},"Start JupyterLab with the root user"),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"\ud83d\udd12 You need root containers enabled (aka. anyuid) in your project to start this application.")),Object(o.b)("p",null,"We will deploy the JupyterLab image with root user available at: ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/users/vemonet/packages/container/package/jupyterlab"}),Object(o.b)("inlineCode",{parentName:"a"},"ghcr.io/vemonet/jupyterlab"))),Object(o.b)("p",null,"This JupyterLab image comes with a Python 3.8 kernel with autocomplete and linting, a Java kernel and a SPARQL kernel."),Object(o.b)("p",null,"Create the template in your project catalog if it is not present:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"oc apply -f https://raw.githubusercontent.com/MaastrichtU-IDS/dsri-openshift-applications/main/templates-anyuid/template-jupyterlab-root-persistent.yml\n")),Object(o.b)("p",null,"You can deploy it using the ",Object(o.b)("strong",{parentName:"p"},"JupyterLab with root user (Persistent)")," solutions in the ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://app.dsri.unimaas.nl:8443/console/catalog"}),"Catalog web UI"),":"),Object(o.b)("img",{src:"/dsri-documentation/img/screenshot-deploy-jupyter.png",alt:"Deploy Jupyter",style:{maxWidth:"100%",maxHeight:"100%"}}),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"The application will use an existing Persistent Volume Claim (PVC) for a persistent storage of the data.")),Object(o.b)("p",null,"The following parameters can be provided:"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"Provide a unique ",Object(o.b)("strong",{parentName:"li"},"Application name")),Object(o.b)("li",{parentName:"ol"},"The ",Object(o.b)("strong",{parentName:"li"},"Password")," is safely stored in a Secret."),Object(o.b)("li",{parentName:"ol"},"You can provide a ",Object(o.b)("strong",{parentName:"li"},"Git repository URL")," with files to be downloaded and requirements to be installed at the start of the application. "),Object(o.b)("li",{parentName:"ol"},Object(o.b)("strong",{parentName:"li"},"Storage name")," (only for persistent): the storage Persistent Volume Claim (PVC)"),Object(o.b)("li",{parentName:"ol"},Object(o.b)("strong",{parentName:"li"},"Storage folder")," (only for persistent): path to the Notebook data folder in the Persistent Volume Claim storage")),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"This deployment require to have  root user enabled on your project. Contact the ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"mailto:dsri-support-l@maastrichtuniversity.nl"}),"DSRI support team")," to request root access if you don't have them.")),Object(o.b)("p",null,"Pip requirements, apt packages and Jupyterlab extensions are installed from ",Object(o.b)("inlineCode",{parentName:"p"},"requirements.txt"),", ",Object(o.b)("inlineCode",{parentName:"p"},"packages.txt")," and ",Object(o.b)("inlineCode",{parentName:"p"},"extensions.txt")," requirement files. "),Object(o.b)("p",null,"Try the following Notebooks to work on a RDF Knowledge Graph about COVID-19 related publications: ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/vemonet/covid-kg-notebooks"}),"https://github.com/vemonet/covid-kg-notebooks")),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"Built from ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/amalic/Jupyterlab"}),"amalic/Jupyterlab")," image.")),Object(o.b)("h2",{id:"start-jupyterlab-with-restricted-user"},"Start JupyterLab with restricted user"),Object(o.b)("p",null,"Start JupyterLab images from the ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/jupyter/docker-stacks"}),"official Jupyter docker stack")," with regular ",Object(o.b)("inlineCode",{parentName:"p"},"jovyan")," user, without ",Object(o.b)("inlineCode",{parentName:"p"},"sudo")," privileges."),Object(o.b)("p",null,"Create the template in your project catalog:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"oc apply -f https://raw.githubusercontent.com/MaastrichtU-IDS/dsri-openshift-applications/main/templates-restricted/template-jupyterlab-dynamic.yml\n")),Object(o.b)("p",null,"You can use any image based on the official Jupyter docker stack: ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/jupyter/docker-stacks"}),"https://github.com/jupyter/docker-stacks")),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"jupyter/scipy-notebook")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"jupyter/datascience-notebook")," (with Julia kernel)"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"jupyter/tensorflow-notebook")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"jupyter/r-notebook")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"jupyter/pyspark-notebook")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"jupyter/all-spark-notebook")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"ghcr.io/maastrichtu-ids/jupyterlab-on-openshift")," (with SPARQL and Java kernels)")),Object(o.b)("p",null,"Or build your own using this repository as example: ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/MaastrichtU-IDS/jupyterlab-on-openshift"}),"https://github.com/MaastrichtU-IDS/jupyterlab-on-openshift")," \ud83d\udce6"),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},Object(o.b)("strong",{parentName:"p"},"You will not be root user"),"\u26a0\ufe0f you will be able to install new ",Object(o.b)("inlineCode",{parentName:"p"},"pip")," packages, but you will not have ",Object(o.b)("inlineCode",{parentName:"p"},"sudo")," privileges (so no installation of ",Object(o.b)("inlineCode",{parentName:"p"},"apt")," or ",Object(o.b)("inlineCode",{parentName:"p"},"yum")," packages)")),Object(o.b)("p",null,"By default the working directory is ",Object(o.b)("inlineCode",{parentName:"p"},"/home/jovyan")),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"The application will automatically create a Persistent Volume Claim (PVC) for a persistent storage of the data.")),Object(o.b)("h2",{id:"use-git-in-jupyterlab"},"Use git in JupyterLab"),Object(o.b)("p",null,"You can use the ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/jupyterlab/jupyterlab-git"}),"JupyterLab Git extension")," to clone and manage your ",Object(o.b)("inlineCode",{parentName:"p"},"git")," repositories."),Object(o.b)("p",null,"It will prompt you for a username and password if the repository is private."),Object(o.b)("img",{src:"https://raw.githubusercontent.com/jupyterlab/jupyterlab-git/master/docs/figs/preview.gif",alt:"JupyterLab Git extension",style:{maxWidth:"100%",maxHeight:"100%"}}),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"}," You can also use ",Object(o.b)("inlineCode",{parentName:"p"},"git")," from the terminal.")),Object(o.b)("p",null,"You can run this command to ask git to save your password for 15min:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"git config credential.helper cache\n")),Object(o.b)("p",null,"Or store the password in a plain text file:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"git config --global credential.helper 'store --file ~/.git-credentials'\n")),Object(o.b)("p",null,"Before pushing back to GitHub or GitLab, you will need to ",Object(o.b)("strong",{parentName:"p"},"configure you username and email")," in VSCode terminal:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),'git config --global user.name "Jean Dupont"\ngit config --global user.email jeandupont@gmail.com\n')),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"We recommend to use SSH instead of HTTPS connection when possible, checkout ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://docs.github.com/en/free-pro-team@latest/github/authenticating-to-github/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent"}),"here")," how to generate SSH keys and use them with your GitHub account.")),Object(o.b)("h2",{id:"upload-data-to-jupyterlab"},"Upload data to JupyterLab"),Object(o.b)("p",null,"See the ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/dsri-documentation/docs/openshift-load-data"}),"Guide to upload data on the DSRI"),"."),Object(o.b)("h2",{id:"stop-or-delete-jupyterlab"},"Stop or delete JupyterLab"),Object(o.b)("p",null,"See the ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/dsri-documentation/docs/openshift-delete-services"}),"documentation to stop and delete services"),"."),Object(o.b)("h2",{id:"start-jupyterhub"},"Start JupyterHub"),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"Useful if you want to provide JupyterLab to multiple users.")),Object(o.b)("p",null,"Use the ",Object(o.b)("strong",{parentName:"p"},"JupyterHub with GitHub authentication (Dynamic)")," template to start a JupyterHub service, users will be able to login with their GitHub account, and start a notebook choosing from various images."),Object(o.b)("p",null,"This solution enable you to use the DSRI to run Jupyter notebooks for multiple users without the need for a DSRI account, or knowledge of OpenShift. All they need is a GitHub account and access to the UM network (via the UM VPN)."),Object(o.b)("p",null,"Persistent volumes are automatically created for each instance started in JupyterHub to insure persistence of the data even if the instances or JupyterHub are stopped."),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"\u26a0\ufe0f The users will be able to install new ",Object(o.b)("inlineCode",{parentName:"p"},"pip")," packages in their JupyterLab instance, but they will not have ",Object(o.b)("inlineCode",{parentName:"p"},"sudo")," privileges (so they cannot install ",Object(o.b)("inlineCode",{parentName:"p"},"apt")," or ",Object(o.b)("inlineCode",{parentName:"p"},"yum")," packages)")),Object(o.b)("p",null,"Create the template in your project catalog:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"oc apply -f https://raw.githubusercontent.com/MaastrichtU-IDS/dsri-openshift-applications/main/templates-restricted/template-jupyterhub-github-auth.yml\n")),Object(o.b)("p",null,"A custom image can be built and provided when deploying JupyterHub, see this repository as example to build a JupyterLab Docker image supported by OpenShift: ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/MaastrichtU-IDS/jupyterlab-on-openshift"}),"https://github.com/MaastrichtU-IDS/jupyterlab-on-openshift")),Object(o.b)("p",null,"You will need to register a new GitHub OAuth application for your JupyterHub instance to authenticate via GitHub:"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Create a new OAuth app at ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/settings/developers"}),"https://github.com/settings/developers"))),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Provide the following callback URL:"),Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"https://APPLICATION_NAME-OPENSHIFT_PROJECT.app.dsri.unimaas.nl/hub/oauth_callback"}),"https://APPLICATION_NAME-OPENSHIFT_PROJECT.app.dsri.unimaas.nl/hub/oauth_callback")),Object(o.b)("li",{parentName:"ul"},"e.g. for the ",Object(o.b)("inlineCode",{parentName:"li"},"ids-projects")," project: ",Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"https://jupyterhub-ids-projects.app.dsri.unimaas.nl/hub/oauth_callback"}),"https://jupyterhub-ids-projects.app.dsri.unimaas.nl/hub/oauth_callback")))),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Add authorized GitHub users to the JupyterHub users when submitting the template to deploy JupyterHub in the OpenShift web UI. It can be changed from the ",Object(o.b)("strong",{parentName:"p"},"Admin")," tab in the JupyterHub UI later."))))}c.isMDXComponent=!0}}]);