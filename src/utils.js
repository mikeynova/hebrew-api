const jwt = require('jsonwebtoken')
const { secret } = require('./lib/config')

function getUserId(token) {
  const { userId }  = jwt.verify(token, secret)
  return userId

  throw new Error('Not authenticated')
}

module.exports = {
  getUserId
}
