# Quaderno

**Quaderno** is a playbook application.

It makes use of React, Redux, React-Router for building the different plays. The Redux library allows to manage the application states.

It makes use of webpack as workflow tool for streamline development. It has two different configurations: One for developement and the other for production environment which includes the possibility of minifies / uglifies the application assets to avoid taking too much sptace.


## index.js

The *Router* component is part of the React Router API. It main responsibility is to deal with all the routing-reñated logic our app.

When you run *npm start*, it checks if the value of our NODE_ENV environment variable is production. *npm run start:prod*, if not, it runs *npm run start:dev*.

## Use Immutable store

redux react-redux immutable

## Use the Unit Test framework

For this app, we will make use of the Mocha and Chai as test framework for this app.

--save-dev mocha chai chai-immutable jsdom

## App.jsx

This page is the Home page. The route configuration is a series of rules which determine what to do when a URL matches the conditions we have laid out.

## Users

All the users would match a route path like this. To render a screen at

*/users/:userName/:projectName*

It is necessary to have a component to render at the route, make a new file at *component/user.jsx*


## Projects

All the projects would match a route path like this

/projects/:projectName/:phaseName
