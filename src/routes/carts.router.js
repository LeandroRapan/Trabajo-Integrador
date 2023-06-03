import { Router } from "express";
import {
    getCartsController,
    getCartByIdController,
    createCartController,
    updateCartController,
} from '../controllers/carts.controllers.js'

const router = Router();

router.get('/', getCartsController);
router.get('/:id', getCartByIdController);
router.post('/', createCartController);
rputer.puts('/:id', updateCartController);

export default router