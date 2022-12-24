import Express from "express";
import { login, register, checkToken } from "../Controllers/UserCon.js";
import authMiddleware from "../Middlewares/AuthMiddleware.js";
const router = Express.Router();

//Login

// router.get((req, res) => {
//     res.send("welcome")
// })
router.post("/login", login);


//Register 
router.post("/register", register)


//Dashboard

router.post("/dashboard", authMiddleware, checkToken)

export default router;
