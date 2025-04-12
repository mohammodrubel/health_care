import express, { Application, Request, Response } from 'express'
import cors from 'cors'
import { userRouter } from './app/modules/user/user.router'

const app:Application = express()
app.use(cors())
app.use(express.json())


app.get('/',(req:Request,res:Response)=>{
    res.send("server is running")
})

app.use(`/api/v1`,userRouter)

export default app