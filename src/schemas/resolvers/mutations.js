import * as  createUser  from './mutations/createUser';
export const resolverMutations = function(){
    return{
        registerUser:createUser.registerUser()
    }
}