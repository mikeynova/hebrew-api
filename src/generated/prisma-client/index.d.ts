// Code generated by Prisma (prisma@1.23.0-test.2). DO NOT EDIT.
// Please don't change this file manually but run `prisma generate` to update it.
// For more information, please read the docs: https://www.prisma.io/docs/prisma-client/

import { DocumentNode } from "graphql";
import {
  makePrismaClientClass,
  BaseClientOptions,
  Model
} from "prisma-client-lib";
import { typeDefs } from "./prisma-schema";

export type AtLeastOne<T, U = { [K in keyof T]: Pick<T, K> }> = Partial<T> &
  U[keyof U];

export interface Exists {
  group: (where?: GroupWhereInput) => Promise<boolean>;
  lesson: (where?: LessonWhereInput) => Promise<boolean>;
  page: (where?: PageWhereInput) => Promise<boolean>;
  user: (where?: UserWhereInput) => Promise<boolean>;
}

export interface Node {}

export type FragmentableArray<T> = Promise<Array<T>> & Fragmentable;

export interface Fragmentable {
  $fragment<T>(fragment: string | DocumentNode): Promise<T>;
}

export interface Prisma {
  $exists: Exists;
  $graphql: <T = any>(
    query: string,
    variables?: { [key: string]: any }
  ) => Promise<T>;

  /**
   * Queries
   */

  group: (where: GroupWhereUniqueInput) => GroupPromise;
  groups: (
    args?: {
      where?: GroupWhereInput;
      orderBy?: GroupOrderByInput;
      skip?: Int;
      after?: String;
      before?: String;
      first?: Int;
      last?: Int;
    }
  ) => FragmentableArray<Group>;
  groupsConnection: (
    args?: {
      where?: GroupWhereInput;
      orderBy?: GroupOrderByInput;
      skip?: Int;
      after?: String;
      before?: String;
      first?: Int;
      last?: Int;
    }
  ) => GroupConnectionPromise;
  lesson: (where: LessonWhereUniqueInput) => LessonPromise;
  lessons: (
    args?: {
      where?: LessonWhereInput;
      orderBy?: LessonOrderByInput;
      skip?: Int;
      after?: String;
      before?: String;
      first?: Int;
      last?: Int;
    }
  ) => FragmentableArray<Lesson>;
  lessonsConnection: (
    args?: {
      where?: LessonWhereInput;
      orderBy?: LessonOrderByInput;
      skip?: Int;
      after?: String;
      before?: String;
      first?: Int;
      last?: Int;
    }
  ) => LessonConnectionPromise;
  page: (where: PageWhereUniqueInput) => PagePromise;
  pages: (
    args?: {
      where?: PageWhereInput;
      orderBy?: PageOrderByInput;
      skip?: Int;
      after?: String;
      before?: String;
      first?: Int;
      last?: Int;
    }
  ) => FragmentableArray<Page>;
  pagesConnection: (
    args?: {
      where?: PageWhereInput;
      orderBy?: PageOrderByInput;
      skip?: Int;
      after?: String;
      before?: String;
      first?: Int;
      last?: Int;
    }
  ) => PageConnectionPromise;
  user: (where: UserWhereUniqueInput) => UserPromise;
  users: (
    args?: {
      where?: UserWhereInput;
      orderBy?: UserOrderByInput;
      skip?: Int;
      after?: String;
      before?: String;
      first?: Int;
      last?: Int;
    }
  ) => FragmentableArray<User>;
  usersConnection: (
    args?: {
      where?: UserWhereInput;
      orderBy?: UserOrderByInput;
      skip?: Int;
      after?: String;
      before?: String;
      first?: Int;
      last?: Int;
    }
  ) => UserConnectionPromise;
  node: (args: { id: ID_Output }) => Node;

  /**
   * Mutations
   */

  createGroup: (data: GroupCreateInput) => GroupPromise;
  updateGroup: (
    args: { data: GroupUpdateInput; where: GroupWhereUniqueInput }
  ) => GroupPromise;
  updateManyGroups: (
    args: { data: GroupUpdateManyMutationInput; where?: GroupWhereInput }
  ) => BatchPayloadPromise;
  upsertGroup: (
    args: {
      where: GroupWhereUniqueInput;
      create: GroupCreateInput;
      update: GroupUpdateInput;
    }
  ) => GroupPromise;
  deleteGroup: (where: GroupWhereUniqueInput) => GroupPromise;
  deleteManyGroups: (where?: GroupWhereInput) => BatchPayloadPromise;
  createLesson: (data: LessonCreateInput) => LessonPromise;
  updateLesson: (
    args: { data: LessonUpdateInput; where: LessonWhereUniqueInput }
  ) => LessonPromise;
  updateManyLessons: (
    args: { data: LessonUpdateManyMutationInput; where?: LessonWhereInput }
  ) => BatchPayloadPromise;
  upsertLesson: (
    args: {
      where: LessonWhereUniqueInput;
      create: LessonCreateInput;
      update: LessonUpdateInput;
    }
  ) => LessonPromise;
  deleteLesson: (where: LessonWhereUniqueInput) => LessonPromise;
  deleteManyLessons: (where?: LessonWhereInput) => BatchPayloadPromise;
  createPage: (data: PageCreateInput) => PagePromise;
  updatePage: (
    args: { data: PageUpdateInput; where: PageWhereUniqueInput }
  ) => PagePromise;
  updateManyPages: (
    args: { data: PageUpdateManyMutationInput; where?: PageWhereInput }
  ) => BatchPayloadPromise;
  upsertPage: (
    args: {
      where: PageWhereUniqueInput;
      create: PageCreateInput;
      update: PageUpdateInput;
    }
  ) => PagePromise;
  deletePage: (where: PageWhereUniqueInput) => PagePromise;
  deleteManyPages: (where?: PageWhereInput) => BatchPayloadPromise;
  createUser: (data: UserCreateInput) => UserPromise;
  updateUser: (
    args: { data: UserUpdateInput; where: UserWhereUniqueInput }
  ) => UserPromise;
  updateManyUsers: (
    args: { data: UserUpdateManyMutationInput; where?: UserWhereInput }
  ) => BatchPayloadPromise;
  upsertUser: (
    args: {
      where: UserWhereUniqueInput;
      create: UserCreateInput;
      update: UserUpdateInput;
    }
  ) => UserPromise;
  deleteUser: (where: UserWhereUniqueInput) => UserPromise;
  deleteManyUsers: (where?: UserWhereInput) => BatchPayloadPromise;

