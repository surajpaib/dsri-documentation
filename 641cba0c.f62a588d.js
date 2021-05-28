(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{109:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return p})),n.d(t,"default",(function(){return s}));var o=n(3),a=n(7),i=(n(0),n(173)),r=["components"],l={id:"okd3-openshift-install",title:"Install the oc client"},c={unversionedId:"okd3-openshift-install",id:"okd3-openshift-install",isDocsHomePage:!1,title:"Install the oc client",description:"Install the OpenShift Command Line Interface (CLI) to access the DSRI from your computer's terminal.",source:"@site/docs/okd3-openshift-install.md",slug:"/okd3-openshift-install",permalink:"/dsri-documentation/docs/okd3-openshift-install",editUrl:"https://github.com/MaastrichtU-IDS/dsri-documentation/edit/master/website/docs/okd3-openshift-install.md",version:"current",lastUpdatedBy:"Vincent Emonet",lastUpdatedAt:1622222261,sidebar:"docs",previous:{title:"Quickstart with templates",permalink:"/dsri-documentation/docs/okd3-deploy-from-template"},next:{title:"Upload data",permalink:"/dsri-documentation/docs/okd3-openshift-load-data"}},p=[{value:"Install the <code>oc</code> client",id:"install-the-oc-client",children:[{value:"On Linux",id:"on-linux",children:[]},{value:"On Mac",id:"on-mac",children:[]},{value:"On Windows",id:"on-windows",children:[]}]},{value:"Login in the terminal with <code>oc</code>",id:"login-in-the-terminal-with-oc",children:[]}],b={rightToc:p};function s(e){var t=e.components,n=Object(a.a)(e,r);return Object(i.b)("wrapper",Object(o.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Install the ",Object(i.b)("strong",{parentName:"p"},"OpenShift Command Line Interface (CLI)")," to access the DSRI from your computer's terminal. "),Object(i.b)("p",null,"The ",Object(i.b)("inlineCode",{parentName:"p"},"oc")," CLI enables to perform operations on your applications deployed on the DSRI, such as:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Copy large files to or from the DSRI using ",Object(i.b)("inlineCode",{parentName:"li"},"oc cp")),Object(i.b)("li",{parentName:"ul"},"Connect to an application terminal using ",Object(i.b)("inlineCode",{parentName:"li"},"oc rsh")),Object(i.b)("li",{parentName:"ul"},"Get the applications running in your project with ",Object(i.b)("inlineCode",{parentName:"li"},"oc get pods"))),Object(i.b)("h2",{id:"install-the-oc-client"},"Install the ",Object(i.b)("inlineCode",{parentName:"h2"},"oc")," client"),Object(i.b)("h3",{id:"on-linux"},"On Linux"),Object(i.b)("p",null,"Download the ",Object(i.b)("inlineCode",{parentName:"p"},"oc")," and ",Object(i.b)("inlineCode",{parentName:"p"},"kubectl")," Command Line Interface clients:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-shell"},"wget https://github.com/openshift/origin/releases/download/v3.11.0/openshift-origin-client-tools-v3.11.0-0cbc58b-linux-64bit.tar.gz\ntar xvf openshift-origin-client-tools*.tar.gz\ncd openshift-origin-client*/\nsudo mv oc kubectl /usr/local/bin/\n")),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"See the ",Object(i.b)("a",{parentName:"p",href:"https://github.com/openshift/origin/releases/tag/v3.11.0"},"release on GitHub"),".")),Object(i.b)("h3",{id:"on-mac"},"On Mac"),Object(i.b)("p",null,"Use ",Object(i.b)("inlineCode",{parentName:"p"},"brew")," to install the client:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-shell"},"brew install openshift-cli\n")),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"See the ",Object(i.b)("a",{parentName:"p",href:"https://docs.okd.io/latest/cli_reference/get_started_cli.html#cli-mac"},"official documentation on MacOS")," for more details.")),Object(i.b)("h3",{id:"on-windows"},"On Windows"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Create a folder for OpenShift in Program Files: ",Object(i.b)("inlineCode",{parentName:"p"},"C:\\Program Files (x86)\\OpenShift"))),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Click ",Object(i.b)("a",{parentName:"p",href:"https://github.com/openshift/origin/releases/download/v3.11.0/openshift-origin-client-tools-v3.11.0-0cbc58b-windows.zip"},"here")," to download the ",Object(i.b)("inlineCode",{parentName:"p"},"oc")," tool ",Object(i.b)("inlineCode",{parentName:"p"},".zip")," file, and move it to ",Object(i.b)("inlineCode",{parentName:"p"},"C:\\Program Files (x86)\\OpenShift"),".")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Extract the ",Object(i.b)("inlineCode",{parentName:"p"},".zip")," file.")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Next set the system ",Object(i.b)("strong",{parentName:"p"},"PATH")," environment variables for the directory containing the ",Object(i.b)("inlineCode",{parentName:"p"},"oc.exe")," file, which now resides in your newly created ",Object(i.b)("strong",{parentName:"p"},"OpenShift")," folder inside of ",Object(i.b)("inlineCode",{parentName:"p"},"C:\\Program Files (x86)\\OpenShift")),Object(i.b)("ol",{parentName:"li"},Object(i.b)("li",{parentName:"ol"},"Open the Control Panel, and click on ",Object(i.b)("strong",{parentName:"li"},"System")),Object(i.b)("li",{parentName:"ol"},"Click on ",Object(i.b)("strong",{parentName:"li"},"Advance system settings")," on the left or open the ",Object(i.b)("strong",{parentName:"li"},"Advance")," tab of ",Object(i.b)("em",{parentName:"li"},"System Properties.")," "),Object(i.b)("li",{parentName:"ol"},"Click the button labeled ",Object(i.b)("strong",{parentName:"li"},"Environment Variables...")," at the bottom. "),Object(i.b)("li",{parentName:"ol"},"Look for the option in the ",Object(i.b)("strong",{parentName:"li"},"User variables")," section for ",Object(i.b)("strong",{parentName:"li"},"Path"),".")))),Object(i.b)("img",{class:"screenshot",src:"/dsri-documentation/img/OC_Path.png",alt:"Set OC Path",style:{zoom:"100%",maxHeight:"500px",maxWidth:"500px"}}),Object(i.b)("p",null,"This makes it easy to access the ",Object(i.b)("inlineCode",{parentName:"p"},"oc")," command line interface by simply opening up the ",Object(i.b)("strong",{parentName:"p"},"PowerShell")," and typing in the ",Object(i.b)("inlineCode",{parentName:"p"},"oc")," command, e.g.:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-powershell"},"oc version\n")),Object(i.b)("h2",{id:"login-in-the-terminal-with-oc"},"Login in the terminal with ",Object(i.b)("inlineCode",{parentName:"h2"},"oc")),Object(i.b)("p",null,"To use the ",Object(i.b)("inlineCode",{parentName:"p"},"oc")," Command Line Interface, you will need to authenticate to the ",Object(i.b)("a",{parentName:"p",href:"https://app.dsri.unimaas.nl:8443/console"},"DSRI"),":"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"Go to the ",Object(i.b)("a",{parentName:"li",href:"https://app.dsri.unimaas.nl:8443/console"},"DSRI web UI"),"."),Object(i.b)("li",{parentName:"ol"},"Click on the ",Object(i.b)("strong",{parentName:"li"},"Copy Login Command")," button (in the top right of the page).")),Object(i.b)("img",{src:"/dsri-documentation/img/screenshot_copy_login.png",alt:"Copy Login Command button",style:{maxWidth:"100%",maxHeight:"100%"}}),Object(i.b)("ol",{start:3},Object(i.b)("li",{parentName:"ol"},"Paste the copied command in your terminal, and execute it to login with ",Object(i.b)("inlineCode",{parentName:"li"},"oc")," \ud83d\udd11")),Object(i.b)("div",{className:"admonition admonition-info alert alert--info"},Object(i.b)("div",{parentName:"div",className:"admonition-heading"},Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",{parentName:"h5",className:"admonition-icon"},Object(i.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(i.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Login command")),Object(i.b)("div",{parentName:"div",className:"admonition-content"},Object(i.b)("p",{parentName:"div"},"The command should look like this:"),Object(i.b)("pre",{parentName:"div"},Object(i.b)("code",{parentName:"pre",className:"language-bash"},"oc login https://openshift_cluster:8443 --token=$GENERATED_TOKEN\n")))))}s.isMDXComponent=!0},173:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return h}));var o=n(0),a=n.n(o);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=a.a.createContext({}),b=function(e){var t=a.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=b(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,r=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),s=b(n),d=o,h=s["".concat(r,".").concat(d)]||s[d]||m[d]||i;return n?a.a.createElement(h,l(l({ref:t},p),{},{components:n})):a.a.createElement(h,l({ref:t},p))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,r=new Array(i);r[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,r[1]=l;for(var p=2;p<i;p++)r[p]=n[p];return a.a.createElement.apply(null,r)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);