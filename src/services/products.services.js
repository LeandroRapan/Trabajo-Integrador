// import ProductsDaoMongoDB from "../daos/mongodb/products.dao.js";

// const prodDao= new ProductsDaoMongoDB()

import ProductsDaoFs from "../daos/filesystem/products.dao.js"
import { __dirname } from "../path.js";

const prodDao= new ProductsDaoFs(__dirname+'/daos/filesystem/products.json');

export const getAllService = async ()=>{
    try {
        const docs = await prodDao.getAllProducts()
        return docs
    } catch (error) {
        console.log(error)
    }
}
export const getByIdService = async (id)=>{
    try {
        const doc = await prodDao.getProductById(id);
        if(!doc) throw new Error('no encontrado')
        else return doc
    } catch (error) {
        console.log(error)
    }
}
export const createService = async (obj)=>{
    try {
        const newProd = await prodDao.createProduct(obj);
        if(!newProd) throw new Error('error de validacion')
        else return newProd
    } catch (error) {
        console.log(error)
    }
}
export const updateService = async (id, obj)=>{
    try {
        const doc = await prodDao.getProductById(id);
        if (!doc){
            throw new Error ('producto no encontrado')
        } else {
            const prodUpt = await prodDao.updateProduct(id,obj)
            return prodUpt;
        }

    } catch (error) {
        console.log(error)
    }
}
export const deleteService = async (id)=>{
    try {
        const prodDel = await prodDao.deleteProduct(id)
        return prodDel
    } catch (error) {
        console.log(error)
    }
}
