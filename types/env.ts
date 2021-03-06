interface ENV {
  /**
   * EXPRESS port where express server runs on machine
   */
  EXPRESS_PORT: string;
  /**
   * POSTGRES username
   */
  POSTGRES_USER: string;
  /**
   * POSTGRES password
   */
  POSTGRES_PASSWORD: string;
  /**
   * POSGRES database name
   */
  POSTGRES_DB: string;
  /**
   * JWT secret required by the JWT Auth service
   */
  JWT_SECRET: string;
  /**
   * Port on which Redis server is hosted
   */
  REDIS_PORT: string;
  /**
   * Host of Redis server
   */
  REDIS_HOST: string;
}

export default ENV;
