const { Router } = require('express')
const usersController = require('../controllers/usersController')
const usersRouter = Router()

usersRouter.get('/', usersController.usersListGet)

usersRouter.get('/create', usersController.usersCreateGet)
usersRouter.post('/create', usersController.usersCreatePost)

usersRouter.get('/delete', usersController.usersDeleteGet)

module.exports = usersRouter
