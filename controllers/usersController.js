const db = require('../db/queries')

async function usersListGet(req, res) {
  // console.log('usernames will be logged here - wip')
  const usernames = await db.getAllUsernames()
  console.log('Usernames: ', usernames)
  res.send('Usernames: ' + usernames.map((user) => user.username).join(', '))
}

async function usersCreateGet(req, res) {
  res.render('createUser', {
    title: 'Create New User',
  })
}

async function usersCreatePost(req, res) {
  console.log('username to be saved: ', req.body.username)
  const { username } = req.body
  await db.insertUsername(username)
  res.redirect('/')
}

module.exports = {
  usersListGet,
  usersCreateGet,
  usersCreatePost,
}
