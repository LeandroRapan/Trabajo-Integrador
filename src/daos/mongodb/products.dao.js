import { productsModel } from "./models/products.model.js";

export default class ProductsDaoMongoDB {
    async getAllProducts() {
        try {
          const response = await productsModel.find({});
          
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

}