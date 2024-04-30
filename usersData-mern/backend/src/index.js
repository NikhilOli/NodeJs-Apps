import { connectDb, app } from "./db/index.js";
import express from "express";
import userRouter from "./routes/users.routes.js";
import cors from "cors";

app.use(cors());
app.use(express.json());
connectDb();

app.use("/users", userRouter);

app.get("/", (req, res) => {
  res.send("Hello World");
});
