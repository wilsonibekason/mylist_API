import express, { Express } from "express";
import { config } from "dotenv";
import { connectDatabase } from "../config/dbconnect";
import { allowedOrigins } from "../config/allowedOrigins";
import fs from "fs";
import cookieParser from "cookie-parser";
import cors from "cors";
import mongoose from "mongoose";
import { logger } from "../middleware/logEvents";
import { corsOptions } from "../config/corsOptions";
import { credientials } from "../middleware/credentials";
import { logEvents } from "../middleware/logEvents";
import { errorHandler } from "../middleware/errorHandler";
import { verifyJWT } from "../middleware/verifyJWT";

const app = express();
const fsPromises = fs.promises;

const PORT = process.env.PORT || 5000;

//// declare the dotenv configuration
connectDatabase();

config();

////

app.use(express.json());

app.use(express.urlencoded({ extended: false, limit: 1 }));

app.use(cookieParser());

app.use(credientials);

app.use(cors(corsOptions as {}));

app.use(logger);

// ALL ROUTES

// jwt verified verifyJWT routes

app.use(verifyJWT);

/// render todo logistics

app.use(errorHandler);

app.get("/", (req, res) => {
  res.send("Hello wORLD ");
  console.log(`Hello world`);
});

mongoose.connection.once("open", (req, res) => {
  res.send("Database connected ");
  console.log(`Connected to MongoDB Database`);
  app.listen(PORT, () => console.log(`server is running on ${PORT}`));
});
