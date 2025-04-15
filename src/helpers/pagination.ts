import { paginationType } from "../app/modules/admin/admin.constant"

const calculatePagination = (options: paginationType) => {
    const page: number = Number(options.page) || 1
    const limit: number = Number(options.limit) || 10
    const skip: number = Number(Number(page - 1)) * limit
    const sortByName: string = options.sortByName || 'createdAt'
    const sortOrder: string = options.sortOrder || 'desc'

    return {
        page,
        limit,
        skip,
        sortByName,
        sortOrder
    }
}


export default calculatePagination