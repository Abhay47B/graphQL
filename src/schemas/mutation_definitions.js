import * as mutationDefinitions from './definitions/mutations/index';
export const Mutation = `
    type Mutation{
        ${mutationDefinitions.userDefinition}
    }
`;