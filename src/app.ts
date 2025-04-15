import express, { Application, Request, Response } from 'express'
import cors from 'cors'
import { userRouter } from './app/modules/user/user.router'
import { adminrouter } from './app/modules/admin/admin.route'

const app:Application = express()
app.use(cors())
app.use(express.json())


app.get('/',(req:Request,res:Response)=>{
    res.send("server is running")
})

app.use(`/api/v1`,userRouter)
app.use(`/api/v1/admin`,adminrouter)
export default app