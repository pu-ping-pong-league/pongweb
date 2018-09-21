import { GraphQLResolveInfo, GraphQLSchema } from 'graphql'
import { IResolvers } from 'graphql-tools/dist/Interfaces'
import { Options } from 'graphql-binding'
import { makePrismaBindingClass, BasePrismaOptions } from 'prisma-binding'

export interface Query {
    admins: <T = Admin[]>(args: { where?: AdminWhereInput, orderBy?: AdminOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    currents: <T = Current[]>(args: { where?: CurrentWhereInput, orderBy?: CurrentOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    statses: <T = Stats[]>(args: { where?: StatsWhereInput, orderBy?: StatsOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    matches: <T = Match[]>(args: { where?: MatchWhereInput, orderBy?: MatchOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    seasons: <T = Season[]>(args: { where?: SeasonWhereInput, orderBy?: SeasonOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    users: <T = User[]>(args: { where?: UserWhereInput, orderBy?: UserOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    admin: <T = Admin | null>(args: { where: AdminWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    current: <T = Current | null>(args: { where: CurrentWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    stats: <T = Stats | null>(args: { where: StatsWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    match: <T = Match | null>(args: { where: MatchWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    season: <T = Season | null>(args: { where: SeasonWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    user: <T = User | null>(args: { where: UserWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    adminsConnection: <T = AdminConnection>(args: { where?: AdminWhereInput, orderBy?: AdminOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    currentsConnection: <T = CurrentConnection>(args: { where?: CurrentWhereInput, orderBy?: CurrentOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    statsesConnection: <T = StatsConnection>(args: { where?: StatsWhereInput, orderBy?: StatsOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    matchesConnection: <T = MatchConnection>(args: { where?: MatchWhereInput, orderBy?: MatchOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    seasonsConnection: <T = SeasonConnection>(args: { where?: SeasonWhereInput, orderBy?: SeasonOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    usersConnection: <T = UserConnection>(args: { where?: UserWhereInput, orderBy?: UserOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    node: <T = Node | null>(args: { id: ID_Output }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> 
  }

export interface Mutation {
    createAdmin: <T = Admin>(args: { data: AdminCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createCurrent: <T = Current>(args: { data: CurrentCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createStats: <T = Stats>(args: { data: StatsCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createMatch: <T = Match>(args: { data: MatchCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createSeason: <T = Season>(args: { data: SeasonCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createUser: <T = User>(args: { data: UserCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateAdmin: <T = Admin | null>(args: { data: AdminUpdateInput, where: AdminWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateCurrent: <T = Current | null>(args: { data: CurrentUpdateInput, where: CurrentWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateStats: <T = Stats | null>(args: { data: StatsUpdateInput, where: StatsWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateMatch: <T = Match | null>(args: { data: MatchUpdateInput, where: MatchWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateSeason: <T = Season | null>(args: { data: SeasonUpdateInput, where: SeasonWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateUser: <T = User | null>(args: { data: UserUpdateInput, where: UserWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteAdmin: <T = Admin | null>(args: { where: AdminWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteCurrent: <T = Current | null>(args: { where: CurrentWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteStats: <T = Stats | null>(args: { where: StatsWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteMatch: <T = Match | null>(args: { where: MatchWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteSeason: <T = Season | null>(args: { where: SeasonWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteUser: <T = User | null>(args: { where: UserWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertAdmin: <T = Admin>(args: { where: AdminWhereUniqueInput, create: AdminCreateInput, update: AdminUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertCurrent: <T = Current>(args: { where: CurrentWhereUniqueInput, create: CurrentCreateInput, update: CurrentUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertStats: <T = Stats>(args: { where: StatsWhereUniqueInput, create: StatsCreateInput, update: StatsUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertMatch: <T = Match>(args: { where: MatchWhereUniqueInput, create: MatchCreateInput, update: MatchUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertSeason: <T = Season>(args: { where: SeasonWhereUniqueInput, create: SeasonCreateInput, update: SeasonUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertUser: <T = User>(args: { where: UserWhereUniqueInput, create: UserCreateInput, update: UserUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyAdmins: <T = BatchPayload>(args: { data: AdminUpdateInput, where?: AdminWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyCurrents: <T = BatchPayload>(args: { data: CurrentUpdateInput, where?: CurrentWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyStatses: <T = BatchPayload>(args: { data: StatsUpdateInput, where?: StatsWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyMatches: <T = BatchPayload>(args: { data: MatchUpdateInput, where?: MatchWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManySeasons: <T = BatchPayload>(args: { data: SeasonUpdateInput, where?: SeasonWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyUsers: <T = BatchPayload>(args: { data: UserUpdateInput, where?: UserWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyAdmins: <T = BatchPayload>(args: { where?: AdminWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyCurrents: <T = BatchPayload>(args: { where?: CurrentWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyStatses: <T = BatchPayload>(args: { where?: StatsWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyMatches: <T = BatchPayload>(args: { where?: MatchWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManySeasons: <T = BatchPayload>(args: { where?: SeasonWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyUsers: <T = BatchPayload>(args: { where?: UserWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> 
  }

export interface Subscription {
    admin: <T = AdminSubscriptionPayload | null>(args: { where?: AdminSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> ,
    current: <T = CurrentSubscriptionPayload | null>(args: { where?: CurrentSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> ,
    stats: <T = StatsSubscriptionPayload | null>(args: { where?: StatsSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> ,
    match: <T = MatchSubscriptionPayload | null>(args: { where?: MatchSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> ,
    season: <T = SeasonSubscriptionPayload | null>(args: { where?: SeasonSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> ,
    user: <T = UserSubscriptionPayload | null>(args: { where?: UserSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> 
  }

export interface Exists {
  Admin: (where?: AdminWhereInput) => Promise<boolean>
  Current: (where?: CurrentWhereInput) => Promise<boolean>
  Stats: (where?: StatsWhereInput) => Promise<boolean>
  Match: (where?: MatchWhereInput) => Promise<boolean>
  Season: (where?: SeasonWhereInput) => Promise<boolean>
  User: (where?: UserWhereInput) => Promise<boolean>
}

export interface Prisma {
  query: Query
  mutation: Mutation
  subscription: Subscription
  exists: Exists
  request: <T = any>(query: string, variables?: {[key: string]: any}) => Promise<T>
  delegate(operation: 'query' | 'mutation', fieldName: string, args: {
    [key: string]: any;
}, infoOrQuery?: GraphQLResolveInfo | string, options?: Options): Promise<any>;
delegateSubscription(fieldName: string, args?: {
    [key: string]: any;
}, infoOrQuery?: GraphQLResolveInfo | string, options?: Options): Promise<AsyncIterator<any>>;
getAbstractResolvers(filterSchema?: GraphQLSchema | string): IResolvers;
}

export interface BindingConstructor<T> {
  new(options: BasePrismaOptions): T
}
/**
 * Type Defs
*/

const typeDefs = `type Admin implements Node {
  id: ID!
  email: String!
  password: String!
  name: String!
}

"""A connection to a list of items."""
type AdminConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [AdminEdge]!
  aggregate: AggregateAdmin!
}

input AdminCreateInput {
  email: String!
  password: String!
  name: String!
}

"""An edge in a connection."""
type AdminEdge {
  """The item at the end of the edge."""
  node: Admin!

  """A cursor for use in pagination."""
  cursor: String!
}

enum AdminOrderByInput {
  id_ASC
  id_DESC
  email_ASC
  email_DESC
  password_ASC
  password_DESC
  name_ASC
  name_DESC
  updatedAt_ASC
  updatedAt_DESC
  createdAt_ASC
  createdAt_DESC
}

type AdminPreviousValues {
  id: ID!
  email: String!
  password: String!
  name: String!
}

type AdminSubscriptionPayload {
  mutation: MutationType!
  node: Admin
  updatedFields: [String!]
  previousValues: AdminPreviousValues
}

input AdminSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [AdminSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [AdminSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [AdminSubscriptionWhereInput!]

  """
  The subscription event gets dispatched when it's listed in mutation_in
  """
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: AdminWhereInput
}

input AdminUpdateInput {
  email: String
  password: String
  name: String
}

input AdminWhereInput {
  """Logical AND on all given filters."""
  AND: [AdminWhereInput!]

  """Logical OR on all given filters."""
  OR: [AdminWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [AdminWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  email: String

  """All values that are not equal to given value."""
  email_not: String

  """All values that are contained in given list."""
  email_in: [String!]

  """All values that are not contained in given list."""
  email_not_in: [String!]

  """All values less than the given value."""
  email_lt: String

  """All values less than or equal the given value."""
  email_lte: String

  """All values greater than the given value."""
  email_gt: String

  """All values greater than or equal the given value."""
  email_gte: String

  """All values containing the given string."""
  email_contains: String

  """All values not containing the given string."""
  email_not_contains: String

  """All values starting with the given string."""
  email_starts_with: String

  """All values not starting with the given string."""
  email_not_starts_with: String

  """All values ending with the given string."""
  email_ends_with: String

  """All values not ending with the given string."""
  email_not_ends_with: String
  password: String

  """All values that are not equal to given value."""
  password_not: String

  """All values that are contained in given list."""
  password_in: [String!]

  """All values that are not contained in given list."""
  password_not_in: [String!]

  """All values less than the given value."""
  password_lt: String

  """All values less than or equal the given value."""
  password_lte: String

  """All values greater than the given value."""
  password_gt: String

  """All values greater than or equal the given value."""
  password_gte: String

  """All values containing the given string."""
  password_contains: String

  """All values not containing the given string."""
  password_not_contains: String

  """All values starting with the given string."""
  password_starts_with: String

  """All values not starting with the given string."""
  password_not_starts_with: String

  """All values ending with the given string."""
  password_ends_with: String

  """All values not ending with the given string."""
  password_not_ends_with: String
  name: String

  """All values that are not equal to given value."""
  name_not: String

  """All values that are contained in given list."""
  name_in: [String!]

  """All values that are not contained in given list."""
  name_not_in: [String!]

  """All values less than the given value."""
  name_lt: String

  """All values less than or equal the given value."""
  name_lte: String

  """All values greater than the given value."""
  name_gt: String

  """All values greater than or equal the given value."""
  name_gte: String

  """All values containing the given string."""
  name_contains: String

  """All values not containing the given string."""
  name_not_contains: String

  """All values starting with the given string."""
  name_starts_with: String

  """All values not starting with the given string."""
  name_not_starts_with: String

  """All values ending with the given string."""
  name_ends_with: String

  """All values not ending with the given string."""
  name_not_ends_with: String
}

input AdminWhereUniqueInput {
  id: ID
  email: String
}

type AggregateAdmin {
  count: Int!
}

type AggregateCurrent {
  count: Int!
}

type AggregateMatch {
  count: Int!
}

type AggregateSeason {
  count: Int!
}

type AggregateStats {
  count: Int!
}

type AggregateUser {
  count: Int!
}

type BatchPayload {
  """The number of nodes that have been affected by the Batch operation."""
  count: Long!
}

type Current implements Node {
  id: ID!
  season: Int!
  round: Int!
  timer: String
}

"""A connection to a list of items."""
type CurrentConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [CurrentEdge]!
  aggregate: AggregateCurrent!
}

input CurrentCreateInput {
  season: Int!
  round: Int!
  timer: String
}

"""An edge in a connection."""
type CurrentEdge {
  """The item at the end of the edge."""
  node: Current!

  """A cursor for use in pagination."""
  cursor: String!
}

enum CurrentOrderByInput {
  id_ASC
  id_DESC
  season_ASC
  season_DESC
  round_ASC
  round_DESC
  timer_ASC
  timer_DESC
  updatedAt_ASC
  updatedAt_DESC
  createdAt_ASC
  createdAt_DESC
}

type CurrentPreviousValues {
  id: ID!
  season: Int!
  round: Int!
  timer: String
}

type CurrentSubscriptionPayload {
  mutation: MutationType!
  node: Current
  updatedFields: [String!]
  previousValues: CurrentPreviousValues
}

input CurrentSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [CurrentSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [CurrentSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [CurrentSubscriptionWhereInput!]

  """
  The subscription event gets dispatched when it's listed in mutation_in
  """
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: CurrentWhereInput
}

input CurrentUpdateInput {
  season: Int
  round: Int
  timer: String
}

input CurrentWhereInput {
  """Logical AND on all given filters."""
  AND: [CurrentWhereInput!]

  """Logical OR on all given filters."""
  OR: [CurrentWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [CurrentWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  season: Int

  """All values that are not equal to given value."""
  season_not: Int

  """All values that are contained in given list."""
  season_in: [Int!]

  """All values that are not contained in given list."""
  season_not_in: [Int!]

  """All values less than the given value."""
  season_lt: Int

  """All values less than or equal the given value."""
  season_lte: Int

  """All values greater than the given value."""
  season_gt: Int

  """All values greater than or equal the given value."""
  season_gte: Int
  round: Int

  """All values that are not equal to given value."""
  round_not: Int

  """All values that are contained in given list."""
  round_in: [Int!]

  """All values that are not contained in given list."""
  round_not_in: [Int!]

  """All values less than the given value."""
  round_lt: Int

  """All values less than or equal the given value."""
  round_lte: Int

  """All values greater than the given value."""
  round_gt: Int

  """All values greater than or equal the given value."""
  round_gte: Int
  timer: String

  """All values that are not equal to given value."""
  timer_not: String

  """All values that are contained in given list."""
  timer_in: [String!]

  """All values that are not contained in given list."""
  timer_not_in: [String!]

  """All values less than the given value."""
  timer_lt: String

  """All values less than or equal the given value."""
  timer_lte: String

  """All values greater than the given value."""
  timer_gt: String

  """All values greater than or equal the given value."""
  timer_gte: String

  """All values containing the given string."""
  timer_contains: String

  """All values not containing the given string."""
  timer_not_contains: String

  """All values starting with the given string."""
  timer_starts_with: String

  """All values not starting with the given string."""
  timer_not_starts_with: String

  """All values ending with the given string."""
  timer_ends_with: String

  """All values not ending with the given string."""
  timer_not_ends_with: String
}

input CurrentWhereUniqueInput {
  id: ID
}

"""
The \`Long\` scalar type represents non-fractional signed whole numeric values.
Long can represent values between -(2^63) and 2^63 - 1.
"""
scalar Long

type Match implements Node {
  id: ID!
  player1(where: UserWhereInput): User!
  player2(where: UserWhereInput): User
  player1set: Int
  player2set: Int
  season(where: SeasonWhereInput): Season!
  sumbit: Boolean!
}

"""A connection to a list of items."""
type MatchConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [MatchEdge]!
  aggregate: AggregateMatch!
}

input MatchCreateInput {
  player1set: Int
  player2set: Int
  sumbit: Boolean
  player1: UserCreateOneInput!
  player2: UserCreateOneInput
  season: SeasonCreateOneInput!
}

input MatchCreateManyInput {
  create: [MatchCreateInput!]
  connect: [MatchWhereUniqueInput!]
}

"""An edge in a connection."""
type MatchEdge {
  """The item at the end of the edge."""
  node: Match!

  """A cursor for use in pagination."""
  cursor: String!
}

enum MatchOrderByInput {
  id_ASC
  id_DESC
  player1set_ASC
  player1set_DESC
  player2set_ASC
  player2set_DESC
  sumbit_ASC
  sumbit_DESC
  updatedAt_ASC
  updatedAt_DESC
  createdAt_ASC
  createdAt_DESC
}

type MatchPreviousValues {
  id: ID!
  player1set: Int
  player2set: Int
  sumbit: Boolean!
}

type MatchSubscriptionPayload {
  mutation: MutationType!
  node: Match
  updatedFields: [String!]
  previousValues: MatchPreviousValues
}

input MatchSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [MatchSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [MatchSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [MatchSubscriptionWhereInput!]

  """
  The subscription event gets dispatched when it's listed in mutation_in
  """
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: MatchWhereInput
}

input MatchUpdateDataInput {
  player1set: Int
  player2set: Int
  sumbit: Boolean
  player1: UserUpdateOneInput
  player2: UserUpdateOneInput
  season: SeasonUpdateOneInput
}

input MatchUpdateInput {
  player1set: Int
  player2set: Int
  sumbit: Boolean
  player1: UserUpdateOneInput
  player2: UserUpdateOneInput
  season: SeasonUpdateOneInput
}

input MatchUpdateManyInput {
  create: [MatchCreateInput!]
  connect: [MatchWhereUniqueInput!]
  disconnect: [MatchWhereUniqueInput!]
  delete: [MatchWhereUniqueInput!]
  update: [MatchUpdateWithWhereUniqueNestedInput!]
  upsert: [MatchUpsertWithWhereUniqueNestedInput!]
}

input MatchUpdateWithWhereUniqueNestedInput {
  where: MatchWhereUniqueInput!
  data: MatchUpdateDataInput!
}

input MatchUpsertWithWhereUniqueNestedInput {
  where: MatchWhereUniqueInput!
  update: MatchUpdateDataInput!
  create: MatchCreateInput!
}

input MatchWhereInput {
  """Logical AND on all given filters."""
  AND: [MatchWhereInput!]

  """Logical OR on all given filters."""
  OR: [MatchWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [MatchWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  player1set: Int

  """All values that are not equal to given value."""
  player1set_not: Int

  """All values that are contained in given list."""
  player1set_in: [Int!]

  """All values that are not contained in given list."""
  player1set_not_in: [Int!]

  """All values less than the given value."""
  player1set_lt: Int

  """All values less than or equal the given value."""
  player1set_lte: Int

  """All values greater than the given value."""
  player1set_gt: Int

  """All values greater than or equal the given value."""
  player1set_gte: Int
  player2set: Int

  """All values that are not equal to given value."""
  player2set_not: Int

  """All values that are contained in given list."""
  player2set_in: [Int!]

  """All values that are not contained in given list."""
  player2set_not_in: [Int!]

  """All values less than the given value."""
  player2set_lt: Int

  """All values less than or equal the given value."""
  player2set_lte: Int

  """All values greater than the given value."""
  player2set_gt: Int

  """All values greater than or equal the given value."""
  player2set_gte: Int
  sumbit: Boolean

  """All values that are not equal to given value."""
  sumbit_not: Boolean
  player1: UserWhereInput
  player2: UserWhereInput
  season: SeasonWhereInput
}

input MatchWhereUniqueInput {
  id: ID
}

type Mutation {
  createAdmin(data: AdminCreateInput!): Admin!
  createCurrent(data: CurrentCreateInput!): Current!
  createStats(data: StatsCreateInput!): Stats!
  createMatch(data: MatchCreateInput!): Match!
  createSeason(data: SeasonCreateInput!): Season!
  createUser(data: UserCreateInput!): User!
  updateAdmin(data: AdminUpdateInput!, where: AdminWhereUniqueInput!): Admin
  updateCurrent(data: CurrentUpdateInput!, where: CurrentWhereUniqueInput!): Current
  updateStats(data: StatsUpdateInput!, where: StatsWhereUniqueInput!): Stats
  updateMatch(data: MatchUpdateInput!, where: MatchWhereUniqueInput!): Match
  updateSeason(data: SeasonUpdateInput!, where: SeasonWhereUniqueInput!): Season
  updateUser(data: UserUpdateInput!, where: UserWhereUniqueInput!): User
  deleteAdmin(where: AdminWhereUniqueInput!): Admin
  deleteCurrent(where: CurrentWhereUniqueInput!): Current
  deleteStats(where: StatsWhereUniqueInput!): Stats
  deleteMatch(where: MatchWhereUniqueInput!): Match
  deleteSeason(where: SeasonWhereUniqueInput!): Season
  deleteUser(where: UserWhereUniqueInput!): User
  upsertAdmin(where: AdminWhereUniqueInput!, create: AdminCreateInput!, update: AdminUpdateInput!): Admin!
  upsertCurrent(where: CurrentWhereUniqueInput!, create: CurrentCreateInput!, update: CurrentUpdateInput!): Current!
  upsertStats(where: StatsWhereUniqueInput!, create: StatsCreateInput!, update: StatsUpdateInput!): Stats!
  upsertMatch(where: MatchWhereUniqueInput!, create: MatchCreateInput!, update: MatchUpdateInput!): Match!
  upsertSeason(where: SeasonWhereUniqueInput!, create: SeasonCreateInput!, update: SeasonUpdateInput!): Season!
  upsertUser(where: UserWhereUniqueInput!, create: UserCreateInput!, update: UserUpdateInput!): User!
  updateManyAdmins(data: AdminUpdateInput!, where: AdminWhereInput): BatchPayload!
  updateManyCurrents(data: CurrentUpdateInput!, where: CurrentWhereInput): BatchPayload!
  updateManyStatses(data: StatsUpdateInput!, where: StatsWhereInput): BatchPayload!
  updateManyMatches(data: MatchUpdateInput!, where: MatchWhereInput): BatchPayload!
  updateManySeasons(data: SeasonUpdateInput!, where: SeasonWhereInput): BatchPayload!
  updateManyUsers(data: UserUpdateInput!, where: UserWhereInput): BatchPayload!
  deleteManyAdmins(where: AdminWhereInput): BatchPayload!
  deleteManyCurrents(where: CurrentWhereInput): BatchPayload!
  deleteManyStatses(where: StatsWhereInput): BatchPayload!
  deleteManyMatches(where: MatchWhereInput): BatchPayload!
  deleteManySeasons(where: SeasonWhereInput): BatchPayload!
  deleteManyUsers(where: UserWhereInput): BatchPayload!
}

enum MutationType {
  CREATED
  UPDATED
  DELETED
}

"""An object with an ID"""
interface Node {
  """The id of the object."""
  id: ID!
}

"""Information about pagination in a connection."""
type PageInfo {
  """When paginating forwards, are there more items?"""
  hasNextPage: Boolean!

  """When paginating backwards, are there more items?"""
  hasPreviousPage: Boolean!

  """When paginating backwards, the cursor to continue."""
  startCursor: String

  """When paginating forwards, the cursor to continue."""
  endCursor: String
}

type Query {
  admins(where: AdminWhereInput, orderBy: AdminOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Admin]!
  currents(where: CurrentWhereInput, orderBy: CurrentOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Current]!
  statses(where: StatsWhereInput, orderBy: StatsOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Stats]!
  matches(where: MatchWhereInput, orderBy: MatchOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Match]!
  seasons(where: SeasonWhereInput, orderBy: SeasonOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Season]!
  users(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User]!
  admin(where: AdminWhereUniqueInput!): Admin
  current(where: CurrentWhereUniqueInput!): Current
  stats(where: StatsWhereUniqueInput!): Stats
  match(where: MatchWhereUniqueInput!): Match
  season(where: SeasonWhereUniqueInput!): Season
  user(where: UserWhereUniqueInput!): User
  adminsConnection(where: AdminWhereInput, orderBy: AdminOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): AdminConnection!
  currentsConnection(where: CurrentWhereInput, orderBy: CurrentOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): CurrentConnection!
  statsesConnection(where: StatsWhereInput, orderBy: StatsOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): StatsConnection!
  matchesConnection(where: MatchWhereInput, orderBy: MatchOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): MatchConnection!
  seasonsConnection(where: SeasonWhereInput, orderBy: SeasonOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): SeasonConnection!
  usersConnection(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): UserConnection!

  """Fetches an object given its ID"""
  node(
    """The ID of an object"""
    id: ID!
  ): Node
}

type Season implements Node {
  id: ID!
  season: Int!
  players(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User!]
  round: Int!
}

"""A connection to a list of items."""
type SeasonConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [SeasonEdge]!
  aggregate: AggregateSeason!
}

input SeasonCreateInput {
  season: Int!
  round: Int
  players: UserCreateManyWithoutSeasonInput
}

input SeasonCreateOneInput {
  create: SeasonCreateInput
  connect: SeasonWhereUniqueInput
}

input SeasonCreateOneWithoutPlayersInput {
  create: SeasonCreateWithoutPlayersInput
  connect: SeasonWhereUniqueInput
}

input SeasonCreateWithoutPlayersInput {
  season: Int!
  round: Int
}

"""An edge in a connection."""
type SeasonEdge {
  """The item at the end of the edge."""
  node: Season!

  """A cursor for use in pagination."""
  cursor: String!
}

enum SeasonOrderByInput {
  id_ASC
  id_DESC
  season_ASC
  season_DESC
  round_ASC
  round_DESC
  updatedAt_ASC
  updatedAt_DESC
  createdAt_ASC
  createdAt_DESC
}

type SeasonPreviousValues {
  id: ID!
  season: Int!
  round: Int!
}

type SeasonSubscriptionPayload {
  mutation: MutationType!
  node: Season
  updatedFields: [String!]
  previousValues: SeasonPreviousValues
}

input SeasonSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [SeasonSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [SeasonSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [SeasonSubscriptionWhereInput!]

  """
  The subscription event gets dispatched when it's listed in mutation_in
  """
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: SeasonWhereInput
}

input SeasonUpdateDataInput {
  season: Int
  round: Int
  players: UserUpdateManyWithoutSeasonInput
}

input SeasonUpdateInput {
  season: Int
  round: Int
  players: UserUpdateManyWithoutSeasonInput
}

input SeasonUpdateOneInput {
  create: SeasonCreateInput
  connect: SeasonWhereUniqueInput
  delete: Boolean
  update: SeasonUpdateDataInput
  upsert: SeasonUpsertNestedInput
}

input SeasonUpdateOneWithoutPlayersInput {
  create: SeasonCreateWithoutPlayersInput
  connect: SeasonWhereUniqueInput
  disconnect: Boolean
  delete: Boolean
  update: SeasonUpdateWithoutPlayersDataInput
  upsert: SeasonUpsertWithoutPlayersInput
}

input SeasonUpdateWithoutPlayersDataInput {
  season: Int
  round: Int
}

input SeasonUpsertNestedInput {
  update: SeasonUpdateDataInput!
  create: SeasonCreateInput!
}

input SeasonUpsertWithoutPlayersInput {
  update: SeasonUpdateWithoutPlayersDataInput!
  create: SeasonCreateWithoutPlayersInput!
}

input SeasonWhereInput {
  """Logical AND on all given filters."""
  AND: [SeasonWhereInput!]

  """Logical OR on all given filters."""
  OR: [SeasonWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [SeasonWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  season: Int

  """All values that are not equal to given value."""
  season_not: Int

  """All values that are contained in given list."""
  season_in: [Int!]

  """All values that are not contained in given list."""
  season_not_in: [Int!]

  """All values less than the given value."""
  season_lt: Int

  """All values less than or equal the given value."""
  season_lte: Int

  """All values greater than the given value."""
  season_gt: Int

  """All values greater than or equal the given value."""
  season_gte: Int
  round: Int

  """All values that are not equal to given value."""
  round_not: Int

  """All values that are contained in given list."""
  round_in: [Int!]

  """All values that are not contained in given list."""
  round_not_in: [Int!]

  """All values less than the given value."""
  round_lt: Int

  """All values less than or equal the given value."""
  round_lte: Int

  """All values greater than the given value."""
  round_gt: Int

  """All values greater than or equal the given value."""
  round_gte: Int
  players_every: UserWhereInput
  players_some: UserWhereInput
  players_none: UserWhereInput
}

input SeasonWhereUniqueInput {
  id: ID
  season: Int
}

type Stats implements Node {
  id: ID!
  player(where: UserWhereInput): User!
  playeremail: String!
  wins: Int
  netwins: Float
  losts: Int
  totalsetwon: Int
  totalsetlost: Int
  rating: Float
  season(where: SeasonWhereInput): Season!
}

"""A connection to a list of items."""
type StatsConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [StatsEdge]!
  aggregate: AggregateStats!
}

input StatsCreateInput {
  playeremail: String!
  wins: Int
  netwins: Float
  losts: Int
  totalsetwon: Int
  totalsetlost: Int
  rating: Float
  player: UserCreateOneWithoutStatsInput!
  season: SeasonCreateOneInput!
}

input StatsCreateManyWithoutPlayerInput {
  create: [StatsCreateWithoutPlayerInput!]
  connect: [StatsWhereUniqueInput!]
}

input StatsCreateWithoutPlayerInput {
  playeremail: String!
  wins: Int
  netwins: Float
  losts: Int
  totalsetwon: Int
  totalsetlost: Int
  rating: Float
  season: SeasonCreateOneInput!
}

"""An edge in a connection."""
type StatsEdge {
  """The item at the end of the edge."""
  node: Stats!

  """A cursor for use in pagination."""
  cursor: String!
}

enum StatsOrderByInput {
  id_ASC
  id_DESC
  playeremail_ASC
  playeremail_DESC
  wins_ASC
  wins_DESC
  netwins_ASC
  netwins_DESC
  losts_ASC
  losts_DESC
  totalsetwon_ASC
  totalsetwon_DESC
  totalsetlost_ASC
  totalsetlost_DESC
  rating_ASC
  rating_DESC
  updatedAt_ASC
  updatedAt_DESC
  createdAt_ASC
  createdAt_DESC
}

type StatsPreviousValues {
  id: ID!
  playeremail: String!
  wins: Int
  netwins: Float
  losts: Int
  totalsetwon: Int
  totalsetlost: Int
  rating: Float
}

type StatsSubscriptionPayload {
  mutation: MutationType!
  node: Stats
  updatedFields: [String!]
  previousValues: StatsPreviousValues
}

input StatsSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [StatsSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [StatsSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [StatsSubscriptionWhereInput!]

  """
  The subscription event gets dispatched when it's listed in mutation_in
  """
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: StatsWhereInput
}

input StatsUpdateInput {
  playeremail: String
  wins: Int
  netwins: Float
  losts: Int
  totalsetwon: Int
  totalsetlost: Int
  rating: Float
  player: UserUpdateOneWithoutStatsInput
  season: SeasonUpdateOneInput
}

input StatsUpdateManyWithoutPlayerInput {
  create: [StatsCreateWithoutPlayerInput!]
  connect: [StatsWhereUniqueInput!]
  disconnect: [StatsWhereUniqueInput!]
  delete: [StatsWhereUniqueInput!]
  update: [StatsUpdateWithWhereUniqueWithoutPlayerInput!]
  upsert: [StatsUpsertWithWhereUniqueWithoutPlayerInput!]
}

input StatsUpdateWithoutPlayerDataInput {
  playeremail: String
  wins: Int
  netwins: Float
  losts: Int
  totalsetwon: Int
  totalsetlost: Int
  rating: Float
  season: SeasonUpdateOneInput
}

input StatsUpdateWithWhereUniqueWithoutPlayerInput {
  where: StatsWhereUniqueInput!
  data: StatsUpdateWithoutPlayerDataInput!
}

input StatsUpsertWithWhereUniqueWithoutPlayerInput {
  where: StatsWhereUniqueInput!
  update: StatsUpdateWithoutPlayerDataInput!
  create: StatsCreateWithoutPlayerInput!
}

input StatsWhereInput {
  """Logical AND on all given filters."""
  AND: [StatsWhereInput!]

  """Logical OR on all given filters."""
  OR: [StatsWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [StatsWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  playeremail: String

  """All values that are not equal to given value."""
  playeremail_not: String

  """All values that are contained in given list."""
  playeremail_in: [String!]

  """All values that are not contained in given list."""
  playeremail_not_in: [String!]

  """All values less than the given value."""
  playeremail_lt: String

  """All values less than or equal the given value."""
  playeremail_lte: String

  """All values greater than the given value."""
  playeremail_gt: String

  """All values greater than or equal the given value."""
  playeremail_gte: String

  """All values containing the given string."""
  playeremail_contains: String

  """All values not containing the given string."""
  playeremail_not_contains: String

  """All values starting with the given string."""
  playeremail_starts_with: String

  """All values not starting with the given string."""
  playeremail_not_starts_with: String

  """All values ending with the given string."""
  playeremail_ends_with: String

  """All values not ending with the given string."""
  playeremail_not_ends_with: String
  wins: Int

  """All values that are not equal to given value."""
  wins_not: Int

  """All values that are contained in given list."""
  wins_in: [Int!]

  """All values that are not contained in given list."""
  wins_not_in: [Int!]

  """All values less than the given value."""
  wins_lt: Int

  """All values less than or equal the given value."""
  wins_lte: Int

  """All values greater than the given value."""
  wins_gt: Int

  """All values greater than or equal the given value."""
  wins_gte: Int
  netwins: Float

  """All values that are not equal to given value."""
  netwins_not: Float

  """All values that are contained in given list."""
  netwins_in: [Float!]

  """All values that are not contained in given list."""
  netwins_not_in: [Float!]

  """All values less than the given value."""
  netwins_lt: Float

  """All values less than or equal the given value."""
  netwins_lte: Float

  """All values greater than the given value."""
  netwins_gt: Float

  """All values greater than or equal the given value."""
  netwins_gte: Float
  losts: Int

  """All values that are not equal to given value."""
  losts_not: Int

  """All values that are contained in given list."""
  losts_in: [Int!]

  """All values that are not contained in given list."""
  losts_not_in: [Int!]

  """All values less than the given value."""
  losts_lt: Int

  """All values less than or equal the given value."""
  losts_lte: Int

  """All values greater than the given value."""
  losts_gt: Int

  """All values greater than or equal the given value."""
  losts_gte: Int
  totalsetwon: Int

  """All values that are not equal to given value."""
  totalsetwon_not: Int

  """All values that are contained in given list."""
  totalsetwon_in: [Int!]

  """All values that are not contained in given list."""
  totalsetwon_not_in: [Int!]

  """All values less than the given value."""
  totalsetwon_lt: Int

  """All values less than or equal the given value."""
  totalsetwon_lte: Int

  """All values greater than the given value."""
  totalsetwon_gt: Int

  """All values greater than or equal the given value."""
  totalsetwon_gte: Int
  totalsetlost: Int

  """All values that are not equal to given value."""
  totalsetlost_not: Int

  """All values that are contained in given list."""
  totalsetlost_in: [Int!]

  """All values that are not contained in given list."""
  totalsetlost_not_in: [Int!]

  """All values less than the given value."""
  totalsetlost_lt: Int

  """All values less than or equal the given value."""
  totalsetlost_lte: Int

  """All values greater than the given value."""
  totalsetlost_gt: Int

  """All values greater than or equal the given value."""
  totalsetlost_gte: Int
  rating: Float

  """All values that are not equal to given value."""
  rating_not: Float

  """All values that are contained in given list."""
  rating_in: [Float!]

  """All values that are not contained in given list."""
  rating_not_in: [Float!]

  """All values less than the given value."""
  rating_lt: Float

  """All values less than or equal the given value."""
  rating_lte: Float

  """All values greater than the given value."""
  rating_gt: Float

  """All values greater than or equal the given value."""
  rating_gte: Float
  player: UserWhereInput
  season: SeasonWhereInput
}

input StatsWhereUniqueInput {
  id: ID
}

type Subscription {
  admin(where: AdminSubscriptionWhereInput): AdminSubscriptionPayload
  current(where: CurrentSubscriptionWhereInput): CurrentSubscriptionPayload
  stats(where: StatsSubscriptionWhereInput): StatsSubscriptionPayload
  match(where: MatchSubscriptionWhereInput): MatchSubscriptionPayload
  season(where: SeasonSubscriptionWhereInput): SeasonSubscriptionPayload
  user(where: UserSubscriptionWhereInput): UserSubscriptionPayload
}

type User implements Node {
  id: ID!
  email: String!
  password: String!
  name: String!
  stats(where: StatsWhereInput, orderBy: StatsOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Stats!]
  matches(where: MatchWhereInput, orderBy: MatchOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Match!]
  season(where: SeasonWhereInput): Season
  residentialcollege: String
  bio: String
  location: String
  confirmed: Boolean!
  deactivated: Boolean!
}

"""A connection to a list of items."""
type UserConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [UserEdge]!
  aggregate: AggregateUser!
}

input UserCreateInput {
  email: String!
  password: String!
  name: String!
  residentialcollege: String
  bio: String
  location: String
  confirmed: Boolean
  deactivated: Boolean
  stats: StatsCreateManyWithoutPlayerInput
  matches: MatchCreateManyInput
  season: SeasonCreateOneWithoutPlayersInput
}

input UserCreateManyWithoutSeasonInput {
  create: [UserCreateWithoutSeasonInput!]
  connect: [UserWhereUniqueInput!]
}

input UserCreateOneInput {
  create: UserCreateInput
  connect: UserWhereUniqueInput
}

input UserCreateOneWithoutStatsInput {
  create: UserCreateWithoutStatsInput
  connect: UserWhereUniqueInput
}

input UserCreateWithoutSeasonInput {
  email: String!
  password: String!
  name: String!
  residentialcollege: String
  bio: String
  location: String
  confirmed: Boolean
  deactivated: Boolean
  stats: StatsCreateManyWithoutPlayerInput
  matches: MatchCreateManyInput
}

input UserCreateWithoutStatsInput {
  email: String!
  password: String!
  name: String!
  residentialcollege: String
  bio: String
  location: String
  confirmed: Boolean
  deactivated: Boolean
  matches: MatchCreateManyInput
  season: SeasonCreateOneWithoutPlayersInput
}

"""An edge in a connection."""
type UserEdge {
  """The item at the end of the edge."""
  node: User!

  """A cursor for use in pagination."""
  cursor: String!
}

enum UserOrderByInput {
  id_ASC
  id_DESC
  email_ASC
  email_DESC
  password_ASC
  password_DESC
  name_ASC
  name_DESC
  residentialcollege_ASC
  residentialcollege_DESC
  bio_ASC
  bio_DESC
  location_ASC
  location_DESC
  confirmed_ASC
  confirmed_DESC
  deactivated_ASC
  deactivated_DESC
  updatedAt_ASC
  updatedAt_DESC
  createdAt_ASC
  createdAt_DESC
}

type UserPreviousValues {
  id: ID!
  email: String!
  password: String!
  name: String!
  residentialcollege: String
  bio: String
  location: String
  confirmed: Boolean!
  deactivated: Boolean!
}

type UserSubscriptionPayload {
  mutation: MutationType!
  node: User
  updatedFields: [String!]
  previousValues: UserPreviousValues
}

input UserSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [UserSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [UserSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [UserSubscriptionWhereInput!]

  """
  The subscription event gets dispatched when it's listed in mutation_in
  """
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: UserWhereInput
}

input UserUpdateDataInput {
  email: String
  password: String
  name: String
  residentialcollege: String
  bio: String
  location: String
  confirmed: Boolean
  deactivated: Boolean
  stats: StatsUpdateManyWithoutPlayerInput
  matches: MatchUpdateManyInput
  season: SeasonUpdateOneWithoutPlayersInput
}

input UserUpdateInput {
  email: String
  password: String
  name: String
  residentialcollege: String
  bio: String
  location: String
  confirmed: Boolean
  deactivated: Boolean
  stats: StatsUpdateManyWithoutPlayerInput
  matches: MatchUpdateManyInput
  season: SeasonUpdateOneWithoutPlayersInput
}

input UserUpdateManyWithoutSeasonInput {
  create: [UserCreateWithoutSeasonInput!]
  connect: [UserWhereUniqueInput!]
  disconnect: [UserWhereUniqueInput!]
  delete: [UserWhereUniqueInput!]
  update: [UserUpdateWithWhereUniqueWithoutSeasonInput!]
  upsert: [UserUpsertWithWhereUniqueWithoutSeasonInput!]
}

input UserUpdateOneInput {
  create: UserCreateInput
  connect: UserWhereUniqueInput
  delete: Boolean
  update: UserUpdateDataInput
  upsert: UserUpsertNestedInput
}

input UserUpdateOneWithoutStatsInput {
  create: UserCreateWithoutStatsInput
  connect: UserWhereUniqueInput
  delete: Boolean
  update: UserUpdateWithoutStatsDataInput
  upsert: UserUpsertWithoutStatsInput
}

input UserUpdateWithoutSeasonDataInput {
  email: String
  password: String
  name: String
  residentialcollege: String
  bio: String
  location: String
  confirmed: Boolean
  deactivated: Boolean
  stats: StatsUpdateManyWithoutPlayerInput
  matches: MatchUpdateManyInput
}

input UserUpdateWithoutStatsDataInput {
  email: String
  password: String
  name: String
  residentialcollege: String
  bio: String
  location: String
  confirmed: Boolean
  deactivated: Boolean
  matches: MatchUpdateManyInput
  season: SeasonUpdateOneWithoutPlayersInput
}

input UserUpdateWithWhereUniqueWithoutSeasonInput {
  where: UserWhereUniqueInput!
  data: UserUpdateWithoutSeasonDataInput!
}

input UserUpsertNestedInput {
  update: UserUpdateDataInput!
  create: UserCreateInput!
}

input UserUpsertWithoutStatsInput {
  update: UserUpdateWithoutStatsDataInput!
  create: UserCreateWithoutStatsInput!
}

input UserUpsertWithWhereUniqueWithoutSeasonInput {
  where: UserWhereUniqueInput!
  update: UserUpdateWithoutSeasonDataInput!
  create: UserCreateWithoutSeasonInput!
}

input UserWhereInput {
  """Logical AND on all given filters."""
  AND: [UserWhereInput!]

  """Logical OR on all given filters."""
  OR: [UserWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [UserWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  email: String

  """All values that are not equal to given value."""
  email_not: String

  """All values that are contained in given list."""
  email_in: [String!]

  """All values that are not contained in given list."""
  email_not_in: [String!]

  """All values less than the given value."""
  email_lt: String

  """All values less than or equal the given value."""
  email_lte: String

  """All values greater than the given value."""
  email_gt: String

  """All values greater than or equal the given value."""
  email_gte: String

  """All values containing the given string."""
  email_contains: String

  """All values not containing the given string."""
  email_not_contains: String

  """All values starting with the given string."""
  email_starts_with: String

  """All values not starting with the given string."""
  email_not_starts_with: String

  """All values ending with the given string."""
  email_ends_with: String

  """All values not ending with the given string."""
  email_not_ends_with: String
  password: String

  """All values that are not equal to given value."""
  password_not: String

  """All values that are contained in given list."""
  password_in: [String!]

  """All values that are not contained in given list."""
  password_not_in: [String!]

  """All values less than the given value."""
  password_lt: String

  """All values less than or equal the given value."""
  password_lte: String

  """All values greater than the given value."""
  password_gt: String

  """All values greater than or equal the given value."""
  password_gte: String

  """All values containing the given string."""
  password_contains: String

  """All values not containing the given string."""
  password_not_contains: String

  """All values starting with the given string."""
  password_starts_with: String

  """All values not starting with the given string."""
  password_not_starts_with: String

  """All values ending with the given string."""
  password_ends_with: String

  """All values not ending with the given string."""
  password_not_ends_with: String
  name: String

  """All values that are not equal to given value."""
  name_not: String

  """All values that are contained in given list."""
  name_in: [String!]

  """All values that are not contained in given list."""
  name_not_in: [String!]

  """All values less than the given value."""
  name_lt: String

  """All values less than or equal the given value."""
  name_lte: String

  """All values greater than the given value."""
  name_gt: String

  """All values greater than or equal the given value."""
  name_gte: String

  """All values containing the given string."""
  name_contains: String

  """All values not containing the given string."""
  name_not_contains: String

  """All values starting with the given string."""
  name_starts_with: String

  """All values not starting with the given string."""
  name_not_starts_with: String

  """All values ending with the given string."""
  name_ends_with: String

  """All values not ending with the given string."""
  name_not_ends_with: String
  residentialcollege: String

  """All values that are not equal to given value."""
  residentialcollege_not: String

  """All values that are contained in given list."""
  residentialcollege_in: [String!]

  """All values that are not contained in given list."""
  residentialcollege_not_in: [String!]

  """All values less than the given value."""
  residentialcollege_lt: String

  """All values less than or equal the given value."""
  residentialcollege_lte: String

  """All values greater than the given value."""
  residentialcollege_gt: String

  """All values greater than or equal the given value."""
  residentialcollege_gte: String

  """All values containing the given string."""
  residentialcollege_contains: String

  """All values not containing the given string."""
  residentialcollege_not_contains: String

  """All values starting with the given string."""
  residentialcollege_starts_with: String

  """All values not starting with the given string."""
  residentialcollege_not_starts_with: String

  """All values ending with the given string."""
  residentialcollege_ends_with: String

  """All values not ending with the given string."""
  residentialcollege_not_ends_with: String
  bio: String

  """All values that are not equal to given value."""
  bio_not: String

  """All values that are contained in given list."""
  bio_in: [String!]

  """All values that are not contained in given list."""
  bio_not_in: [String!]

  """All values less than the given value."""
  bio_lt: String

  """All values less than or equal the given value."""
  bio_lte: String

  """All values greater than the given value."""
  bio_gt: String

  """All values greater than or equal the given value."""
  bio_gte: String

  """All values containing the given string."""
  bio_contains: String

  """All values not containing the given string."""
  bio_not_contains: String

  """All values starting with the given string."""
  bio_starts_with: String

  """All values not starting with the given string."""
  bio_not_starts_with: String

  """All values ending with the given string."""
  bio_ends_with: String

  """All values not ending with the given string."""
  bio_not_ends_with: String
  location: String

  """All values that are not equal to given value."""
  location_not: String

  """All values that are contained in given list."""
  location_in: [String!]

  """All values that are not contained in given list."""
  location_not_in: [String!]

  """All values less than the given value."""
  location_lt: String

  """All values less than or equal the given value."""
  location_lte: String

  """All values greater than the given value."""
  location_gt: String

  """All values greater than or equal the given value."""
  location_gte: String

  """All values containing the given string."""
  location_contains: String

  """All values not containing the given string."""
  location_not_contains: String

  """All values starting with the given string."""
  location_starts_with: String

  """All values not starting with the given string."""
  location_not_starts_with: String

  """All values ending with the given string."""
  location_ends_with: String

  """All values not ending with the given string."""
  location_not_ends_with: String
  confirmed: Boolean

  """All values that are not equal to given value."""
  confirmed_not: Boolean
  deactivated: Boolean

  """All values that are not equal to given value."""
  deactivated_not: Boolean
  stats_every: StatsWhereInput
  stats_some: StatsWhereInput
  stats_none: StatsWhereInput
  matches_every: MatchWhereInput
  matches_some: MatchWhereInput
  matches_none: MatchWhereInput
  season: SeasonWhereInput
}

input UserWhereUniqueInput {
  id: ID
  email: String
}
`

export const Prisma = makePrismaBindingClass<BindingConstructor<Prisma>>({typeDefs})

/**
 * Types
*/

export type CurrentOrderByInput =   'id_ASC' |
  'id_DESC' |
  'season_ASC' |
  'season_DESC' |
  'round_ASC' |
  'round_DESC' |
  'timer_ASC' |
  'timer_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC'

export type StatsOrderByInput =   'id_ASC' |
  'id_DESC' |
  'playeremail_ASC' |
  'playeremail_DESC' |
  'wins_ASC' |
  'wins_DESC' |
  'netwins_ASC' |
  'netwins_DESC' |
  'losts_ASC' |
  'losts_DESC' |
  'totalsetwon_ASC' |
  'totalsetwon_DESC' |
  'totalsetlost_ASC' |
  'totalsetlost_DESC' |
  'rating_ASC' |
  'rating_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC'

export type MatchOrderByInput =   'id_ASC' |
  'id_DESC' |
  'player1set_ASC' |
  'player1set_DESC' |
  'player2set_ASC' |
  'player2set_DESC' |
  'sumbit_ASC' |
  'sumbit_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC'

export type UserOrderByInput =   'id_ASC' |
  'id_DESC' |
  'email_ASC' |
  'email_DESC' |
  'password_ASC' |
  'password_DESC' |
  'name_ASC' |
  'name_DESC' |
  'residentialcollege_ASC' |
  'residentialcollege_DESC' |
  'bio_ASC' |
  'bio_DESC' |
  'location_ASC' |
  'location_DESC' |
  'confirmed_ASC' |
  'confirmed_DESC' |
  'deactivated_ASC' |
  'deactivated_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC'

export type SeasonOrderByInput =   'id_ASC' |
  'id_DESC' |
  'season_ASC' |
  'season_DESC' |
  'round_ASC' |
  'round_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC'

export type AdminOrderByInput =   'id_ASC' |
  'id_DESC' |
  'email_ASC' |
  'email_DESC' |
  'password_ASC' |
  'password_DESC' |
  'name_ASC' |
  'name_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC'

export type MutationType =   'CREATED' |
  'UPDATED' |
  'DELETED'

export interface StatsCreateManyWithoutPlayerInput {
  create?: StatsCreateWithoutPlayerInput[] | StatsCreateWithoutPlayerInput
  connect?: StatsWhereUniqueInput[] | StatsWhereUniqueInput
}

export interface AdminWhereInput {
  AND?: AdminWhereInput[] | AdminWhereInput
  OR?: AdminWhereInput[] | AdminWhereInput
  NOT?: AdminWhereInput[] | AdminWhereInput
  id?: ID_Input
  id_not?: ID_Input
  id_in?: ID_Input[] | ID_Input
  id_not_in?: ID_Input[] | ID_Input
  id_lt?: ID_Input
  id_lte?: ID_Input
  id_gt?: ID_Input
  id_gte?: ID_Input
  id_contains?: ID_Input
  id_not_contains?: ID_Input
  id_starts_with?: ID_Input
  id_not_starts_with?: ID_Input
  id_ends_with?: ID_Input
  id_not_ends_with?: ID_Input
  email?: String
  email_not?: String
  email_in?: String[] | String
  email_not_in?: String[] | String
  email_lt?: String
  email_lte?: String
  email_gt?: String
  email_gte?: String
  email_contains?: String
  email_not_contains?: String
  email_starts_with?: String
  email_not_starts_with?: String
  email_ends_with?: String
  email_not_ends_with?: String
  password?: String
  password_not?: String
  password_in?: String[] | String
  password_not_in?: String[] | String
  password_lt?: String
  password_lte?: String
  password_gt?: String
  password_gte?: String
  password_contains?: String
  password_not_contains?: String
  password_starts_with?: String
  password_not_starts_with?: String
  password_ends_with?: String
  password_not_ends_with?: String
  name?: String
  name_not?: String
  name_in?: String[] | String
  name_not_in?: String[] | String
  name_lt?: String
  name_lte?: String
  name_gt?: String
  name_gte?: String
  name_contains?: String
  name_not_contains?: String
  name_starts_with?: String
  name_not_starts_with?: String
  name_ends_with?: String
  name_not_ends_with?: String
}

export interface UserUpdateManyWithoutSeasonInput {
  create?: UserCreateWithoutSeasonInput[] | UserCreateWithoutSeasonInput
  connect?: UserWhereUniqueInput[] | UserWhereUniqueInput
  disconnect?: UserWhereUniqueInput[] | UserWhereUniqueInput
  delete?: UserWhereUniqueInput[] | UserWhereUniqueInput
  update?: UserUpdateWithWhereUniqueWithoutSeasonInput[] | UserUpdateWithWhereUniqueWithoutSeasonInput
  upsert?: UserUpsertWithWhereUniqueWithoutSeasonInput[] | UserUpsertWithWhereUniqueWithoutSeasonInput
}

export interface MatchUpdateDataInput {
  player1set?: Int
  player2set?: Int
  sumbit?: Boolean
  player1?: UserUpdateOneInput
  player2?: UserUpdateOneInput
  season?: SeasonUpdateOneInput
}

export interface SeasonUpdateDataInput {
  season?: Int
  round?: Int
  players?: UserUpdateManyWithoutSeasonInput
}

export interface UserCreateWithoutSeasonInput {
  email: String
  password: String
  name: String
  residentialcollege?: String
  bio?: String
  location?: String
  confirmed?: Boolean
  deactivated?: Boolean
  stats?: StatsCreateManyWithoutPlayerInput
  matches?: MatchCreateManyInput
}

export interface SeasonUpdateOneInput {
  create?: SeasonCreateInput
  connect?: SeasonWhereUniqueInput
  delete?: Boolean
  update?: SeasonUpdateDataInput
  upsert?: SeasonUpsertNestedInput
}

export interface UserWhereInput {
  AND?: UserWhereInput[] | UserWhereInput
  OR?: UserWhereInput[] | UserWhereInput
  NOT?: UserWhereInput[] | UserWhereInput
  id?: ID_Input
  id_not?: ID_Input
  id_in?: ID_Input[] | ID_Input
  id_not_in?: ID_Input[] | ID_Input
  id_lt?: ID_Input
  id_lte?: ID_Input
  id_gt?: ID_Input
  id_gte?: ID_Input
  id_contains?: ID_Input
  id_not_contains?: ID_Input
  id_starts_with?: ID_Input
  id_not_starts_with?: ID_Input
  id_ends_with?: ID_Input
  id_not_ends_with?: ID_Input
  email?: String
  email_not?: String
  email_in?: String[] | String
  email_not_in?: String[] | String
  email_lt?: String
  email_lte?: String
  email_gt?: String
  email_gte?: String
  email_contains?: String
  email_not_contains?: String
  email_starts_with?: String
  email_not_starts_with?: String
  email_ends_with?: String
  email_not_ends_with?: String
  password?: String
  password_not?: String
  password_in?: String[] | String
  password_not_in?: String[] | String
  password_lt?: String
  password_lte?: String
  password_gt?: String
  password_gte?: String
  password_contains?: String
  password_not_contains?: String
  password_starts_with?: String
  password_not_starts_with?: String
  password_ends_with?: String
  password_not_ends_with?: String
  name?: String
  name_not?: String
  name_in?: String[] | String
  name_not_in?: String[] | String
  name_lt?: String
  name_lte?: String
  name_gt?: String
  name_gte?: String
  name_contains?: String
  name_not_contains?: String
  name_starts_with?: String
  name_not_starts_with?: String
  name_ends_with?: String
  name_not_ends_with?: String
  residentialcollege?: String
  residentialcollege_not?: String
  residentialcollege_in?: String[] | String
  residentialcollege_not_in?: String[] | String
  residentialcollege_lt?: String
  residentialcollege_lte?: String
  residentialcollege_gt?: String
  residentialcollege_gte?: String
  residentialcollege_contains?: String
  residentialcollege_not_contains?: String
  residentialcollege_starts_with?: String
  residentialcollege_not_starts_with?: String
  residentialcollege_ends_with?: String
  residentialcollege_not_ends_with?: String
  bio?: String
  bio_not?: String
  bio_in?: String[] | String
  bio_not_in?: String[] | String
  bio_lt?: String
  bio_lte?: String
  bio_gt?: String
  bio_gte?: String
  bio_contains?: String
  bio_not_contains?: String
  bio_starts_with?: String
  bio_not_starts_with?: String
  bio_ends_with?: String
  bio_not_ends_with?: String
  location?: String
  location_not?: String
  location_in?: String[] | String
  location_not_in?: String[] | String
  location_lt?: String
  location_lte?: String
  location_gt?: String
  location_gte?: String
  location_contains?: String
  location_not_contains?: String
  location_starts_with?: String
  location_not_starts_with?: String
  location_ends_with?: String
  location_not_ends_with?: String
  confirmed?: Boolean
  confirmed_not?: Boolean
  deactivated?: Boolean
  deactivated_not?: Boolean
  stats_every?: StatsWhereInput
  stats_some?: StatsWhereInput
  stats_none?: StatsWhereInput
  matches_every?: MatchWhereInput
  matches_some?: MatchWhereInput
  matches_none?: MatchWhereInput
  season?: SeasonWhereInput
}

export interface StatsUpdateWithoutPlayerDataInput {
  playeremail?: String
  wins?: Int
  netwins?: Float
  losts?: Int
  totalsetwon?: Int
  totalsetlost?: Int
  rating?: Float
  season?: SeasonUpdateOneInput
}

export interface MatchWhereInput {
  AND?: MatchWhereInput[] | MatchWhereInput
  OR?: MatchWhereInput[] | MatchWhereInput
  NOT?: MatchWhereInput[] | MatchWhereInput
  id?: ID_Input
  id_not?: ID_Input
  id_in?: ID_Input[] | ID_Input
  id_not_in?: ID_Input[] | ID_Input
  id_lt?: ID_Input
  id_lte?: ID_Input
  id_gt?: ID_Input
  id_gte?: ID_Input
  id_contains?: ID_Input
  id_not_contains?: ID_Input
  id_starts_with?: ID_Input
  id_not_starts_with?: ID_Input
  id_ends_with?: ID_Input
  id_not_ends_with?: ID_Input
  player1set?: Int
  player1set_not?: Int
  player1set_in?: Int[] | Int
  player1set_not_in?: Int[] | Int
  player1set_lt?: Int
  player1set_lte?: Int
  player1set_gt?: Int
  player1set_gte?: Int
  player2set?: Int
  player2set_not?: Int
  player2set_in?: Int[] | Int
  player2set_not_in?: Int[] | Int
  player2set_lt?: Int
  player2set_lte?: Int
  player2set_gt?: Int
  player2set_gte?: Int
  sumbit?: Boolean
  sumbit_not?: Boolean
  player1?: UserWhereInput
  player2?: UserWhereInput
  season?: SeasonWhereInput
}

export interface StatsUpdateWithWhereUniqueWithoutPlayerInput {
  where: StatsWhereUniqueInput
  data: StatsUpdateWithoutPlayerDataInput
}

export interface CurrentWhereInput {
  AND?: CurrentWhereInput[] | CurrentWhereInput
  OR?: CurrentWhereInput[] | CurrentWhereInput
  NOT?: CurrentWhereInput[] | CurrentWhereInput
  id?: ID_Input
  id_not?: ID_Input
  id_in?: ID_Input[] | ID_Input
  id_not_in?: ID_Input[] | ID_Input
  id_lt?: ID_Input
  id_lte?: ID_Input
  id_gt?: ID_Input
  id_gte?: ID_Input
  id_contains?: ID_Input
  id_not_contains?: ID_Input
  id_starts_with?: ID_Input
  id_not_starts_with?: ID_Input
  id_ends_with?: ID_Input
  id_not_ends_with?: ID_Input
  season?: Int
  season_not?: Int
  season_in?: Int[] | Int
  season_not_in?: Int[] | Int
  season_lt?: Int
  season_lte?: Int
  season_gt?: Int
  season_gte?: Int
  round?: Int
  round_not?: Int
  round_in?: Int[] | Int
  round_not_in?: Int[] | Int
  round_lt?: Int
  round_lte?: Int
  round_gt?: Int
  round_gte?: Int
  timer?: String
  timer_not?: String
  timer_in?: String[] | String
  timer_not_in?: String[] | String
  timer_lt?: String
  timer_lte?: String
  timer_gt?: String
  timer_gte?: String
  timer_contains?: String
  timer_not_contains?: String
  timer_starts_with?: String
  timer_not_starts_with?: String
  timer_ends_with?: String
  timer_not_ends_with?: String
}

export interface StatsUpdateManyWithoutPlayerInput {
  create?: StatsCreateWithoutPlayerInput[] | StatsCreateWithoutPlayerInput
  connect?: StatsWhereUniqueInput[] | StatsWhereUniqueInput
  disconnect?: StatsWhereUniqueInput[] | StatsWhereUniqueInput
  delete?: StatsWhereUniqueInput[] | StatsWhereUniqueInput
  update?: StatsUpdateWithWhereUniqueWithoutPlayerInput[] | StatsUpdateWithWhereUniqueWithoutPlayerInput
  upsert?: StatsUpsertWithWhereUniqueWithoutPlayerInput[] | StatsUpsertWithWhereUniqueWithoutPlayerInput
}

export interface StatsSubscriptionWhereInput {
  AND?: StatsSubscriptionWhereInput[] | StatsSubscriptionWhereInput
  OR?: StatsSubscriptionWhereInput[] | StatsSubscriptionWhereInput
  NOT?: StatsSubscriptionWhereInput[] | StatsSubscriptionWhereInput
  mutation_in?: MutationType[] | MutationType
  updatedFields_contains?: String
  updatedFields_contains_every?: String[] | String
  updatedFields_contains_some?: String[] | String
  node?: StatsWhereInput
}

export interface UserUpdateDataInput {
  email?: String
  password?: String
  name?: String
  residentialcollege?: String
  bio?: String
  location?: String
  confirmed?: Boolean
  deactivated?: Boolean
  stats?: StatsUpdateManyWithoutPlayerInput
  matches?: MatchUpdateManyInput
  season?: SeasonUpdateOneWithoutPlayersInput
}

export interface CurrentSubscriptionWhereInput {
  AND?: CurrentSubscriptionWhereInput[] | CurrentSubscriptionWhereInput
  OR?: CurrentSubscriptionWhereInput[] | CurrentSubscriptionWhereInput
  NOT?: CurrentSubscriptionWhereInput[] | CurrentSubscriptionWhereInput
  mutation_in?: MutationType[] | MutationType
  updatedFields_contains?: String
  updatedFields_contains_every?: String[] | String
  updatedFields_contains_some?: String[] | String
  node?: CurrentWhereInput
}

export interface AdminCreateInput {
  email: String
  password: String
  name: String
}

export interface UserUpdateInput {
  email?: String
  password?: String
  name?: String
  residentialcollege?: String
  bio?: String
  location?: String
  confirmed?: Boolean
  deactivated?: Boolean
  stats?: StatsUpdateManyWithoutPlayerInput
  matches?: MatchUpdateManyInput
  season?: SeasonUpdateOneWithoutPlayersInput
}

export interface CurrentCreateInput {
  season: Int
  round: Int
  timer?: String
}

export interface AdminWhereUniqueInput {
  id?: ID_Input
  email?: String
}

export interface StatsCreateInput {
  playeremail: String
  wins?: Int
  netwins?: Float
  losts?: Int
  totalsetwon?: Int
  totalsetlost?: Int
  rating?: Float
  player: UserCreateOneWithoutStatsInput
  season: SeasonCreateOneInput
}

export interface StatsWhereUniqueInput {
  id?: ID_Input
}

export interface UserCreateOneWithoutStatsInput {
  create?: UserCreateWithoutStatsInput
  connect?: UserWhereUniqueInput
}

export interface SeasonWhereUniqueInput {
  id?: ID_Input
  season?: Int
}

export interface UserCreateWithoutStatsInput {
  email: String
  password: String
  name: String
  residentialcollege?: String
  bio?: String
  location?: String
  confirmed?: Boolean
  deactivated?: Boolean
  matches?: MatchCreateManyInput
  season?: SeasonCreateOneWithoutPlayersInput
}

export interface MatchUpdateInput {
  player1set?: Int
  player2set?: Int
  sumbit?: Boolean
  player1?: UserUpdateOneInput
  player2?: UserUpdateOneInput
  season?: SeasonUpdateOneInput
}

export interface MatchCreateManyInput {
  create?: MatchCreateInput[] | MatchCreateInput
  connect?: MatchWhereUniqueInput[] | MatchWhereUniqueInput
}

export interface MatchUpsertWithWhereUniqueNestedInput {
  where: MatchWhereUniqueInput
  update: MatchUpdateDataInput
  create: MatchCreateInput
}

export interface MatchCreateInput {
  player1set?: Int
  player2set?: Int
  sumbit?: Boolean
  player1: UserCreateOneInput
  player2?: UserCreateOneInput
  season: SeasonCreateOneInput
}

export interface SeasonUpsertWithoutPlayersInput {
  update: SeasonUpdateWithoutPlayersDataInput
  create: SeasonCreateWithoutPlayersInput
}

export interface UserCreateOneInput {
  create?: UserCreateInput
  connect?: UserWhereUniqueInput
}

export interface SeasonUpdateOneWithoutPlayersInput {
  create?: SeasonCreateWithoutPlayersInput
  connect?: SeasonWhereUniqueInput
  disconnect?: Boolean
  delete?: Boolean
  update?: SeasonUpdateWithoutPlayersDataInput
  upsert?: SeasonUpsertWithoutPlayersInput
}

export interface UserCreateInput {
  email: String
  password: String
  name: String
  residentialcollege?: String
  bio?: String
  location?: String
  confirmed?: Boolean
  deactivated?: Boolean
  stats?: StatsCreateManyWithoutPlayerInput
  matches?: MatchCreateManyInput
  season?: SeasonCreateOneWithoutPlayersInput
}

export interface SeasonUpsertNestedInput {
  update: SeasonUpdateDataInput
  create: SeasonCreateInput
}

export interface UserUpdateOneInput {
  create?: UserCreateInput
  connect?: UserWhereUniqueInput
  delete?: Boolean
  update?: UserUpdateDataInput
  upsert?: UserUpsertNestedInput
}

export interface UserUpdateWithoutSeasonDataInput {
  email?: String
  password?: String
  name?: String
  residentialcollege?: String
  bio?: String
  location?: String
  confirmed?: Boolean
  deactivated?: Boolean
  stats?: StatsUpdateManyWithoutPlayerInput
  matches?: MatchUpdateManyInput
}

export interface StatsCreateWithoutPlayerInput {
  playeremail: String
  wins?: Int
  netwins?: Float
  losts?: Int
  totalsetwon?: Int
  totalsetlost?: Int
  rating?: Float
  season: SeasonCreateOneInput
}

export interface UserSubscriptionWhereInput {
  AND?: UserSubscriptionWhereInput[] | UserSubscriptionWhereInput
  OR?: UserSubscriptionWhereInput[] | UserSubscriptionWhereInput
  NOT?: UserSubscriptionWhereInput[] | UserSubscriptionWhereInput
  mutation_in?: MutationType[] | MutationType
  updatedFields_contains?: String
  updatedFields_contains_every?: String[] | String
  updatedFields_contains_some?: String[] | String
  node?: UserWhereInput
}

export interface SeasonCreateOneInput {
  create?: SeasonCreateInput
  connect?: SeasonWhereUniqueInput
}

export interface SeasonWhereInput {
  AND?: SeasonWhereInput[] | SeasonWhereInput
  OR?: SeasonWhereInput[] | SeasonWhereInput
  NOT?: SeasonWhereInput[] | SeasonWhereInput
  id?: ID_Input
  id_not?: ID_Input
  id_in?: ID_Input[] | ID_Input
  id_not_in?: ID_Input[] | ID_Input
  id_lt?: ID_Input
  id_lte?: ID_Input
  id_gt?: ID_Input
  id_gte?: ID_Input
  id_contains?: ID_Input
  id_not_contains?: ID_Input
  id_starts_with?: ID_Input
  id_not_starts_with?: ID_Input
  id_ends_with?: ID_Input
  id_not_ends_with?: ID_Input
  season?: Int
  season_not?: Int
  season_in?: Int[] | Int
  season_not_in?: Int[] | Int
  season_lt?: Int
  season_lte?: Int
  season_gt?: Int
  season_gte?: Int
  round?: Int
  round_not?: Int
  round_in?: Int[] | Int
  round_not_in?: Int[] | Int
  round_lt?: Int
  round_lte?: Int
  round_gt?: Int
  round_gte?: Int
  players_every?: UserWhereInput
  players_some?: UserWhereInput
  players_none?: UserWhereInput
}

export interface SeasonCreateInput {
  season: Int
  round?: Int
  players?: UserCreateManyWithoutSeasonInput
}

export interface SeasonUpdateInput {
  season?: Int
  round?: Int
  players?: UserUpdateManyWithoutSeasonInput
}

export interface UserCreateManyWithoutSeasonInput {
  create?: UserCreateWithoutSeasonInput[] | UserCreateWithoutSeasonInput
  connect?: UserWhereUniqueInput[] | UserWhereUniqueInput
}

export interface MatchWhereUniqueInput {
  id?: ID_Input
}

export interface StatsWhereInput {
  AND?: StatsWhereInput[] | StatsWhereInput
  OR?: StatsWhereInput[] | StatsWhereInput
  NOT?: StatsWhereInput[] | StatsWhereInput
  id?: ID_Input
  id_not?: ID_Input
  id_in?: ID_Input[] | ID_Input
  id_not_in?: ID_Input[] | ID_Input
  id_lt?: ID_Input
  id_lte?: ID_Input
  id_gt?: ID_Input
  id_gte?: ID_Input
  id_contains?: ID_Input
  id_not_contains?: ID_Input
  id_starts_with?: ID_Input
  id_not_starts_with?: ID_Input
  id_ends_with?: ID_Input
  id_not_ends_with?: ID_Input
  playeremail?: String
  playeremail_not?: String
  playeremail_in?: String[] | String
  playeremail_not_in?: String[] | String
  playeremail_lt?: String
  playeremail_lte?: String
  playeremail_gt?: String
  playeremail_gte?: String
  playeremail_contains?: String
  playeremail_not_contains?: String
  playeremail_starts_with?: String
  playeremail_not_starts_with?: String
  playeremail_ends_with?: String
  playeremail_not_ends_with?: String
  wins?: Int
  wins_not?: Int
  wins_in?: Int[] | Int
  wins_not_in?: Int[] | Int
  wins_lt?: Int
  wins_lte?: Int
  wins_gt?: Int
  wins_gte?: Int
  netwins?: Float
  netwins_not?: Float
  netwins_in?: Float[] | Float
  netwins_not_in?: Float[] | Float
  netwins_lt?: Float
  netwins_lte?: Float
  netwins_gt?: Float
  netwins_gte?: Float
  losts?: Int
  losts_not?: Int
  losts_in?: Int[] | Int
  losts_not_in?: Int[] | Int
  losts_lt?: Int
  losts_lte?: Int
  losts_gt?: Int
  losts_gte?: Int
  totalsetwon?: Int
  totalsetwon_not?: Int
  totalsetwon_in?: Int[] | Int
  totalsetwon_not_in?: Int[] | Int
  totalsetwon_lt?: Int
  totalsetwon_lte?: Int
  totalsetwon_gt?: Int
  totalsetwon_gte?: Int
  totalsetlost?: Int
  totalsetlost_not?: Int
  totalsetlost_in?: Int[] | Int
  totalsetlost_not_in?: Int[] | Int
  totalsetlost_lt?: Int
  totalsetlost_lte?: Int
  totalsetlost_gt?: Int
  totalsetlost_gte?: Int
  rating?: Float
  rating_not?: Float
  rating_in?: Float[] | Float
  rating_not_in?: Float[] | Float
  rating_lt?: Float
  rating_lte?: Float
  rating_gt?: Float
  rating_gte?: Float
  player?: UserWhereInput
  season?: SeasonWhereInput
}

export interface UserUpsertWithoutStatsInput {
  update: UserUpdateWithoutStatsDataInput
  create: UserCreateWithoutStatsInput
}

export interface SeasonCreateOneWithoutPlayersInput {
  create?: SeasonCreateWithoutPlayersInput
  connect?: SeasonWhereUniqueInput
}

export interface SeasonUpdateWithoutPlayersDataInput {
  season?: Int
  round?: Int
}

export interface SeasonCreateWithoutPlayersInput {
  season: Int
  round?: Int
}

export interface UserUpsertWithWhereUniqueWithoutSeasonInput {
  where: UserWhereUniqueInput
  update: UserUpdateWithoutSeasonDataInput
  create: UserCreateWithoutSeasonInput
}

export interface AdminUpdateInput {
  email?: String
  password?: String
  name?: String
}

export interface SeasonSubscriptionWhereInput {
  AND?: SeasonSubscriptionWhereInput[] | SeasonSubscriptionWhereInput
  OR?: SeasonSubscriptionWhereInput[] | SeasonSubscriptionWhereInput
  NOT?: SeasonSubscriptionWhereInput[] | SeasonSubscriptionWhereInput
  mutation_in?: MutationType[] | MutationType
  updatedFields_contains?: String
  updatedFields_contains_every?: String[] | String
  updatedFields_contains_some?: String[] | String
  node?: SeasonWhereInput
}

export interface CurrentUpdateInput {
  season?: Int
  round?: Int
  timer?: String
}

export interface AdminSubscriptionWhereInput {
  AND?: AdminSubscriptionWhereInput[] | AdminSubscriptionWhereInput
  OR?: AdminSubscriptionWhereInput[] | AdminSubscriptionWhereInput
  NOT?: AdminSubscriptionWhereInput[] | AdminSubscriptionWhereInput
  mutation_in?: MutationType[] | MutationType
  updatedFields_contains?: String
  updatedFields_contains_every?: String[] | String
  updatedFields_contains_some?: String[] | String
  node?: AdminWhereInput
}

export interface StatsUpdateInput {
  playeremail?: String
  wins?: Int
  netwins?: Float
  losts?: Int
  totalsetwon?: Int
  totalsetlost?: Int
  rating?: Float
  player?: UserUpdateOneWithoutStatsInput
  season?: SeasonUpdateOneInput
}

export interface UserWhereUniqueInput {
  id?: ID_Input
  email?: String
}

export interface MatchUpdateWithWhereUniqueNestedInput {
  where: MatchWhereUniqueInput
  data: MatchUpdateDataInput
}

export interface MatchUpdateManyInput {
  create?: MatchCreateInput[] | MatchCreateInput
  connect?: MatchWhereUniqueInput[] | MatchWhereUniqueInput
  disconnect?: MatchWhereUniqueInput[] | MatchWhereUniqueInput
  delete?: MatchWhereUniqueInput[] | MatchWhereUniqueInput
  update?: MatchUpdateWithWhereUniqueNestedInput[] | MatchUpdateWithWhereUniqueNestedInput
  upsert?: MatchUpsertWithWhereUniqueNestedInput[] | MatchUpsertWithWhereUniqueNestedInput
}

export interface UserUpdateWithoutStatsDataInput {
  email?: String
  password?: String
  name?: String
  residentialcollege?: String
  bio?: String
  location?: String
  confirmed?: Boolean
  deactivated?: Boolean
  matches?: MatchUpdateManyInput
  season?: SeasonUpdateOneWithoutPlayersInput
}

export interface UserUpdateOneWithoutStatsInput {
  create?: UserCreateWithoutStatsInput
  connect?: UserWhereUniqueInput
  delete?: Boolean
  update?: UserUpdateWithoutStatsDataInput
  upsert?: UserUpsertWithoutStatsInput
}

export interface UserUpsertNestedInput {
  update: UserUpdateDataInput
  create: UserCreateInput
}

export interface CurrentWhereUniqueInput {
  id?: ID_Input
}

export interface MatchSubscriptionWhereInput {
  AND?: MatchSubscriptionWhereInput[] | MatchSubscriptionWhereInput
  OR?: MatchSubscriptionWhereInput[] | MatchSubscriptionWhereInput
  NOT?: MatchSubscriptionWhereInput[] | MatchSubscriptionWhereInput
  mutation_in?: MutationType[] | MutationType
  updatedFields_contains?: String
  updatedFields_contains_every?: String[] | String
  updatedFields_contains_some?: String[] | String
  node?: MatchWhereInput
}

export interface UserUpdateWithWhereUniqueWithoutSeasonInput {
  where: UserWhereUniqueInput
  data: UserUpdateWithoutSeasonDataInput
}

export interface StatsUpsertWithWhereUniqueWithoutPlayerInput {
  where: StatsWhereUniqueInput
  update: StatsUpdateWithoutPlayerDataInput
  create: StatsCreateWithoutPlayerInput
}

/*
 * An object with an ID

 */
export interface Node {
  id: ID_Output
}

export interface UserPreviousValues {
  id: ID_Output
  email: String
  password: String
  name: String
  residentialcollege?: String
  bio?: String
  location?: String
  confirmed: Boolean
  deactivated: Boolean
}

export interface Admin extends Node {
  id: ID_Output
  email: String
  password: String
  name: String
}

export interface Current extends Node {
  id: ID_Output
  season: Int
  round: Int
  timer?: String
}

export interface BatchPayload {
  count: Long
}

/*
 * An edge in a connection.

 */
export interface UserEdge {
  node: User
  cursor: String
}

export interface AggregateUser {
  count: Int
}

export interface SeasonSubscriptionPayload {
  mutation: MutationType
  node?: Season
  updatedFields?: String[]
  previousValues?: SeasonPreviousValues
}

/*
 * A connection to a list of items.

 */
export interface UserConnection {
  pageInfo: PageInfo
  edges: UserEdge[]
  aggregate: AggregateUser
}

export interface AggregateSeason {
  count: Int
}

/*
 * An edge in a connection.

 */
export interface SeasonEdge {
  node: Season
  cursor: String
}

export interface AggregateMatch {
  count: Int
}

export interface Season extends Node {
  id: ID_Output
  season: Int
  players?: User[]
  round: Int
}

/*
 * A connection to a list of items.

 */
export interface MatchConnection {
  pageInfo: PageInfo
  edges: MatchEdge[]
  aggregate: AggregateMatch
}

export interface SeasonPreviousValues {
  id: ID_Output
  season: Int
  round: Int
}

/*
 * An edge in a connection.

 */
export interface StatsEdge {
  node: Stats
  cursor: String
}

export interface AdminSubscriptionPayload {
  mutation: MutationType
  node?: Admin
  updatedFields?: String[]
  previousValues?: AdminPreviousValues
}

export interface AggregateCurrent {
  count: Int
}

export interface AdminPreviousValues {
  id: ID_Output
  email: String
  password: String
  name: String
}

/*
 * A connection to a list of items.

 */
export interface CurrentConnection {
  pageInfo: PageInfo
  edges: CurrentEdge[]
  aggregate: AggregateCurrent
}

export interface Match extends Node {
  id: ID_Output
  player1: User
  player2?: User
  player1set?: Int
  player2set?: Int
  season: Season
  sumbit: Boolean
}

/*
 * An edge in a connection.

 */
export interface AdminEdge {
  node: Admin
  cursor: String
}

export interface CurrentSubscriptionPayload {
  mutation: MutationType
  node?: Current
  updatedFields?: String[]
  previousValues?: CurrentPreviousValues
}

/*
 * A connection to a list of items.

 */
export interface AdminConnection {
  pageInfo: PageInfo
  edges: AdminEdge[]
  aggregate: AggregateAdmin
}

export interface CurrentPreviousValues {
  id: ID_Output
  season: Int
  round: Int
  timer?: String
}

/*
 * A connection to a list of items.

 */
export interface SeasonConnection {
  pageInfo: PageInfo
  edges: SeasonEdge[]
  aggregate: AggregateSeason
}

export interface User extends Node {
  id: ID_Output
  email: String
  password: String
  name: String
  stats?: Stats[]
  matches?: Match[]
  season?: Season
  residentialcollege?: String
  bio?: String
  location?: String
  confirmed: Boolean
  deactivated: Boolean
}

export interface AggregateStats {
  count: Int
}

export interface StatsSubscriptionPayload {
  mutation: MutationType
  node?: Stats
  updatedFields?: String[]
  previousValues?: StatsPreviousValues
}

/*
 * An edge in a connection.

 */
export interface CurrentEdge {
  node: Current
  cursor: String
}

/*
 * Information about pagination in a connection.

 */
export interface PageInfo {
  hasNextPage: Boolean
  hasPreviousPage: Boolean
  startCursor?: String
  endCursor?: String
}

export interface MatchPreviousValues {
  id: ID_Output
  player1set?: Int
  player2set?: Int
  sumbit: Boolean
}

export interface MatchSubscriptionPayload {
  mutation: MutationType
  node?: Match
  updatedFields?: String[]
  previousValues?: MatchPreviousValues
}

export interface Stats extends Node {
  id: ID_Output
  player: User
  playeremail: String
  wins?: Int
  netwins?: Float
  losts?: Int
  totalsetwon?: Int
  totalsetlost?: Int
  rating?: Float
  season: Season
}

export interface StatsPreviousValues {
  id: ID_Output
  playeremail: String
  wins?: Int
  netwins?: Float
  losts?: Int
  totalsetwon?: Int
  totalsetlost?: Int
  rating?: Float
}

export interface UserSubscriptionPayload {
  mutation: MutationType
  node?: User
  updatedFields?: String[]
  previousValues?: UserPreviousValues
}

export interface AggregateAdmin {
  count: Int
}

/*
 * A connection to a list of items.

 */
export interface StatsConnection {
  pageInfo: PageInfo
  edges: StatsEdge[]
  aggregate: AggregateStats
}

/*
 * An edge in a connection.

 */
export interface MatchEdge {
  node: Match
  cursor: String
}

/*
The `Long` scalar type represents non-fractional signed whole numeric values.
Long can represent values between -(2^63) and 2^63 - 1.
*/
export type Long = string

/*
The `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"4"`) or integer (such as `4`) input value will be accepted as an ID.
*/
export type ID_Input = string | number
export type ID_Output = string

/*
The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1. 
*/
export type Int = number

/*
The `Float` scalar type represents signed double-precision fractional values as specified by [IEEE 754](http://en.wikipedia.org/wiki/IEEE_floating_point). 
*/
export type Float = number

/*
The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.
*/
export type String = string

/*
The `Boolean` scalar type represents `true` or `false`.
*/
export type Boolean = boolean