  /**
   * Subscriptions
   */

  $subscribe: Subscription;
}

export interface Subscription {
  group: (
    where?: GroupSubscriptionWhereInput
  ) => GroupSubscriptionPayloadSubscription;
  lesson: (
    where?: LessonSubscriptionWhereInput
  ) => LessonSubscriptionPayloadSubscription;
  page: (
    where?: PageSubscriptionWhereInput
  ) => PageSubscriptionPayloadSubscription;
  user: (
    where?: UserSubscriptionWhereInput
  ) => UserSubscriptionPayloadSubscription;
}

export interface ClientConstructor<T> {
  new (options?: BaseClientOptions): T;
}

/**
 * Types
 */

export type LessonOrderByInput =
  | "id_ASC"
  | "id_DESC"
  | "name_ASC"
  | "name_DESC"
  | "createdAt_ASC"
  | "createdAt_DESC"
  | "updatedAt_ASC"
  | "updatedAt_DESC";

export type PageOrderByInput =
  | "id_ASC"
  | "id_DESC"
  | "pageNumber_ASC"
  | "pageNumber_DESC"
  | "data_ASC"
  | "data_DESC"
  | "createdAt_ASC"
  | "createdAt_DESC"
  | "updatedAt_ASC"
  | "updatedAt_DESC";

export type GroupOrderByInput =
  | "id_ASC"
  | "id_DESC"
  | "name_ASC"
  | "name_DESC"
  | "createdAt_ASC"
  | "createdAt_DESC"
  | "updatedAt_ASC"
  | "updatedAt_DESC";

export type UserOrderByInput =
  | "id_ASC"
  | "id_DESC"
  | "name_ASC"
  | "name_DESC"
  | "email_ASC"
  | "email_DESC"
  | "password_ASC"
  | "password_DESC"
  | "facebookId_ASC"
  | "facebookId_DESC"
  | "completedLessons_ASC"
  | "completedLessons_DESC"
  | "createdAt_ASC"
  | "createdAt_DESC"
  | "updatedAt_ASC"
  | "updatedAt_DESC";

export type MutationType = "CREATED" | "UPDATED" | "DELETED";

export interface PageUpdateWithWhereUniqueWithoutLessonInput {
  where: PageWhereUniqueInput;
  data: PageUpdateWithoutLessonDataInput;
}

export type GroupWhereUniqueInput = AtLeastOne<{
  id: ID_Input;
  name?: String;
}>;

export interface GroupCreateOneWithoutLessonsInput {
  create?: GroupCreateWithoutLessonsInput;
  connect?: GroupWhereUniqueInput;
}

export interface PageUpdateManyWithWhereNestedInput {
  where: PageScalarWhereInput;
  data: PageUpdateManyDataInput;
}

export interface GroupCreateInput {
  name: String;
  lessons?: LessonCreateManyWithoutGroupInput;
}

export interface GroupWhereInput {
  id?: ID_Input;
  id_not?: ID_Input;
  id_in?: ID_Input[] | ID_Input;
  id_not_in?: ID_Input[] | ID_Input;
  id_lt?: ID_Input;
  id_lte?: ID_Input;
  id_gt?: ID_Input;
  id_gte?: ID_Input;
  id_contains?: ID_Input;
  id_not_contains?: ID_Input;
  id_starts_with?: ID_Input;
  id_not_starts_with?: ID_Input;
  id_ends_with?: ID_Input;
  id_not_ends_with?: ID_Input;
  name?: String;
  name_not?: String;
  name_in?: String[] | String;
  name_not_in?: String[] | String;
  name_lt?: String;
  name_lte?: String;
  name_gt?: String;
  name_gte?: String;
  name_contains?: String;
  name_not_contains?: String;
  name_starts_with?: String;
  name_not_starts_with?: String;
  name_ends_with?: String;
  name_not_ends_with?: String;
  lessons_every?: LessonWhereInput;
  lessons_some?: LessonWhereInput;
  lessons_none?: LessonWhereInput;
  AND?: GroupWhereInput[] | GroupWhereInput;
  OR?: GroupWhereInput[] | GroupWhereInput;
  NOT?: GroupWhereInput[] | GroupWhereInput;
}

export interface LessonCreateManyWithoutGroupInput {
  create?: LessonCreateWithoutGroupInput[] | LessonCreateWithoutGroupInput;
  connect?: LessonWhereUniqueInput[] | LessonWhereUniqueInput;
}

