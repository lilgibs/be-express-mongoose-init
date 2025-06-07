import express, { Router } from "express";
import cors from "cors"
import connectDB from "./infrastructure/config/db";
import { Routes } from "./interface/http/routes";
import { dbConfig } from "./infrastructure/config/config";

const app = express()
const port = dbConfig.config.port || 3000
const router = Router()

// middleware
app.use(cors());

// routes
const routes = new Routes();
routes.setupRoutes(router);
app.use("/api", router);

app.get("/", (_req, res) => {
  res.send("Main page!");
});

const start = async () => {
  await connectDB(); // connect ke MongoDB
  app.listen(port, "0.0.0.0", () => {
    console.log(`🚀 App is running on port ${port}`);
  });
};

start();