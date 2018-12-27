module.exports = {
        typeDefs: /* GraphQL */ `type AggregateGroup {
  count: Int!
}

type AggregateLesson {
  count: Int!
}

type AggregateLink {
  count: Int!
}

type AggregatePage {
  count: Int!
}

type AggregateUser {
  count: Int!
}

type BatchPayload {
  count: Long!
}

type Group {
  id: ID!
  name: String!
  lessons(where: LessonWhereInput, orderBy: LessonOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Lesson!]
}

type GroupConnection {
  pageInfo: PageInfo!
  edges: [GroupEdge]!
  aggregate: AggregateGroup!
}

input GroupCreateInput {
  name: String!
  lessons: LessonCreateManyWithoutGroupInput
}

input GroupCreateOneWithoutLessonsInput {
  create: GroupCreateWithoutLessonsInput
  connect: GroupWhereUniqueInput
}

input GroupCreateWithoutLessonsInput {
  name: String!
}

type GroupEdge {
  node: Group!
  cursor: String!
}

enum GroupOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type GroupPreviousValues {
  id: ID!
  name: String!
}

type GroupSubscriptionPayload {
  mutation: MutationType!
  node: Group
  updatedFields: [String!]
  previousValues: GroupPreviousValues
}

input GroupSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: GroupWhereInput
  AND: [GroupSubscriptionWhereInput!]
  OR: [GroupSubscriptionWhereInput!]
  NOT: [GroupSubscriptionWhereInput!]
}

input GroupUpdateInput {
  name: String
  lessons: LessonUpdateManyWithoutGroupInput
}

input GroupUpdateManyMutationInput {
  name: String
}

input GroupUpdateOneRequiredWithoutLessonsInput {
  create: GroupCreateWithoutLessonsInput
  update: GroupUpdateWithoutLessonsDataInput
  upsert: GroupUpsertWithoutLessonsInput
  connect: GroupWhereUniqueInput
}

input GroupUpdateWithoutLessonsDataInput {
  name: String
}

input GroupUpsertWithoutLessonsInput {
  update: GroupUpdateWithoutLessonsDataInput!
  create: GroupCreateWithoutLessonsInput!
}

input GroupWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  lessons_every: LessonWhereInput
  lessons_some: LessonWhereInput
  lessons_none: LessonWhereInput
  AND: [GroupWhereInput!]
  OR: [GroupWhereInput!]
  NOT: [GroupWhereInput!]
}

input GroupWhereUniqueInput {
  id: ID
  name: String
}

type Lesson {
  id: ID!
  name: String!
  group: Group!
  pages(where: PageWhereInput, orderBy: PageOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Page!]
}

type LessonConnection {
  pageInfo: PageInfo!
  edges: [LessonEdge]!
  aggregate: AggregateLesson!
}

input LessonCreateInput {
  name: String!
  group: GroupCreateOneWithoutLessonsInput!
  pages: PageCreateManyWithoutLessonInput
}

input LessonCreateManyWithoutGroupInput {
  create: [LessonCreateWithoutGroupInput!]
  connect: [LessonWhereUniqueInput!]
}

input LessonCreateOneWithoutPagesInput {
  create: LessonCreateWithoutPagesInput
  connect: LessonWhereUniqueInput
}

input LessonCreateWithoutGroupInput {
  name: String!
  pages: PageCreateManyWithoutLessonInput
}

input LessonCreateWithoutPagesInput {
  name: String!
  group: GroupCreateOneWithoutLessonsInput!
}

type LessonEdge {
  node: Lesson!
  cursor: String!
}

enum LessonOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type LessonPreviousValues {
  id: ID!
  name: String!
}

input LessonScalarWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  AND: [LessonScalarWhereInput!]
  OR: [LessonScalarWhereInput!]
  NOT: [LessonScalarWhereInput!]
}

type LessonSubscriptionPayload {
  mutation: MutationType!
  node: Lesson
  updatedFields: [String!]
  previousValues: LessonPreviousValues
}

input LessonSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: LessonWhereInput
  AND: [LessonSubscriptionWhereInput!]
  OR: [LessonSubscriptionWhereInput!]
  NOT: [LessonSubscriptionWhereInput!]
}

input LessonUpdateInput {
  name: String
  group: GroupUpdateOneRequiredWithoutLessonsInput
  pages: PageUpdateManyWithoutLessonInput
}

input LessonUpdateManyDataInput {
  name: String
}

input LessonUpdateManyMutationInput {
  name: String
}

input LessonUpdateManyWithoutGroupInput {
  create: [LessonCreateWithoutGroupInput!]
  delete: [LessonWhereUniqueInput!]
  connect: [LessonWhereUniqueInput!]
  disconnect: [LessonWhereUniqueInput!]
  update: [LessonUpdateWithWhereUniqueWithoutGroupInput!]
  upsert: [LessonUpsertWithWhereUniqueWithoutGroupInput!]
  deleteMany: [LessonScalarWhereInput!]
  updateMany: [LessonUpdateManyWithWhereNestedInput!]
}

input LessonUpdateManyWithWhereNestedInput {
  where: LessonScalarWhereInput!
  data: LessonUpdateManyDataInput!
}

input LessonUpdateOneRequiredWithoutPagesInput {
  create: LessonCreateWithoutPagesInput
  update: LessonUpdateWithoutPagesDataInput
  upsert: LessonUpsertWithoutPagesInput
  connect: LessonWhereUniqueInput
}

input LessonUpdateWithoutGroupDataInput {
  name: String
  pages: PageUpdateManyWithoutLessonInput
}

input LessonUpdateWithoutPagesDataInput {
  name: String
  group: GroupUpdateOneRequiredWithoutLessonsInput
}

input LessonUpdateWithWhereUniqueWithoutGroupInput {
  where: LessonWhereUniqueInput!
  data: LessonUpdateWithoutGroupDataInput!
}

input LessonUpsertWithoutPagesInput {
  update: LessonUpdateWithoutPagesDataInput!
  create: LessonCreateWithoutPagesInput!
}

input LessonUpsertWithWhereUniqueWithoutGroupInput {
  where: LessonWhereUniqueInput!
  update: LessonUpdateWithoutGroupDataInput!
  create: LessonCreateWithoutGroupInput!
}

input LessonWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  group: GroupWhereInput
  pages_every: PageWhereInput
  pages_some: PageWhereInput
  pages_none: PageWhereInput
  AND: [LessonWhereInput!]
  OR: [LessonWhereInput!]
  NOT: [LessonWhereInput!]
}

input LessonWhereUniqueInput {
  id: ID
}

type Link {
  id: ID!
  description: String!
  url: String!
  postedBy: User
}

type LinkConnection {
  pageInfo: PageInfo!
  edges: [LinkEdge]!
  aggregate: AggregateLink!
}

input LinkCreateInput {
  description: String!
  url: String!
  postedBy: UserCreateOneWithoutLinksInput
}

input LinkCreateManyWithoutPostedByInput {
  create: [LinkCreateWithoutPostedByInput!]
  connect: [LinkWhereUniqueInput!]
}

input LinkCreateWithoutPostedByInput {
  description: String!
  url: String!
}

type LinkEdge {
  node: Link!
  cursor: String!
}

enum LinkOrderByInput {
  id_ASC
  id_DESC
  description_ASC
  description_DESC
  url_ASC
  url_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type LinkPreviousValues {
  id: ID!
  description: String!
  url: String!
}

input LinkScalarWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  description: String
  description_not: String
  description_in: [String!]
  description_not_in: [String!]
  description_lt: String
  description_lte: String
  description_gt: String
  description_gte: String
  description_contains: String
  description_not_contains: String
  description_starts_with: String
  description_not_starts_with: String
  description_ends_with: String
  description_not_ends_with: String
  url: String
  url_not: String
  url_in: [String!]
  url_not_in: [String!]
  url_lt: String
  url_lte: String
  url_gt: String
  url_gte: String
  url_contains: String
  url_not_contains: String
  url_starts_with: String
  url_not_starts_with: String
  url_ends_with: String
  url_not_ends_with: String
  AND: [LinkScalarWhereInput!]
  OR: [LinkScalarWhereInput!]
  NOT: [LinkScalarWhereInput!]
}

type LinkSubscriptionPayload {
  mutation: MutationType!
  node: Link
  updatedFields: [String!]
  previousValues: LinkPreviousValues
}

input LinkSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: LinkWhereInput
  AND: [LinkSubscriptionWhereInput!]
  OR: [LinkSubscriptionWhereInput!]
  NOT: [LinkSubscriptionWhereInput!]
}

input LinkUpdateInput {
  description: String
  url: String
  postedBy: UserUpdateOneWithoutLinksInput
}

input LinkUpdateManyDataInput {
  description: String
  url: String
}

input LinkUpdateManyMutationInput {
  description: String
  url: String
}

input LinkUpdateManyWithoutPostedByInput {
  create: [LinkCreateWithoutPostedByInput!]
  delete: [LinkWhereUniqueInput!]
  connect: [LinkWhereUniqueInput!]
  disconnect: [LinkWhereUniqueInput!]
  update: [LinkUpdateWithWhereUniqueWithoutPostedByInput!]
  upsert: [LinkUpsertWithWhereUniqueWithoutPostedByInput!]
  deleteMany: [LinkScalarWhereInput!]
  updateMany: [LinkUpdateManyWithWhereNestedInput!]
}

input LinkUpdateManyWithWhereNestedInput {
  where: LinkScalarWhereInput!
  data: LinkUpdateManyDataInput!
}

input LinkUpdateWithoutPostedByDataInput {
  description: String
  url: String
}

input LinkUpdateWithWhereUniqueWithoutPostedByInput {
  where: LinkWhereUniqueInput!
  data: LinkUpdateWithoutPostedByDataInput!
}

input LinkUpsertWithWhereUniqueWithoutPostedByInput {
  where: LinkWhereUniqueInput!
  update: LinkUpdateWithoutPostedByDataInput!
  create: LinkCreateWithoutPostedByInput!
}

input LinkWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  description: String
  description_not: String
  description_in: [String!]
  description_not_in: [String!]
  description_lt: String
  description_lte: String
  description_gt: String
  description_gte: String
  description_contains: String
  description_not_contains: String
  description_starts_with: String
  description_not_starts_with: String
  description_ends_with: String
  description_not_ends_with: String
  url: String
  url_not: String
  url_in: [String!]
  url_not_in: [String!]
  url_lt: String
  url_lte: String
  url_gt: String
  url_gte: String
  url_contains: String
  url_not_contains: String
  url_starts_with: String
  url_not_starts_with: String
  url_ends_with: String
  url_not_ends_with: String
  postedBy: UserWhereInput
  AND: [LinkWhereInput!]
  OR: [LinkWhereInput!]
  NOT: [LinkWhereInput!]
}

input LinkWhereUniqueInput {
  id: ID
}

scalar Long

type Mutation {
  createGroup(data: GroupCreateInput!): Group!
  updateGroup(data: GroupUpdateInput!, where: GroupWhereUniqueInput!): Group
  updateManyGroups(data: GroupUpdateManyMutationInput!, where: GroupWhereInput): BatchPayload!
  upsertGroup(where: GroupWhereUniqueInput!, create: GroupCreateInput!, update: GroupUpdateInput!): Group!
  deleteGroup(where: GroupWhereUniqueInput!): Group
  deleteManyGroups(where: GroupWhereInput): BatchPayload!
  createLesson(data: LessonCreateInput!): Lesson!
  updateLesson(data: LessonUpdateInput!, where: LessonWhereUniqueInput!): Lesson
  updateManyLessons(data: LessonUpdateManyMutationInput!, where: LessonWhereInput): BatchPayload!
  upsertLesson(where: LessonWhereUniqueInput!, create: LessonCreateInput!, update: LessonUpdateInput!): Lesson!
  deleteLesson(where: LessonWhereUniqueInput!): Lesson
  deleteManyLessons(where: LessonWhereInput): BatchPayload!
  createLink(data: LinkCreateInput!): Link!
  updateLink(data: LinkUpdateInput!, where: LinkWhereUniqueInput!): Link
  updateManyLinks(data: LinkUpdateManyMutationInput!, where: LinkWhereInput): BatchPayload!
  upsertLink(where: LinkWhereUniqueInput!, create: LinkCreateInput!, update: LinkUpdateInput!): Link!
  deleteLink(where: LinkWhereUniqueInput!): Link
  deleteManyLinks(where: LinkWhereInput): BatchPayload!
  createPage(data: PageCreateInput!): Page!
  updatePage(data: PageUpdateInput!, where: PageWhereUniqueInput!): Page
  updateManyPages(data: PageUpdateManyMutationInput!, where: PageWhereInput): BatchPayload!
  upsertPage(where: PageWhereUniqueInput!, create: PageCreateInput!, update: PageUpdateInput!): Page!
  deletePage(where: PageWhereUniqueInput!): Page
  deleteManyPages(where: PageWhereInput): BatchPayload!
  createUser(data: UserCreateInput!): User!
  updateUser(data: UserUpdateInput!, where: UserWhereUniqueInput!): User
  updateManyUsers(data: UserUpdateManyMutationInput!, where: UserWhereInput): BatchPayload!
  upsertUser(where: UserWhereUniqueInput!, create: UserCreateInput!, update: UserUpdateInput!): User!
  deleteUser(where: UserWhereUniqueInput!): User
  deleteManyUsers(where: UserWhereInput): BatchPayload!
}

enum MutationType {
  CREATED
  UPDATED
  DELETED
}

interface Node {
  id: ID!
}

type Page {
  id: ID!
  pageNumber: Int!
  data: String!
  lesson: Lesson!
}

type PageConnection {
  pageInfo: PageInfo!
  edges: [PageEdge]!
  aggregate: AggregatePage!
}

input PageCreateInput {
  pageNumber: Int!
  data: String!
  lesson: LessonCreateOneWithoutPagesInput!
}

input PageCreateManyWithoutLessonInput {
  create: [PageCreateWithoutLessonInput!]
  connect: [PageWhereUniqueInput!]
}

input PageCreateWithoutLessonInput {
  pageNumber: Int!
  data: String!
}

type PageEdge {
  node: Page!
  cursor: String!
}

type PageInfo {
  hasNextPage: Boolean!
  hasPreviousPage: Boolean!
  startCursor: String
  endCursor: String
}

enum PageOrderByInput {
  id_ASC
  id_DESC
  pageNumber_ASC
  pageNumber_DESC
  data_ASC
  data_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type PagePreviousValues {
  id: ID!
  pageNumber: Int!
  data: String!
}

input PageScalarWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  pageNumber: Int
  pageNumber_not: Int
  pageNumber_in: [Int!]
  pageNumber_not_in: [Int!]
  pageNumber_lt: Int
  pageNumber_lte: Int
  pageNumber_gt: Int
  pageNumber_gte: Int
  data: String
  data_not: String
  data_in: [String!]
  data_not_in: [String!]
  data_lt: String
  data_lte: String
  data_gt: String
  data_gte: String
  data_contains: String
  data_not_contains: String
  data_starts_with: String
  data_not_starts_with: String
  data_ends_with: String
  data_not_ends_with: String
  AND: [PageScalarWhereInput!]
  OR: [PageScalarWhereInput!]
  NOT: [PageScalarWhereInput!]
}

type PageSubscriptionPayload {
  mutation: MutationType!
  node: Page
  updatedFields: [String!]
  previousValues: PagePreviousValues
}

input PageSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: PageWhereInput
  AND: [PageSubscriptionWhereInput!]
  OR: [PageSubscriptionWhereInput!]
  NOT: [PageSubscriptionWhereInput!]
}

input PageUpdateInput {
  pageNumber: Int
  data: String
  lesson: LessonUpdateOneRequiredWithoutPagesInput
}

input PageUpdateManyDataInput {
  pageNumber: Int
  data: String
}

input PageUpdateManyMutationInput {
  pageNumber: Int
  data: String
}

input PageUpdateManyWithoutLessonInput {
  create: [PageCreateWithoutLessonInput!]
  delete: [PageWhereUniqueInput!]
  connect: [PageWhereUniqueInput!]
  disconnect: [PageWhereUniqueInput!]
  update: [PageUpdateWithWhereUniqueWithoutLessonInput!]
  upsert: [PageUpsertWithWhereUniqueWithoutLessonInput!]
  deleteMany: [PageScalarWhereInput!]
  updateMany: [PageUpdateManyWithWhereNestedInput!]
}

input PageUpdateManyWithWhereNestedInput {
  where: PageScalarWhereInput!
  data: PageUpdateManyDataInput!
}

input PageUpdateWithoutLessonDataInput {
  pageNumber: Int
  data: String
}

input PageUpdateWithWhereUniqueWithoutLessonInput {
  where: PageWhereUniqueInput!
  data: PageUpdateWithoutLessonDataInput!
}

input PageUpsertWithWhereUniqueWithoutLessonInput {
  where: PageWhereUniqueInput!
  update: PageUpdateWithoutLessonDataInput!
  create: PageCreateWithoutLessonInput!
}

input PageWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  pageNumber: Int
  pageNumber_not: Int
  pageNumber_in: [Int!]
  pageNumber_not_in: [Int!]
  pageNumber_lt: Int
  pageNumber_lte: Int
  pageNumber_gt: Int
  pageNumber_gte: Int
  data: String
  data_not: String
  data_in: [String!]
  data_not_in: [String!]
  data_lt: String
  data_lte: String
  data_gt: String
  data_gte: String
  data_contains: String
  data_not_contains: String
  data_starts_with: String
  data_not_starts_with: String
  data_ends_with: String
  data_not_ends_with: String
  lesson: LessonWhereInput
  AND: [PageWhereInput!]
  OR: [PageWhereInput!]
  NOT: [PageWhereInput!]
}

input PageWhereUniqueInput {
  id: ID
}

type Query {
  group(where: GroupWhereUniqueInput!): Group
  groups(where: GroupWhereInput, orderBy: GroupOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Group]!
  groupsConnection(where: GroupWhereInput, orderBy: GroupOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): GroupConnection!
  lesson(where: LessonWhereUniqueInput!): Lesson
  lessons(where: LessonWhereInput, orderBy: LessonOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Lesson]!
  lessonsConnection(where: LessonWhereInput, orderBy: LessonOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): LessonConnection!
  link(where: LinkWhereUniqueInput!): Link
  links(where: LinkWhereInput, orderBy: LinkOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Link]!
  linksConnection(where: LinkWhereInput, orderBy: LinkOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): LinkConnection!
  page(where: PageWhereUniqueInput!): Page
  pages(where: PageWhereInput, orderBy: PageOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Page]!
  pagesConnection(where: PageWhereInput, orderBy: PageOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): PageConnection!
  user(where: UserWhereUniqueInput!): User
  users(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User]!
  usersConnection(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): UserConnection!
  node(id: ID!): Node
}

type Subscription {
  group(where: GroupSubscriptionWhereInput): GroupSubscriptionPayload
  lesson(where: LessonSubscriptionWhereInput): LessonSubscriptionPayload
  link(where: LinkSubscriptionWhereInput): LinkSubscriptionPayload
  page(where: PageSubscriptionWhereInput): PageSubscriptionPayload
  user(where: UserSubscriptionWhereInput): UserSubscriptionPayload
}

type User {
  id: ID!
  name: String!
  email: String
  password: String
  links(where: LinkWhereInput, orderBy: LinkOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Link!]
  facebookId: String
}

type UserConnection {
  pageInfo: PageInfo!
  edges: [UserEdge]!
  aggregate: AggregateUser!
}

input UserCreateInput {
  name: String!
  email: String
  password: String
  links: LinkCreateManyWithoutPostedByInput
  facebookId: String
}

input UserCreateOneWithoutLinksInput {
  create: UserCreateWithoutLinksInput
  connect: UserWhereUniqueInput
}

input UserCreateWithoutLinksInput {
  name: String!
  email: String
  password: String
  facebookId: String
}

type UserEdge {
  node: User!
  cursor: String!
}

enum UserOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  email_ASC
  email_DESC
  password_ASC
  password_DESC
  facebookId_ASC
  facebookId_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type UserPreviousValues {
  id: ID!
  name: String!
  email: String
  password: String
  facebookId: String
}

type UserSubscriptionPayload {
  mutation: MutationType!
  node: User
  updatedFields: [String!]
  previousValues: UserPreviousValues
}

input UserSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: UserWhereInput
  AND: [UserSubscriptionWhereInput!]
  OR: [UserSubscriptionWhereInput!]
  NOT: [UserSubscriptionWhereInput!]
}

input UserUpdateInput {
  name: String
  email: String
  password: String
  links: LinkUpdateManyWithoutPostedByInput
  facebookId: String
}

input UserUpdateManyMutationInput {
  name: String
  email: String
  password: String
  facebookId: String
}

input UserUpdateOneWithoutLinksInput {
  create: UserCreateWithoutLinksInput
  update: UserUpdateWithoutLinksDataInput
  upsert: UserUpsertWithoutLinksInput
  delete: Boolean
  disconnect: Boolean
  connect: UserWhereUniqueInput
}

input UserUpdateWithoutLinksDataInput {
  name: String
  email: String
  password: String
  facebookId: String
}

input UserUpsertWithoutLinksInput {
  update: UserUpdateWithoutLinksDataInput!
  create: UserCreateWithoutLinksInput!
}

input UserWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  email: String
  email_not: String
  email_in: [String!]
  email_not_in: [String!]
  email_lt: String
  email_lte: String
  email_gt: String
  email_gte: String
  email_contains: String
  email_not_contains: String
  email_starts_with: String
  email_not_starts_with: String
  email_ends_with: String
  email_not_ends_with: String
  password: String
  password_not: String
  password_in: [String!]
  password_not_in: [String!]
  password_lt: String
  password_lte: String
  password_gt: String
  password_gte: String
  password_contains: String
  password_not_contains: String
  password_starts_with: String
  password_not_starts_with: String
  password_ends_with: String
  password_not_ends_with: String
  links_every: LinkWhereInput
  links_some: LinkWhereInput
  links_none: LinkWhereInput
  facebookId: String
  facebookId_not: String
  facebookId_in: [String!]
  facebookId_not_in: [String!]
  facebookId_lt: String
  facebookId_lte: String
  facebookId_gt: String
  facebookId_gte: String
  facebookId_contains: String
  facebookId_not_contains: String
  facebookId_starts_with: String
  facebookId_not_starts_with: String
  facebookId_ends_with: String
  facebookId_not_ends_with: String
  AND: [UserWhereInput!]
  OR: [UserWhereInput!]
  NOT: [UserWhereInput!]
}

input UserWhereUniqueInput {
  id: ID
  email: String
  facebookId: String
}
`
      }
    