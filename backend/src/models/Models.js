import sequelize from '../config.js';
import pkg from 'sequelize';
const { DataTypes } = pkg;

const Ingredient = sequelize.define('ingredient', {
  ingredientid: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  name: {
    type: DataTypes.STRING(50),
    unique: true
  },
  category: {
    type: DataTypes.INTEGER,
    allowNull: true
  }
}, {
  // Other model options go here
});

console.log(Ingredient === sequelize.models.Ingredient);

const User = sequelize.define('user', {
  userid: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  username: {
    type: DataTypes.STRING(50)
  },
  password: {
    type: DataTypes.STRING
  }
}, {
  // Other model options go here
});

console.log(User === sequelize.models.User);

const UserIngredient = sequelize.define('UserIngredient', {
  ingredientidfk: {
    type: DataTypes.INTEGER,
    references: {
      model: Ingredient,
      key: 'ingredientid'
    }
  },
  useridfk: {
    type: DataTypes.INTEGER,
    references: {
      model: User,
      key: 'userid'
    }
  }
}, {
  // Other model options go here
});

Ingredient.belongsToMany(User, {
  through: UserIngredient,
  foreignKey: 'ingredientidfk'
});
User.belongsToMany(Ingredient, {
  through: UserIngredient,
  foreignKey: 'useridfk'
});

console.log(UserIngredient === sequelize.models.UserIngredient);

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

Recipe.belongsToMany(User, {
  through: Rating,
  foreignKey: 'recipeidfk'
});
User.belongsToMany(Recipe, {
  through: Rating,
  foreignKey: 'useridfk'
});

Rating.belongsTo(User, {
  through: Rating,
  foreignKey: 'useridfk'
});
Rating.belongsTo(Recipe, {
  through: Rating,
  foreignKey: 'recipeidfk'
});

console.log(Rating === sequelize.models.Rating);

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
}, {
  // Other model options go here
});

console.log(Step === sequelize.models.Step);

Step.belongsTo(Recipe, { foreignKey: 'recipeidfk' });
Recipe.hasMany( Step, { foreignKey: 'recipeidfk' } );

const Quantity = sequelize.define('quantity', {
  quantityid: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  number: {
    type: DataTypes.INTEGER
  },
  unit: {
    type: DataTypes.INTEGER
  }
}, {
  // Other model options go here
});

Quantity.belongsTo(Step, { foreignKey: 'stepidfk' });
Step.hasMany( Quantity, { foreignKey: 'stepidfk' } );

Quantity.belongsTo(Ingredient, { foreignKey: 'ingredientidfk' });
Ingredient.hasOne( Quantity, { foreignKey: 'ingredientidfk' } );

console.log(Quantity === sequelize.models.Quantity);

export {Ingredient, User, UserIngredient, Recipe, Rating, Step, Quantity};
