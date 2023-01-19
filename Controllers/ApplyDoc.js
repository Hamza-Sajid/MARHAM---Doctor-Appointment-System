import doctorModal from "../Models/doctorModel.js";
import Express from "express";
import userModel from "../Models/userMode.js";

const applyDoc = async (req, res, next) => {

    try {
        const { name, phone, email, address, spacialization, experiance, fee, timingfrom, timingto, id } = req.body;
        // if (name || phone || email || address || spacialization ||
        //     experiance || fee || timingfrom || timingto == undefined) {


        //     res.status(400).json({ message: "kindly fill all the form data" })
        //     return 0;
        // }

        const docProfile = await new doctorModal({
            userId: id, name: name, phone: phone, email: email, address: address,
            spacialization: spacialization, experiance: experiance,
            fee: fee, timingfrom: timingfrom, timingto: timingto,
            status: "pending"
        });


        await docProfile.save();

        const user = await userModel.findOne({ isAdmin: true })
        console.log("this is the user" + user);
        const notification = user.notification;
        notification.push({
            type: "Request for doctor registration",
            message: "  New doctor " + user.name + " applied for doc registration"
        })
        await userModel.findOneAndUpdate({ notification: notification })
        res.status(200).json({ message: "applied succesfully" })

    } catch (error) {
        res.status(400).json({ message: "FAILED..." })

        console.log(error);
    }

}

export default applyDoc;