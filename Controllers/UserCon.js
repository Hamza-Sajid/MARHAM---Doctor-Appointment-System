import userModel from "../Models/userMode.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const UserCon = () => { };
// -------------------- LOGIN -------------------- //

const login = async (req, res) => {
    const { email, password } = req.body;
    //Check input's are filled or not
    if (email && password == null) {
        res.status(400).json({ message: "input are required" });
    }

    try {
        const user = await userModel.find({ email: email });
        //1st check user with email
        if (user) {
            const userPassword = user[0].password;
            const unhashed = await bcrypt.compare(password, userPassword);
            //2nd de-crypt the password
            if (unhashed) {
                var stringId = user[0]._id.toString()
                const payload = {
                    id: stringId
                };
                //3rd if all go well geneate an token
                const token = jwt.sign(payload, process.env.JWTKEY, {
                    expiresIn: "48h",
                });

                res.status(200).json({ message: "Sucessfully login", token })
            }
            //when user email found but passowrd is invalid
            else {
                // res.status(401).json({ message: "Invalid credentials" })
                res.status(401).json({ message: "error in  login", })

                // res.send("invalid crendentails")
            }
        }
        //this will show if user email is not found
        else {
            // res.send("invalid crendentails")
            // res.status(401).json({ message: "Invalid credentials" })
            res.status(401).json({ message: "error in login" })


        }
    } catch (e) {
        console.log(e);
    }
};

// -------------------- REGISTER -------------------- //

const register = async (req, res) => {
    const { name, email, password } = req.body;

    let alreadyMember = false;

    try {
        alreadyMember = await userModel.findOne({ email: email });
    } catch (e) {
        console.log(e);
    }

    if (!alreadyMember) {
        //hashing the password for extra security
        const saltPassword = await bcrypt.hash(password, 10);
        try {
            const user = await userModel({
                name: name,
                email: email,
                password: saltPassword,
            });
            await user.save();
            res.send("user added");
        } catch (e) {
            console.log(e);
        }
    } else {
        res.send("you are already registred user");
    }
};



//VERIFY USER CODE


const checkToken = async (req, res) => {

    try {
        const findUser = await userModel.findById({ _id: req.body.userID })
        if (findUser) {
            res.send(findUser)
        }
        else {
            res.send("INVALID TOKEN");
        }
    } catch (error) {
        console.log(error);
    }

}

export { UserCon, login, register, checkToken };
