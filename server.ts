import express, { Express, Response, Request } from "express";
import { config } from "dotenv";

import fs from "fs";
import cookieParser from "cookie-parser";
import cors from "cors";
import { logger } from "./middleware/logEvents";

const app = express();
const fsPromises = fs.promises;

const PORT = process.env.PORT || 5000;

//// declare the dotenv configuration

config();

////

app.use(express.json());

app.use(express.urlencoded({ extended: false, limit: 1 }));

app.get("/", () => {
  console.log(`Hello world hh`);
});

app.listen(PORT, () => console.log(`server is running on ${PORT}`));
