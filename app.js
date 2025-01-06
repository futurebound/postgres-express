const dotenv = require('dotenv')
dotenv.config()

const express = require('express')
const app = express()

const usersRouter = require('./routes/usersRouter')

app.set('view engine', 'ejs')
app.use(express.urlencoded({ extended: true }))
app.use('/', usersRouter)

app.use((err, req, res, next) => {
  console.error(err)
  res.status(err.statusCode || 500).send(err.message)
})

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}!`)
})
