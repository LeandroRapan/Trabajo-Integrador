import {
    getAllService,
    getByIdService,
    createService,
    updateService,
    deleteService
} from "../services/products.services.js"

export const getAllProductsController = async (req, res, next) =>{
    try {
        const docs = await getAllService()
        res.json(docs)
    } catch (error) {
        next(error)
    }
}
export const getProductByIdController= async (req, res, next) =>{
    try {
        const { id }= req.params;
        const doc= await getByIdService(id)
        res.json(doc)
    } catch (error) {
        next(error)
    }
}
export const createProductController= async (req, res, next) =>{
    try {
        const { name, description, price, stock } = req.body
        const newProduct = await createService({
            name,
            description, 
            price,
            stock
        });
        res.json(newProduct)

    } catch (error) {
        next(error)
        
    }
}
export const updateProductController = async (req, res, next) =>{
    try {
        const { id } = req.params
        const { name, description, price, stock} = req.body;
        let doc = await  getByIdService(id);
        const update = await updateService(
            id,
            { name, description, price, stock }
        )
        res.json(update)
    } catch (error) {
        next(error)
    }
}
export const deleteProductController = async (req, res, next) =>{
    try {
        const { id }= req.params;
        await deleteService(id);
        res.send('producto borrado')
    } catch (error) {
        
    }
}
