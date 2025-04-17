import { Router } from "express";
import { userRouter } from "../app/modules/user/user.router";
import { adminrouter } from "../app/modules/admin/admin.route";

export const router = Router()


const moduleRoutes = [
    {
        path: '/user',
        route: userRouter
    },
    {
        path:'/admin',
        route:adminrouter
    }
]

moduleRoutes.forEach(route => router.use(route.path,route.route))


export default router 