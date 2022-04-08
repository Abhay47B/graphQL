import { Query } from './query_definitions';
import { Mutation } from './mutation_definitions';
import { Scalar } from './scalar_definitions';

export const typeDefs = [
Mutation,
Query,
Scalar,
// input.userInput,
// types.User

`schema {
query : Query,
mutation: Mutation,
}`

]