# AssignmentApp


This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.2.3.

## Development server


Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Json server


Run `npm run server` for the Json Database server. Navigate to `http://localhost:5000/`. 
The list of assignments is available on `http://localhost:5000/tasks`.
The list of connexions is available on `http://localhost:5000/login`
All data from the Json server are available on the file db.json in the main branch of the project

## MongoDB database

Apply the command `cd api/api` in your shell to access the MangoDB database launcher. Then run the command `node server.js` to run the database. Now, you can access to all the tasks by following the route "Liste des devoirs" in the sidenav bar.


## Code scaffolding


Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build


Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests


Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).


## Accueil component


The component called "accueil" or home component is the main page of the website. It is the first page on which the student appears when they are entering the website. Home is a public page.

## Assignments repo


Assignments components are related to the assignments of the student. They are supposed to be private so they are not supposed to be accessible by people that didn't sign up. There is several components in the assignments folder : add-assignment and assignment-details, that manage how an assignment can be added or deleted according to its name and date.

## Button component

I tried to improve my skills in Angular by creating a button that is directly a component. The advantage of that technique is that I can totally use this component in every other file of my project and therefore have a "standardized button".

## Menu component

## Footer component

## Login component

I created a login component to manage every user's login. I didn't have the time to completely implement it but the idea of this component is to lead the user to a new page in which the user can sign in or sign up.

## Interfaces

Connexion and IToken interfaces are supposed to give the pattern of the login of each user.
Tasks interface is there to give the pattern of any assignment.

## Services


Connexion and token services are there to manage each user login. They are linked to a Json database (`localhost:5000/login`) that keeps each username and password stocked. 
Tasks service is there to manage the assignments. It is related to a Json database (`localhost:5000/tasks`) and offers to do tasks such as adding an assignment or deleting an assignment.