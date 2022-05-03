import { RedisClientType } from "@node-redis/client";
import { createClient } from "redis";
import loadConfigs from "../../server/loadConfigs";
const configs = loadConfigs();

class RedisConnection {
  redisClient!: RedisClientType;

  async createConnection() {
    this.redisClient = await createClient({
      url: `redis://${configs.REDIS_HOST}:${configs.REDIS_PORT}`,
    });
    await this.redisClient.connect();
    return this.redisClient;
  }

  async closeConnection() {
    await this.redisClient.disconnect();
  }
}

export default RedisConnection;
