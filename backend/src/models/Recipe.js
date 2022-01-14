import sequelize from '../config.js';
import pkg from 'sequelize';
const { DataTypes } = pkg;

const Recipe = sequelize.define('recipe', {
  recipeid: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  name: {
    type: DataTypes.STRING(50)
  },
  description: {
    type: DataTypes.STRING(100)
  },
  maxstep: {
    type: DataTypes.INTEGER
  },
  useridfk: {
    type: DataTypes.INTEGER,
    references: {
      model: 'users',
      key: 'userid'
    }
  }
}, {
  // Other model options go here
});

console.log(Recipe === sequelize.models.Recipe);

export default Recipe;
