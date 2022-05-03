import RedisConnection from "./redis";

async function testRedisConnection() {
  const redisConn = new RedisConnection();
  const redisClient = await redisConn.createConnection();
  redisClient.on("error", (err) => {
    console.log("Redis Client Error", err);
  });
  redisClient.ping();
  console.log("REDIS client connection successful");
}

// This is only for dev purpose for every 5 seconds
setInterval(async () => {
  await testRedisConnection();
}, 5000);
