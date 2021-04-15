(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{172:function(e,t,a){"use strict";a.d(t,"a",(function(){return d})),a.d(t,"b",(function(){return m}));var r=a(0),n=a.n(r);function p(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){p(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},p=Object.keys(e);for(r=0;r<p.length;r++)a=p[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(r=0;r<p.length;r++)a=p[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var c=n.a.createContext({}),s=function(e){var t=n.a.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},d=function(e){var t=s(e.components);return n.a.createElement(c.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},u=n.a.forwardRef((function(e,t){var a=e.components,r=e.mdxType,p=e.originalType,o=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=s(a),u=r,m=d["".concat(o,".").concat(u)]||d[u]||b[u]||p;return a?n.a.createElement(m,l(l({ref:t},c),{},{components:a})):n.a.createElement(m,l({ref:t},c))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var p=a.length,o=new Array(p);o[0]=u;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var c=2;c<p;c++)o[c]=a[c];return n.a.createElement.apply(null,o)}return n.a.createElement.apply(null,a)}u.displayName="MDXCreateElement"},91:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return o})),a.d(t,"metadata",(function(){return l})),a.d(t,"rightToc",(function(){return i})),a.d(t,"default",(function(){return s}));var r=a(3),n=a(7),p=(a(0),a(172)),o={id:"okd3-deploy-spark",title:"Start a Spark cluster"},l={unversionedId:"okd3-deploy-spark",id:"okd3-deploy-spark",isDocsHomePage:!1,title:"Start a Spark cluster",description:"Deploying an Apache Spark cluster is a work in progress on the DSRI, contact us if you are interested in trying it out.",source:"@site/docs/okd3-deploy-spark.md",slug:"/okd3-deploy-spark",permalink:"/dsri-documentation/docs/okd3-deploy-spark",editUrl:"https://github.com/MaastrichtU-IDS/dsri-documentation/edit/master/website/docs/okd3-deploy-spark.md",version:"current",lastUpdatedBy:"Binosha",lastUpdatedAt:1618504057,sidebar:"docs",previous:{title:"Start from Helm charts",permalink:"/dsri-documentation/docs/okd3-helm"},next:{title:"Known Issues",permalink:"/dsri-documentation/docs/okd3-guide-known-issues"}},i=[{value:"Create the template",id:"create-the-template",children:[]},{value:"Deploy a Spark cluster",id:"deploy-a-spark-cluster",children:[]},{value:"Run on Spark",id:"run-on-spark",children:[{value:"Using PySpark",id:"using-pyspark",children:[]}]},{value:"Delete a running Spark cluster",id:"delete-a-running-spark-cluster",children:[]},{value:"Delete the Spark template",id:"delete-the-spark-template",children:[]},{value:"Alternative: deploy Spark with Helm",id:"alternative-deploy-spark-with-helm",children:[]}],c={rightToc:i};function s(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(p.b)("wrapper",Object(r.a)({},c,a,{components:t,mdxType:"MDXLayout"}),Object(p.b)("div",{className:"admonition admonition-warning alert alert--danger"},Object(p.b)("div",{parentName:"div",className:"admonition-heading"},Object(p.b)("h5",{parentName:"div"},Object(p.b)("span",{parentName:"h5",className:"admonition-icon"},Object(p.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},Object(p.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"Work in progress")),Object(p.b)("div",{parentName:"div",className:"admonition-content"},Object(p.b)("p",{parentName:"div"},"Deploying an ",Object(p.b)("a",{parentName:"p",href:"https://spark.apache.org/"},"Apache Spark")," cluster is a ",Object(p.b)("strong",{parentName:"p"},"work in progress")," on the DSRI, ",Object(p.b)("strong",{parentName:"p"},Object(p.b)("a",{parentName:"strong",href:"/dsri-documentation/help"},"contact us"))," if you are interested in trying it out."))),Object(p.b)("h2",{id:"create-the-template"},"Create the template"),Object(p.b)("p",null,"The following services are deployed by this Spark template:"),Object(p.b)("ul",null,Object(p.b)("li",{parentName:"ul"},"a JupyterLab all-spark-notebook"),Object(p.b)("li",{parentName:"ul"},"a configurable Spark cluster from ",Object(p.b)("a",{parentName:"li",href:"https://github.com/CSCfi/spark-openshift"},"CSCfi/spark-openshift")),Object(p.b)("li",{parentName:"ul"},"a storage automatically created")),Object(p.b)("p",null,"Create the template:"),Object(p.b)("pre",null,Object(p.b)("code",{parentName:"pre",className:"language-shell"},"oc apply -f https://raw.githubusercontent.com/vemonet/spark-openshift/master/spark-template-dsri.yml\n")),Object(p.b)("h2",{id:"deploy-a-spark-cluster"},"Deploy a Spark cluster"),Object(p.b)("p",null,"Go to the DSRI OpenShift web UI catalog and click on the ",Object(p.b)("strong",{parentName:"p"},"Apache Spark")," application."),Object(p.b)("img",{src:"/dsri-documentation/img/screenshot-deploy-spark.png",alt:"Deploy Apache Spark",style:{maxWidth:"100%",maxHeight:"100%"}}),Object(p.b)("p",null,"You will be prompted various parameters to configure your Spark cluster resources."),Object(p.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(p.b)("div",{parentName:"div",className:"admonition-heading"},Object(p.b)("h5",{parentName:"div"},Object(p.b)("span",{parentName:"h5",className:"admonition-icon"},Object(p.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},Object(p.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"1 cluster per project")),Object(p.b)("div",{parentName:"div",className:"admonition-content"},Object(p.b)("p",{parentName:"div"},"Only 1 Spark cluster should be deployed by project."))),Object(p.b)("h2",{id:"run-on-spark"},"Run on Spark"),Object(p.b)("h3",{id:"using-pyspark"},"Using PySpark"),Object(p.b)("p",null,"Use local Spark for testing, it will use ",Object(p.b)("inlineCode",{parentName:"p"},"local[*]")," as Spark cluster"),Object(p.b)("pre",null,Object(p.b)("code",{parentName:"pre",className:"language-python"},'import findspark\nfindspark.init()\nimport pyspark\nsc = pyspark.SparkContext(appName="Pi")\n')),Object(p.b)("p",null,"Use the deployed Spark cluster:"),Object(p.b)("pre",null,Object(p.b)("code",{parentName:"pre",className:"language-shell"},'import pyspark\nsc = pyspark.SparkContext(appName="Pi", master="spark://my-spark-spark-master:7077")\n')),Object(p.b)("h2",{id:"delete-a-running-spark-cluster"},"Delete a running Spark cluster"),Object(p.b)("p",null,"Get all objects part of the Spark cluster:"),Object(p.b)("pre",null,Object(p.b)("code",{parentName:"pre",className:"language-bash"},"oc get all,secret,configmaps --selector app=spark\n")),Object(p.b)("h2",{id:"delete-the-spark-template"},"Delete the Spark template"),Object(p.b)("p",null,"In case you want to delete or update the Spark template:"),Object(p.b)("pre",null,Object(p.b)("code",{parentName:"pre",className:"language-shell"},"oc delete -f https://raw.githubusercontent.com/vemonet/spark-openshift/master/spark-template-dsri.yml\n")),Object(p.b)("h2",{id:"alternative-deploy-spark-with-helm"},"Alternative: deploy Spark with Helm"),Object(p.b)("p",null,"You can use Helm to deploy Spark on OpenShift."),Object(p.b)("ol",null,Object(p.b)("li",{parentName:"ol"},Object(p.b)("p",{parentName:"li"},"Install Helm following instructions at ",Object(p.b)("a",{parentName:"p",href:"/dsri-documentation/docs/helm"},"this page"),".")),Object(p.b)("li",{parentName:"ol"},Object(p.b)("p",{parentName:"li"},"Install Microsoft Spark charts, with Zeppelin notebook and Livy API: ",Object(p.b)("a",{parentName:"p",href:"https://artifacthub.io/packages/helm/microsoft/spark"},"https://artifacthub.io/packages/helm/microsoft/spark")))))}s.isMDXComponent=!0}}]);