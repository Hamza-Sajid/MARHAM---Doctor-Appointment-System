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
app.use(cors())

mongoose.set('strictQuery', false);
database();



app.use("/", router);

//app listening

const port = process.env.PORT;
app.listen(port, () => {
    console.log("server is running on port :" + port)
})