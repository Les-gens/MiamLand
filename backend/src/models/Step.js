import sequelize from '../config.js';
import pkg from 'sequelize';
const { DataTypes } = pkg;

const Step = sequelize.define('step', {
  stepId: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  description: {
    type: DataTypes.STRING(100)
  },
  numberStep: {
    type: DataTypes.INTEGER
  },
  recetteIdFk: {
    type: DataTypes.INTEGER,
    references: {
      model: 'recipes',
      key: 'recipeId'
    }
  }
}, {
  // Other model options go here
});

console.log(Step === sequelize.models.Step);

export default Step;
