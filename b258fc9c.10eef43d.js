(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{107:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return b}));var l=n(3),a=n(7),r=(n(0),n(130)),o={id:"guide-local-install",title:"Install local OpenShift"},i={unversionedId:"guide-local-install",id:"guide-local-install",isDocsHomePage:!1,title:"Install local OpenShift",description:"OpenShift and Kubernetes can be installed locally on a single machine for test purpose. The installation requires knowledge of your OS administration, and can be quite complex. We recommend to install it locally only if really required. Otherwise we recommend you to simply use Docker to test images, then deploy them on the DSRI.",source:"@site/docs/guide-local-install.md",slug:"/guide-local-install",permalink:"/dsri-documentation/docs/guide-local-install",editUrl:"https://github.com/MaastrichtU-IDS/dsri-documentation/edit/master/website/docs/guide-local-install.md",version:"current",lastUpdatedBy:"Vincent Emonet",lastUpdatedAt:1612353234},c=[{value:"Install MiniShift",id:"install-minishift",children:[{value:"Start MiniShift",id:"start-minishift",children:[]},{value:"Login",id:"login",children:[]},{value:"Stop",id:"stop",children:[]},{value:"Reset",id:"reset",children:[]}]},{value:"Install kubectl",id:"install-kubectl",children:[{value:"kubectl on Ubuntu",id:"kubectl-on-ubuntu",children:[]},{value:"kubectl on MacOS &amp; Windows",id:"kubectl-on-macos--windows",children:[]},{value:"Install the Dashboard UI",id:"install-the-dashboard-ui",children:[]},{value:"Run kubectl",id:"run-kubectl",children:[]},{value:"Enable internet",id:"enable-internet",children:[]},{value:"Create persistent volume",id:"create-persistent-volume",children:[]},{value:"Uninstall",id:"uninstall",children:[]}]},{value:"Install Argo workflows",id:"install-argo-workflows",children:[{value:"Install on your local Kubernetes",id:"install-on-your-local-kubernetes",children:[]},{value:"Install the client",id:"install-the-client",children:[]},{value:"Expose the UI",id:"expose-the-ui",children:[]}]}],s={rightToc:c};function b(e){var t=e.components,o=Object(a.a)(e,["components"]);return Object(r.b)("wrapper",Object(l.a)({},s,o,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"OpenShift and Kubernetes can be installed locally on a single machine for test purpose. The installation requires knowledge of your OS administration, and can be quite complex. We recommend to install it locally only if really required. Otherwise we recommend you to simply use Docker to test images, then deploy them on the DSRI."),Object(r.b)("h2",{id:"install-minishift"},"Install MiniShift"),Object(r.b)("p",null,Object(r.b)("a",{parentName:"p",href:"https://docs.okd.io/latest/minishift/getting-started/installing.html"})),Object(r.b)("p",null,"You will need to ",Object(r.b)("a",{parentName:"p",href:"https://docs.okd.io/latest/minishift/getting-started/setting-up-virtualization-environment.html"},"set up the virtualization environment")," before ",Object(r.b)("a",{parentName:"p",href:"https://docs.okd.io/latest/minishift/getting-started/installing.html"},"installing MiniShift"),"."),Object(r.b)("p",null,"Download ",Object(r.b)("a",{parentName:"p",href:"https://github.com/minishift/minishift/releases"},"MiniShift")," and unzip it."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-shell"},"# For Ubuntu 18.04 and older\nsudo apt install -y libvirt-bin qemu-kvm\n# For Ubuntu 18.10 and newer (replace libvirtd by libvirt in next commands)\nsudo apt install -y qemu-kvm libvirt-daemon libvirt-daemon-system\n\n# Create group if does not exist\nsudo addgroup libvirtd\nsudo adduser $(whoami) libvirtd\n\nsudo usermod -a -G libvirtd $(whoami)\nnewgrp libvirtd\ncurl -L https://github.com/dhiltgen/docker-machine-kvm/releases/download/v0.10.0/docker-machine-driver-kvm-ubuntu16.04 -o /usr/local/bin/docker-machine-driver-kvm\nsudo chmod +x /usr/local/bin/docker-machine-driver-kvm\n\n# Check if libvirtd running\nsystemctl is-active libvirtd\n# Start if inactive\nsudo systemctl start libvirtd\n\n# Copy MiniShift in your path\ncp minishift-1.34.1-linux-amd64/minishift /usr/local/bin\n")),Object(r.b)("h3",{id:"start-minishift"},"Start MiniShift"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-shell"},"minishift start\n")),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"Get your local OpenShift cluster URL after the command complete.")),Object(r.b)("h3",{id:"login"},"Login"),Object(r.b)("p",null,"Go to your local cluster URL."),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"E.g. ",Object(r.b)("a",{parentName:"p",href:"https://192.168.42.58:8443/console/catalog"},"https://192.168.42.58:8443/console/catalog"),".")),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"Username: ",Object(r.b)("inlineCode",{parentName:"p"},"admin")," or ",Object(r.b)("inlineCode",{parentName:"p"},"developer")),Object(r.b)("p",{parentName:"blockquote"},"Password: anything will work")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-shell"},"# As admin\noc login -u system:admin\n")),Object(r.b)("h3",{id:"stop"},"Stop"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-shell"},"minishift stop\n")),Object(r.b)("h3",{id:"reset"},"Reset"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-shell"},"minishift delete -f\n")),Object(r.b)("hr",null),Object(r.b)("h2",{id:"install-kubectl"},"Install kubectl"),Object(r.b)("p",null,Object(r.b)("a",{parentName:"p",href:"https://kubernetes.io/"},Object(r.b)("img",{alt:"Kubernetes",src:n(198).default}))),Object(r.b)("h3",{id:"kubectl-on-ubuntu"},"kubectl on Ubuntu"),Object(r.b)("p",null,"For more details: read the official ",Object(r.b)("a",{parentName:"p",href:"https://tutorials.ubuntu.com/tutorial/install-a-local-kubernetes-with-microk8s#0"},"install Kubernetes on Ubuntu tutorial")," or see the official ",Object(r.b)("a",{parentName:"p",href:"https://ubuntu.com/kubernetes/install"},"Ubuntu Kubernetes install documentation"),"."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-shell"},"sudo snap install microk8s --classic\nsudo usermod -a -G microk8s $USER\n# Restart your machine\nmkdir -p ~/.kube\nmicrok8s.kubectl config view --raw > $HOME/.kube/config\n\n# Make sure this works for dashboard on Ubuntu\nmicrok8s.enable dashboard dns\n")),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"To do only if kubectl is not already installed on your machine:"),Object(r.b)("pre",{parentName:"blockquote"},Object(r.b)("code",{parentName:"pre",className:"language-shell"},"sudo snap alias microk8s.kubectl kubectl\n"))),Object(r.b)("h3",{id:"kubectl-on-macos--windows"},"kubectl on MacOS & Windows"),Object(r.b)("p",null,"Included in Docker installation. Use the installer provided by DockerHub."),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"Activate it in Docker Preferences > Kubernetes.")),Object(r.b)("p",null,"For Windows you will need to download the ",Object(r.b)("inlineCode",{parentName:"p"},"kubectl.exe")," and place it in your PATH."),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"https://storage.googleapis.com/kubernetes-release/release/v1.17.0/bin/windows/amd64/kubectl.exe"},"https://storage.googleapis.com/kubernetes-release/release/v1.17.0/bin/windows/amd64/kubectl.exe"))),Object(r.b)("p",null,"We recommend to create a ",Object(r.b)("inlineCode",{parentName:"p"},"kubectl")," directory in ",Object(r.b)("inlineCode",{parentName:"p"},"C:/")," and add this ",Object(r.b)("inlineCode",{parentName:"p"},"C:/kubectl")," to the Path environment variable in System properties > Advanced > Environment Variables > Path"),Object(r.b)("h3",{id:"install-the-dashboard-ui"},"Install the Dashboard UI"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-shell"},"# Install Kubernetes UI\nkubectl apply -f https://raw.githubusercontent.com/kubernetes/dashboard/v2.0.0-beta4/aio/deploy/recommended.yaml\nkubectl apply -f https://raw.githubusercontent.com/MaastrichtU-IDS/d2s-core/master/argo/roles/kube-dashboard-adminuser-sa.yml\nkubectl apply -f https://raw.githubusercontent.com/MaastrichtU-IDS/d2s-core/master/argo/roles/kube-adminuser-rolebinding.yml\n\n# Get the Token to access the dashboard\nkubectl -n kube-system describe secret $(kubectl -n kube-system get secret | grep admin-user | awk '{print $1}')\n\n\n# Windows user will need to execute the 2 commands manually:\nkubectl -n kube-system get secret \n# And get the token containing 'admin-user'\nkubectl -n kube-system describe secret\n# For Windows: give the anonymous user global access\nkubectl create clusterrolebinding cluster-system-anonymous --clusterrole=admin --user=system:anonymous\n# Note: this could be improved. I think only the Dashboard UI didn't have the required permissions.\n\n# Finally, start the web UI, and chose the Token connection\nkubectl proxy\n")),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"Then visit: http://localhost:8001/api/v1/namespaces/kubernetes-dashboard/services/https:kubernetes-dashboard:/proxy/"),Object(r.b)("p",{parentName:"blockquote"},"And provide the previously obtained token.")),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Warning:")," you will need to save the token to login again next time (use the password save from your browser if possible)."),Object(r.b)("h3",{id:"run-kubectl"},"Run kubectl"),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"kubectl")," should be running at start."),Object(r.b)("p",null,"Just restart the web UI"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-shell"},"kubectl proxy\n")),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"Then visit: http://localhost:8001/api/v1/namespaces/kubernetes-dashboard/services/https:kubernetes-dashboard:/proxy/")),Object(r.b)("h3",{id:"enable-internet"},"Enable internet"),Object(r.b)("p",null,Object(r.b)("a",{parentName:"p",href:"https://kubernetes.io/docs/tasks/administer-cluster/dns-debugging-resolution/"},"Debug DNS on Ubuntu")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-shell"},"microk8s.enable dns\n")),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"Restart your machine.")),Object(r.b)("p",null,"You might need to change your firewall configuration"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"On Ubuntu")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-shell"},"sudo ufw allow in on cni0\nsudo ufw allow out on cni0\nsudo ufw default allow routed\n")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Try to connect to the internet from Kubernetes with the ",Object(r.b)("a",{parentName:"li",href:"https://github.com/MaastrichtU-IDS/d2s-core/blob/master/argo/tests/test-busybox.yaml"},"test-busybox pod"),".")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-shell"},"kubectl exec -ti busybox -- /bin/sh\nping google.com\n")),Object(r.b)("h3",{id:"create-persistent-volume"},"Create persistent volume"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-shell"},"# Create volume\nkubectl apply -n argo -f d2s-core/argo/storage/storage-mac.yaml\n")),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"Not working at the moment.")),Object(r.b)("h3",{id:"uninstall"},"Uninstall"),Object(r.b)("p",null,"Clean uninstall before 2.2."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-shell"},"kubectl get cm workflow-controller-configmap -o yaml -n kube-system --export | kubectl apply -n argo -f -\nkubectl delete -n kube-system cm workflow-controller-configmap\nkubectl delete -n kube-system deploy workflow-controller argo-ui\nkubectl delete -n kube-system sa argo argo-ui\nkubectl delete -n kube-system svc argo-ui\n")),Object(r.b)("hr",null),Object(r.b)("h2",{id:"install-argo-workflows"},"Install Argo workflows"),Object(r.b)("p",null,Object(r.b)("a",{parentName:"p",href:"https://argoproj.github.io/argo/"},Object(r.b)("img",{alt:"Argo project",src:n(166).default}))),Object(r.b)("h3",{id:"install-on-your-local-kubernetes"},"Install on your local Kubernetes"),Object(r.b)("p",null,"Argo workflows will be installed on the ",Object(r.b)("inlineCode",{parentName:"p"},"argo")," namespace. See the ",Object(r.b)("a",{parentName:"p",href:"https://argoproj.github.io/docs/argo/demo.html#2-install-the-controller-and-ui"},"official Argo documentation")," for more details."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-shell"},"kubectl create ns argo\nkubectl apply -n argo -f https://raw.githubusercontent.com/argoproj/argo/v2.4.2/manifests/install.yaml\n\n# Configure service account to run workflow\nkubectl create rolebinding default-admin --clusterrole=admin --serviceaccount=default:default\n\n# Test run\nargo submit --watch https://raw.githubusercontent.com/argoproj/argo/master/examples/hello-world.yaml\n")),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"See ",Object(r.b)("a",{parentName:"p",href:"https://raw.githubusercontent.com/vemonet/argo/master/manifests/namespace-install.yaml"},"custom configuration")," for namespace install."),Object(r.b)("pre",{parentName:"blockquote"},Object(r.b)("code",{parentName:"pre",className:"language-shell"},"kubectl apply -n argo -f https://raw.githubusercontent.com/vemonet/argo/master/manifests/namespace-install.yaml\n"))),Object(r.b)("h3",{id:"install-the-client"},"Install the client"),Object(r.b)("p",null,"See the ",Object(r.b)("a",{parentName:"p",href:"/dsri-documentation/docs/workflows-argo"},"Argo workflows documentation"),"."),Object(r.b)("h3",{id:"expose-the-ui"},"Expose the UI"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-shell"},"kubectl -n argo port-forward deployment/argo-ui 8002:8001\n")),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"Access on http://localhost:8002.")))}b.isMDXComponent=!0},130:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var l=n(0),a=n.n(l);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,l)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,l,a=function(e,t){if(null==e)return{};var n,l,a={},r=Object.keys(e);for(l=0;l<r.length;l++)n=r[l],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(l=0;l<r.length;l++)n=r[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),b=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=b(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},p=a.a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,r=e.originalType,o=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),u=b(n),p=l,m=u["".concat(o,".").concat(p)]||u[p]||d[p]||r;return n?a.a.createElement(m,i(i({ref:t},s),{},{components:n})):a.a.createElement(m,i({ref:t},s))}));function m(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=n.length,o=new Array(r);o[0]=p;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:l,o[1]=i;for(var s=2;s<r;s++)o[s]=n[s];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},166:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/argo-logo-c091bfee39aec37120d0e879edac74f6.png"},198:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/Kubernetes-c5f36b415dd16a8fcdae01fbc8d9c940.png"}}]);