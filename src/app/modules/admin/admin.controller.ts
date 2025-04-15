import { Request, Response } from "express";
import httpStatus from "http-status";
import { adminservice } from "./admin.service";
import pick from "../../../shared/pick";
import { adminFilterableFields } from "./admin.constant";




const getAllAdminController = async (req: Request, res: Response) => {
  
    const filters = pick(req?.query,adminFilterableFields)
    const optoins = pick(req?.query,['limit','page','sortByName','sortOrder'])
    console.log(optoins)
    try {
        const result = await adminservice.getAllAdminService(filters,optoins);
        res.status(httpStatus.OK).json({
            success: true,
            message: "All users shown successfully",
            meta:result.meta,
            data: result.data,
        });
    } catch (error: any) {
        res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
            success: false,
            message: error?.message || "Unknown error occurred",
            error: error,
        });
    }
};



export const adminController = {
    getAllAdminController
}

