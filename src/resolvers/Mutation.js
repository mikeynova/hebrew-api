const { secret } = require('../lib/config')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const { getUserId } = require('../utils')

async function signup(parent, args, context, info) {
  const password = await bcrypt.hash(args.password, 10)
  const user = await context.prisma.createUser({ ...args, password })
  const token = jwt.sign({ userId: user.id }, secret)
  return {
    token: token,
    user: user,
  }
}

async function fbAuth(parent, args, context, info) {
  let user = await context.prisma.user({ facebookId: args.facebookId })
  if (!user) {
    user = await context.prisma.createUser({ ...args, facebookId: args.facebookId })
  }
  const token = jwt.sign({ userId: user.id }, secret)
  return {
    token,
    user
  }
}

async function login(parent, args, context, info) {
  // 1
  const user = await context.prisma.user({ email: args.email })
  if (!user) {
    throw new Error('No such user found')
  }

  // 2
  const valid = await bcrypt.compare(args.password, user.password)
  if (!valid) {
    throw new Error('Invalid password')
  }

  const token = jwt.sign({ userId: user.id }, secret)

  // 3
  return {
    token,
    user,
  }
}

function post(parent, args, context, info) {
  const userId = getUserId(context)
  return context.prisma.createLink({
    url: args.url,
    description: args.description,
    postedBy: { connect: { id: userId } },
  })
}

function postGroup(parent, args, context, info) {
  return context.prisma.createGroup({
    name: args.name
  })
}

function postLesson(parent, args, context, info) {
  return context.prisma.createLesson({
    name: args.name,
    group: { connect: { id: args.groupId } }
  })
}

function postPage(parent, args, context, info) {
  return context.prisma.createPage({
    pageNumber: args.pageNumber,
    data: args.data,
    lesson: { connect: { id: args.lessonId } }
  })
}

function deleteUser(parent, args, context, info) {
  return context.prisma.deleteUser({
    id: args.id
  })
}

module.exports = {
  signup,
  login,
  post,
  postGroup,
  postLesson,
  postPage,
  deleteUser,
  fbAuth
}