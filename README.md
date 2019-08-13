# WhatsForDinner - Takes the thinking out of meal planning

## Background and Overview
WhatsForDinner is a recipe finding tool that takes the decision-making out of choosing what to cook by finding published recipes based on inputed ingredients.

Users can enter ingredients they have on hand into the web interface, press the 'submit' button and the app will identify recipes that contain all the ingredients the user added. The results are shown in a dendrogram showing the ingredients listed, ingredients still needed to complete the recipe, and the final recipe in different tiers. Additionally, users are able to click on the final recipes and be sent to the location where that recipe exists with instructions. Results will be limited to a maximum of 20, arranged by most popular by rating from the API.

## Functionality & MVP 
In whatsfordinner, users will be able to:
  * Input ingredients into a form
  * Press submit button and have app find recipes matching input ingredients
  * Click on resulting recipes and be redirected to locations those recipes exist
  
In addition, this project will include:
  * A modal explaining the functionality of the app
  
## Wireframes

The app will consist of a single screen consisting of the main area that will show the resulting dendrogram, as well as a side bar featuring a form where the users can input up to 5 ingredients. In addition, the sidebar will contain a submit button to begin the recipe search process, an about button that will render a modal with information about the app, and links to my Github and LinkedIn profiles.

![wire frame](https://github.com/parfittchris/WhatsForDinner/blob/master/Images/Homepage.png)

## Architecture and Technologies
 This app will be completed using the following technologies:
  * Vanilla Javascript for the overall structure and logic
  * Edamam API for matching user-inputed ingredients with recipes 
  * Data Driven Documents (D3) for manipulating the DOM based on the data
  * Weback for bundling and issuing scripts
  
  This app will make use of only one script to update the DOM based on the change in data
  
## Implementation Timeline
### Day 1
Create webpack.config.js and package.json files. Create entry file and complete basic rendering of app interface and 'About' modal. Do not start data visualization component.

### Day 2
Run through tutorials on creating dendogram visualizatons and practice creating my own, learning how to have it use data that will be incorporated from the API. Set up the visualization in the app minus getting the actual data from the API.

### Day 3
Learn about the Edamam API, how to import the data into my app, and how to manipulate the data to use what I want. Add the necessary code into the app to allow it retrieve data from the API.

### Day 4
Create the logic that will correctly filter the data from the API and connect it to my app's visualization. 

### Weekend 
Connect the user inputs to the backend logic. Finish styling the front end and make it professional. Test for bugs and deploy.

### Bonus Features
New nodes appear after rendering indicating popular ingredients often combined with user-inputs
Users can click new nodes to add them to their list and update result tree
