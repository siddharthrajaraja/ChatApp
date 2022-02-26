import { Model } from "sequelize";
import UserSchema from "../schema/Users";
import sequelize from "../config/dbConnections/psql";

class Users extends Model {}

Users.init(UserSchema, {
  sequelize,
  modelName: "user_tbl",
  createdAt: false,
  updatedAt: false,
});

export default Users;
