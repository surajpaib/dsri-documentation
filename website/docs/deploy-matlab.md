---
id: deploy-matlab
title: Matlab
---

:::warning Stop unused Matlab

Always stop all Matlab pods when you are not using them, the UM license server have a limited number of licenses available.

:::

## Use the official Matlab image

Start Matlab with a desktop UI accessible directly using your web browser at a URL automatically generated. 

Go to the **Catalog**, make sure **Templates** are displayed (box checked), and search for **Matlab** 

:::caution Request access to Matlab

To be able to access the Matlab template you will need to [ask the DSRI admins](/dsri-documentation/help) to enable it in your project.

:::

You will need to provide the password you will use to access the Matlab UI when filling the template.

Once Matlab start you can access it through 2 routes (URL), which can be accessed when clicking on the Matlab node in the **Topology**:

* The main `matlab` route to access Matlab desktop UI directly in your web browser
* The `matlab-vnc` route to access Matlab using your favorite VNC client (you will need to use the full URL to your Matlab VNC route)

See the [official Matlab image documentation](https://hub.docker.com/r/mathworks/matlab) for more details about this image.

## Deploy Matlab on GPU

We use the Matlab template in the DSRI catalog to deploy a pre-built **Nvidia Matlab Deep Learning Container** on CPU or GPU nodes. See the [official documentation from MathWorks](https://nl.mathworks.com/help/cloudcenter/ug/matlab-deep-learning-container-on-dgx.html) for more details about this image.

:::caution Request access to Matlab

To be able to access the Matlab on GPU template you will need to [ask the DSRI admins](/dsri-documentation/help) to enable it in your project.

:::

2 options are available to connect to your running Matlab pod terminal:

- Go to the matlab pod page on the DSRI web UI 
- Or connect from your terminal with `oc rsh MATLAB_POD_ID`

Type `bash` when first accessing to the terminal to have a better experience.

Type `cd /ContainerDeepLearningData` to go in the persistent volume, and use this volume to store all data that should be preserved.

Type `matlab` to access Matlab from the terminal

It is possible to access the Matlab desktop UI through VNC and a web UI, but the script to start it in `/bin/run.sh` seems to face some errors, let us know if you have any luck with this.

By default the image run with the `matlab` user which does not have `sudo` privilege, you can run the container as root if you need to install packages which require admin privileges. 

## Build your own Matlab image

Follow the instructions at: https://github.com/mathworks-ref-arch/matlab-dockerfile

This will require you to retrieve Matlab installation files to build your own container

Once all the files have been properly placed in the folder and the license server URL has been set, you can start the build on DSRI by following the [documentation to deploy from a `Dockerfile`](https://maastrichtu-ids.github.io/dsri-documentation/docs/guide-dockerfile-to-openshift#create-new-build-configuration)

:::caution License server not available on your laptop

If you try to build Matlab directly on your laptop it will most probably fail as your machine might not have access to the license server. You will need to build the Matlab container directly on DSRI with `oc start-build`

:::

Once Matlab deployed, you will need to edit the matlab deployment YAML before it works.

Go to **Topology**, click on the Matlab node, click on the **Actions** button of the matlab details, and **Edit deployment**. In the deployment YAML search for `spec:` which has a `containers:` as child, and add the following under `spec:`

```yaml
spec:
  serviceAccountName: anyuid
  containers: ...
```

Your Matlab container should now be running!

2 options are available to connect to your running Matlab pod terminal:

* Go to the matlab pod page on the DSRI web UI 
* Or connect from your terminal with `oc rsh MATLAB_POD_ID`

You can access Matlab from the terminal by running `matlab`

Unfortunately Matlab did not expected their users to need the graphical UI when using Matlab in containers. So only the command line is available by default. You can find more information to [enable the Matlab UI in this issue](https://github.com/mathworks-ref-arch/matlab-dockerfile/issues/18).

<!--

By default the image run with the `matlab` user which does not have `sudo` privilege, you can run the container as root if you need to install packages which require admin privileges. 

To run as root, go to **Topology**, click on the Matlab node, click on the **Actions** button of the matlab details, and **Edit deployment**. In the deployment YAML search for `spec:` which has a `containers:` as child, and add the following under `spec:`

```yaml
spec:
  securityContext:
    runAsUser: 0
```
-->

:::warning Stop unused Matlab

Always stop all Matlab pods when you are not using them, the UM license server have a limited number of licenses available.

:::