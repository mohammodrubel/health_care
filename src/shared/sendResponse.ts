import { Response } from "express";

const sendResponce =<T>(res:Response,josnData:{
    statusCode:number,
    success:boolean,
    message:string,
    meta?:{
        limit?:number,
        page:number,
        total?:number 
    }
    data:T | null | undefined
})=>{
    res.status(josnData.statusCode).json({
        success: true,
        message: "All users shown successfully",
        meta:josnData.meta || null || undefined,
        data: josnData.data || null || undefined,
    });
}

export default sendResponce