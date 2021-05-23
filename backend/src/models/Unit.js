import sequelize from '../config.js';
import pkg from 'sequelize';
const { DataTypes } = pkg;

const Unit = sequelize.define('unit', {
  unitID: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true
  },
  name: {
    type: DataTypes.STRING(50)
  }
}, {
  // Other model options go here
});

console.log(Unit === sequelize.models.Unit);

export default Unit;
