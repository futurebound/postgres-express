#! /usr/bin/env node
const dotenv = require('dotenv')
dotenv.config()

const { Client } = require('pg')

const SQL = `
CREATE TABLE IF NOT EXISTS usernames (
  id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  username VARCHAR ( 255 )
);

INSERT INTO usernames (username) 
VALUES
  ('Dalanar'),
  ('Kalladin'),
  ('Aedolyn');
`

async function main() {
  console.log('seeding...')
  const client = new Client({
    connectionString: process.env.DB_URI,
  })
  await client.connect()
  await client.query(SQL)
  await client.end()
  console.log('done')
}

main()
