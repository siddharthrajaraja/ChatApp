import { Model } from "sequelize";
import UserSchema from "database/schema/Users";
import sequelize from "database/config/dbConnections/psql";

class Users extends Model {}

Users.init(UserSchema, {
  sequelize,
  modelName: "user_tbl",
  createdAt: false,
  updatedAt: false,
});

export default Users;
