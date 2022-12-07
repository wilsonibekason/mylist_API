import jwt from "jsonwebtoken";

const verifyJWT = (req: any, res: any, next: () => void) => {
  const authHeader = req.headers["authorization"] || req.headers?.Authorization;
  if (!authHeader.startsWith("Bearer")) return res.sendStatus(401); ///unauthorised
  console.log(authHeader); // Bearer Token
  const token = authHeader.split(" ")[1];

  jwt.verify(
    token,
    process.env.ACCESS_TOKEN_SECRET as string,
    (err: unknown, decoded: any) => {
      if (err)
        err instanceof Error &&
          res.status(403).json({ statue: "invalid", message: err.message }); // invalid token
      req.fullname = decoded.UserInfo.fullname;
      req.email = decoded.UserInfo.email;
      req.roles = decoded.UserInfo.roles;
      next();
    }
  );
};

export { verifyJWT };
