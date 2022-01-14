import sequelize from '../config.js';
import pkg from 'sequelize';
const { DataTypes } = pkg;

const Rating = sequelize.define('rating', {
  recipeidfk: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    references: {
      model: 'recipes',
      key: 'recipeid'
    }
  },
  useridfk: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    references: {
      model: 'users',
      key: 'userid'
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
