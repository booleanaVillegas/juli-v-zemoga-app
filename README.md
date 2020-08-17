# Zemoga Voting Application

The following proyect is developed for Zemoga. 
Open [https://juli-v-zemoga-app.web.app/](https://juli-v-zemoga-app.web.app/) to view in full action and fully functioning on the browser.

# Go to page

[https://juli-v-zemoga-app.web.app/](https://juli-v-zemoga-app.web.app/)

# About this app

## ReactJs;
- This app was developed in the library reactJs with the help of "create-react-app" command.
- It implements Hooks API to set State inside components. 
- It uses the principles of atomic design to keep it scaleable
- The src/containers directory includes the main two sections in the app
- The src/components directory includes the smaller components such as header, fotter and voting-box

## Scss: 
- It was developed using Sass preprocessor
- The file tokens.scss as part of the atomic design principle includes general variables and mixins to use throught the whole app

## HTML:
- The app was developed using semantic html to increase accessibility.
- Fully functional with the keyboard
- Each voting box is a form with two radio inputs and a submit button.

## Testing:
- Unit test cases tried to be based on behavior (BDD)
- Used '@testing-library/react' and '@testing-library/jest-dom' to test components
- VotingBox component texted with over 90% coverage
- Other components not tested since they didn't include much JS logic. 

## Server Side (backend as a service)
- Hosting, storage and databases are provided by firebase.

## What is it missing?
- Facade pattern to use the firebase database through my own methods. 
- Implementing design css libraries to use grids such as Tailwind.css or bootstrap
- React Context, Redux or Mobx are prefered to use in bigger aplications when different screens have to share information between them. 
- This can be considered a MVP(minimum viable product), design details are not perfect and some elements are not included but it portraits the intention of the app and its basic functionalities. 




## Avaliable Scripts

To run this proyect on your local environment, open this repo on your terminal. 
In the project directory, you can run:

1. install
### `npm install`
Install the dependencies needed to run the application of your device

2. Watch on browser
### `npm start`
Opens the browser in the localhost:3000 to view the application. 

3. Run unit tests
### `npm test`
Runs the unit tests made with Jest
