# Cointab-server
## Problem Statement
* Create a simple 2-Page website using Node.js and SQL database, Page 1 will have three buttons namely Fetch Users, Delete Users, User Details, on clicking the Fetch Users button the application should fetch data from the (https://randomuser.me/) api and store it in a table of any name in the database, the data fetch should be in bulk for e.g., if the api returns a single record then the application should be such a way that it will fetch around 50 or 100 records on a single click.
* On clicking on the Delete Users button the application should remove all the entries in the database. On clicking on the User Details the application should open the Page 2 where it will display the data in the database as a table view with pagination feature as well as some filter option to filter the data in the table.
This repository contains a Node.js application that fetches user data from the Random User API and stores it in a MongoDB database. The application provides an API endpoint to retrieve the stored user data, as well as endpoints to delete all stored user data and to fetch new user data from the API and store it in the database.

## Getting Started
Prerequisites
Before running the application, you need to have the following installed on your system:
Node.js (version 12 or higher)
MongoDB (version 4 or higher)
Installation
Clone the repository to your local machine.

Navigate to the project directory in your terminal.

## Run the following command to install the required packages:
Copy code and 
npm install

## Running the Application
To start the application, run the following command:
npm start

## API Endpoints
* POST /fetch-users
This endpoint fetches user data from the Random User API and stores it in the database. It expects no parameters. If the operation is successful, it returns a response with a 200 status code and a message indicating that the users were saved successfully. If an error occurs, it returns a response with a 500 status code and a message indicating that an error occurred while fetching and saving users.

* DELETE /delete-users
This endpoint deletes all user data from the database. It expects no parameters. If the operation is successful, it returns a response with a 200 status code and a message indicating that the users were deleted successfully. If an error occurs, it returns a response with a 500 status code and a message indicating that an error occurred while deleting users.

* GET /get-users
This endpoint retrieves user data from the database. It accepts the following query parameters:
page (optional): The page number of the results to return (default: 1).
limit (optional): The maximum number of results to return per page (default: 10).
filter (optional): A filter to apply to the results by gender (default: "", meaning no filter).
If the operation is successful, it returns a response with a 200 status code and an object containing the following properties:

### data: 
An array of user objects.
### totalPages:
The total number of pages of results.

If an error occurs, it returns a response with a 500 status code and a message indicating that an error occurred while fetching user data.
