import { Router } from "express";
import {
    getCartsController,
    getCartByIdController,
    createCartController,
    updateCartController,
    cartdeleteOneController,
    updateProductQuantityController,
} from '../02-controllers/carts.controllers.js'

const router = Router();

// router.get('/', getCartsController);
router.get('/:id', getCartByIdController);
router.post('/', createCartController);

router.delete ('/:cid/products/:pid', cartdeleteOneController)
router.put('/:id', updateCartController);

router.put('/:cid/products/:pid', updateProductQuantityController);
// router.delete('/:id')


export default router