import jwt from "jsonwebtoken";


const authMiddleware = async (req, res, next) => {
    const token = req.headers['authorization'].split(" ")[1]
    console.log(token);
    jwt.verify(token, process.env.JWTKEY, (error, data) => {
        if (error) {
            return res.status(200).send({ message: "invalid token" })
        }

        else {

            req.body.userID = data.id;
            next();

        }
    })
}


export default authMiddleware;