import { NextFunction, Request, Response } from "express";
import { AnyZodObject } from "zod";

const requestValidation = (shcema:AnyZodObject)=>{
    return async(req:Request,res:Response,next:NextFunction)=>{
        try{
            await shcema.parseAsync({body:req.body})
            next()
        }
        catch(error){
            next(error)
        }
    }
}

export default requestValidation