export interface LessonWhereInput {
  id?: ID_Input;
  id_not?: ID_Input;
  id_in?: ID_Input[] | ID_Input;
  id_not_in?: ID_Input[] | ID_Input;
  id_lt?: ID_Input;
  id_lte?: ID_Input;
  id_gt?: ID_Input;
  id_gte?: ID_Input;
  id_contains?: ID_Input;
  id_not_contains?: ID_Input;
  id_starts_with?: ID_Input;
  id_not_starts_with?: ID_Input;
  id_ends_with?: ID_Input;
  id_not_ends_with?: ID_Input;
  name?: String;
  name_not?: String;
  name_in?: String[] | String;
  name_not_in?: String[] | String;
  name_lt?: String;
  name_lte?: String;
  name_gt?: String;
  name_gte?: String;
  name_contains?: String;
  name_not_contains?: String;
  name_starts_with?: String;
  name_not_starts_with?: String;
  name_ends_with?: String;
  name_not_ends_with?: String;
  group?: GroupWhereInput;
  pages_every?: PageWhereInput;
  pages_some?: PageWhereInput;
  pages_none?: PageWhereInput;
  AND?: LessonWhereInput[] | LessonWhereInput;
  OR?: LessonWhereInput[] | LessonWhereInput;
  NOT?: LessonWhereInput[] | LessonWhereInput;
}

export interface LessonCreateWithoutGroupInput {
  name: String;
  pages?: PageCreateManyWithoutLessonInput;
}

export interface GroupSubscriptionWhereInput {
  mutation_in?: MutationType[] | MutationType;
  updatedFields_contains?: String;
  updatedFields_contains_every?: String[] | String;
  updatedFields_contains_some?: String[] | String;
  node?: GroupWhereInput;
  AND?: GroupSubscriptionWhereInput[] | GroupSubscriptionWhereInput;
  OR?: GroupSubscriptionWhereInput[] | GroupSubscriptionWhereInput;
  NOT?: GroupSubscriptionWhereInput[] | GroupSubscriptionWhereInput;
}

export interface PageCreateManyWithoutLessonInput {
  create?: PageCreateWithoutLessonInput[] | PageCreateWithoutLessonInput;
  connect?: PageWhereUniqueInput[] | PageWhereUniqueInput;
}

export interface UserUpdateInput {
  name?: String;
  email?: String;
  password?: String;
  facebookId?: String;
  completedLessons?: String;
}

export interface PageCreateWithoutLessonInput {
  pageNumber: Int;
  data: String;
}

export type LessonWhereUniqueInput = AtLeastOne<{
  id: ID_Input;
}>;

export interface GroupUpdateInput {
  name?: String;
  lessons?: LessonUpdateManyWithoutGroupInput;
}

export interface LessonUpsertWithoutPagesInput {
  update: LessonUpdateWithoutPagesDataInput;
  create: LessonCreateWithoutPagesInput;
}

export interface LessonUpdateManyWithoutGroupInput {
  create?: LessonCreateWithoutGroupInput[] | LessonCreateWithoutGroupInput;
  delete?: LessonWhereUniqueInput[] | LessonWhereUniqueInput;
  connect?: LessonWhereUniqueInput[] | LessonWhereUniqueInput;
  disconnect?: LessonWhereUniqueInput[] | LessonWhereUniqueInput;
  update?:
    | LessonUpdateWithWhereUniqueWithoutGroupInput[]
    | LessonUpdateWithWhereUniqueWithoutGroupInput;
  upsert?:
    | LessonUpsertWithWhereUniqueWithoutGroupInput[]
    | LessonUpsertWithWhereUniqueWithoutGroupInput;
  deleteMany?: LessonScalarWhereInput[] | LessonScalarWhereInput;
  updateMany?:
    | LessonUpdateManyWithWhereNestedInput[]
    | LessonUpdateManyWithWhereNestedInput;
}

export type PageWhereUniqueInput = AtLeastOne<{
  id: ID_Input;
}>;

export interface LessonUpdateWithWhereUniqueWithoutGroupInput {
  where: LessonWhereUniqueInput;
  data: LessonUpdateWithoutGroupDataInput;
}

export interface PageUpdateInput {
  pageNumber?: Int;
  data?: String;
  lesson?: LessonUpdateOneRequiredWithoutPagesInput;
}

export interface LessonUpdateWithoutGroupDataInput {
  name?: String;
  pages?: PageUpdateManyWithoutLessonInput;
}

export type UserWhereUniqueInput = AtLeastOne<{
  id: ID_Input;
  email?: String;
  facebookId?: String;
}>;

export interface PageUpdateManyWithoutLessonInput {
  create?: PageCreateWithoutLessonInput[] | PageCreateWithoutLessonInput;
  delete?: PageWhereUniqueInput[] | PageWhereUniqueInput;
  connect?: PageWhereUniqueInput[] | PageWhereUniqueInput;
  disconnect?: PageWhereUniqueInput[] | PageWhereUniqueInput;
  update?:
    | PageUpdateWithWhereUniqueWithoutLessonInput[]
    | PageUpdateWithWhereUniqueWithoutLessonInput;
  upsert?:
    | PageUpsertWithWhereUniqueWithoutLessonInput[]
    | PageUpsertWithWhereUniqueWithoutLessonInput;
  deleteMany?: PageScalarWhereInput[] | PageScalarWhereInput;
  updateMany?:
    | PageUpdateManyWithWhereNestedInput[]
    | PageUpdateManyWithWhereNestedInput;
}

