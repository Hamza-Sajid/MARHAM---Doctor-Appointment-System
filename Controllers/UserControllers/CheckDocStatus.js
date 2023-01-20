import doctorModal from "../../Models/doctorModel.js";
import Express from "express";
const checkDocStatus = async (req, res, next) => {

    const { id } = req.body;

    const user = await doctorModal.findById(id);

    res.send(user);

}


export default checkDocStatus;