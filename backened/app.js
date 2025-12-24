import express from "express";
import cors from "cors";
import morgan from "morgan";
import plannerRoutes from "./routes/plannerRoutes.js";

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

// Routes
app.use("/api", plannerRoutes);

// Health route
app.get("/", (_req, res) => {
  res.json({ status: "ok", service: "planify-backend" });
});

export default app;
