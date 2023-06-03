import { cartModel } from "./mongodb/models/Cart.model.js";

export default class CartDao {
    
  
    async getCarts(){
        try{    const carts = await cartModel.find();          
                return carts
            
        }catch(error){
            console.log('error obteniendo carritos')

        }
    }

    async getCartById(id){
        try{
            const cart = await cartModel.findById(id);
            return cart
        }catch(error){
           console.log('error obteniendo carrito por id') 
        }
    }
    async createCart(obj){
        try{
            const newCart = await cartModel.create(obj)
          return newCart
         }catch(error){
             console.log(error)
             throw new Error("No se pudo crear el carrito");
         }
    }

    async updateCart (id, obj) {

        try{
            const updCart= await cartModel.findByIdAndUpdate(id, obj)
            
            return updCart
        }catch(error){
        console.log(error)
        }
    }










    //fin de clase
}
