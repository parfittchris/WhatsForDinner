# WhatsForDinner - Takes the thinking out of meal planning

## Background and Overview
WhatsForDinner is a recipe finding tool that takes the decision-making out of choosing what to cook by finding published recipes based on inputed ingredients.

Users can enter ingredients they have on hand into the web interface, press the 'Find Recipes' button and the app will search for recipes that contain all the ingredients the user added. The results are shown in a radial dendrogram showing the resultant recipe titles. Ingredients are listed neatly in the sidebar and are able to be removed individually to refine search results. Additionally, users are able to click on the final recipes and be sent to the actual website where that recipe exists. Results will be limited to a maximum of 30, arranged by most popular by rating from the API.

## Functionality
In WhatsForDinner, users will be able to:
  * Input ingredients into a form
  * Press submit button and have app find recipes matching input ingredients
  * View and image of the resultant recipe by hovering over the link title
  * See the ingredients they've already entered and click them to remove from list
  * Click on resulting recipes and be redirected to locations those recipes exist
  
In addition, this project will include:
  * A modal explaining the functionality of the app
  
## Features

### Interface
The app consists of a single main area that shows the radial dendrogram of recipe results, as well as a side bar featuring a form where the users can input ingredients. In addition, the sidebar will contain a submit button to begin the recipe search process, an about button that renders a modal with information about the app, and links to my Github and LinkedIn profiles.

![wire frame](https://github.com/parfittchris/WhatsForDinner/blob/master/Images/SiteSnapshot.png)

### Food2Fork Recipe API Search
    
 This app will be completed using the following technologies:
  * Vanilla Javascript for the overall structure and logic
  * Food2Fork Recipe API for matching user-inputed ingredients with recipes 
  * Data Driven Documents (D3) and Scalable Vector Graphics (SVG) for manipulating the DOM based on the data
  * Weback for bundling and issuing scripts
  
## Implementation Timeline
### Day 1
Create webpack.config.js and package.json files. Create entry file and complete basic rendering of app interface and 'About' modal. Do not start data visualization component.
To Do:
  * Create Webpack
  * Create Json
  * Create Entry file
  * Complete Basic app interface
  * Create About modal

### Day 2
Run through tutorials on creating dendogram visualizatons and practice creating my own, learning how to have it use data that will be incorporated from the API. Set up the visualization in the app minus getting the actual data from the API.
To do:
  * Complete dendogram tutorials
  * Set up visualization framework minus data aspect in app
  * Test visualization with temporary data to ensure it works
  
### Day 3
Learn about the Edamam API, how to import the data into my app, and how to manipulate the data to use what I want. Add the necessary code into the app to allow it retrieve data from the API.
To do:
  * Learn Edamam API and how to import data into app
  * Write code to retrieve data from API and connect it with dendogram visualization
  * Test that visualization and data are working

### Day 4
Create the logic that will correctly filter the data from the API and connect it to my app's visualization. Create link to recipe location.
To do:
  * Code backend logic to filter data based on given inputs
  * Create link to recipe location
  * Test that visualization works with filtered code

### Weekend 
To do:
Connect the user inputs to the backend logic. Finish styling the front end and make it professional. Test for bugs and deploy.
  * Connect user inputs to backend
  * Style frontend
  * Debug whole app
  * Publish
  
### Bonus Features
- New animations for a  more pleasing user experience
