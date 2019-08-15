[![Build Status](https://travis-ci.org/susanwere/Kladi-Backend.svg?branch=master)](https://travis-ci.org/susanwere/Kladi-Backend) [![Coverage Status](https://coveralls.io/repos/github/susanwere/Kladi-Backend/badge.svg?branch=master)](https://coveralls.io/github/susanwere/Kladi-Backend?branch=master)

# Kladi
An e-commerce store for clothes

#External Dependencies
This application is written with nodejs version 12.6.0

#Installation
Run `npm install --save`

#Configuring the database
Ensure you have the pool setup in mydb.js with required environment variables for username and password.

Add `.env` file in the root of your application then update the following with your credentials.

`POSTGRES_USER=your_postgres_username`
`POSTGRES_PASSWORD=your_postgres_password`

Run `node mydb createTables` to create the tables
Run `node mydb dropTables` incase you want to drop the tables

#Configuring Local Host
Run `node index.js` to start the local server

#Running tests
Run `export NODE_ENV="test"` from the command line
Run `npm test` to run the tests.

To continue developing from the development environment, run `export NODE_ENV="development"`
