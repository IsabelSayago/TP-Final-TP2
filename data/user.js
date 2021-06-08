require('dotenv').config();
const mongodb = require("mongodb");
const connection = require("./connection");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
var ObjectId = require("mongodb").ObjectId;
const { all } = require('../app');

async function getAllUsers() {
  const connectiondb = await connection.getConnection();
  const users = await connectiondb
    .db("TPFinal-TP2")
    .collection("Usuarios")
    .find()
    .toArray();
  return users;
}

  
  async function getUser(id) {
  const connectiondb = await connection.getConnection();

  const user = await connectiondb
    .db("TPFinal-TP2")
    .collection("Usuarios")
    .findOne({ _id: new ObjectId(id) });

  return user;
}



async function updateUser(myUser) {
  const connectiondb = await connection.getConnection();
  const query = { _id: new ObjectId(myUser._id) };
  const newvalues = {
    $set: {
      nombre: myUser.nombre,
      idioma: myUser.idioma,
      edad: myUser.edad,
      mail: myUser.mail,
    },
  };

  const result = await connectiondb
    .db("TPFinal-TP2")
    .collection("Usuarios")
    .updateOne(query, newvalues);

  return result;
}

async function addUser(user) {
  const connectiondb = await connection.getConnection();
  //primer parámetro lo que se encripta
  //segunda parámetro (salt), número de iteraciones para hacer la encripción
  user.password = bcrypt.hashSync(user.password, 8);

  const result = await connectiondb
    .db("TPFinal-TP2")
    .collection("Usuarios")
    .insertOne(user);

  return result;
  
}
  
async function generateJWT(user){
// tercer parámetro es un key de la aplicación
	const token = jwt.sign({_id: user._id, email:user.email}, process.env.SECRET_KEY, {expiresIn: '5min'})
	return token;
}

async function findByCredentials(email, password) {
  const connectiondb = await connection.getConnection();
  const user = await connectiondb
    .db("TPFinal-TP2")
    .collection("Usuarios")
    .findOne({ email: email });
  if (!user) {
    throw new Error("Contraseña inválida");
  }

  const isMatch = bcrypt.compareSync(password, user.password);

  if (!isMatch) {
    throw new Error("Contraseña inválida");
  }

  return user;
}


module.exports = {
  addUser,
  findByCredentials,
  generateJWT,
  getAllUsers,
  updateUser,
  getUser,
};

