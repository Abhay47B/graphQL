import * as queryDefinitions from './definitions/query/index';

export const Query = `
type Query{
    ${queryDefinitions.userDetails}
}
`;