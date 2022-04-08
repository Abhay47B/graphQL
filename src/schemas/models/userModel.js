import mongoose  from 'mongoose';
const userSchema = new mongoose.Schema({
    userName : {
        type : String,
    },
    email : {
        type : String,
    },
    mobile : {
        type : String,
    }

});

const userModel = mongoose.model('post' , userSchema);
export default userModel