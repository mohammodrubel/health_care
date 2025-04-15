import { Request, Response } from "express"
import { userService } from "./user.service"
import httpStatus from "http-status";

const getAdminController = async (req:Request,res:Response)=>{
    const result = userService.getAdminService()
    res.send(result)
}


const createAdminController = async (req:Request,res:Response) =>{
    try{
        const reuslt = await userService.createAdminService(req.body)
    res.status(httpStatus.CREATED).json({
        success:true,
        message:"admin created successfully",
        data:reuslt
    })
    }catch(error:any){
        res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
            success:false,
            message:"somthing went wrong",
            mesage:error?.name || "unknown error",
            error:error
        })
    }
}




export const userController = {
    getAdminController,
    createAdminController
}