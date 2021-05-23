import sequelize from '../config.js';
import pkg from 'sequelize';
const { DataTypes } = pkg;

const Fridge = sequelize.define('fridge', {
  fridgeID: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true
  },
  userID: {
    type: sequelize.INTEGER,
    references: {
      model: 'user',
      key: 'userID'
    }
  },
  ingredientID: {
    type: sequelize.INTEGER,
    references: {
      model: 'ingredient',
      key: 'ingredientID'
    }
  },
  unitID: {
    type: sequelize.INTEGER,
    references: {
      model: 'unit',
      key: 'unitID'
    }
  }
}, {
  // Other model options go here
});

console.log(Fridge === sequelize.models.Fridge);

export default Fridge;
