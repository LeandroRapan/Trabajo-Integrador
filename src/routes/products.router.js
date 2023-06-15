import { Router } from "express";
import {
    getAllProductsController,
    getProductByIdController,
    createProductController,
    deleteProductController, 
    updateProductController,
    // agregtionProductsController,
    addProductToCartController
} from '../03-controllers/products.controllers.js'

const router = Router();
// router.get('/', agregtionProductsController)
router.get('/', getAllProductsController);
router.get('/:id', getProductByIdController);
router.post('/', createProductController);
router.put('/:id', updateProductController);
router.delete('/:id', deleteProductController);
router.post('/:pid/cart/:cid', addProductToCartController)


export default router;