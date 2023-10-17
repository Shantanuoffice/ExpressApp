import express from "express";
import userRoutes from "./routes/user.js"

const app = express();

app.use(userRoutes);

export default app;