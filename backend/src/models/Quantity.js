import sequelize from '../config.js';
import pkg from 'sequelize';
const { DataTypes } = pkg;

const Quantity = sequelize.define('quantity', {
  quantityid: {
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
  ingredientidfk: {
    type: DataTypes.INTEGER,
    references: {
      model: 'ingredients',
      key: 'ingredientid'
    }
  },
  stepidfk: {
    type: DataTypes.INTEGER,
    references: {
      model: 'steps',
      key: 'stepid'
    }
  }
}, {
  // Other model options go here
});

console.log(Quantity === sequelize.models.Quantity);

export default Quantity;
