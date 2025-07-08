import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB = async()=>{
    try{
        const connectInstances = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
        console.log(`MONGODB is connected !! DB HOST : ${connectInstances.connection.host}`)
    }
    catch(error){
        console.log("ERROR :" ,error);
        process.exit(1);
    }

}

export default connectDB 