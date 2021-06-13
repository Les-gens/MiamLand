import sequelize from '../config.js';
import pkg from 'sequelize';
const { DataTypes } = pkg;

const User = sequelize.define('user', {
  userID: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  firstName: {
    type: DataTypes.STRING
  },
  lastName: {
    type: DataTypes.STRING
  },
  userName: {
    type: DataTypes.STRING(50)
  },
  password: {
    type: DataTypes.STRING
  },
  email: {
    type: DataTypes.STRING
  }
}, {
  // Other model options go here
});

console.log(User === sequelize.models.User);

export default User;
