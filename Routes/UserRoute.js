import Express from "express";
import applyDoc from "../Controllers/ApplyDoc.js";
import NotificationRoute from "../Controllers/NotificationRoute.js";
import { login, register, checkToken } from "../Controllers/UserCon.js";
import authMiddleware from "../Middlewares/AuthMiddleware.js";
import AdminRoutes from "./AdminRoutes.js";
const router = Express.Router();

//Login

router.post("/login", login);


//Register 
router.post("/register", register)


//Dashboard

router.post("/dashboard", authMiddleware, checkToken)


//Apply as a doctor

router.post("/applydoc", authMiddleware, applyDoc);

//Notification  handling

router.post("/notifications", authMiddleware, NotificationRoute)
export default router;
