# Simple Micro Service application

## Intro:

This application is meant as a demonstration on how microservices work. This is not to be used as an optimal boilerplate for future micro services. It's however utilized to demonstrate the complexity & design of backend microservices.

## Description:

This is a simple application where we have a React app that acts as the UI. Here a user can create a post. People can comment on these posts. Below the post creation, there'll be a section where users can view all posts with their respective comments. You can also create comments on the available posts.

### Front-End:

### Backend (Micro services):

#### Dependencies:

-   Post dependency `npm i` & `npm run dev` to launch
-   Comment dependency `npm i` & `npm run dev` to launch
-   Moderation dependency `npm i` & `npm run dev` to launch
-   Query dependency `npm i` & `npm run dev` to launch
-   Event-Bus `npm i` & `npm run dev` to launch

#### Example of events:

![Diagram event](https://github.com/berkan-alci/node.js-microservices-explained/blob/main/readme-images/Service-explanantion.png)
