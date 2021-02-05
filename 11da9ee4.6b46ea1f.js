(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{165:function(t,e,a){"use strict";a.d(e,"a",(function(){return l})),a.d(e,"b",(function(){return d}));var n=a(0),r=a.n(n);function o(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function i(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function c(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?i(Object(a),!0).forEach((function(e){o(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function p(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},o=Object.keys(t);for(n=0;n<o.length;n++)a=o[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(n=0;n<o.length;n++)a=o[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var b=r.a.createContext({}),s=function(t){var e=r.a.useContext(b),a=e;return t&&(a="function"==typeof t?t(e):c(c({},e),t)),a},l=function(t){var e=s(t.components);return r.a.createElement(b.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return r.a.createElement(r.a.Fragment,{},e)}},m=r.a.forwardRef((function(t,e){var a=t.components,n=t.mdxType,o=t.originalType,i=t.parentName,b=p(t,["components","mdxType","originalType","parentName"]),l=s(a),m=n,d=l["".concat(i,".").concat(m)]||l[m]||u[m]||o;return a?r.a.createElement(d,c(c({ref:e},b),{},{components:a})):r.a.createElement(d,c({ref:e},b))}));function d(t,e){var a=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var o=a.length,i=new Array(o);i[0]=m;var c={};for(var p in e)hasOwnProperty.call(e,p)&&(c[p]=e[p]);c.originalType=t,c.mdxType="string"==typeof t?t:n,i[1]=c;for(var b=2;b<o;b++)i[b]=a[b];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,a)}m.displayName="MDXCreateElement"},72:function(t,e,a){"use strict";a.r(e),a.d(e,"frontMatter",(function(){return i})),a.d(e,"metadata",(function(){return c})),a.d(e,"rightToc",(function(){return p})),a.d(e,"default",(function(){return s}));var n=a(3),r=a(7),o=(a(0),a(165)),i={id:"catalog-opendatahub",title:"OpenDataHub"},c={unversionedId:"catalog-opendatahub",id:"catalog-opendatahub",isDocsHomePage:!1,title:"OpenDataHub",description:"Deploying an OpenDataHub cluster is a work in progress on the DSRI, contact us if you are interested in trying it out.",source:"@site/docs/catalog-opendatahub.md",slug:"/catalog-opendatahub",permalink:"/dsri-documentation/docs/catalog-opendatahub",editUrl:"https://github.com/MaastrichtU-IDS/dsri-documentation/edit/master/website/docs/catalog-opendatahub.md",version:"current",lastUpdatedBy:"Binosha",lastUpdatedAt:1612526368,sidebar:"docs",previous:{title:"Databases",permalink:"/dsri-documentation/docs/deploy-database"},next:{title:"OpenMPI",permalink:"/dsri-documentation/docs/catalog-openmpi"}},p=[{value:"Components available on DSRI",id:"components-available-on-dsri",children:[{value:"Start Spark with JupyterHub",id:"start-spark-with-jupyterhub",children:[]}]},{value:"All components",id:"all-components",children:[]}],b={rightToc:p};function s(t){var e=t.components,a=Object(r.a)(t,["components"]);return Object(o.b)("wrapper",Object(n.a)({},b,a,{components:e,mdxType:"MDXLayout"}),Object(o.b)("div",{className:"admonition admonition-warning alert alert--danger"},Object(o.b)("div",{parentName:"div",className:"admonition-heading"},Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",{parentName:"h5",className:"admonition-icon"},Object(o.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},Object(o.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"Work in progress")),Object(o.b)("div",{parentName:"div",className:"admonition-content"},Object(o.b)("p",{parentName:"div"},"Deploying an ",Object(o.b)("a",{parentName:"p",href:"https://opendatahub.io"},"OpenDataHub")," cluster is a ",Object(o.b)("strong",{parentName:"p"},"work in progress")," on the DSRI, ",Object(o.b)("strong",{parentName:"p"},Object(o.b)("a",{parentName:"strong",href:"/dsri-documentation/help"},"contact us"))," if you are interested in trying it out."))),Object(o.b)("p",null,Object(o.b)("a",{parentName:"p",href:"https://opendatahub.io"},"OpenDataHub")," is a project to orchestrate the deployment of Data Science applications on OpenShift, based on KubeFlow."),Object(o.b)("h2",{id:"components-available-on-dsri"},"Components available on DSRI"),Object(o.b)("p",null,"Those components have been tested on the DSRI:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"https://github.com/MaastrichtU-IDS/odh-manifests/blob/master/jupyterhub/README.md"},"JupyterHub")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"https://github.com/MaastrichtU-IDS/odh-manifests/blob/master/radanalyticsio/README.md"},"Spark Operator")," from ",Object(o.b)("a",{parentName:"li",href:"https://radanalytics.io/"},"radanalytics"))),Object(o.b)("h3",{id:"start-spark-with-jupyterhub"},"Start Spark with JupyterHub"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Checkout the ",Object(o.b)("a",{parentName:"p",href:"https://opendatahub.io/docs/getting-started/quick-installation.html"},"official documentation to start an instance of OpenDataHub")," (note that the Operator has already been installed)")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Then visit the ",Object(o.b)("a",{parentName:"p",href:"https://opendatahub.io/docs/getting-started/basic-tutorial.html"},"documentation to reach the Spark cluster")," from a Jupyter notebook."))),Object(o.b)("h2",{id:"all-components"},"All components"),Object(o.b)("p",null,"Here are all the components that can be deployed as part of an ",Object(o.b)("a",{parentName:"p",href:"https://opendatahub.io"},"OpenDataHub"),":"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"https://github.com/MaastrichtU-IDS/odh-manifests/blob/master/jupyterhub/README.md"},"JupyterHub")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"https://github.com/MaastrichtU-IDS/odh-manifests/blob/master/airflow/README.md"},"Airflow")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"https://github.com/MaastrichtU-IDS/odh-manifests/blob/master/odhargo/README.md"},"Argo")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"https://github.com/MaastrichtU-IDS/odh-manifests/blob/master/grafana/README.md"},"Grafana")," & ",Object(o.b)("a",{parentName:"li",href:"https://github.com/MaastrichtU-IDS/odh-manifests/blob/master/prometheus/README.md"},"Prometheus")," for data/logs visualization"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"https://github.com/MaastrichtU-IDS/odh-manifests/blob/master/radanalyticsio/README.md"},"Spark Operator")," from ",Object(o.b)("a",{parentName:"li",href:"https://radanalytics.io/"},"radanalytics")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"https://github.com/MaastrichtU-IDS/odh-manifests/blob/master/kafka/README.md"},"Kafka"),"/Strimzi for streaming applications"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"https://github.com/MaastrichtU-IDS/odh-manifests/blob/master/superset/README.md"},"Superset")," for data visualization"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"https://github.com/MaastrichtU-IDS/odh-manifests/blob/master/ai-library/README.md"},"AI Library")," (Seldon to publish AI models)")),Object(o.b)("p",null,"Let us know if you need help to deploy one of those components on the DSRI."))}s.isMDXComponent=!0}}]);