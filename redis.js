import { createClient } from "redis";

export const redisConnection = createClient();
redisConnection
  .connect()
  .then(() => console.log("Successfully connected to the redis db"))
  .catch((error) => console.log("Error"));