export interface UserWhereInput {
  id?: ID_Input;
  id_not?: ID_Input;
  id_in?: ID_Input[] | ID_Input;
  id_not_in?: ID_Input[] | ID_Input;
  id_lt?: ID_Input;
  id_lte?: ID_Input;
  id_gt?: ID_Input;
  id_gte?: ID_Input;
  id_contains?: ID_Input;
  id_not_contains?: ID_Input;
  id_starts_with?: ID_Input;
  id_not_starts_with?: ID_Input;
  id_ends_with?: ID_Input;
  id_not_ends_with?: ID_Input;
  name?: String;
  name_not?: String;
  name_in?: String[] | String;
  name_not_in?: String[] | String;
  name_lt?: String;
  name_lte?: String;
  name_gt?: String;
  name_gte?: String;
  name_contains?: String;
  name_not_contains?: String;
  name_starts_with?: String;
  name_not_starts_with?: String;
  name_ends_with?: String;
  name_not_ends_with?: String;
  email?: String;
  email_not?: String;
  email_in?: String[] | String;
  email_not_in?: String[] | String;
  email_lt?: String;
  email_lte?: String;
  email_gt?: String;
  email_gte?: String;
  email_contains?: String;
  email_not_contains?: String;
  email_starts_with?: String;
  email_not_starts_with?: String;
  email_ends_with?: String;
  email_not_ends_with?: String;
  password?: String;
  password_not?: String;
  password_in?: String[] | String;
  password_not_in?: String[] | String;
  password_lt?: String;
  password_lte?: String;
  password_gt?: String;
  password_gte?: String;
  password_contains?: String;
  password_not_contains?: String;
  password_starts_with?: String;
  password_not_starts_with?: String;
  password_ends_with?: String;
  password_not_ends_with?: String;
  facebookId?: String;
  facebookId_not?: String;
  facebookId_in?: String[] | String;
  facebookId_not_in?: String[] | String;
  facebookId_lt?: String;
  facebookId_lte?: String;
  facebookId_gt?: String;
  facebookId_gte?: String;
  facebookId_contains?: String;
  facebookId_not_contains?: String;
  facebookId_starts_with?: String;
  facebookId_not_starts_with?: String;
  facebookId_ends_with?: String;
  facebookId_not_ends_with?: String;
  completedLessons?: String;
  completedLessons_not?: String;
  completedLessons_in?: String[] | String;
  completedLessons_not_in?: String[] | String;
  completedLessons_lt?: String;
  completedLessons_lte?: String;
  completedLessons_gt?: String;
  completedLessons_gte?: String;
  completedLessons_contains?: String;
  completedLessons_not_contains?: String;
  completedLessons_starts_with?: String;
  completedLessons_not_starts_with?: String;
  completedLessons_ends_with?: String;
  completedLessons_not_ends_with?: String;
  AND?: UserWhereInput[] | UserWhereInput;
  OR?: UserWhereInput[] | UserWhereInput;
  NOT?: UserWhereInput[] | UserWhereInput;
}

export interface GroupUpdateOneRequiredWithoutLessonsInput {
  create?: GroupCreateWithoutLessonsInput;
  update?: GroupUpdateWithoutLessonsDataInput;
  upsert?: GroupUpsertWithoutLessonsInput;
  connect?: GroupWhereUniqueInput;
}

export interface LessonUpdateManyMutationInput {
  name?: String;
}

export interface PageUpdateWithoutLessonDataInput {
  pageNumber?: Int;
  data?: String;
}

export interface GroupUpdateWithoutLessonsDataInput {
  name?: String;
}

export interface PageUpsertWithWhereUniqueWithoutLessonInput {
  where: PageWhereUniqueInput;
  update: PageUpdateWithoutLessonDataInput;
  create: PageCreateWithoutLessonInput;
}

export interface PageSubscriptionWhereInput {
  mutation_in?: MutationType[] | MutationType;
  updatedFields_contains?: String;
  updatedFields_contains_every?: String[] | String;
  updatedFields_contains_some?: String[] | String;
  node?: PageWhereInput;
  AND?: PageSubscriptionWhereInput[] | PageSubscriptionWhereInput;
  OR?: PageSubscriptionWhereInput[] | PageSubscriptionWhereInput;
  NOT?: PageSubscriptionWhereInput[] | PageSubscriptionWhereInput;
}

export interface PageScalarWhereInput {
  id?: ID_Input;
  id_not?: ID_Input;
  id_in?: ID_Input[] | ID_Input;
  id_not_in?: ID_Input[] | ID_Input;
  id_lt?: ID_Input;
  id_lte?: ID_Input;
  id_gt?: ID_Input;
  id_gte?: ID_Input;
  id_contains?: ID_Input;
  id_not_contains?: ID_Input;
  id_starts_with?: ID_Input;
  id_not_starts_with?: ID_Input;
  id_ends_with?: ID_Input;
  id_not_ends_with?: ID_Input;
  pageNumber?: Int;
  pageNumber_not?: Int;
  pageNumber_in?: Int[] | Int;
  pageNumber_not_in?: Int[] | Int;
  pageNumber_lt?: Int;
  pageNumber_lte?: Int;
  pageNumber_gt?: Int;
  pageNumber_gte?: Int;
  data?: String;
  data_not?: String;
  data_in?: String[] | String;
  data_not_in?: String[] | String;
  data_lt?: String;
  data_lte?: String;
  data_gt?: String;
  data_gte?: String;
  data_contains?: String;
  data_not_contains?: String;
  data_starts_with?: String;
  data_not_starts_with?: String;
  data_ends_with?: String;
  data_not_ends_with?: String;
  AND?: PageScalarWhereInput[] | PageScalarWhereInput;
  OR?: PageScalarWhereInput[] | PageScalarWhereInput;
  NOT?: PageScalarWhereInput[] | PageScalarWhereInput;
}

export interface UserUpdateManyMutationInput {
  name?: String;
  email?: String;
  password?: String;
  facebookId?: String;
  completedLessons?: String;
}

