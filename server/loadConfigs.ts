import * as dotenv from "dotenv";
import path from "path";
import ENV from "types/env";
import responseMessage from "exceptions/responseMessage";

export default function loadConfigs(): ENV {
  const config = dotenv.config({
    path: path.resolve(__dirname, "../.env"),
  }).parsed;

  if (config !== undefined) {
    return {
      EXPRESS_PORT: config.EXPRESS_PORT,
      POSTGRES_USER: config.POSTGRES_USER,
      POSTGRES_PASSWORD: config.POSTGRES_PASSWORD,
      POSTGRES_DB: config.POSTGRES_DB,
      JWT_SECRET: config.JWT_SECRET,
    };
  } else throw new Error(responseMessage.ERROR_LOADING_ENV_FILE);
}
