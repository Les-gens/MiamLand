import sequelize from '../config.js';
import pkg from 'sequelize';
const { DataTypes } = pkg;

const Quantity = sequelize.define('quantity', {
  quantityId: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  number: {
    type: DataTypes.INTEGER
  },
  unit: {
    type: DataTypes.INTEGER
  },
  ingredientIdFk: {
    type: DataTypes.INTEGER,
    references: {
      model: 'ingredients',
      key: 'ingredientId'
    }
  },
  stepIdFk: {
    type: DataTypes.INTEGER,
    references: {
      model: 'steps',
      key: 'stepId'
    }
  }
}, {
  // Other model options go here
});

console.log(Quantity === sequelize.models.Quantity);

export default Quantity;
