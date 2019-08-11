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
