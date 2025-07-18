import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import dotenv from "dotenv"
import route from "./routes/userroutes.js";
import cors from "cors"
const app =express();
app.use(bodyParser.json());
app.use(cors());
dotenv.config();
const PORT=process.env.PORT || 7000;
const MONGOURL =process.env.MONGO_URL;
app.use("/api",route);
mongoose
    .connect(MONGOURL)
    .then(()=>{
        console.log("DB CONNECTED SUCCESFULLY")
        app.listen(PORT,()=>{
            console.log(`SERVER IS RUNNING ON PORT : ${PORT}`)
        });
    })
    .catch((error)=>console.log(error));
  