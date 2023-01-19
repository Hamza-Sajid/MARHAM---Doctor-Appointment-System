import Express from "express";
import userModel from "../../Models/userMode.js";



const getUser = async (req, res, next) => {

    const user = await userModel.find({});
    res.send(user);


}


export default getUser;

