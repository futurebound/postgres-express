exports.usersListGet = (req, res) => {
  console.log('usernames will be logged here - wip')
}

exports.usersCreateGet = (req, res) => {
  res.render('createUser', {
    title: 'Create New User',
  })
}

exports.usersCreatePost = (req, res) => {
  console.log('username to be saved: ', req.body.username)
}
