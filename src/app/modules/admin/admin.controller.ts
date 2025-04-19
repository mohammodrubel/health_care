import httpStatus from "http-status";
import catchAsync from "../../../helpers/catchAsync";
import pick from "../../../shared/pick";
import sendResponce from "../../../shared/sendResponse";
import { adminFilterableFields } from "./admin.constant";
import { adminservice } from "./admin.service";



const getAllAdminController = catchAsync(async (req, res) => {
    const filters = pick(req?.query, adminFilterableFields)
    const optoins = pick(req?.query, ['limit', 'page', 'sortByName', 'sortOrder'])

    const result = await adminservice.getAllAdminService(filters, optoins);
    res.status(httpStatus.OK).json({
        success: true,
        message: "All users shown successfully",
        meta: result.meta,
        data: result.data,
    });
})

const getSingleAdminController = catchAsync(async (req, res) => {
    const reuslt = await adminservice.getSingleAdminService(req?.params?.id)
    sendResponce(res, {
        statusCode: httpStatus.OK,
        message: "get single user showen successfully",
        success: false,
        data: reuslt

    })
})

const updateAdminController = catchAsync(async (req, res) => {

    const reuslt = await adminservice.updateAdminService(req?.params?.id, req.body)
    sendResponce(res, {
        statusCode: httpStatus.OK,
        message: "update successfully",
        success: false,
        data: reuslt

    })


})

const deleteAdminController = catchAsync(async (req, res) => {
    const result = await adminservice.deleteAdminService(req?.params.id)
    sendResponce(res, {
        statusCode: httpStatus.OK,
        message: "delete successfully",
        success: false,
        data: result

    })
})

export const adminController = {
    getAllAdminController,
    getSingleAdminController,
    updateAdminController,
    deleteAdminController
}

