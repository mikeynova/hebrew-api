// const config = require('./lib/config')
const config = require('../config.json')
const jwt = require('jsonwebtoken')

function getUserId(context) {
  const Authorization = context.request.get('Authorization')
  if (Authorization) {
    const token = Authorization.replace('Bearer ', '')
    const { userId } = jwt.verify(token, config.secret)
    return userId
  }

  throw new Error('Not authenticated')
}

module.exports = {
  getUserId
}