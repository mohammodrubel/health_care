import { NextFunction, Request, Response } from "express"
import httpStatus from "http-status"

const globalErrorHandeler = (error:any,req:Request,res:Response,next:NextFunction)=>{
    res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
        success:false,
        message:error?.name ||  "somting went wrong",
        error:error
    })
}

export default globalErrorHandeler