import { Router } from "express";
import {
    getCartsController,
    getCartByIdController,
    createCartController,
    updateCartController,
} from '../03-controllers/carts.controllers.js'

const router = Router();

// router.get('/', getCartsController);
router.get('/:id', getCartByIdController);
router.post('/', createCartController);

router.put('/:id', updateCartController);
// router.put('/:id/products/:pid');
// router.delete('/:id')

export default router