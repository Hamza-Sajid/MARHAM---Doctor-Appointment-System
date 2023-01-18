import Express from "express";
import morgan from "morgan";
import * as dotenv from 'dotenv'
import database from './Config/database.js';
import mongoose from 'mongoose'
import router from "./Routes/UserRoute.js";
import cors from 'cors';
const app = Express();
//intilizing  
dotenv.config()
app.use(Express.json());
app.use(morgan('dev'));
// const corsOptions = {
//     origin: 'http://localhost:3000',
//     credentials: true,            //access-control-allow-credentials:true
//     optionSuccessStatus: 200
// }
// app.use(cors(corsOptions));
app.use(cors())
// app.use(cors({
//     Access_Control_Allow_Origin: "*",
//     origin: "*",
//     methode: ['GET', 'POST', 'PATCH', 'DELETE', 'PUT'],
//     allowedHeaders: 'Content-Type, Authorization, Origin, X-Requested-With, Accept'

// }));

mongoose.set('strictQuery', false);
database();

app.use("/", router);
//app listening

const port = process.env.PORT;
app.listen(port, () => {
    console.log("server is running on port :" + port)
})