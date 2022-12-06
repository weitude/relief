import mongoose from "mongoose";

const  Schema  = mongoose.Schema

const UserSchema = new Schema({
    name: { type: String, required: [true, 'Name field is required.'] },
    email: { type: String, required: [true, 'Email field is required.'] },
    hash: { type: String, required: [true, 'Password field is required.']},
    rule: { type: String, required: [true, 'Rule field is required.'] }
})

const User = mongoose.model('User', UserSchema);

export  { User }