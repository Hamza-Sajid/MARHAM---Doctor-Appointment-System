import mongoose from "mongoose";


const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Name is required']
    },

    email: {
        type: String,
        required: [true, 'email is required']
    },

    password: {
        type: String,
        required: [true, 'password is required']
    },
    // confirm_password: {
    //     type: String,
    //     required: [true, 'confirm_password is required']
    // },

})



const userModel = mongoose.model('user', userSchema);

export default userModel;