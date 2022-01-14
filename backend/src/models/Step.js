import sequelize from '../config.js';
import pkg from 'sequelize';
const { DataTypes } = pkg;

const Step = sequelize.define('step', {
  stepid: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  description: {
    type: DataTypes.STRING(100)
  },
  numberstep: {
    type: DataTypes.INTEGER
  },
  recipeidfk: {
    type: DataTypes.INTEGER,
    references: {
      model: 'recipes',
      key: 'recipeid'
    }
  }
}, {
  // Other model options go here
});

console.log(Step === sequelize.models.Step);

export default Step;
