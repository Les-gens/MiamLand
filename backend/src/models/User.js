import sequelize from '../config.js';
import pkg from 'sequelize';
const { DataTypes } = pkg;

const User = sequelize.define('user', {
  userid: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  username: {
    type: DataTypes.STRING(50)
  },
  password: {
    type: DataTypes.STRING
  }
}, {
  // Other model options go here
});

console.log(User === sequelize.models.User);

export default User;
