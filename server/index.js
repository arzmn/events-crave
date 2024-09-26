// server

import dotenv from 'dotenv';
import connectDB from './src/db/ConnectDB.js';
import { app } from './app.js';

dotenv.config({
    path:'./.env'
});

// console.log(process.env.PRINT)

connectDB()
.then(()=>{
    app.listen(process.env.PORT || 8000 ,()=>{
        console.log(`server is running at port ${process.env.PORT}`);
    })
})
.catch((err)=>{
    console.log("Mongodb connection failed ",err);
})

