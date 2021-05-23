import sequelize from '../config.js';
import pkg from 'sequelize';
const { DataTypes } = pkg;

const Ingredient = sequelize.define('ingredient', {
  ingredientID: {
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

console.log(Ingredient === sequelize.models.Ingredient);

export default Ingredient;