export interface PageWhereInput {
  id?: ID_Input;
  id_not?: ID_Input;
  id_in?: ID_Input[] | ID_Input;
  id_not_in?: ID_Input[] | ID_Input;
  id_lt?: ID_Input;
  id_lte?: ID_Input;
  id_gt?: ID_Input;
  id_gte?: ID_Input;
  id_contains?: ID_Input;
  id_not_contains?: ID_Input;
  id_starts_with?: ID_Input;
  id_not_starts_with?: ID_Input;
  id_ends_with?: ID_Input;
  id_not_ends_with?: ID_Input;
  pageNumber?: Int;
  pageNumber_not?: Int;
  pageNumber_in?: Int[] | Int;
  pageNumber_not_in?: Int[] | Int;
  pageNumber_lt?: Int;
  pageNumber_lte?: Int;
  pageNumber_gt?: Int;
  pageNumber_gte?: Int;
  data?: String;
  data_not?: String;
  data_in?: String[] | String;
  data_not_in?: String[] | String;
  data_lt?: String;
  data_lte?: String;
  data_gt?: String;
  data_gte?: String;
  data_contains?: String;
  data_not_contains?: String;
  data_starts_with?: String;
  data_not_starts_with?: String;
  data_ends_with?: String;
  data_not_ends_with?: String;
  lesson?: LessonWhereInput;
  AND?: PageWhereInput[] | PageWhereInput;
  OR?: PageWhereInput[] | PageWhereInput;
  NOT?: PageWhereInput[] | PageWhereInput;
}

export interface PageUpdateManyMutationInput {
  pageNumber?: Int;
  data?: String;
}

export interface PageUpdateManyDataInput {
  pageNumber?: Int;
  data?: String;
}

export interface LessonUpdateOneRequiredWithoutPagesInput {
  create?: LessonCreateWithoutPagesInput;
  update?: LessonUpdateWithoutPagesDataInput;
  upsert?: LessonUpsertWithoutPagesInput;
  connect?: LessonWhereUniqueInput;
}

export interface LessonUpsertWithWhereUniqueWithoutGroupInput {
  where: LessonWhereUniqueInput;
  update: LessonUpdateWithoutGroupDataInput;
  create: LessonCreateWithoutGroupInput;
}

export interface LessonCreateOneWithoutPagesInput {
  create?: LessonCreateWithoutPagesInput;
  connect?: LessonWhereUniqueInput;
}

export interface LessonScalarWhereInput {
  id?: ID_Input;
  id_not?: ID_Input;
  id_in?: ID_Input[] | ID_Input;
  id_not_in?: ID_Input[] | ID_Input;
  id_lt?: ID_Input;
  id_lte?: ID_Input;
  id_gt?: ID_Input;
  id_gte?: ID_Input;
  id_contains?: ID_Input;
  id_not_contains?: ID_Input;
  id_starts_with?: ID_Input;
  id_not_starts_with?: ID_Input;
  id_ends_with?: ID_Input;
  id_not_ends_with?: ID_Input;
  name?: String;
  name_not?: String;
  name_in?: String[] | String;
  name_not_in?: String[] | String;
  name_lt?: String;
  name_lte?: String;
  name_gt?: String;
  name_gte?: String;
  name_contains?: String;
  name_not_contains?: String;
  name_starts_with?: String;
  name_not_starts_with?: String;
  name_ends_with?: String;
  name_not_ends_with?: String;
  AND?: LessonScalarWhereInput[] | LessonScalarWhereInput;
  OR?: LessonScalarWhereInput[] | LessonScalarWhereInput;
  NOT?: LessonScalarWhereInput[] | LessonScalarWhereInput;
}

export interface GroupUpsertWithoutLessonsInput {
  update: GroupUpdateWithoutLessonsDataInput;
  create: GroupCreateWithoutLessonsInput;
}

export interface LessonUpdateManyWithWhereNestedInput {
  where: LessonScalarWhereInput;
  data: LessonUpdateManyDataInput;
}

export interface LessonSubscriptionWhereInput {
  mutation_in?: MutationType[] | MutationType;
  updatedFields_contains?: String;
  updatedFields_contains_every?: String[] | String;
  updatedFields_contains_some?: String[] | String;
  node?: LessonWhereInput;
  AND?: LessonSubscriptionWhereInput[] | LessonSubscriptionWhereInput;
  OR?: LessonSubscriptionWhereInput[] | LessonSubscriptionWhereInput;
  NOT?: LessonSubscriptionWhereInput[] | LessonSubscriptionWhereInput;
}

export interface LessonUpdateManyDataInput {
  name?: String;
}

export interface LessonUpdateWithoutPagesDataInput {
  name?: String;
  group?: GroupUpdateOneRequiredWithoutLessonsInput;
}

export interface LessonCreateInput {
  name: String;
  group: GroupCreateOneWithoutLessonsInput;
  pages?: PageCreateManyWithoutLessonInput;
}

export interface GroupCreateWithoutLessonsInput {
  name: String;
}

export interface LessonUpdateInput {
  name?: String;
  group?: GroupUpdateOneRequiredWithoutLessonsInput;
  pages?: PageUpdateManyWithoutLessonInput;
}

export interface GroupUpdateManyMutationInput {
  name?: String;
}

export interface LessonCreateWithoutPagesInput {
  name: String;
  group: GroupCreateOneWithoutLessonsInput;
}

export interface UserCreateInput {
  name: String;
  email?: String;
  password?: String;
  facebookId?: String;
  completedLessons?: String;
}

export interface UserSubscriptionWhereInput {
  mutation_in?: MutationType[] | MutationType;
  updatedFields_contains?: String;
  updatedFields_contains_every?: String[] | String;
  updatedFields_contains_some?: String[] | String;
  node?: UserWhereInput;
  AND?: UserSubscriptionWhereInput[] | UserSubscriptionWhereInput;
  OR?: UserSubscriptionWhereInput[] | UserSubscriptionWhereInput;
  NOT?: UserSubscriptionWhereInput[] | UserSubscriptionWhereInput;
}

