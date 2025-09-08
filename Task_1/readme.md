User Signup System with Validation

This is a simple web application that allows users to sign up by providing a Username, Email, and Password. It validates the inputs, hashes the password, and stores the data locally in the browser. The registered users are displayed in a dashboard, where they can be deleted.

Features

Signup Form:

Username (cannot be empty).

Email (must be in a valid format).

Password (must be at least 6 characters long and hashed).

Dashboard: Displays all registered users with their details: Username, Email, and Password.

Delete User: Allows users to delete their entries from the dashboard.

Technologies Used

HTML: For creating the signup form and structure.

CSS: For styling the page and making it visually appealing.

JavaScript: For validating inputs, saving data to localStorage, and manipulating the DOM (Document Object Model) to display the data.

Setup Instructions
1. Download the Project Files

Create a new folder on your computer where you will store the project. In this folder, create the following files:

index.html - The main HTML structure of the project.

style.css - The stylesheet for the page.

script.js - The JavaScript file that handles the logic and functionality.

2. Open the Project in Your Browser

After creating the files, open the index.html file in your browser.

You can do this by double-clicking the index.html file, or you can use any code editor (like VSCode) and run it with a live server extension.

How the Project Works
Signup Form:

Users can input a Username, Email, and Password.

When the Signup button is clicked, the form is validated to ensure:

The Username is not empty.

The Email is in the correct format.

The Password is at least 6 characters long.

If all the conditions are met, the user data is hashed (for simplicity, using Base64 encoding) and saved to localStorage.

Dashboard:

The dashboard will display all the registered users, showing their Username, Email, and the hashed Password.

Each user has a Delete button next to them to remove their entry from the dashboard and localStorage.

Code Structure
1. HTML (index.html):

Contains the structure of the page including:

The signup form with input fields for username, email, and password.

A dashboard section where the users are displayed in a table.

2. CSS (style.css):

Styles the page, the form, and the dashboard.

Provides a clean, modern layout with buttons and tables.

3. JavaScript (script.js):

Form Validation: Ensures inputs are correct before submission.

localStorage: Saves the user details to local storage so data persists even after a page reload.

Delete Functionality: Allows users to delete their entry from the dashboard and localStorage.

How to Run

Ensure you have the following files:

index.html

style.css

script.js

Open index.html in a web browser (Chrome, Firefox, etc.).

Sign up a user by entering the necessary information (Username, Email, Password).

The user will be added to the Dashboard if the input is valid.

Delete users from the dashboard by clicking the Delete button next to their entry.
