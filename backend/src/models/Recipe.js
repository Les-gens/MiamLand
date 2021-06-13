import sequelize from '../config.js';
import pkg from 'sequelize';
const { DataTypes } = pkg;

const Recipe = sequelize.define('recipe', {
  recipeID: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  name: {
    type: DataTypes.STRING(50)
  },
  description: {
    type: DataTypes.STRING
  },
  filename: {
    type: DataTypes.STRING(50)
  }
}, {
  // Other model options go here
});

console.log(Recipe === sequelize.models.Recipe);

export default Recipe;
