dotenv.config();
import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import path from 'path'
import cors from "cors";
const PORT = process.env.PORT || 5000;
import contactRoute from './src/routes/messageRoute.js'
import adminRoute from './src/routes/adminRoutes.js'
import serviceRoute from './src/routes/serviceRoutes.js';
import company from './src/routes/company.js';  
import client from './src/routes/client.js'
import connectDB from "./src/configs/db.js";
import jobRoute from './src/routes/applyPermanent.js'
import allServicesRoute from "./src/routes/allServicesRoute.js";
import razorpayRoutes from "./src/routes/razorpayRoutes.js";




const app = express();
connectDB()

app.use(express.json());

app.use(cors({
    origin:"http://localhost:5173",
    methods:["GET","POST","PUT","DELETE"],
    credentials:true
}))


app.use("/uploads", express.static(path.join(process.cwd(), "src", "uploads")));

app.use("/api/razorpay", razorpayRoutes);
app.use("/api/contact",contactRoute);
app.use("/api/auth",adminRoute);
app.use("/api/service",serviceRoute);
app.use("/api/allServices",allServicesRoute);
app.use("/api/clients",client);
app.use("/api/job",jobRoute)


app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
