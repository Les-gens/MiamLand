import { User } from "../models/Models.js";
import fastify from "../index.js";
import pkg from "boom";
import pkg2 from "bcrypt";
const boom = pkg;
const bcrypt = pkg2;

const getAllUser = async (req, res) => {
  try {
    const users = await User.findAll();
    return users.map((user) => {
      return {
        userid: user.userid,
        username: user.username,
        createdAt: user.createdAt,
        updatedAt: user.updatedAt,
      };
    });
  } catch (err) {
    throw boom.boomify(err);
  }
};

const getSingleUser = async (req, res) => {
  try {
    const id = req.params.id;
    const user = await User.findOne({
      where: {
        userid: id,
      },
    });
    return JSON.stringify({
      userid: user.userid,
      username: user.username,
      createdAt: user.createdAt,
      updatedAt: user.updatedAt,
    });
  } catch (err) {
    throw boom.boomify(err);
  }
};

const getProfile = async (req, res) => {
  try {
    const id = req.user.userid;
    const user = await User.findAll({
      where: {
        userid: id,
      },
    });
    return user;
  } catch (err) {
    throw boom.boomify(err);
  }
};

const addNewUser = async (req, res) => {
  try {
    const plainPassword = req.body.password;
    let hashed = "";
    await bcrypt
      .genSalt(10)
      .then((salt) => {
        return bcrypt.hash(plainPassword, salt);
      })
      .then((hash) => {
        hashed = hash;
      })
      .catch((err) => console.error(err.message));
    const user = await User.create({
      username: req.body.username,
      password: hashed,
    });
    const payload = { userid: user.userid };
    const token = fastify.jwt.sign(payload);
    return { token };
  } catch (err) {
    throw boom.boomify(err);
  }
};

const updateUser = async (req, res) => {
  try {
    let hashed = "";
    let userObject = {};
    if (req.body.password) {
      await bcrypt
        .genSalt(10)
        .then((salt) => {
          return bcrypt.hash(req.body.password, salt);
        })
        .then((hash) => {
          hashed = hash;
        })
        .catch((err) => console.error(err.message));
      userObject = {
        username: req.body?.username,
        password: hashed,
      };
    } else {
      userObject = {
        username: req.body?.username,
      };
    }
    const user = await User.update(userObject, {
      where: { userid: req.params.id },
    });
    return user;
  } catch (err) {
    throw boom.boomify(err);
  }
};

const deleteUser = async (req, res) => {
  try {
    const user = await User.destroy({
      where: { userid: req.params.id },
    });
    return user;
  } catch (err) {
    throw boom.boomify(err);
  }
};

const login = async (req, res) => {
  try {
    const username = req.body.username;
    const password = req.body.password;

    const user = await User.findOne({ where: { username } });
    if (!user) return boom.unauthorized("Wrong credentials");

    const isMatching = await bcrypt.compare(
      password,
      user.getDataValue("password")
    );

    if (!isMatching) return boom.unauthorized("Wrong credentials");

    const payload = { userid: user.userid };
    const token = fastify.jwt.sign(payload);
    return { token };
  } catch (err) {
    throw boom.boomify(err);
  }
};

export {
  getAllUser,
  getSingleUser,
  getProfile,
  login,
  addNewUser,
  updateUser,
  deleteUser,
};
