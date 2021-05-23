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
    type: sequelize.INTEGER,
    references: {
      model: 'ingredient',
      key: 'ingredientID'
    }
  },
  unitID: {
    type: sequelize.INTEGER,
    references: {
      model: 'unit',
      key: 'unitID'
    }
  },
  actionID: {
    type: sequelize.INTEGER,
    references: {
      model: 'action',
      key: 'actionID'
    }
  },
  recipeID: {
    type: sequelize.INTEGER,
    references: {
      model: 'recipe',
      key: 'recipeID'
    }
  }
}, {
  // Other model options go here
});

console.log(Step === sequelize.models.Step);

export default Step;