export interface PageCreateInput {
  pageNumber: Int;
  data: String;
  lesson: LessonCreateOneWithoutPagesInput;
}

export interface NodeNode {
  id: ID_Output;
}

export interface UserPreviousValues {
  id: ID_Output;
  name: String;
  email?: String;
  password?: String;
  facebookId?: String;
  completedLessons?: String;
}

export interface UserPreviousValuesPromise
  extends Promise<UserPreviousValues>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  name: () => Promise<String>;
  email: () => Promise<String>;
  password: () => Promise<String>;
  facebookId: () => Promise<String>;
  completedLessons: () => Promise<String>;
}

export interface UserPreviousValuesSubscription
  extends Promise<AsyncIterator<UserPreviousValues>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  name: () => Promise<AsyncIterator<String>>;
  email: () => Promise<AsyncIterator<String>>;
  password: () => Promise<AsyncIterator<String>>;
  facebookId: () => Promise<AsyncIterator<String>>;
  completedLessons: () => Promise<AsyncIterator<String>>;
}

export interface LessonConnection {
  pageInfo: PageInfo;
  edges: LessonEdge[];
}

export interface LessonConnectionPromise
  extends Promise<LessonConnection>,
    Fragmentable {
  pageInfo: <T = PageInfoPromise>() => T;
  edges: <T = FragmentableArray<LessonEdge>>() => T;
  aggregate: <T = AggregateLessonPromise>() => T;
}

export interface LessonConnectionSubscription
  extends Promise<AsyncIterator<LessonConnection>>,
    Fragmentable {
  pageInfo: <T = PageInfoSubscription>() => T;
  edges: <T = Promise<AsyncIterator<LessonEdgeSubscription>>>() => T;
  aggregate: <T = AggregateLessonSubscription>() => T;
}

export interface PageSubscriptionPayload {
  mutation: MutationType;
  node: Page;
  updatedFields: String[];
  previousValues: PagePreviousValues;
}

export interface PageSubscriptionPayloadPromise
  extends Promise<PageSubscriptionPayload>,
    Fragmentable {
  mutation: () => Promise<MutationType>;
  node: <T = PagePromise>() => T;
  updatedFields: () => Promise<String[]>;
  previousValues: <T = PagePreviousValuesPromise>() => T;
}

export interface PageSubscriptionPayloadSubscription
  extends Promise<AsyncIterator<PageSubscriptionPayload>>,
    Fragmentable {
  mutation: () => Promise<AsyncIterator<MutationType>>;
  node: <T = PageSubscription>() => T;
  updatedFields: () => Promise<AsyncIterator<String[]>>;
  previousValues: <T = PagePreviousValuesSubscription>() => T;
}

export interface AggregateGroup {
  count: Int;
}

export interface AggregateGroupPromise
  extends Promise<AggregateGroup>,
    Fragmentable {
  count: () => Promise<Int>;
}

export interface AggregateGroupSubscription
  extends Promise<AsyncIterator<AggregateGroup>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Int>>;
}

export interface GroupEdge {
  node: Group;
  cursor: String;
}

export interface GroupEdgePromise extends Promise<GroupEdge>, Fragmentable {
  node: <T = GroupPromise>() => T;
  cursor: () => Promise<String>;
}

export interface GroupEdgeSubscription
  extends Promise<AsyncIterator<GroupEdge>>,
    Fragmentable {
  node: <T = GroupSubscription>() => T;
  cursor: () => Promise<AsyncIterator<String>>;
}

export interface BatchPayload {
  count: Long;
}

export interface BatchPayloadPromise
  extends Promise<BatchPayload>,
    Fragmentable {
  count: () => Promise<Long>;
}

export interface BatchPayloadSubscription
  extends Promise<AsyncIterator<BatchPayload>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Long>>;
}

export interface AggregateUser {
  count: Int;
}

export interface AggregateUserPromise
  extends Promise<AggregateUser>,
    Fragmentable {
  count: () => Promise<Int>;
}

export interface AggregateUserSubscription
  extends Promise<AsyncIterator<AggregateUser>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Int>>;
}

export interface Lesson {
  id: ID_Output;
  name: String;
}

export interface LessonPromise extends Promise<Lesson>, Fragmentable {
  id: () => Promise<ID_Output>;
  name: () => Promise<String>;
  group: <T = GroupPromise>() => T;
  pages: <T = FragmentableArray<Page>>(
    args?: {
      where?: PageWhereInput;
      orderBy?: PageOrderByInput;
      skip?: Int;
      after?: String;
      before?: String;
      first?: Int;
      last?: Int;
    }
  ) => T;
}

export interface LessonSubscription
  extends Promise<AsyncIterator<Lesson>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  name: () => Promise<AsyncIterator<String>>;
  group: <T = GroupSubscription>() => T;
  pages: <T = Promise<AsyncIterator<PageSubscription>>>(
    args?: {
      where?: PageWhereInput;
      orderBy?: PageOrderByInput;
      skip?: Int;
      after?: String;
      before?: String;
      first?: Int;
      last?: Int;
    }
  ) => T;
}

export interface UserConnection {
  pageInfo: PageInfo;
  edges: UserEdge[];
}

export interface UserConnectionPromise
  extends Promise<UserConnection>,
    Fragmentable {
  pageInfo: <T = PageInfoPromise>() => T;
  edges: <T = FragmentableArray<UserEdge>>() => T;
  aggregate: <T = AggregateUserPromise>() => T;
}

export interface UserConnectionSubscription
  extends Promise<AsyncIterator<UserConnection>>,
    Fragmentable {
  pageInfo: <T = PageInfoSubscription>() => T;
  edges: <T = Promise<AsyncIterator<UserEdgeSubscription>>>() => T;
  aggregate: <T = AggregateUserSubscription>() => T;
}

