import { userModel } from '../../models/userModel';
export const registerUser = ()=>{
    return async(parent,args,context,info)=>{
        try{
        //const { userName , email ,  mobile} = args.User
           //const user = new userModel({ userName,email,mobile})
            // await user.save();
   
        return args;
        }catch(err){
         throw new Error(err.message);
        }
    }
}