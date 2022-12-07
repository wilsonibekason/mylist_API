import { allowedOrigins } from "../config/allowedorigins";

const credientials = (req, res, next) => {
  const origin = req.header.origin;
  if (allowedOrigins.includes(origin as never)) {
    res.header("Access-Control-Allow-Credientials", true);
  }
  next();
};

export { credientials };
