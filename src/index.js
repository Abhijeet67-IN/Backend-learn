// require('dotenv').config({path: './env'})








import dotenv from 'dotenv'
import connectDB from './db/index.js';

dotenv.config({
path : './env'
})




connectDB();






/*
import express from 'express'

const app = express()
(async ()=>{

    try{

        mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME }`)

        app.on("error",(err)=>{
            console.log("ERR :",err);
            throw err;
        })

        app.listen(process.env.PORT , ()=>{
            console.log(`app is listening on port ${process.env.PORT}`);
        })

    }

    catch(error){
        console.log("ERROR :" ,error)
        throw error ;

    }
})
    */