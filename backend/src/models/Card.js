import mongoose from "mongoose";

const  Schema  = mongoose.Schema

const CardSchema = new Schema({
    title: { type: String, required: [true, 'Title field is required.'] },
    question: { type: String, required: [true, 'Question field is required.'] },
    response: { type: String },
    tag: [{ type: String }],
    replied: { type: Boolean, required: [true, 'Replied field is required'] },
    id: { type: Number, required: [true, 'Id field is required'] }
}, {
    collection: 'Card',
    timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' }
})

const Card = mongoose.model('Card', CardSchema);

export  { Card }