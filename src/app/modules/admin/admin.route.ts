import { Router } from "express";
import { adminController } from "./admin.controller";

const router = Router()

    router.get('/get-all-admin',adminController.getAllAdminController)
    router.get('/get-single-admin/:id',adminController.getSingleAdminController)
    router.patch('/update/:id',adminController.updateAdminController)
    router.delete('/delete/:id',adminController.deleteAdminController)

export const adminrouter = router 