(window.webpackJsonp=window.webpackJsonp||[]).push([[96],{165:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return s})),a.d(t,"metadata",(function(){return i})),a.d(t,"rightToc",(function(){return b})),a.d(t,"default",(function(){return p}));var n=a(3),r=a(7),o=(a(0),a(173)),c=["components"],s={id:"okd3-deploy-database",title:"Start databases"},i={unversionedId:"okd3-deploy-database",id:"okd3-deploy-database",isDocsHomePage:!1,title:"Start databases",description:"SQL databases",source:"@site/docs/okd3-deploy-database.md",slug:"/okd3-deploy-database",permalink:"/dsri-documentation/docs/okd3-deploy-database",editUrl:"https://github.com/MaastrichtU-IDS/dsri-documentation/edit/master/website/docs/okd3-deploy-database.md",version:"current",lastUpdatedBy:"Vincent Emonet",lastUpdatedAt:1622222261},b=[{value:"SQL databases",id:"sql-databases",children:[{value:"Start MariaDB \ud83e\udda6",id:"start-mariadb-\ud83e\udda6",children:[]},{value:"Start MySQL \ud83d\udc2c",id:"start-mysql-",children:[]},{value:"Start PostgreSQL \ud83d\udc18",id:"start-postgresql-",children:[]},{value:"Start Apache Drill \ud83d\udd29",id:"start-apache-drill-",children:[]}]},{value:"NoSQL databases",id:"nosql-databases",children:[{value:"MongoDB \ud83c\udf3f",id:"mongodb-",children:[]},{value:"Redis \ud83c\udfb2",id:"redis-",children:[]}]},{value:"Graph databases",id:"graph-databases",children:[{value:"Ontotext GraphDB triplestore",id:"ontotext-graphdb-triplestore",children:[]},{value:"Blazegraph triplestore",id:"blazegraph-triplestore",children:[]},{value:"Start Virtuoso triplestore",id:"start-virtuoso-triplestore",children:[]},{value:"Start Neo4j",id:"start-neo4j",children:[]}]}],l={rightToc:b};function p(e){var t=e.components,a=Object(r.a)(e,c);return Object(o.b)("wrapper",Object(n.a)({},l,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"sql-databases"},"SQL databases"),Object(o.b)("p",null,"You can easily create a database from the templates available in the DSRI OpenShift web UI catalog:"),Object(o.b)("img",{src:"/dsri-documentation/img/screenshot-databases.png",alt:"Databases in catalog web UI",style:{maxWidth:"100%",maxHeight:"100%"}}),Object(o.b)("p",null,"You can connect to a database from another application in the same project by using the database service name as hostname:"),Object(o.b)("img",{src:"/dsri-documentation/img/screenshot_database_service.png",alt:"Databases in catalog web UI",style:{maxWidth:"100%",maxHeight:"100%"}}),Object(o.b)("p",null,"You can also use the ",Object(o.b)("inlineCode",{parentName:"p"},"oc")," CLI to get the services in your project:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-bash"},"oc get services\n")),Object(o.b)("h3",{id:"start-mariadb-\ud83e\udda6"},"Start MariaDB \ud83e\udda6"),Object(o.b)("p",null,"Use the ",Object(o.b)("strong",{parentName:"p"},"MariaDB")," template in the DSRI OpenShift web UI catalog."),Object(o.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(o.b)("div",{parentName:"div",className:"admonition-heading"},Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",{parentName:"h5",className:"admonition-icon"},Object(o.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},Object(o.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Connect to the database")),Object(o.b)("div",{parentName:"div",className:"admonition-content"},Object(o.b)("p",{parentName:"div"},"When the database has been deployed, you can connect from another pod using your favorite language and connector."))),Object(o.b)("p",null,"Example with the ",Object(o.b)("inlineCode",{parentName:"p"},"mysql")," Command Line Interface:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-bash"},"apt-get update && apt-get install mariadb-client -y\n")),Object(o.b)("p",null,"Connect to the MariaDB database using the service name:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-bash"},"mysql -h example-mysql -p\n")),Object(o.b)("h3",{id:"start-mysql-"},"Start MySQL \ud83d\udc2c"),Object(o.b)("p",null,"Use the ",Object(o.b)("strong",{parentName:"p"},"MySQL")," template in the DSRI OpenShift web UI catalog."),Object(o.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(o.b)("div",{parentName:"div",className:"admonition-heading"},Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",{parentName:"h5",className:"admonition-icon"},Object(o.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},Object(o.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Connect to the database")),Object(o.b)("div",{parentName:"div",className:"admonition-content"},Object(o.b)("p",{parentName:"div"},"When the database has been deployed, you can connect from another pod using your favorite language and connector."))),Object(o.b)("p",null,"Example with the ",Object(o.b)("inlineCode",{parentName:"p"},"mysql")," Command Line Interface:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-bash"},"apt-get update && apt-get install mariadb-client -y\n")),Object(o.b)("p",null,"Connect to the MySQL database using the service name:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-bash"},"mysql -h example-mysql -p\n")),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"Alternatively, MySQL databases can be started using Helm, see the ",Object(o.b)("a",{parentName:"p",href:"/dsri-documentation/docs/helm#install-a-helm-chart"},"Helm documentation page")," for more details.")),Object(o.b)("h3",{id:"start-postgresql-"},"Start PostgreSQL \ud83d\udc18"),Object(o.b)("p",null,"Use the ",Object(o.b)("strong",{parentName:"p"},"Postgresql")," template in the DSRI OpenShift web UI catalog."),Object(o.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(o.b)("div",{parentName:"div",className:"admonition-heading"},Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",{parentName:"h5",className:"admonition-icon"},Object(o.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},Object(o.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Connect to the database")),Object(o.b)("div",{parentName:"div",className:"admonition-content"},Object(o.b)("p",{parentName:"div"},"When the database has been deployed, you can connect from another pod using your favorite language and connector."))),Object(o.b)("p",null,"Example with the ",Object(o.b)("inlineCode",{parentName:"p"},"psql")," Command Line Interface:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-bash"},"apt-get update && apt-get install postgresql-client -y\n")),Object(o.b)("p",null,"Connect to the Postgresql database using the service name (change depending on the username and database name you chose):"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-bash"},"psql -h postgresql-db -U postgres db\n")),Object(o.b)("h3",{id:"start-apache-drill-"},"Start Apache Drill \ud83d\udd29"),Object(o.b)("div",{className:"admonition admonition-info alert alert--info"},Object(o.b)("div",{parentName:"div",className:"admonition-heading"},Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",{parentName:"h5",className:"admonition-icon"},Object(o.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(o.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Contact us")),Object(o.b)("div",{parentName:"div",className:"admonition-content"},Object(o.b)("p",{parentName:"div"},"Contact us to install Apache Drill"))),Object(o.b)("p",null,"Use the ",Object(o.b)("a",{parentName:"p",href:"https://github.com/Agirish/drill-containers/tree/master/kubernetes"},"ZooKeeper / Apache Drill deployment ")," for Kubernetes from MapR."),Object(o.b)("h2",{id:"nosql-databases"},"NoSQL databases"),Object(o.b)("h3",{id:"mongodb-"},"MongoDB \ud83c\udf3f"),Object(o.b)("p",null,Object(o.b)("a",{parentName:"p",href:"https://www.mongodb.com/"},"MongoDB")," is a general purpose, document-based, distributed database built for modern application developers and for the cloud era. "),Object(o.b)("p",null,"Use the ",Object(o.b)("strong",{parentName:"p"},"MongoDB")," template in the DSRI OpenShift web UI catalog."),Object(o.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(o.b)("div",{parentName:"div",className:"admonition-heading"},Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",{parentName:"h5",className:"admonition-icon"},Object(o.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},Object(o.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Connect to the database")),Object(o.b)("div",{parentName:"div",className:"admonition-content"},Object(o.b)("p",{parentName:"div"},"Use the service name as hostname to connect from another pod in the same project."))),Object(o.b)("h3",{id:"redis-"},"Redis \ud83c\udfb2"),Object(o.b)("p",null,Object(o.b)("a",{parentName:"p",href:"http://redis.io/"},"Redis")," is an advanced key-value cache and store. It is often referred to as a data structure server since keys can contain  strings, hashes, lists, sets, sorted sets, bitmaps and hyperlog."),Object(o.b)("p",null,"Use the ",Object(o.b)("strong",{parentName:"p"},"Redis")," template in the DSRI OpenShift web UI catalog."),Object(o.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(o.b)("div",{parentName:"div",className:"admonition-heading"},Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",{parentName:"h5",className:"admonition-icon"},Object(o.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},Object(o.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Connect to the database")),Object(o.b)("div",{parentName:"div",className:"admonition-content"},Object(o.b)("p",{parentName:"div"},"Use the service name as hostname to connect from another pod in the same project."))),Object(o.b)("h2",{id:"graph-databases"},"Graph databases"),Object(o.b)("h3",{id:"ontotext-graphdb-triplestore"},"Ontotext GraphDB triplestore"),Object(o.b)("p",null,"Use the official DockerHub image if you have an enterprise license. Or ",Object(o.b)("a",{parentName:"p",href:"/dsri-documentation/guide-dockerfile-to-openshift"},"build")," GraphDB free edition image from ",Object(o.b)("a",{parentName:"p",href:"https://github.com/Ontotext-AD/graphdb-docker"},"graphdb-docker on GitHub"),"."),Object(o.b)("h3",{id:"blazegraph-triplestore"},"Blazegraph triplestore"),Object(o.b)("p",null,"Use ",Object(o.b)("a",{parentName:"p",href:"https://hub.docker.com/r/lyrasis/blazegraph"},"lyrasis/blazegraph")," Docker image (optimized for OpenShift)."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Image Name:"),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",{parentName:"pre"},"lyrasis/blazegraph:2.1.5\n"))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Mounted path: ",Object(o.b)("inlineCode",{parentName:"p"},"/data"),".")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Put files to load in the ",Object(o.b)("inlineCode",{parentName:"p"},"/data")," and send the ",Object(o.b)("a",{parentName:"p",href:"https://github.com/MaastrichtU-IDS/d2s-core/blob/master/argo/support/blazegraph-dataloader.txt"},"dataloader.txt")," file to the API to run the bulk load."))),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-shell"},"wget https://raw.githubusercontent.com/MaastrichtU-IDS/d2s-core/master/argo/support/blazegraph-dataloader.txt\n\ncurl -X POST --data-binary @blazegraph-dataloader.txt --header 'Content-Type:text/plain' http://blazegraph-test-vincent.app.dsri.unimaas.nl/bigdata/dataloader\n")),Object(o.b)("h3",{id:"start-virtuoso-triplestore"},"Start Virtuoso triplestore"),Object(o.b)("p",null,"Use the ",Object(o.b)("a",{parentName:"p",href:"https://github.com/MaastrichtU-IDS/d2s-core/blob/master/argo/pods/d2s-pod-virtuoso7.yaml"},"official OpenLink deployment")," and ",Object(o.b)("inlineCode",{parentName:"p"},"anyuid")," service account."),Object(o.b)("h3",{id:"start-neo4j"},"Start Neo4j"),Object(o.b)("p",null,"From ",Object(o.b)("a",{parentName:"p",href:"https://artifacthub.io/packages/helm/equinor-charts/neo4j-community"},"Neo4j community charts"),"."),Object(o.b)("p",null,"Add repository:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-bash"},"helm repo add equinor-charts https://equinor.github.io/helm-charts/charts/\nhelm repo update \n")),Object(o.b)("p",null,"Start Neo4j in current project:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-bash"},"helm upgrade --install neo4j-community equinor-charts/neo4j-community --set acceptLicenseAgreement=yes --set neo4jPassword=mypassword\n")),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"Try setting extraVars: ",Object(o.b)("inlineCode",{parentName:"p"},"--set extraVars='NEO4J_dbms_connector_bolt_address=0.0.0.0:7687'"))),Object(o.b)("p",null,"Go to the web UI, and add the following ",Object(o.b)("inlineCode",{parentName:"p"},"env")," variable to the YAML of the deployment created (",Object(o.b)("a",{parentName:"p",href:"https://stackoverflow.com/questions/59439263/getting-neo4j-running-on-openshift"},"fix"),"):"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-yaml"},"env:\n  - name: NEO4J_dbms_connector_bolt_address\n    value: 0.0.0.0:7687\n")),Object(o.b)("p",null,"3 nodes cluster:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-bash"},"helm install mygraph RELEASE_URL --set acceptLicenseAgreement=yes --set neo4jPassword=mySecretPassword\n")),Object(o.b)("p",null,"Expose a route to Neo4j:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-bash"},"oc expose service neo4j-community-neo4j-community \n")),Object(o.b)("p",null,"Manually expose a route to ",Object(o.b)("inlineCode",{parentName:"p"},"neo4j-bolt")," on port 7687 (click on the service, then create route)"),Object(o.b)("div",{className:"admonition admonition-info alert alert--info"},Object(o.b)("div",{parentName:"div",className:"admonition-heading"},Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",{parentName:"h5",className:"admonition-icon"},Object(o.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(o.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Bolt URL")),Object(o.b)("div",{parentName:"div",className:"admonition-content"},Object(o.b)("p",{parentName:"div"},"Provide the bolt route URL, e.g. ",Object(o.b)("a",{parentName:"p",href:"http://neo4j-bolt-ids-shared-project.app.dsri.unimaas.nl"},"http://neo4j-bolt-ids-shared-project.app.dsri.unimaas.nl")),Object(o.b)("p",{parentName:"div"},"Use the ",Object(o.b)("inlineCode",{parentName:"p"},"neo4j")," username to login."))),Object(o.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(o.b)("div",{parentName:"div",className:"admonition-heading"},Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",{parentName:"h5",className:"admonition-icon"},Object(o.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},Object(o.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Use Neo4j Enterprise edition")),Object(o.b)("div",{parentName:"div",className:"admonition-content"},Object(o.b)("p",{parentName:"div"},"Alternatively, Neo4j Enterprise edition is more recent: ",Object(o.b)("a",{parentName:"p",href:"https://artifacthub.io/packages/helm/neo4j-helm/neo4j"},"https://artifacthub.io/packages/helm/neo4j-helm/neo4j")),Object(o.b)("pre",{parentName:"div"},Object(o.b)("code",{parentName:"pre",className:"language-bash"},"helm install mygraph https://github.com/neo4j-contrib/neo4j-helm/releases/download/4.1.3-1/neo4j-4.1.3-1.tgz --set core.standalone=true --set acceptLicenseAgreement=yes --set neo4jPassword=mypassword\n")))))}p.isMDXComponent=!0},173:function(e,t,a){"use strict";a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return h}));var n=a(0),r=a.n(n);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var b=r.a.createContext({}),l=function(e){var t=r.a.useContext(b),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},p=function(e){var t=l(e.components);return r.a.createElement(b.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,b=i(e,["components","mdxType","originalType","parentName"]),p=l(a),m=n,h=p["".concat(c,".").concat(m)]||p[m]||d[m]||o;return a?r.a.createElement(h,s(s({ref:t},b),{},{components:a})):r.a.createElement(h,s({ref:t},b))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,c=new Array(o);c[0]=m;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:n,c[1]=s;for(var b=2;b<o;b++)c[b]=a[b];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,a)}m.displayName="MDXCreateElement"}}]);