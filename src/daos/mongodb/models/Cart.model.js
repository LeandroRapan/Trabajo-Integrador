import mongoose from "mongoose";

const cartSchema = new mongoose.Schema({
    product: [{id: {Number, required:true}, quantity: Number}]
    
}, {timestamps: true})

export const cartModel = mongoose.model('cart', cartSchema)