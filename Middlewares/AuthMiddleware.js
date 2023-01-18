import jwt from "jsonwebtoken";


const authMiddleware = async (req, res, next) => {
    // const token = req.headers['authorization'];
    // .split(" ")[1]
    const token = req.headers.authorization;
    // console.log(token);
    jwt.verify(token, process.env.JWTKEY, (error, data) => {
        if (error) {
            return res.status(400).send({ message: "invalid token" })
        }

        else {

            req.body.userID = data.id;
            next();

        }
    })
}


export default authMiddleware;