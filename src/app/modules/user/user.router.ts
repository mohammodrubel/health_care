import { Request, Response, Router } from 'express'
import { userController } from './user.controller'

const router = Router()

router.post('/user', userController.createAdminController)
router.get('/user', userController.getAdminController)



export const userRouter = router