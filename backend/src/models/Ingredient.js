import sequelize from '../config.js';
import pkg from 'sequelize';
const { DataTypes } = pkg;

const Ingredient = sequelize.define('ingredient', {
  ingredientid: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  name: {
    type: DataTypes.STRING(50),
    unique: true
  },
  category: {
    type: DataTypes.INTEGER,
    allowNull: true
  }
}, {
  // Other model options go here
});

console.log(Ingredient === sequelize.models.Ingredient);

export default Ingredient;
