import mongoose from "mongoose";

const  Schema  = mongoose.Schema

const UserSchema = new Schema({
    name: { type: String, required: [true, 'Name field is required.'] },
    email: { type: String, required: [true, 'Email field is required.'] },
    password: { type: String, required: [true, 'Password field is required.']},
    rule: { type: String, required: [true, 'Rule field is required.'] }
})

const UserModel = mongoose.model('ChatBox', UserSchema);

export  { UserModel }