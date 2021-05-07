(window.webpackJsonp=window.webpackJsonp||[]).push([[93],{162:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return p})),a.d(t,"metadata",(function(){return s})),a.d(t,"rightToc",(function(){return l})),a.d(t,"default",(function(){return c}));var n=a(3),r=a(7),o=(a(0),a(173)),p={id:"deploy-spark",title:"Spark cluster"},s={unversionedId:"deploy-spark",id:"deploy-spark",isDocsHomePage:!1,title:"Spark cluster",description:"To be able to deploy Spark you will need to ask the DSRI admins to enable the Spark Operator in your project. It will be done quickly, once enabled you will be able to start a Spark cluster in a few clicks.",source:"@site/docs/deploy-spark.md",slug:"/deploy-spark",permalink:"/dsri-documentation/docs/deploy-spark",editUrl:"https://github.com/MaastrichtU-IDS/dsri-documentation/edit/master/website/docs/deploy-spark.md",version:"current",lastUpdatedBy:"Binosha",lastUpdatedAt:1620382336,sidebar:"docs",previous:{title:"Matlab",permalink:"/dsri-documentation/docs/deploy-matlab"},next:{title:"Run MPI jobs",permalink:"/dsri-documentation/docs/mpi-jobs"}},l=[{value:"Deploy a Spark cluster",id:"deploy-a-spark-cluster",children:[{value:"Deploy the cluster from the catalog",id:"deploy-the-cluster-from-the-catalog",children:[]},{value:"Create a route to the Spark dashboard",id:"create-a-route-to-the-spark-dashboard",children:[]}]},{value:"Run on Spark",id:"run-on-spark",children:[{value:"Using PySpark",id:"using-pyspark",children:[]},{value:"RDF analytics with SANSA and Zeppelin notebooks",id:"rdf-analytics-with-sansa-and-zeppelin-notebooks",children:[]}]},{value:"Connect Spark to the persistent storage",id:"connect-spark-to-the-persistent-storage",children:[]},{value:"Delete a running Spark cluster",id:"delete-a-running-spark-cluster",children:[]}],i={rightToc:l};function c(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},i,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("div",{className:"admonition admonition-warning alert alert--danger"},Object(o.b)("div",{parentName:"div",className:"admonition-heading"},Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",{parentName:"h5",className:"admonition-icon"},Object(o.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},Object(o.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"Request access to the Spark Operator")),Object(o.b)("div",{parentName:"div",className:"admonition-content"},Object(o.b)("p",{parentName:"div"},"To be able to deploy Spark you will need to ",Object(o.b)("a",{parentName:"p",href:"/dsri-documentation/help"},"ask the DSRI admins")," to enable the Spark Operator in your project. It will be done quickly, once enabled you will be able to start a Spark cluster in a few clicks."))),Object(o.b)("h2",{id:"deploy-a-spark-cluster"},"Deploy a Spark cluster"),Object(o.b)("p",null,"Once the DSRI admins have enabled the Spark Operator your project, you should found a ",Object(o.b)("strong",{parentName:"p"},"Spark Cluster")," entry in the Catalog (in the ",Object(o.b)("strong",{parentName:"p"},"Operator Backed")," category)"),Object(o.b)("h3",{id:"deploy-the-cluster-from-the-catalog"},"Deploy the cluster from the catalog"),Object(o.b)("img",{src:"/dsri-documentation/img/screenshot-spark-operator1.png",alt:"Apache Spark in the Catalog",style:{maxWidth:"100%",maxHeight:"100%"}}),Object(o.b)("p",null,"Click on the ",Object(o.b)("strong",{parentName:"p"},"Spark Cluster")," entry to deploy a Spark cluster."),Object(o.b)("p",null,"You will be presented a form where you can provide the number of Spark workers in your cluster. "),Object(o.b)("p",null,"Additionally you can provide a label which can be helpful later to manage or delete the cluster, use the name of your application and the label ",Object(o.b)("inlineCode",{parentName:"p"},"app"),", e.g.: ",Object(o.b)("inlineCode",{parentName:"p"},"app=my-spark-cluster")),Object(o.b)("img",{src:"/dsri-documentation/img/screenshot-spark-operator2.png",alt:"Deploy a Apache Spark cluster",style:{maxWidth:"100%",maxHeight:"100%"}}),Object(o.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(o.b)("div",{parentName:"div",className:"admonition-heading"},Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",{parentName:"h5",className:"admonition-icon"},Object(o.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},Object(o.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Change ")),Object(o.b)("div",{parentName:"div",className:"admonition-content"},Object(o.b)("p",{parentName:"div"},"The number of Spark workers can be easily updated later in the Spark deployment YAML file."))),Object(o.b)("h3",{id:"create-a-route-to-the-spark-dashboard"},"Create a route to the Spark dashboard"),Object(o.b)("p",null,"Once the cluster has been started you can create a route to access the Spark web UI:"),Object(o.b)("p",null,"Go to ",Object(o.b)("strong",{parentName:"p"},"Search")," > Click on ",Object(o.b)("strong",{parentName:"p"},"Resources")," and search for ",Object(o.b)("strong",{parentName:"p"},"Route")," > Click on ",Object(o.b)("strong",{parentName:"p"},"Route")),Object(o.b)("p",null,"You should now see the routes deployed in your project. Click on the button ",Object(o.b)("strong",{parentName:"p"},"Create Route")),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Give a short meaningful name to your route, e.g. ",Object(o.b)("inlineCode",{parentName:"li"},"my-spark-ui")),Object(o.b)("li",{parentName:"ul"},"Keep Hostname and Path as it is"),Object(o.b)("li",{parentName:"ul"},"Select the ",Object(o.b)("strong",{parentName:"li"},"Service")," corresponding your Spark cluster suffixed with ",Object(o.b)("inlineCode",{parentName:"li"},"-ui"),", e.g. ",Object(o.b)("inlineCode",{parentName:"li"},"my-spark-cluster-ui")),Object(o.b)("li",{parentName:"ul"},"Select the ",Object(o.b)("strong",{parentName:"li"},"Target Port")," of the route, it should be 8080")),Object(o.b)("p",null,"You can now access the Spark web UI at the generated URL to see which jobs are running and the nodes in your cluster."),Object(o.b)("h2",{id:"run-on-spark"},"Run on Spark"),Object(o.b)("p",null,"You can now start a spark-enabled JupyterLab, or any other spark-enabled applications, to use the Spark cluster deployed."),Object(o.b)("h3",{id:"using-pyspark"},"Using PySpark"),Object(o.b)("p",null,"The easiest is to use a Spark-enabled JupyterLab image, such as ",Object(o.b)("a",{parentName:"p",href:"https://github.com/jupyter/docker-stacks/tree/master/pyspark-notebook"},"jupyter/pyspark-notebook")),Object(o.b)("p",null,"But you can also use any image as long as you download the jar file, install all requirements, such as ",Object(o.b)("inlineCode",{parentName:"p"},"pyspark"),", and set the right environment variable, such as ",Object(o.b)("inlineCode",{parentName:"p"},"SPARK_HOME")),Object(o.b)("p",null,"Connect to a Spark cluster deployed in the same project, replace ",Object(o.b)("inlineCode",{parentName:"p"},"spark-cluster")," by your Spark cluster name:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-python"},"from pyspark import SparkConf, SparkContext\nfrom pyspark.sql import SparkSession\n# Stop existing Spark Context\nspark = SparkSession.builder.master(\"spark://spark-cluster:7077\").getOrCreate()\nspark.sparkContext.stop()\n# Connect to the Spark cluster\nconf = SparkConf().setAppName('sansa').setMaster('spark://spark-cluster:7077') \nsc = SparkContext(conf=conf)\n\n# Run basic Spark test\nx = ['spark', 'rdd', 'example', 'sample', 'example'] \ny = sc.parallelize(x)\ny.collect()\n")),Object(o.b)("h3",{id:"rdf-analytics-with-sansa-and-zeppelin-notebooks"},"RDF analytics with SANSA and Zeppelin notebooks"),Object(o.b)("p",null,Object(o.b)("a",{parentName:"p",href:"http://sansa-stack.net"},"SANSA")," is a big data engine for scalable processing of large-scale RDF  data. SANSA uses Spark, or Flink, which offer fault-tolerant, highly  available and scalable approaches to efficiently process massive sized  datasets. SANSA provides the facilities for Semantic data  representation, Querying, Inference, and Analytics."),Object(o.b)("p",null,"Use the ",Object(o.b)("strong",{parentName:"p"},"Zeppelin notebook for Spark")," template in the catalog to start a Spark-enabled Zeppelin notebook. You can find more information on the Zeppelin image at ",Object(o.b)("a",{parentName:"p",href:"https://github.com/rimolive/zeppelin-openshift"},"https://github.com/rimolive/zeppelin-openshift")),Object(o.b)("p",null,"Connect and test Spark in a Zeppelin notebook, replace ",Object(o.b)("inlineCode",{parentName:"p"},"spark-cluster")," by your Spark cluster name:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-python"},"%pyspark\nfrom pyspark import SparkConf, SparkContext\nfrom pyspark.sql import SparkSession\n# Stop existing Spark Context\nspark = SparkSession.builder.master(\"spark://spark-cluster:7077\").getOrCreate()\nspark.sparkContext.stop()\n# Connect to the Spark cluster\nconf = SparkConf().setAppName('sansa').setMaster('spark://spark-cluster:7077') \nsc = SparkContext(conf=conf)\n\n# Run basic Spark test\nx = [1, 2, 3, 4, 5] \ny = sc.parallelize(x)\ny.collect()\n")),Object(o.b)("p",null,"You should see the job running in the Spark web UI, kill the job with the ",Object(o.b)("strong",{parentName:"p"},"kill")," button in the Spark dashboard."),Object(o.b)("p",null,"You can now start to run your workload on the Spark cluster"),Object(o.b)("div",{className:"admonition admonition-info alert alert--info"},Object(o.b)("div",{parentName:"div",className:"admonition-heading"},Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",{parentName:"h5",className:"admonition-icon"},Object(o.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(o.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Reset a Zeppelin notebook")),Object(o.b)("div",{parentName:"div",className:"admonition-content"},Object(o.b)("p",{parentName:"div"},"Click on the cranked wheel in the top right of the note: ",Object(o.b)("strong",{parentName:"p"},"Interpreter binding"),", and reset the interpreter"))),Object(o.b)("p",null,"Use the official ",Object(o.b)("a",{parentName:"p",href:"https://github.com/SANSA-Stack/SANSA-Notebooks/tree/stack-merge/sansa-notebooks"},"SANSA notebooks examples")),Object(o.b)("p",null,"See more examples:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"https://github.com/rimolive/zeppelin-openshift"},"https://github.com/rimolive/zeppelin-openshift"))),Object(o.b)("h2",{id:"connect-spark-to-the-persistent-storage"},"Connect Spark to the persistent storage"),Object(o.b)("p",null,"Instructions available at ",Object(o.b)("a",{parentName:"p",href:"https://github.com/rimolive/ceph-spark-integration"},"https://github.com/rimolive/ceph-spark-integration")),Object(o.b)("p",null,"Requirements:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-bash"},"pip install boto\n")),Object(o.b)("p",null,"Check the ",Object(o.b)("a",{parentName:"p",href:"https://github.com/rimolive/ceph-spark-integration/blob/master/notebooks/ceph-example.ipynb"},"example notebook for Ceph storage")),Object(o.b)("h2",{id:"delete-a-running-spark-cluster"},"Delete a running Spark cluster"),Object(o.b)("p",null,"Get all objects part of the Spark cluster, change ",Object(o.b)("inlineCode",{parentName:"p"},"app=spark-cluster")," to match your Spark cluster name:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-bash"},"oc get all,secret,configmaps --selector app=spark-cluster\n")),Object(o.b)("p",null,"Then delete the Operator deployment from the OpenShift web UI overview."))}c.isMDXComponent=!0},173:function(e,t,a){"use strict";a.d(t,"a",(function(){return b})),a.d(t,"b",(function(){return m}));var n=a(0),r=a.n(n);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function p(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?p(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):p(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var i=r.a.createContext({}),c=function(e){var t=r.a.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},b=function(e){var t=c(e.components);return r.a.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,p=e.parentName,i=l(e,["components","mdxType","originalType","parentName"]),b=c(a),d=n,m=b["".concat(p,".").concat(d)]||b[d]||u[d]||o;return a?r.a.createElement(m,s(s({ref:t},i),{},{components:a})):r.a.createElement(m,s({ref:t},i))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,p=new Array(o);p[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:n,p[1]=s;for(var i=2;i<o;i++)p[i]=a[i];return r.a.createElement.apply(null,p)}return r.a.createElement.apply(null,a)}d.displayName="MDXCreateElement"}}]);