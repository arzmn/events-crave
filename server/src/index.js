// server

import dotenv from 'dotenv';
dotenv.config({
    path:'../.env'
});
// import connectDB from './src/db/ConnectDB.js';
import { app } from './app.js';



// console.log(process.env.PRINT)



app.listen(process.env.PORT || 8000 ,()=>{
    console.log(`server is running at port ${process.env.PORT}`);
})
