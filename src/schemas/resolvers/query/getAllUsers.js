import { userModel } from '../../models/userModel';
export const getAllUsers=()=>{
    try{
        return async (parent,args,context,info)=>{
            const userDetails = await userModel.find()
            return userDetails            
        }
    }catch(err){
        throw new Error(err.message);
    }
}