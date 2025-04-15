import { Prisma, PrismaClient } from "../../../generated/prisma"
import calculatePagination from "../../../helpers/pagination"
import { prisma } from "../../../shared/prisma"
import { adminFilterableFields } from "./admin.constant"




const getAllAdminService = async (params: any, optoins: any) => {
    const { searchTerm, ...filterData } = params
    const { limit, page, skip } = calculatePagination(optoins)
    const andCondition: Prisma.AdminWhereInput[] = []

    if (params?.searchTerm) {
        andCondition.push(
            {
                OR: adminFilterableFields?.map((item, index) => ({
                    [item]: {
                        contains: params.searchTerm,
                        mode: 'insensitive'
                    }
                }))
            }
        )
    }
    if (Object.keys(filterData).length > 0) {
        andCondition.push(
            {
                AND: Object.keys(filterData).map(key => (
                    {
                        [key]: {
                            equals: filterData[key]
                        }
                    }
                ))
            }
        )
    }
    const whereCondition: Prisma.AdminWhereInput = { AND: andCondition }
    const result = await prisma.admin.findMany(
        {
            where: whereCondition,
            skip,
            take: limit,
            orderBy: optoins.sortByName && optoins.sortOrder ? {
                [optoins.sortByName]: optoins.sortOrder
            } : {
                createdAt: 'desc'
            }
        }
    )
    const total = await prisma.admin.count({
        where: whereCondition
      })
      
      return {
        meta: {
          page,
          limit,
          total
        },
        data: result
      }
}

export const adminservice = {
    getAllAdminService
}