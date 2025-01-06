const db = require('../db/queries')

// async function usersListGet(req, res) {
//   // console.log('usernames will be logged here - wip')
//   const usernames = await db.getAllUsernames()
//   console.log('Usernames: ', usernames)
//   res.send('Usernames: ' + usernames.map((user) => user.username).join(', '))
// }

async function usersListGet(req, res) {
  const { search } = req.query // grab `search` query param if used
  let usernames

  if (search) {
    usernames = await db.searchUsernames(search)
  } else {
    usernames = await db.getAllUsernames()
  }

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

async function usersDeleteGet(req, res) {
  console.log('deleting all usernames...')
  await db.deleteAllUsernames()
  console.log('deleted.')
  res.redirect('/')
}

module.exports = {
  usersListGet,
  usersCreateGet,
  usersCreatePost,
  usersDeleteGet,
}
