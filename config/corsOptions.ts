import { allowedOrigins } from "./allowedOrigins";

const corsOptions = {
  origin: (
    origin: never,
    callback: <N, B>(nullValue?: N, boolean?: B) => void
  ) => {
    if (allowedOrigins.indexOf(origin) !== -1 || !origin) {
      callback<null, boolean>(null, false);
    } else {
      callback(new Error("Not Allowed by CORS options"));
    }
  },
  optionSuccessStatus: 200,
};

export { corsOptions };
