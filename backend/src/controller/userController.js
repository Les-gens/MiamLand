import User from '../models/User.js';
import fastify from '../index.js';
import pkg from 'boom';
import pkg2 from 'bcrypt';
import Fridge from '../models/Fridge.js';
const boom = pkg;
const bcrypt = pkg2;

const getAllUser = async (req, res) => {
  try {
    const users = await User.findAll();
    return users;
  } catch (err) {
    throw boom.boomify(err);
  }
};

const getSingleUser = async (req, res) => {
  try {
    const id = req.params.id;
    const user = await User.findAll({
      where: {
        userID: id
      }
    });
    return user;
  } catch (err) {
    throw boom.boomify(err);
  }
};

const getProfile = async (req, res) => {
  try {
    const id = req.user.userID;
    const user = await User.findAll({
      where: {
        userID: id
      }
    });
    return user;
  } catch (err) {
    throw boom.boomify(err);
  }
};

const addNewUser = async (req, res) => {
  try {
    const plainPassword = req.body.password;
    let hashed = '';
    await bcrypt.genSalt(10)
      .then(salt => {
        return bcrypt.hash(plainPassword, salt);
      })
      .then(hash => {
        hashed = hash;
      })
      .catch(err => console.error(err.message));
    const user = await User.create({
      userName: req.body.username,
      password: hashed
    });
    await Fridge.create({
      userID: user.userID
    });
    const payload = { userID: user.userID };
    const token = fastify.jwt.sign(payload);
    return { token };
  } catch (err) {
    throw boom.boomify(err);
  }
};

const updateUser = async (req, res) => {
  try {
    let hashed = '';
    let userObject = {};
    if (req.body.password) {
      await bcrypt.genSalt(10)
        .then(salt => {
          return bcrypt.hash(req.body.password, salt);
        })
        .then(hash => {
          hashed = hash;
        })
        .catch(err => console.error(err.message));
      userObject = {
        userName: req.body?.username,
        password: hashed // TODO: Change for crypt
      };
    } else {
      userObject = {
        userName: req.body?.username
      };
    }
    const user = await User.update(userObject, { where: { userID: req.params.id } });
    return user;
  } catch (err) {
    throw boom.boomify(err);
  }
};

const deleteUser = async (req, res) => {
  try {
    const user = await User.destroy({
      where: { userID: req.params.id }
    });
    return user;
  } catch (err) {
    throw boom.boomify(err);
  }
};

const login = async (req, res) => {
  try {
    const userName = req.body.username;
    const password = req.body.password;

    const user = await User.findOne({ where: { userName } });
    if (!user) return boom.unauthorized('Wrong credentials');

    const isMatching = await bcrypt.compare(password, user.getDataValue('password'));

    if (!isMatching) return boom.unauthorized('Wrong credentials');

    const payload = { userID: user.userID };
    const token = fastify.jwt.sign(payload);
    return { token };
  } catch (err) {
    throw boom.boomify(err);
  }
};

export { getAllUser, getSingleUser, getProfile, login, addNewUser, updateUser, deleteUser };
