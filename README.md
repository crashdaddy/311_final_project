# 311 Final Project

## Overview

This is a project that you might be given as part of the job interview process. It is a representation of the bare minimum of what a web application business app would be capable of. You can create a new customer and list out all of the customers. The web interface has been built for you by your co-worker. As the backend developer, you must code the server to handle taking the data and putting it into a database and retrieving the data and forwarding it to the client.

## Setup

Initialize and run the app: `npm install` && `npm start`.

The app is using `nodemon`. Any changes made (and saved) will cause the server to restart.

Navigate to the `sql/connections.js` file and alter the following fields to reflect your database setup:

```
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'admin'
```

These will be the same credentials we used to set up a connection in MySQL Workbench.

Finally, in MySQL Workbench, run the `initialize.sql` script that is included in this project.



## Instructions
### Create a route for a POST to /api/customers
Notice what happens when you try to create a new customer by filling out the information and clicking the submit button. An Http request is made to the server, which doesn't know how to handle it. Make the server be able to handle a POST request to the path '/api/customers'. Take the information and save it in the database in the table customers.

  DONE

### Create a route for a get to /api/customers
Notice what happens when you click on the search customers tab. No customers appear, and you notice a failed Http GET request to '/api/customers.  Make the server be able to handle a GET request to the path '/api/customers'. Retrieve all customer records from the database and forward them to the client so they show up on the webpage.
### Watch Out
This project is presenting an additional consideration that is a prevalent problem that real-life web apps can experience. The data that is sent by the client might not be what the server or database is expecting. Handle this how you see fit.

  DONE 

  
## Extra Credit
* Validation
* Authentication
