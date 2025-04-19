import { Admin, Prisma, PrismaClient } from "../../../generated/prisma"
import calculatePagination from "../../../helpers/pagination"
import { prisma } from "../../../shared/prisma"
import { adminFilterableFields } from "./admin.constant"
import { filterInterface, optoinsType } from "./filteringInterface"




const getAllAdminService = async (params: Partial<filterInterface>, optoins: optoinsType) => {
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
                            equals: (filterData as any)[key]
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

const getSingleAdminService = async(id:string)=>{
    const reuslt = await prisma.admin.findUnique(
        {
            where:{
                id:id,
                isDeleted:false
            }
        }
    )
    return reuslt
}

const updateAdminService = async (id:string,data:Partial<Admin>)=>{
    const reuslt = await prisma.admin.update(
        {
            where:{
                id:id
            },
            data:data
        }
    )
    return reuslt
}

const deleteAdminService = async (id:string)=>{
    const result = await prisma.admin.update(
        {
            where:{
                id:id 
            },
            data:{
                isDeleted:true
            }
        }
    )
    return result
}


export const adminservice = {
    getAllAdminService,
    getSingleAdminService,
    updateAdminService,
    deleteAdminService
}