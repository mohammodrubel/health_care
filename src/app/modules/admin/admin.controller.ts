import { NextFunction, Request, Response } from "express";
import httpStatus from "http-status";
import { adminservice } from "./admin.service";
import pick from "../../../shared/pick";
import { adminFilterableFields } from "./admin.constant";
import sendResponce from "../../../shared/sendResponse";



const getAllAdminController = async (req: Request, res: Response, next: NextFunction) => {

    const filters = pick(req?.query, adminFilterableFields)
    const optoins = pick(req?.query, ['limit', 'page', 'sortByName', 'sortOrder'])
    try {
        const result = await adminservice.getAllAdminService(filters, optoins);
        res.status(httpStatus.OK).json({
            success: true,
            message: "All users shown successfully",
            meta: result.meta,
            data: result.data,
        });
        sendResponce(res, {
            statusCode: httpStatus.OK,
            message: "All users shown successfully",
            success: false,
            meta: result.meta,
            data: result.data,

        })
    } catch (error: any) {
        sendResponce(res, {
            statusCode: httpStatus.OK,
            message: error?.message || "Unknown error occurred",
            success: false,
            data: error

        })
    }
};

const getSingleAdminController = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const reuslt = await adminservice.getSingleAdminService(req?.params?.id)
        sendResponce(res, {
            statusCode: httpStatus.OK,
            message: "get single user showen successfully",
            success: false,
            data: reuslt

        })
    } catch (error) {
        next(error)
    }
}

const updateAdminController = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const reuslt = await adminservice.updateAdminService(req?.params?.id, req.body)
        sendResponce(res, {
            statusCode: httpStatus.OK,
            message: "update successfully",
            success: false,
            data: reuslt

        })

    }
    catch (error) {
        next(error)
    }
}

const deleteAdminController = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const result = await adminservice.deleteAdminService(req?.params.id)
        sendResponce(res, {
            statusCode: httpStatus.OK,
            message: "delete successfully",
            success: false,
            data: result

        })
    } catch (error) {
        next(error)
    }
}

export const adminController = {
    getAllAdminController,
    getSingleAdminController,
    updateAdminController,
    deleteAdminController
}

