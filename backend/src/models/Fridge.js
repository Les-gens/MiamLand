import sequelize from '../config.js';
import pkg from 'sequelize';
import User from './User.js';
const { DataTypes } = pkg;

const Fridge = sequelize.define('fridge', {
  fridgeID: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true
  },
  ID: {
    type: DataTypes.INTEGER,
    references: {
      model: 'users',
      key: 'userID'
    }
  },
  ingredientID: {
    type: DataTypes.INTEGER,
    references: {
      model: 'ingredients',
      key: 'ingredientID'
    }
  },
  unitID: {
    type: DataTypes.INTEGER,
    references: {
      model: 'units',
      key: 'unitID'
    }
  }
}, {
  // Other model options go here
});

console.log(Fridge === sequelize.models.Fridge);

export default Fridge;
