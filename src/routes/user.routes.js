import { Router } from 'express'

import { userRegisterController , 
   userLoginController
} from '../02-controllers/users.controllers.js'


const router = Router()

router.post('/register', userRegisterController )
router.post('/login', userLoginController)
export default router