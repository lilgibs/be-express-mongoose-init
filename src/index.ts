import express, { Router } from "express";
import cors from "cors"
import connectDB from "./infrastructure/config/db";
import { Routes } from "./interface/http/routes";

const app = express()
const port = 3000
const router = Router()

// middleware
app.use(cors());

// routes
const routes = new Routes();
routes.setupRoutes(router);
app.use("/api", router);

const start = async () => {
  await connectDB(); // connect ke MongoDB
  app.listen(port, () => {
    console.log(`🚀 App is running on port ${port}`);
  });
};

start();