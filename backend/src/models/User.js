import mongoose from "mongoose";

const  Schema  = mongoose.Schema

const UserSchema = new Schema({
    name: { type: String, required: [true, 'Name field is required.'] },
    email: { type: String, required: [true, 'Email field is required.'] },
    hash: { type: String, required: [true, 'Password field is required.']},
    role: { type: String, required: [true, 'Role field is required.'] }
})

const User = mongoose.model('User', UserSchema);

export  { User }