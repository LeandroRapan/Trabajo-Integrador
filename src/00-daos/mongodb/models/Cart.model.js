import mongoose from "mongoose";

const cartSchema = new mongoose.Schema({
    product: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'products',
        default: []
    }]
}, { timestamps: true });

cartSchema.pre('find', function(){
    this.populate('products')
})

export const cartModel = mongoose.model('cart', cartSchema);