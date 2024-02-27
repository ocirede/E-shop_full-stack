import express from "express";
import cors from "cors";
import { port } from "./lib/env.vars.js";
import connectDB from "./lib/connectDB.js";
import authRoutes from "./routes/authRoutes.js";
import productsRoutes from "./routes/productsRoutes.js";


const app = express();

app.use(express.json());
app.use(cors({origin: "https://e-shop-client-gamma.vercel.app"}));
app.use("/user", authRoutes);
app.use("/products", productsRoutes)
app.use("/uploads", express.static("uploads"));


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
    connectDB()
})