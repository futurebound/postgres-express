const { Pool } = require('pg')

// module.exports = new Pool({
//   host: process.env.HOST_NAME, // wherever the db is hosted
//   user: process.env.ROLE_NAME,
//   database: process.env.DB_NAME,
//   password: process.env.DB_PASSWORD,
//   port: process.env.DB_PORT,
// })

// alternative Connection URI for hosted databases
//  can still be used for local just fine
module.exports = new Pool({
  connectionString: process.env.DB_URI,
})
