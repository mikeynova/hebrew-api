function feed(parent, args, context, info) {
  return context.prisma.links()
}

function users(parent, args, context, info) {
  return context.prisma.users()
}

function user(parent, args, context, info) {
  return context.prisma.user(args)
}

function group(parent, args, context, info) {
  return context.prisma.group()
}

function lessons(parent, args, context, info) {
  return context.prisma.lessons()
}

function lesson(parent, args, context, info) {
  return context.prisma.lesson(args).then(r => ({
    ...r,
    group: context.prisma.lesson(args).group(),
    pages: context.prisma.lesson(args).pages()
  }))
}

module.exports = {
  feed,
  users,
  user,
  group,
  lessons,
  lesson,
}