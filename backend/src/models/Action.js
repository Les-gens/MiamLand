import sequelize from '../config.js';
import pkg from 'sequelize';
const { DataTypes } = pkg;

const Action = sequelize.define('action', {
  actionStep: {
    type: DataTypes.STRING(50),
    allowNull: false,
    primaryKey: true
  },
  filename: {
    type: DataTypes.STRING(50)
  }
}, {
  // Other model options go here
});

console.log(Action === sequelize.models.Action);

export default Action;