export interface PageInfo {
  hasNextPage: Boolean;
  hasPreviousPage: Boolean;
  startCursor?: String;
  endCursor?: String;
}

export interface PageInfoPromise extends Promise<PageInfo>, Fragmentable {
  hasNextPage: () => Promise<Boolean>;
  hasPreviousPage: () => Promise<Boolean>;
  startCursor: () => Promise<String>;
  endCursor: () => Promise<String>;
}

export interface PageInfoSubscription
  extends Promise<AsyncIterator<PageInfo>>,
    Fragmentable {
  hasNextPage: () => Promise<AsyncIterator<Boolean>>;
  hasPreviousPage: () => Promise<AsyncIterator<Boolean>>;
  startCursor: () => Promise<AsyncIterator<String>>;
  endCursor: () => Promise<AsyncIterator<String>>;
}

export interface User {
  id: ID_Output;
  name: String;
  email?: String;
  password?: String;
  facebookId?: String;
  completedLessons?: String;
}

export interface UserPromise extends Promise<User>, Fragmentable {
  id: () => Promise<ID_Output>;
  name: () => Promise<String>;
  email: () => Promise<String>;
  password: () => Promise<String>;
  facebookId: () => Promise<String>;
  completedLessons: () => Promise<String>;
}

export interface UserSubscription
  extends Promise<AsyncIterator<User>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  name: () => Promise<AsyncIterator<String>>;
  email: () => Promise<AsyncIterator<String>>;
  password: () => Promise<AsyncIterator<String>>;
  facebookId: () => Promise<AsyncIterator<String>>;
  completedLessons: () => Promise<AsyncIterator<String>>;
}

export interface PagePreviousValues {
  id: ID_Output;
  pageNumber: Int;
  data: String;
}

export interface PagePreviousValuesPromise
  extends Promise<PagePreviousValues>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  pageNumber: () => Promise<Int>;
  data: () => Promise<String>;
}

export interface PagePreviousValuesSubscription
  extends Promise<AsyncIterator<PagePreviousValues>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  pageNumber: () => Promise<AsyncIterator<Int>>;
  data: () => Promise<AsyncIterator<String>>;
}

export interface PageEdge {
  node: Page;
  cursor: String;
}

export interface PageEdgePromise extends Promise<PageEdge>, Fragmentable {
  node: <T = PagePromise>() => T;
  cursor: () => Promise<String>;
}

export interface PageEdgeSubscription
  extends Promise<AsyncIterator<PageEdge>>,
    Fragmentable {
  node: <T = PageSubscription>() => T;
  cursor: () => Promise<AsyncIterator<String>>;
}

export interface GroupSubscriptionPayload {
  mutation: MutationType;
  node: Group;
  updatedFields: String[];
  previousValues: GroupPreviousValues;
}

export interface GroupSubscriptionPayloadPromise
  extends Promise<GroupSubscriptionPayload>,
    Fragmentable {
  mutation: () => Promise<MutationType>;
  node: <T = GroupPromise>() => T;
  updatedFields: () => Promise<String[]>;
  previousValues: <T = GroupPreviousValuesPromise>() => T;
}

export interface GroupSubscriptionPayloadSubscription
  extends Promise<AsyncIterator<GroupSubscriptionPayload>>,
    Fragmentable {
  mutation: () => Promise<AsyncIterator<MutationType>>;
  node: <T = GroupSubscription>() => T;
  updatedFields: () => Promise<AsyncIterator<String[]>>;
  previousValues: <T = GroupPreviousValuesSubscription>() => T;
}

export interface AggregateLesson {
  count: Int;
}

export interface AggregateLessonPromise
  extends Promise<AggregateLesson>,
    Fragmentable {
  count: () => Promise<Int>;
}

export interface AggregateLessonSubscription
  extends Promise<AsyncIterator<AggregateLesson>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Int>>;
}

export interface GroupPreviousValues {
  id: ID_Output;
  name: String;
}

export interface GroupPreviousValuesPromise
  extends Promise<GroupPreviousValues>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  name: () => Promise<String>;
}

export interface GroupPreviousValuesSubscription
  extends Promise<AsyncIterator<GroupPreviousValues>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  name: () => Promise<AsyncIterator<String>>;
}

export interface UserSubscriptionPayload {
  mutation: MutationType;
  node: User;
  updatedFields: String[];
  previousValues: UserPreviousValues;
}

export interface UserSubscriptionPayloadPromise
  extends Promise<UserSubscriptionPayload>,
    Fragmentable {
  mutation: () => Promise<MutationType>;
  node: <T = UserPromise>() => T;
  updatedFields: () => Promise<String[]>;
  previousValues: <T = UserPreviousValuesPromise>() => T;
}

export interface UserSubscriptionPayloadSubscription
  extends Promise<AsyncIterator<UserSubscriptionPayload>>,
    Fragmentable {
  mutation: () => Promise<AsyncIterator<MutationType>>;
  node: <T = UserSubscription>() => T;
  updatedFields: () => Promise<AsyncIterator<String[]>>;
  previousValues: <T = UserPreviousValuesSubscription>() => T;
}

export interface Group {
  id: ID_Output;
  name: String;
}

export interface GroupPromise extends Promise<Group>, Fragmentable {
  id: () => Promise<ID_Output>;
  name: () => Promise<String>;
  lessons: <T = FragmentableArray<Lesson>>(
    args?: {
      where?: LessonWhereInput;
      orderBy?: LessonOrderByInput;
      skip?: Int;
      after?: String;
      before?: String;
      first?: Int;
      last?: Int;
    }
  ) => T;
}

