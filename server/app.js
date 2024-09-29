import express from "express";
import cors from "cors"
import cookieParser from "cookie-parser"
const app=express()
app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials:true
}))

app.use(express.json({limit:"16kb"}))
app.use(cookieParser())

app.use(express.urlencoded({extended:'true',limit:"16kb"}))

import userRouter from "./src/v1/routes/userRoutes"


app.use("/api/v1/member", userRouter)

export {app}