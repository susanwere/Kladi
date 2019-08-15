const Pool = require('pg').Pool
const dotenv = require('dotenv');

dotenv.config()

const pool = new Pool({
  user: process.env.POSTGRES_USER,
  host: 'localhost',
  database: 'kladi',
  password: process.env.POSTGRES_PASSWORD,
  port: 5432,
})

pool.on('connect', () => {
    console.log('connected to the db');
});

const createTables = () => {
    const queryText =
    `CREATE TABLE IF NOT EXISTS
        clothestable(
        id UUID PRIMARY KEY,
        type VARCHAR(128) NOT NULL,
        name VARCHAR(128) NOT NULL,
        size INTEGER NOT NULL,
        price VARCHAR(128) NOT NULL,
        created_at TIMESTAMP,
        modified_at TIMESTAMP
        )`;
    pool.query(queryText)
    .then((res) => {
        console.log(res);
        pool.end();
    })
    .catch((err) => {
        console.log(err);
        pool.end();
    });
}

const dropTables = () => {
    const queryText = 'DROP TABLE IF EXISTS clothestable';
    pool.query(queryText)
    .then((res) => {
        console.log(res);
        pool.end();
    })
    .catch((err) => {
        console.log(err);
        pool.end();
    });
}

module.exports = {
    createTables,
    dropTables,
    pool
}

require('make-runnable')
