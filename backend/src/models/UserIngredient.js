import sequelize from '../config.js';
import pkg from 'sequelize';
const { DataTypes } = pkg;

const UserIngredient = sequelize.define('userIngredient', {
  ingredientidfk: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    references: {
      model: 'ingredients',
      key: 'ingredientid'
    }
  },
  useridfk: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    references: {
      model: 'users',
      key: 'userid'
    }
  }
}, {
  // Other model options go here
});

console.log(UserIngredient === sequelize.models.UserIngredient);

export default UserIngredient;
