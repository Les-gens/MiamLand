import sequelize from '../config.js';
import pkg from 'sequelize';

const { DataTypes } = pkg;

const Fridge = sequelize.define('fridge', {
  fridgeID: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  userID: {
    type: DataTypes.INTEGER,
    references: {
      model: 'users',
      key: 'userID'
    }
  }
}, {
  // Other model options go here
});

console.log(Fridge === sequelize.models.Fridge);

export default Fridge;
