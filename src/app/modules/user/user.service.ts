import { PrismaClient, UserRole } from "../../../generated/prisma"
import bcrypt from 'bcrypt'

const prisma = new PrismaClient()
const getAdminService = async () => {

}

const createAdminService = async (data: any) => {

    const hashingPassword = await bcrypt.hash(data.password,12)

    const userData = {
      email: data.admin.email,
      password: hashingPassword, // You should hash this
      role: UserRole.ADMIN
    };
  
    const result = await prisma.$transaction(async (tx) => {
      // Step 1: Create user
      const createdUser = await tx.user.create({
        data: userData
      });
  
      // Step 2: Create admin (DO NOT include email separately)
      const createdAdmin = await tx.admin.create({
        data: {
          name: data.admin.name,
          contact_number: data.admin.contact_number,
          isDeleted: false,
          user: {
            connect: {
              email: data.admin.email // this is enough to link via relation
            }
          }
        }
      });
  
      return createdAdmin;
    });
  
    return result;
  };
  

export const userService = {
    getAdminService,
    createAdminService
}