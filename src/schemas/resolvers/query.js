import * as  getUsers  from './query/getAllUsers';
export const resolverQueries = function(){
    return{
        getAllUsers:getUsers.getAllUsers()
    }
}