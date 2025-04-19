import { Router } from "express";
import { adminController } from "./admin.controller";
import requestValidation from "../../middlewares/validationRequest";
import updateAdmin from "./updateValidation";


const router = Router()

router.get('/get-all-admin', adminController.getAllAdminController)
router.get('/get-single-admin/:id', adminController.getSingleAdminController)
router.patch('/update/:id',
    requestValidation(updateAdmin),
    adminController.updateAdminController)
router.delete('/delete/:id', adminController.deleteAdminController)

export const adminrouter = router 