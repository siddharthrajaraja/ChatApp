import { DataTypes } from 'sequelize'

const UserSchema = {
  username: {
    type: DataTypes.STRING,
    allowNull: false
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false
  },
  mobile: {
    type: DataTypes.STRING,
    allowNull: false,
    primaryKey: true
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    primaryKey: true
  }
}

export default UserSchema
