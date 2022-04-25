interface ENV {
  /**
   * EXPRESS port where express server runs on machine
   */
  EXPRESS_PORT: string;
  POSTGRES_USER: string;
  POSTGRES_PASSWORD: string;
  POSTGRES_DB: string;
  JWT_SECRET: string;
}

export default ENV;
