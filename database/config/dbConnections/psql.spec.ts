import sequelize from "./psql";

const testConnection = async () => {
  try {
    await sequelize.authenticate();
    console.log("Successful Connection");
  } catch (e) {
    console.log(e);
  }
};

// This is just for dev purpose to ping psql every 5 seconds
setInterval(() => {
  testConnection();
}, 5000);
