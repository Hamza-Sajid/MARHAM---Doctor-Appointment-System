import mongoose from 'mongoose';


const connection = async () => {
    try {
        const connect = await mongoose.connect(process.env.MONGOURL);
        console.log("Database connected");
    }

    catch (e) {
        console.log("DB Error: " + e);
    }
}

export default connection;