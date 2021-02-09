(window.webpackJsonp=window.webpackJsonp||[]).push([[90],{159:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return p}));var o=n(3),a=n(7),r=(n(0),n(165)),i={id:"okd3-guide-dockerfile-to-openshift",title:"Start from Dockerfile"},l={unversionedId:"okd3-guide-dockerfile-to-openshift",id:"okd3-guide-dockerfile-to-openshift",isDocsHomePage:!1,title:"Start from Dockerfile",description:"Build from local Dockerfile",source:"@site/docs/okd3-guide-dockerfile-to-openshift.md",slug:"/okd3-guide-dockerfile-to-openshift",permalink:"/dsri-documentation/docs/okd3-guide-dockerfile-to-openshift",editUrl:"https://github.com/MaastrichtU-IDS/dsri-documentation/edit/master/website/docs/okd3-guide-dockerfile-to-openshift.md",version:"current",lastUpdatedBy:"Vincent Emonet",lastUpdatedAt:1612893128,sidebar:"docs",previous:{title:"Start from Docker image",permalink:"/dsri-documentation/docs/okd3-deploy-from-docker"},next:{title:"Start from Helm charts",permalink:"/dsri-documentation/docs/okd3-helm"}},c=[{value:"Build from local Dockerfile",id:"build-from-local-dockerfile",children:[{value:"Create new build configuration.",id:"create-new-build-configuration",children:[]},{value:"Build image",id:"build-image",children:[]},{value:"Create app",id:"create-app",children:[]},{value:"Expose app",id:"expose-app",children:[]},{value:"Delete the created build",id:"delete-the-created-build",children:[]}]},{value:"Deploy from a local docker image",id:"deploy-from-a-local-docker-image",children:[]},{value:"Deploy using GitHub Actions workflows",id:"deploy-using-github-actions-workflows",children:[]}],s={rightToc:c};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(r.b)("wrapper",Object(o.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h2",{id:"build-from-local-dockerfile"},"Build from local Dockerfile"),Object(r.b)("p",null,"This manual shows you an example of how to convert a dockerfile from your local machine to a running container on DSRI (openshift / okd). Start by cloning the example repository to your local machine."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-shell"},"git clone git@gitlab.maastrichtuniversity.nl:dsri-examples/dockerfile-to-okd.git\n")),Object(r.b)("p",null,"After cloning you now have a local folder containing a Dockerfile and index.html file. Inspect both files."),Object(r.b)("p",null,"Login with the openshift client:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-shell"},"oc login https://app.dsri.unimaas.nl:8443\n")),Object(r.b)("p",null,"Create a new project if you don't have a project yet you can work with (change myproject to a project name of your choice:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-shell"},"oc new-project myproject\n")),Object(r.b)("hr",null),Object(r.b)("h3",{id:"create-new-build-configuration"},"Create new build configuration."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-shell"},"oc new-build --name dockerfile-to-okd --binary\n")),Object(r.b)("hr",null),Object(r.b)("h3",{id:"build-image"},"Build image"),Object(r.b)("p",null,"Start a new build with the example files we provided."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-shell"},"cd dockerfile-to-okd\noc start-build dockerfile-to-okd --from-dir=. --follow --wait\n")),Object(r.b)("hr",null),Object(r.b)("h3",{id:"create-app"},"Create app"),Object(r.b)("p",null,"Create a new app using the build we just created:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-shell"},"oc new-app dockerfile-to-okd\n")),Object(r.b)("p",null,"To properly deploy your app on OpenShift you will need to define a few more parameters:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Enable root user access (with ",Object(r.b)("inlineCode",{parentName:"p"},"serviceAccountName"),")")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Add persistent storage (with ",Object(r.b)("inlineCode",{parentName:"p"},"volumes")," and ",Object(r.b)("inlineCode",{parentName:"p"},"containers: volumeMounts")," )"),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"${STORAGE_NAME}"),": Name of your persistent volume claim in the ",Object(r.b)("strong",{parentName:"li"},"Storage")," page of your project in the web UI"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"${STORAGE_FOLDER}")," : Name of the folder inside the persistent volume claim to store the application data (so you can store multiple applications on the same persistent volume claim)"))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Make sure the container will run on the right nodes (with the ",Object(r.b)("inlineCode",{parentName:"p"},"nodeSelector"),")"))),Object(r.b)("p",null,"Open the configuration of the started app:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-shell"},"oc edit dockerfile-to-okd\n")),Object(r.b)("p",null,"Add the following lines (replace the variables, such as ",Object(r.b)("inlineCode",{parentName:"p"},"${STORAGE_NAME}")," by your values):"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-yaml"},'    template:\n      spec:\n        serviceAccountName: anyuid\n        nodeSelector:\n          dsri.unimaas.nl/cpu: \'true\'\n        volumes:\n        - name: data\n          persistentVolumeClaim:\n            claimName: "${STORAGE_NAME}"\n        containers:\n        - image: rstudio-root:latest\n          volumeMounts:\n          - name: data\n            mountPath: "/home/rstudio"\n            subPath: "${STORAGE_FOLDER}"\n')),Object(r.b)("div",{className:"admonition admonition-info alert alert--info"},Object(r.b)("div",{parentName:"div",className:"admonition-heading"},Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",{parentName:"h5",className:"admonition-icon"},Object(r.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(r.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Generate deployment file in YAML")),Object(r.b)("div",{parentName:"div",className:"admonition-content"},Object(r.b)("p",{parentName:"div"},"You can also generate the app deployment in a YAML file to edit it before start:"),Object(r.b)("pre",{parentName:"div"},Object(r.b)("code",{parentName:"pre",className:"language-shell"},"oc new-app dockerfile-to-okd -o yaml > myapp.yml\n# Edit myapp.yml\noc create -f myapp.yml\n")))),Object(r.b)("hr",null),Object(r.b)("h3",{id:"expose-app"},"Expose app"),Object(r.b)("p",null,"Expose the application so you can reach it from your browser and check the route that was created"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-shell"},"oc expose svc/dockerfile-to-okd\noc get route\n")),Object(r.b)("p",null,"You can now visit the route shown in the HOST/PORT output of the 'oc get route' command and see if you have successfully converted the docker file. "),Object(r.b)("hr",null),Object(r.b)("h3",{id:"delete-the-created-build"},"Delete the created build"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-shell"},"oc delete build dockerfile-to-okd\n")),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"See ",Object(r.b)("a",{parentName:"p",href:"https://docs.openshift.com/enterprise/3.0/cli_reference/basic_cli_operations.html#application-modification-cli-operations"},"oc delete documentation"),".")),Object(r.b)("hr",null),Object(r.b)("h2",{id:"deploy-from-a-local-docker-image"},"Deploy from a local docker image"),Object(r.b)("p",null,"You can also deploy a local docker image from your machine. "),Object(r.b)("p",null,"First build the docker image:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-shell"},"docker build -t my-docker-image:latest .\n")),Object(r.b)("p",null,"Check you have the image locally on your system:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-shell"},"docker images ls\n")),Object(r.b)("p",null,"You should have a docker image for your application:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-bash"},"REPOSITORY                                   TAG                 \nmy-docker-image                              latest\n")),Object(r.b)("p",null,"You can then deploy providing the docker image name and the name of the application to be deployed:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-abash"},"oc new-app my-docker-image --name app-name-on-openshift\n")),Object(r.b)("hr",null),Object(r.b)("h2",{id:"deploy-using-github-actions-workflows"},"Deploy using GitHub Actions workflows"),Object(r.b)("p",null,"You can also build and deploy your application using a GitHub Actions workflow."),Object(r.b)("div",{className:"admonition admonition-info alert alert--info"},Object(r.b)("div",{parentName:"div",className:"admonition-heading"},Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",{parentName:"h5",className:"admonition-icon"},Object(r.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(r.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"RedHat documentation")),Object(r.b)("div",{parentName:"div",className:"admonition-content"},Object(r.b)("p",{parentName:"div"},"RedHat provides the following instructions and template to deploy an application on OpenShift"))),Object(r.b)("p",null,"The OpenShift Starter workflow will:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Checkout your repository"),Object(r.b)("li",{parentName:"ul"},"Perform a Docker build"),Object(r.b)("li",{parentName:"ul"},"Push the built image to an image registry"),Object(r.b)("li",{parentName:"ul"},"Log in to your OpenShift cluster"),Object(r.b)("li",{parentName:"ul"},"Create an OpenShift app from the image and expose it to the internet.")),Object(r.b)("p",null,"Before you begin:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Have write access to a container image registry such as quay.io or Dockerhub."),Object(r.b)("li",{parentName:"ul"},"Have access to an OpenShift cluster.",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"For instructions to get started with OpenShift see ",Object(r.b)("a",{parentName:"li",href:"https://www.openshift.com/try"},"https://www.openshift.com/try")))),Object(r.b)("li",{parentName:"ul"},"The project you wish to add this workflow to should have a Dockerfile.",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"If you don't have a Dockerfile at the repository root, see the buildah-build step."),Object(r.b)("li",{parentName:"ul"},"Builds from scratch are also available, but require more configuration.")))),Object(r.b)("p",null,"To get the workflow running:"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"Add this workflow to your repository."),Object(r.b)("li",{parentName:"ol"},"Edit the top-level 'env' section, which contains a list of environment variables that must be configured."),Object(r.b)("li",{parentName:"ol"},"Create the secrets referenced in the 'env' section under your repository Settings."),Object(r.b)("li",{parentName:"ol"},"Edit the 'branches' in the 'on' section to trigger the workflow on a push to your branch."),Object(r.b)("li",{parentName:"ol"},"Commit and push your changes.")),Object(r.b)("p",null,"For a more sophisticated example, see ",Object(r.b)("a",{parentName:"p",href:"https://github.com/redhat-actions/spring-petclinic/blob/main/.github/workflows/petclinic-sample.yaml"},"https://github.com/redhat-actions/spring-petclinic/blob/main/.github/workflows/petclinic-sample.yaml"),"\nAlso see our GitHub organization, ",Object(r.b)("a",{parentName:"p",href:"https://github.com/redhat-actions/"},"https://github.com/redhat-actions/")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-yaml"},'name: Deploy to OpenShift\n\n# \u2b07\ufe0f  Modify the fields marked with \u2b07\ufe0f to fit your project, and create any secrets that are referenced.\n# https://docs.github.com/en/free-pro-team@latest/actions/reference/encrypted-secrets\nenv:\n  # \u2b07\ufe0f EDIT with your registry and registry path.\n  REGISTRY: quay.io/<username>\n  # \u2b07\ufe0f EDIT with your registry username.\n  REGISTRY_USER: <username>\n  REGISTRY_PASSWORD: ${{ secrets.REGISTRY_PASSWORD }}\n\n  # \u2b07\ufe0f EDIT to log into your OpenShift cluster and set up the context.\n  # See https://github.com/redhat-actions/oc-login#readme for how to retrieve these values.\n  OPENSHIFT_SERVER: ${{ secrets.OPENSHIFT_SERVER }}\n  OPENSHIFT_TOKEN: ${{ secrets.OPENSHIFT_TOKEN }}\n\n  # \u2b07\ufe0f EDIT with the port your application should be accessible on.\n  APP_PORT: 8080\n\n  # \u2b07\ufe0f EDIT if you wish to set the kube context\'s namespace after login. Leave blank to use the default namespace.\n  OPENSHIFT_NAMESPACE: ""\n\n  # If you wish to manually provide the APP_NAME and TAG, set them here, otherwise they will be auto-detected.\n  APP_NAME: ""\n  TAG: ""\n\non:\n  # https://docs.github.com/en/free-pro-team@latest/actions/reference/events-that-trigger-workflows\n  push:\n    # Edit to the branch(es) you want to build and deploy on each push.\n    branches: [ main ]\n\njobs:\n  openshift-ci-cd:\n    name: Build and deploy to OpenShift\n    runs-on: ubuntu-20.04\n\n    steps:\n    - uses: actions/checkout@v2\n\n    - name: Determine app name\n      if: env.APP_NAME == \'\'\n      run: |\n        echo "APP_NAME=$(basename $PWD)" | tee -a $GITHUB_ENV\n\n    - name: Determine tag\n      if: env.TAG == \'\'\n      run: |\n        echo "TAG=${GITHUB_SHA::7}" | tee -a $GITHUB_ENV\n\n    # https://github.com/redhat-actions/buildah-build#readme\n    - name: Build from Dockerfile\n      uses: redhat-actions/buildah-build@v1\n      with:\n        image: ${{ env.APP_NAME }}\n        tag: ${{ env.TAG }}\n        # If you don\'t have a dockerfile, see:\n        # https://github.com/redhat-actions/buildah-build#building-from-scratch\n        # Otherwise, point this to your Dockerfile relative to the repository root.\n        dockerfiles: |\n          ./Dockerfile\n\n    # https://github.com/redhat-actions/push-to-registry#readme\n    - name: Push to registry\n      id: push-to-registry\n      uses: redhat-actions/push-to-registry@v1\n      with:\n        image: ${{ env.APP_NAME }}\n        tag: ${{ env.TAG }}\n        registry: ${{ env.REGISTRY }}\n        username: ${{ env.REGISTRY_USER }}\n        password: ${{ env.REGISTRY_PASSWORD }}\n\n    # The path the image was pushed to is now stored in ${{ steps.push-to-registry.outputs.registry-path }}\n\n    # oc-login works on all platforms, but oc must be installed first.\n    # The GitHub Ubuntu runner already includes oc.\n    # Otherwise, https://github.com/redhat-actions/oc-installer#readme is available.\n\n    # https://github.com/redhat-actions/oc-login#readme\n    - name: Log in to OpenShift\n      uses: redhat-actions/oc-login@v1\n      with:\n        openshift_server_url: ${{ env.OPENSHIFT_SERVER }}\n        openshift_token: ${{ env.OPENSHIFT_TOKEN }}\n        insecure_skip_tls_verify: true\n        namespace: ${{ env.OPENSHIFT_NAMESPACE }}\n\n    # This step should create a deployment, service, and route to run your app and expose it to the internet.\n    # Feel free to replace this with \'oc apply\', \'helm install\', or however you like to deploy your app.\n    - name: Create and expose app\n      run: |\n        export IMAGE="${{ steps.push-to-registry.outputs.registry-path }}"\n        export PORT=${{ env.APP_PORT }}\n\n        export SELECTOR="app=${{ env.APP_NAME }}"\n        echo "SELECTOR=$SELECTOR" >> $GITHUB_ENV\n\n        set -x\n        # Take down any old deployment\n        oc delete all --selector="$SELECTOR"\n        oc new-app --name $APP_NAME --docker-image="$IMAGE"\n\n        # Make sure the app port is exposed\n        oc patch svc $APP_NAME -p "{ \\"spec\\": { \\"ports\\": [{ \\"name\\": \\"$PORT-tcp\\", \\"port\\": $PORT }] } }"\n        oc expose service $APP_NAME --port=$PORT\n\n        oc get all --selector="$SELECTOR"\n        set +x\n\n        export ROUTE="$(oc get route $APP_NAME -o jsonpath=\'{.spec.host}\')"\n        echo "$APP_NAME is exposed at $ROUTE"\n        echo "ROUTE=$ROUTE" >> $GITHUB_ENV\n\n    - name: View application route\n      run: |\n        [[ -n ${{ env.ROUTE }} ]] || (echo "Determining application route failed in previous step"; exit 1)\n        echo "======================== Your application is available at: ========================"\n        echo ${{ env.ROUTE }}\n        echo "==================================================================================="\n        echo\n        echo "Your app can be taken down with: \\"oc delete all --selector=\'${{ env.SELECTOR }}\'\\""\n')))}p.isMDXComponent=!0},165:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var o=n(0),a=n.n(o);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),p=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=p(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,i=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),u=p(n),d=o,m=u["".concat(i,".").concat(d)]||u[d]||b[d]||r;return n?a.a.createElement(m,l(l({ref:t},s),{},{components:n})):a.a.createElement(m,l({ref:t},s))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var s=2;s<r;s++)i[s]=n[s];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);