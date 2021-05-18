import sequelize from '../config.js';
import pkg from 'sequelize';
const { DataTypes } = pkg;

const Action = sequelize.define('action', {
  actionStep: {
    type: DataTypes.STRING(50),
    allowNull: false,
    primaryKey: true
  }
}, {
  // Other model options go here
});

console.log(Action === sequelize.models.Action);

export default Action;
