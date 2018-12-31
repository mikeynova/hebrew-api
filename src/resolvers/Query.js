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

async function page(parent, args, context, info) {
  const pages = await context.prisma.lesson({ id: args.id }).pages()
  const page = pages.filter(page => page.pageNumber === args.pageNumber)
  return {
    page
  }
}

module.exports = {
  page,
  feed,
  users,
  user,
  group,
  groups,
  lessons,
  lesson,
}