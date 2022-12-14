import fs from "fs";
import { v4 } from "uuid";
import path from "path";
import { format } from "date-fns";
import { Request, Response } from "express";

const uuid = v4();
const fsPromises = fs.promises;

const logEvents = async (message: string, logName: string) => {
  const dateTime = `${format(new Date(), "yyyyMMdd\tHH:mm:ss")}`;
  const logItem = `${dateTime}\t${uuid}\t${message}\n`;

  try {
    if (!fs.existsSync(path.join(__dirname, "..", "logs"))) {
      await fsPromises.mkdir(path.join(__dirname, "..", "logs"));
    }
    await fsPromises.appendFile(
      path.join(__dirname, "..", "logs", logName),
      logItem
    );
  } catch (error) {
    error instanceof Error && error.message;
  }
};

const logger = (req: any, res: any, next: () => void) => {
  logEvents(`${req.method}\t${req.headers.origin}\t${req.url}`, `reqLog.txt`);
  console.log(`${req.methods} ${req.path} `);
  next();
};

export { logEvents, logger };
