import sequelize from '../config.js';
import pkg from 'sequelize';
const { DataTypes } = pkg;

const Step = sequelize.define('step', {
  stepID: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true
  },
  ingredientID: {
    type: DataTypes.INTEGER,
    references: {
      model: 'ingredients',
      key: 'ingredientID'
    }
  },
  unitID: {
    type: DataTypes.INTEGER,
    references: {
      model: 'units',
      key: 'unitID'
    }
  },
  action: {
    type: DataTypes.STRING,
    references: {
      model: 'actions',
      key: 'actionStep'
    }
  },
  recipeID: {
    type: DataTypes.INTEGER,
    references: {
      model: 'recipes',
      key: 'recipeID'
    }
  }
}, {
  // Other model options go here
});

console.log(Step === sequelize.models.Step);

export default Step;
