(window.webpackJsonp=window.webpackJsonp||[]).push([[54],{123:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return r})),a.d(t,"metadata",(function(){return c})),a.d(t,"rightToc",(function(){return s})),a.d(t,"default",(function(){return p}));var n=a(3),i=a(7),o=(a(0),a(130)),r={id:"deploy-rstudio",title:"Start RStudio"},c={unversionedId:"deploy-rstudio",id:"deploy-rstudio",isDocsHomePage:!1,title:"Start RStudio",description:"RStudio can be easily deployed from the OpenShift web UI Catalog.",source:"@site/docs/deploy-rstudio.md",slug:"/deploy-rstudio",permalink:"/dsri-documentation/docs/deploy-rstudio",editUrl:"https://github.com/MaastrichtU-IDS/dsri-documentation/edit/master/website/docs/deploy-rstudio.md",version:"current",lastUpdatedBy:"Vincent Emonet",lastUpdatedAt:1611052207,sidebar:"docs",previous:{title:"Start Jupyter Notebooks",permalink:"/dsri-documentation/docs/deploy-jupyter"},next:{title:"Start a VSCode server",permalink:"/dsri-documentation/docs/deploy-vscode"}},s=[{value:"RStudio with root user",id:"rstudio-with-root-user",children:[]},{value:"RStudio with Shiny server",id:"rstudio-with-shiny-server",children:[]},{value:"Use Git in RStudio",id:"use-git-in-rstudio",children:[]}],l={rightToc:s};function p(e){var t=e.components,a=Object(i.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},l,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"RStudio can be easily deployed from the ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://app.dsri.unimaas.nl:8443/console/catalog"}),"OpenShift web UI Catalog"),"."),Object(o.b)("h2",{id:"rstudio-with-root-user"},"RStudio with root user"),Object(o.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(o.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"}),Object(o.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})))),"Root permission required")),Object(o.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"\ud83d\udd12 You need root containers (aka. anyuid) enabled in your project to start this application."))),Object(o.b)("p",null,"Run RStudio with ",Object(o.b)("inlineCode",{parentName:"p"},"sudo")," privileges, can be useful if need to install additional packages that requires ",Object(o.b)("inlineCode",{parentName:"p"},"sudo")),Object(o.b)("p",null,"Create the template in your project catalog if not present:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"oc apply -f https://raw.githubusercontent.com/MaastrichtU-IDS/dsri-openshift-applications/main/templates-anyuid/template-rstudio-root-persistent.yml\n")),Object(o.b)("p",null,"The application will use an existing Persistent Volume Claim (PVC) for a persistent storage of the data."),Object(o.b)("div",{className:"admonition admonition-info alert alert--info"},Object(o.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(o.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"Official documentation")),Object(o.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"See the ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/rocker-org/rocker/wiki/Using-the-RStudio-image"}),"official Docker image documentation")," for more details about the container deployed."))),Object(o.b)("img",{src:"/dsri-documentation/img/screenshot-deploy-rstudio.png",alt:"Deploy RStudio",style:{maxWidth:"100%",maxHeight:"100%"}}),Object(o.b)("h2",{id:"rstudio-with-shiny-server"},"RStudio with Shiny server"),Object(o.b)("p",null,"Start a RStudio application, with a complementary Shiny server, on the DSRI. You will be able to access the application via an URL generated by the DSRI."),Object(o.b)("p",null,"Create the template in your project catalog:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"oc apply -f https://raw.githubusercontent.com/MaastrichtU-IDS/dsri-openshift-applications/main/templates-restricted/template-rstudio-shiny-dynamic.yml\n")),Object(o.b)("p",null,"Use the ",Object(o.b)("strong",{parentName:"p"},"RStudio with Shiny (Dynamic)")," template in the OpenShift web UI catalog. It will automatically create a persistent storage for the data."),Object(o.b)("p",null,"Image optimized for DSRI OpenShift, does not require root containers enabled. But you will not have ",Object(o.b)("inlineCode",{parentName:"p"},"sudo")," privileges in the application."),Object(o.b)("h2",{id:"use-git-in-rstudio"},"Use Git in RStudio"),Object(o.b)("p",null,"The fastest way to get started is to use ",Object(o.b)("inlineCode",{parentName:"p"},"git")," from the terminal, for example to clone the git repository:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"git clone https://github.com/MaastrichtU-IDS/dsri-openshift-applications.git\n")),Object(o.b)("p",null,"You can also check how to enable Git integration in RStudio at ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://support.rstudio.com/hc/en-us/articles/200532077"}),"https://support.rstudio.com/hc/en-us/articles/200532077")),Object(o.b)("p",null,"You can run this command to ask git to save your password for 15min:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"git config credential.helper cache\n")),Object(o.b)("p",null,"Or store the password/token in a plain text file:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"git config --global credential.helper 'store --file ~/.git-credentials'\n")),Object(o.b)("p",null,"Before pushing back to GitHub or GitLab, you will need to ",Object(o.b)("strong",{parentName:"p"},"configure you username and email")," in the terminal:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),'git config --global user.name "Jean Dupont"\ngit config --global user.email jeandupont@gmail.com\n')),Object(o.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(o.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(o.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"Git tip")),Object(o.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"We recommend to use SSH instead of HTTPS connection when possible, checkout ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://docs.github.com/en/free-pro-team@latest/github/authenticating-to-github/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent"}),"here")," how to generate SSH keys and use them with your GitHub account."))))}p.isMDXComponent=!0},130:function(e,t,a){"use strict";a.d(t,"a",(function(){return d})),a.d(t,"b",(function(){return m}));var n=a(0),i=a.n(n);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var l=i.a.createContext({}),p=function(e){var t=i.a.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},d=function(e){var t=p(e.components);return i.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},u=i.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,r=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=p(a),u=n,m=d["".concat(r,".").concat(u)]||d[u]||b[u]||o;return a?i.a.createElement(m,c(c({ref:t},l),{},{components:a})):i.a.createElement(m,c({ref:t},l))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,r=new Array(o);r[0]=u;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:n,r[1]=c;for(var l=2;l<o;l++)r[l]=a[l];return i.a.createElement.apply(null,r)}return i.a.createElement.apply(null,a)}u.displayName="MDXCreateElement"}}]);