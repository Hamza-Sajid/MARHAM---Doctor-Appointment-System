import doctorModal from "../../Models/doctorModel.js";
import userModel from "../../Models/userMode.js";

const updateStatus = async (req, res, next) => {

    //here record means id
    const { record, status } = req.body;
    if (status == "pending") {
        const statusUpdate = await doctorModal.findByIdAndUpdate(record, { status: "Approved" });
        const user = await userModel.findById(record);
        console.log(user)
        res.send("user updated")
    }

    else {
        const statusUpdate = await doctorModal.findByIdAndUpdate(record, { status: "Reject" });
        res.send("user updated")

    }



}

export default updateStatus;