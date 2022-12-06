import mongoose from "mongoose";

const Schema = mongoose.Schema

const CardSchema = new Schema({
    id: {type: String, required: [true, 'Id field is required']},
    title: {type: String, required: [true, 'Title field is required.']},
    question: {type: String, required: [true, 'Question field is required.']},
    response: {type: String},
    tag: [{type: String}],
    replied: {type: Boolean, required: [true, 'Replied field is required']}
}, {timestamps: true})

const Card = mongoose.model('Card', CardSchema);

export {Card}