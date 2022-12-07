import { logEvents } from "./logEvents";

interface ErrOptions {
  name: string;
  message: string;
  stack: string;
}

const errorHandler = (
  err: ErrOptions,
  req: any,
  res: any,
  next: () => void
) => {
  logEvents(`${err.name}: ${err.message}`, `errLog.txt`);
  console.log(err.stack);
  res.status(500).send(err.message);
};

export { errorHandler };
