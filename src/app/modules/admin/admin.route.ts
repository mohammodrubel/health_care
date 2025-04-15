import { Router } from "express";
import { adminController } from "./admin.controller";

const router = Router()

    router.get('/get-all-admin',adminController.getAllAdminController)

export const adminrouter = router 