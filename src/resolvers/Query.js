function feed(parent, args, context, info) {
  return context.prisma.links()
}

function users(parent, args, context, info) {
  return context.prisma.users()
}

function user(parent, args, context, info) {
  return context.prisma.user(args)
}

async function group(parent, args, context, info) {
  const group = await context.prisma.group(args)
  const lessons = await context.prisma.group(args).lessons()
  return {
    ...group,
    lessons
  }
}

async function groups(parent, args, context, info) {
  const groups = await context.prisma.groups()
  return groups.map(async group => {
    return {
      ...group,
      lessons: await context.prisma.group(group).lessons()
    }
  })
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
  groups,
  lessons,
  lesson,
}