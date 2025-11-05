dotenv.config();
import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
const PORT = process.env.PORT || 5000;
import contactRoute from './src/routes/messageRoute.js'
import connectDB from "./src/configs/db.js";


const app = express();
connectDB()

app.use(express.json());

app.use(cors({
    origin:"http://localhost:5173",
    methods:["GET","POST","PUT","DELETE"],
    credentials:true
}))

app.use("/api/contact",contactRoute);


app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
