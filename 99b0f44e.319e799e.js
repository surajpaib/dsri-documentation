(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{100:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return s}));var a=n(3),o=n(7),r=(n(0),n(130)),i={id:"workflows-introduction",title:"Introduction to workflows"},c={unversionedId:"workflows-introduction",id:"workflows-introduction",isDocsHomePage:!1,title:"Introduction to workflows",description:"Running workflows on the DSRI is a work in progress. It usually requires some knowledge about how to orchestrate containers.",source:"@site/docs/workflows-introduction.md",slug:"/workflows-introduction",permalink:"/dsri-documentation/docs/workflows-introduction",editUrl:"https://github.com/MaastrichtU-IDS/dsri-documentation/edit/master/website/docs/workflows-introduction.md",version:"current",lastUpdatedBy:"Vincent Emonet",lastUpdatedAt:1610465500,sidebar:"docs",previous:{title:"Libraries for Machine Learning",permalink:"/dsri-documentation/docs/tools-machine-learning"},next:{title:"Run Argo workflows",permalink:"/dsri-documentation/docs/workflows-argo"}},l=[{value:"Introduction",id:"introduction",children:[]},{value:"Already tested",id:"already-tested",children:[{value:"Argo",id:"argo",children:[]},{value:"Nextflow",id:"nextflow",children:[]},{value:"CWL",id:"cwl",children:[]}]},{value:"To be implemented",id:"to-be-implemented",children:[{value:"Apache Airflow",id:"apache-airflow",children:[]},{value:"Apache Spark",id:"apache-spark",children:[]},{value:"Kubeflow",id:"kubeflow",children:[]},{value:"KubeGene",id:"kubegene",children:[]},{value:"Seldon",id:"seldon",children:[]},{value:"Volcano",id:"volcano",children:[]}]}],b={rightToc:l};function s(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("div",{className:"admonition admonition-warning alert alert--danger"},Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(r.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"})))),"Work in progress")),Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"Running workflows on the DSRI is a work in progress. It usually requires some knowledge about how to orchestrate containers."))),Object(r.b)("h2",{id:"introduction"},"Introduction"),Object(r.b)("p",null,"Multiple technologies are available to run workflows on OpenShift/Kubernetes clusters. Each has its strengths and weaknesses in different areas."),Object(r.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"}),Object(r.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})))),"Use-case dependant")),Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"The technology to use needs to be ",Object(r.b)("strong",{parentName:"p"},"chosen depending on your use-case"),"."))),Object(r.b)("h2",{id:"already-tested"},"Already tested"),Object(r.b)("h3",{id:"argo"},"Argo"),Object(r.b)("p",null,Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://argoproj.github.io/argo/"}),"Argo")," is a container native workflow engine for ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://kubernetes.io/"}),"Kubernetes")," supporting both ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://argoproj.github.io/docs/argo/examples/readme.html#dag"}),"DAG")," and ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://argoproj.github.io/docs/argo/examples/readme.html#steps"}),"step based")," workflows."),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Workflows easy to define using Kubernetes-like YAML files."),Object(r.b)("li",{parentName:"ul"},"Easy to define if your workflow is composed of Docker containers to run with arguments.")),Object(r.b)("h3",{id:"nextflow"},"Nextflow"),Object(r.b)("p",null,Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://www.nextflow.io/"}),"Nextflow")," has been developed by the genomic research scientific community and is built to run bioinformatics pipeline."),Object(r.b)("p",null,"Define your workflow in a Bash script fashion, providing input, output and the command to run. Without the need to create and use Docker container for Conda pipelines."),Object(r.b)("h3",{id:"cwl"},"CWL"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Developed by the genomic research scientific community."),Object(r.b)("li",{parentName:"ul"},"Good support for provenance description (export as RDF)."),Object(r.b)("li",{parentName:"ul"},"Support on OpenShift still in development",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"https://airflow.apache.org/docs/stable/kubernetes.html"}),"Apache Airflow")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"https://github.com/Duke-GCB/calrissian/"}),"workflows-cwl")))),Object(r.b)("li",{parentName:"ul"},"Propose a GUI to build the workflows: ",Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"https://rabix.io/"}),"Rabix Composer"))),Object(r.b)("h2",{id:"to-be-implemented"},"To be implemented"),Object(r.b)("h3",{id:"apache-airflow"},"Apache Airflow"),Object(r.b)("p",null,"Define, schedule and run workflows. See ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/majordomusio/openshift-airflow"}),"this deployment for OpenShift"),"."),Object(r.b)("p",null,"See also: Airflow on ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://kubernetes.io/blog/2018/06/28/airflow-on-kubernetes-part-1-a-different-kind-of-operator/"}),"Kubernetes blog"),", and Kubernetes in ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://airflow.apache.org/docs/stable/kubernetes.html"}),"Airflow documentation"),"."),Object(r.b)("h3",{id:"apache-spark"},"Apache Spark"),Object(r.b)("p",null,"Write programs running in parallel using Java, Python, R, Scala or SQL with the ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://spark.apache.org/"}),"Spark")," framework."),Object(r.b)("h3",{id:"kubeflow"},"Kubeflow"),Object(r.b)("p",null,"Optimized for Tensorflow workflows on Kubernetes."),Object(r.b)("p",null,"Pipelines written in Python."),Object(r.b)("h3",{id:"kubegene"},"KubeGene"),Object(r.b)("p",null,Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://kubegene.io/"}),"KubeGene")," is a turn-key genome sequencing workflow management framework."),Object(r.b)("p",null,"See the ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/kubegene/kubegene/blob/master/example/simple-sample/simple-sample.yaml"}),"Workflow example"),", and how to ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://kubegene.io/docs/guides/tool/"}),"define a tool"),"."),Object(r.b)("h3",{id:"seldon"},"Seldon"),Object(r.b)("p",null,Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://www.seldon.io/tech/"}),"Open-source platform")," for rapidly deploying machine learning models on Kubernetes. Manage, serve and scale models built in any framework on Kubernetes."),Object(r.b)("h3",{id:"volcano"},"Volcano"),Object(r.b)("p",null,"Run batch pipelines on Kubernetes with ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://volcano.sh/"}),"Volcano"),". "),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"More a scheduler than a workflow engine. ")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Volcano can be used to run Spark, Kubeflow or KubeGene workflows."))),Object(r.b)("div",{className:"admonition admonition-info alert alert--info"},Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(r.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"Contact us")),Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"Feel free to ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"/dsri-documentation/help"}),"contact us")," if you have any questions about running workflows on DSRI or to request the support of a new technology."))))}s.isMDXComponent=!0},130:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var a=n(0),o=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var b=o.a.createContext({}),s=function(e){var t=o.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=s(e.components);return o.a.createElement(b.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},u=o.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,i=e.parentName,b=l(e,["components","mdxType","originalType","parentName"]),p=s(n),u=a,m=p["".concat(i,".").concat(u)]||p[u]||d[u]||r;return n?o.a.createElement(m,c(c({ref:t},b),{},{components:n})):o.a.createElement(m,c({ref:t},b))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=u;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var b=2;b<r;b++)i[b]=n[b];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);