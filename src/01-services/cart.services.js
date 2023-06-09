import CartDao from "../00-daos/Cart.dao.js";

const cDao = new CartDao();
    

export const  getCartsService  = async ()=>{
    try {
        const cartsS= await cDao.getCarts();
        return cartsS
    } catch (error) {
        console.log(error)
    }
};
export const   getCartByIdServide = async (id)=>{
    try {
        const cartS = await cDao.getCartById(id);
        return cartS;        
    } catch (error) {
        console.log(error)
    }
}
export const  createCartService  = async (obj)=>{
    try {
        const newCartS= await cDao.createCart(obj);
        return newCartS;
    } catch (error) {
        console.log(error)
    }
}
export const  updateCartService  = async (id, obj)=>{
    try {
        const updCartS= await cDao.updateCart(id,prod);
        return updCartS;
    } catch (error) {
        console.log(error)
    }
}