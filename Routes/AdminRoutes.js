import Express from "express";
import getDoctor from "../Controllers/AdminControllers/getDoctor.js";
import getUser from "../Controllers/AdminControllers/getUser.js";
import updateStatus from "../Controllers/AdminControllers/updateStatus.js";
import authMiddleware from "../Middlewares/AuthMiddleware.js";
const adminRouter = Express.Router();
//always keep in mind while writing / creating the route's
//you don't need an function but you just need an simple
//varable extracted from express.router() method and 
//you can use it to make other routes.

adminRouter.get("/user", getUser);

adminRouter.get("/doctor", getDoctor)


adminRouter.post("/updatestatus", updateStatus)

export default adminRouter;

