import sequelize from '../config.js';
import pkg from 'sequelize';
const { DataTypes } = pkg;

const UserIngredient = sequelize.define('userIngredient', {
  ingredientIdFk: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    references: {
      model: 'ingredients',
      key: 'ingredientId'
    }
  },
  userIdFk: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    references: {
      model: 'users',
      key: 'userId'
    }
  }
}, {
  // Other model options go here
});

console.log(UserIngredient === sequelize.models.UserIngredient);

export default UserIngredient;
