import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";

import jobRoutes from "./routes/jobRoutes.js";
import authRoutes from "./routes/authRoutes.js";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("API RUNNING");
});

// AUTH + JOB ROUTES
app.use("/api/auth", authRoutes);
app.use("/api/jobs", jobRoutes);

mongoose.connect(process.env.MONGO_URI)
.then(() => console.log("MongoDB Connected"))
.catch(err => console.log(err));

app.listen(process.env.PORT, () => {
  console.log("Server running on", process.env.PORT);
});