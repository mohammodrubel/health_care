import { PrismaClient, UserRole } from "../../../generated/prisma"
import bcrypt from 'bcrypt'

const prisma = new PrismaClient()
const getAdminService = async () => {

}

const createAdminService = async (data: any) => {
    const hashingPassword = await bcrypt.hash(data.password,12)
    const userData = {
        email: data?.admin?.email,
        password: hashingPassword,
        role: UserRole.ADMIN
    }
    const adminData = data?.admin

    const reuslt = await prisma.$transaction(
        async (transectionClient) => {
            await transectionClient.user.create({
                data: userData
            })

            const createdAdminData = await transectionClient.admin.create({
                data: adminData
            })

            return createdAdminData
        }
    )
    return reuslt
};


export const userService = {
    getAdminService,
    createAdminService
}