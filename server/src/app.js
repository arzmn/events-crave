

import express from "express";
// import cors from "cors"
import cookieParser from "cookie-parser"
const app=express()
// app.use(cors({
//     origin: process.env.CORS_ORIGIN,
//     credentials:true
// }))

app.use(express.json({limit:"16kb"}))
app.use(cookieParser())

app.use(express.urlencoded({extended:'true',limit:"16kb"}))
console.log(process.env.PRINT)
import userRouter from "./v1/routes/userRoutes.js"


app.use("/api/v1/member", userRouter)

export {app}