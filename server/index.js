import express from "express";
import cors from "cors";
import { port } from "./lib/env.vars.js";
import connectDB from "./lib/connectDB.js";
import authRoutes from "./routes/authRoutes.js";


const app = express();

app.use(express.json());
app.use(cors());
app.use("/user", authRoutes);
app.use("/uploads", express.static("uploads"));


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
    connectDB()
})