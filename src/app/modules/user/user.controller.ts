import { Request, Response } from "express"
import { userService } from "./user.service"

const getAdminController = async (req:Request,res:Response)=>{
    const result = userService.getAdminService()
    res.send(result)
}


const createAdminController = async (req:Request,res:Response) =>{
    const result = await userService.createAdminService(req.body)
    res.send(result)
}


export const userController = {
    getAdminController,
    createAdminController
}