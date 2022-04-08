import { resolverMutations } from './resolvers/mutations'
import { resolverQueries } from './resolvers/query'
import GraphQLJSON from 'graphql-type-json';

const resolvers = {
    Query: resolverQueries(),
    Mutation: resolverMutations(),
    JSON: GraphQLJSON
}

export { resolvers };