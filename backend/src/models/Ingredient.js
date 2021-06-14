import sequelize from '../config.js';
import pkg from 'sequelize';
const { DataTypes } = pkg;

const Ingredient = sequelize.define('ingredient', {
  ingredientID: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  name: {
    type: DataTypes.STRING(50)
  },
  fridgeID: {
    type: DataTypes.INTEGER,
    allowNull: true,
    references: {
      model: 'fridges',
      key: 'fridgeID'
    }
  }
}, {
  // Other model options go here
});

console.log(Ingredient === sequelize.models.Ingredient);

export default Ingredient;
