import sequelize from '../config.js';
import pkg from 'sequelize';
const { DataTypes } = pkg;

const Rating = sequelize.define('rating', {
  recipeIdFk: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    references: {
      model: 'recipes',
      key: 'recipeId'
    }
  },
  userIdFk: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    references: {
      model: 'users',
      key: 'userId'
    }
  },
  grade: {
    type: DataTypes.INTEGER
  }
}, {
  // Other model options go here
});

console.log(Rating === sequelize.models.Rating);

export default Rating;
