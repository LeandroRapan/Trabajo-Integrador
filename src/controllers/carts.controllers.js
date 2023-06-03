import { getCartsService, getCartByIdServide, createCartService, updateCartService } from "../services/cart.services.js";


export const getCartsController= async(req,res, next)=>{
    try {
        const docs = await getCartsService()
        res.json(docs)
    } catch (error) {
        next(error)
    }
}
export const getCartByIdController = async(req,res, next)=>{
    try {
        const {id}= req.params
        const doc= await getCartByIdServide(id)
        res.json(doc)
    } catch (error) {
        next(error)
    }
}
export const createCartController= async(req,res, next)=>{
    try {
        const {obj} = req.body
        const newC= await createCartService(obj);
        res.json(newc)

    } catch (error) {
        next(error)
    }
}
export const updateCartController = async(req,res, next)=>{
    try {
        const {id} = req.params;
        const {obj} = req.body;
        const updCart =await updateCartService(id, obj)
        res.json(updCart)
    } catch (error) {
        next(error)
    }
}