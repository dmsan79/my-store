const { Model, DataTypes, Sequelize } = require('sequelize');
const sequelize = require('../../libs/sequelize');

const USER_TABLE = 'users';

const UserSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  email: {
    allowNull: false,
    type: DataTypes.STRING,
    unique: true,
  },
  password: {
    allowNull: false,
    type: DataTypes.STRING
  },
  createdAt: {
    allowNull: false,
    type: DataTypes.DATE,
    field: 'create_at',
    defaultValue: sequelize.NOW
  }
}

class User extends Model {

  static associate () {
    //associate
  };

  static config(sequelize) {
    return {
      sequelize,
      tablename: USER_TABLE,
      modelName: 'User',
      timetamps: false
    }
  }
}

module.exports = { USER_TABLE, UserSchema, User }
