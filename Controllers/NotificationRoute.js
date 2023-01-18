import userModel from "../Models/userMode.js";
import Express from "express";

const NotificationRoute = async (req, res, next) => {
    const { index } = req.body;
    const adminNotification = await userModel.findOne({ isAdmin: true });
    // adminNotification.seenNotification.push()
    const update = adminNotification.notification[index];
    console.log(update)
    const newData = adminNotification.seenNotification;
    newData.push({
        title: update.type,
        message: update.message
    })
    // console.log(newData);
    await userModel.findOneAndUpdate({ seenNotification: newData });
    // adminNotification.notification = adminNotification.notification.filter((e, index) => console.log(e));
    const filteredItems = adminNotification.notification.slice(0, index).concat(adminNotification.notification.slice(index + 1, adminNotification.notification.length))
    await userModel.findOneAndUpdate({ notification: filteredItems })
    // console.log(filteredItems)
    // console.log(adminNotification)

}




export default NotificationRoute;