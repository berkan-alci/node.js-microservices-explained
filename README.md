# Simple Micro Service application

## Intro:

This application is meant as a demonstration on how microservices work. This is not to be used as an optimal boilerplate for future micro services. It's however utilized to demonstrate the complexity & design of backend microservices.

## Description:

This is a simple application where we have a React app that acts as the UI. Here a user can create a post. People can comment on these posts. Below the post creation, there'll be a section where users can view all posts with their respective comments. You can also create comments on the available posts.

### Front-End:

### Backend (Micro services):

#### Dependencies (for the people not utilizing docker):

-   NOTE: MAKE SURE TO CHANGE AXIOS FETCHES FROM K8S LINKS TO LOCALHOST!!!
-   Post dependency `npm i` & `npm run dev` to launch
-   Comment dependency `npm i` & `npm run dev` to launch
-   Moderation dependency `npm i` & `npm run dev` to launch
-   Query dependency `npm i` & `npm run dev` to launch
-   Event-Bus `npm i` & `npm run dev` to launch

#### Pull & Run Docker containers:

-   Post container: `docker pull berkanalci/ms-post`
-   Comment container: `docker pull berkanalci/ms-comments`
-   Moderation container: `docker pull berkanalci/ms-moderation`
-   Query container: `docker pull berkanalci/ms-query`
-   Event-bus container: `docker pull berkanalci/ms-eb`
-   Running builds: `docker run [image name] -p [TCP PORT]:[Docker port]`

#### Launch dev server with Kubernetes:

-   Change hosts file in System32/drivers/etc/hosts
-   Add: `127.0.0.1 microservicetest.com` at the bottom of the document.
-   Install skaffold at `skaffold.dev`
-   run `skaffold dev` in the root of the project.
-   go to `microservicetest.com` to see the frontend & interact with the microservice test

#### Example of a monolithic backend:

![Diagram monolithic](https://github.com/berkan-alci/node.js-microservices-explained/blob/main/readme-images/Monolithic-Monolithic.png)

#### Example of events:

![Diagram event](https://github.com/berkan-alci/node.js-microservices-explained/blob/main/readme-images/Service-explanantion.png)

#### Diagram with Kubernetes cluster:

![Diagram K8S event](https://github.com/berkan-alci/node.js-microservices-explained/blob/main/readme-images/service-k8s.explained-k8s.png)