export interface GroupSubscription
  extends Promise<AsyncIterator<Group>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  name: () => Promise<AsyncIterator<String>>;
  lessons: <T = Promise<AsyncIterator<LessonSubscription>>>(
    args?: {
      where?: LessonWhereInput;
      orderBy?: LessonOrderByInput;
      skip?: Int;
      after?: String;
      before?: String;
      first?: Int;
      last?: Int;
    }
  ) => T;
}

export interface Page {
  id: ID_Output;
  pageNumber: Int;
  data: String;
}

export interface PagePromise extends Promise<Page>, Fragmentable {
  id: () => Promise<ID_Output>;
  pageNumber: () => Promise<Int>;
  data: () => Promise<String>;
  lesson: <T = LessonPromise>() => T;
}

export interface PageSubscription
  extends Promise<AsyncIterator<Page>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  pageNumber: () => Promise<AsyncIterator<Int>>;
  data: () => Promise<AsyncIterator<String>>;
  lesson: <T = LessonSubscription>() => T;
}

export interface LessonPreviousValues {
  id: ID_Output;
  name: String;
}

export interface LessonPreviousValuesPromise
  extends Promise<LessonPreviousValues>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  name: () => Promise<String>;
}

export interface LessonPreviousValuesSubscription
  extends Promise<AsyncIterator<LessonPreviousValues>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  name: () => Promise<AsyncIterator<String>>;
}

export interface LessonSubscriptionPayload {
  mutation: MutationType;
  node: Lesson;
  updatedFields: String[];
  previousValues: LessonPreviousValues;
}

export interface LessonSubscriptionPayloadPromise
  extends Promise<LessonSubscriptionPayload>,
    Fragmentable {
  mutation: () => Promise<MutationType>;
  node: <T = LessonPromise>() => T;
  updatedFields: () => Promise<String[]>;
  previousValues: <T = LessonPreviousValuesPromise>() => T;
}

export interface LessonSubscriptionPayloadSubscription
  extends Promise<AsyncIterator<LessonSubscriptionPayload>>,
    Fragmentable {
  mutation: () => Promise<AsyncIterator<MutationType>>;
  node: <T = LessonSubscription>() => T;
  updatedFields: () => Promise<AsyncIterator<String[]>>;
  previousValues: <T = LessonPreviousValuesSubscription>() => T;
}

export interface GroupConnection {
  pageInfo: PageInfo;
  edges: GroupEdge[];
}

export interface GroupConnectionPromise
  extends Promise<GroupConnection>,
    Fragmentable {
  pageInfo: <T = PageInfoPromise>() => T;
  edges: <T = FragmentableArray<GroupEdge>>() => T;
  aggregate: <T = AggregateGroupPromise>() => T;
}

export interface GroupConnectionSubscription
  extends Promise<AsyncIterator<GroupConnection>>,
    Fragmentable {
  pageInfo: <T = PageInfoSubscription>() => T;
  edges: <T = Promise<AsyncIterator<GroupEdgeSubscription>>>() => T;
  aggregate: <T = AggregateGroupSubscription>() => T;
}

export interface AggregatePage {
  count: Int;
}

export interface AggregatePagePromise
  extends Promise<AggregatePage>,
    Fragmentable {
  count: () => Promise<Int>;
}

export interface AggregatePageSubscription
  extends Promise<AsyncIterator<AggregatePage>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Int>>;
}

export interface UserEdge {
  node: User;
  cursor: String;
}

export interface UserEdgePromise extends Promise<UserEdge>, Fragmentable {
  node: <T = UserPromise>() => T;
  cursor: () => Promise<String>;
}

export interface UserEdgeSubscription
  extends Promise<AsyncIterator<UserEdge>>,
    Fragmentable {
  node: <T = UserSubscription>() => T;
  cursor: () => Promise<AsyncIterator<String>>;
}

export interface LessonEdge {
  node: Lesson;
  cursor: String;
}

export interface LessonEdgePromise extends Promise<LessonEdge>, Fragmentable {
  node: <T = LessonPromise>() => T;
  cursor: () => Promise<String>;
}

export interface LessonEdgeSubscription
  extends Promise<AsyncIterator<LessonEdge>>,
    Fragmentable {
  node: <T = LessonSubscription>() => T;
  cursor: () => Promise<AsyncIterator<String>>;
}

export interface PageConnection {
  pageInfo: PageInfo;
  edges: PageEdge[];
}

export interface PageConnectionPromise
  extends Promise<PageConnection>,
    Fragmentable {
  pageInfo: <T = PageInfoPromise>() => T;
  edges: <T = FragmentableArray<PageEdge>>() => T;
  aggregate: <T = AggregatePagePromise>() => T;
}

export interface PageConnectionSubscription
  extends Promise<AsyncIterator<PageConnection>>,
    Fragmentable {
  pageInfo: <T = PageInfoSubscription>() => T;
  edges: <T = Promise<AsyncIterator<PageEdgeSubscription>>>() => T;
  aggregate: <T = AggregatePageSubscription>() => T;
}

/*
The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1. 
*/
export type Int = number;

export type Long = string;

/*
The `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"4"`) or integer (such as `4`) input value will be accepted as an ID.
*/
export type ID_Input = string | number;
export type ID_Output = string;

/*
The `Boolean` scalar type represents `true` or `false`.
*/
export type Boolean = boolean;

/*
The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.
*/
export type String = string;

/**
 * Model Metadata
 */

export const models: Model[] = [
  {
    name: "Group",
    embedded: false
  },
  {
    name: "Lesson",
    embedded: false
  },
  {
    name: "Page",
    embedded: false
  },
  {
    name: "User",
    embedded: false
  }
];

/**
 * Type Defs
 */

export const prisma: Prisma;
