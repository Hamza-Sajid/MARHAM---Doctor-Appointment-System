import Express from "express";
import doctorModal from "../../Models/doctorModel.js";
const getDoctor = async (req, res, next) => {
    const doctors = await doctorModal.find({});
    res.send(doctors);

}

export default getDoctor;