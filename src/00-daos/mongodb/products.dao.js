import { productsModel } from "./models/products.model.js";
import { cartModel } from "./models/Cart.model.js";
export default class ProductsDaoMongoDB {
    async getAllProducts(query,page= 1, limit =10, sort=1) {
        try {
          const sortMode ={
            price: sort
          }
          const response = await productsModel.paginate(query?{query}:{}, {page, limit, sort: sortMode});
          console.log(response)
          return response;
          
        } catch (error) {
          console.log(error);
        }
      }
    
      async getProductById(id) {
        try {
          const response = await productsModel.findById(id);
          return response;
        } catch (error) {
          console.log(error);
        }
      }
    
      async createProduct(obj) {
        try {
          const response = await productsModel.create(obj);
          return response;
        } catch (error) {
          console.log(error);
        }
      }
    
      async updateProduct(id, obj) {
        try {
          await productsModel.updateOne({_id: id}, obj);
          return obj;
        } catch (error) {
          console.log(error);
        }
      }
    
      async deleteProduct(id) {
        try {
          const response = await productsModel.findByIdAndDelete(id);
          return response;
        } catch (error) {
          console.log(error);
        }
      }

      async addProductToCart(cartId, prodId) {
        try {
          const cart = await cartModel.findById(cartId)
          console.log(prodId)
          await cart.product.push(prodId)
          await cart.save()
          return cart
        } catch (error) {
          console.log('error')
        }
      }
// async agregationProducts(page=1, limit=10) {
// try{
//   const sort = 'des'
//   const sortDirection = sort==='asc'? 1:-1
//   const response = await productsModel.aggregate([
//     {
//       $match:{}
//     },
    
//     {
//       $sort:{
//         price: sortDirection
//       }
      
//     }
//   ])
//   await response.paginate({}, {page, limit})
//   return response;
// }catch(error){
//       console.log(error)
//     }

// }
}

