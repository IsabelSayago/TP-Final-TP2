require('dotenv').config();
const connection = require("./connection");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const ObjectId = require("mongodb").ObjectId;

{/*-----------------GET ALL USERS---------------*/}

async function getAllUsers() {
  const connectiondb = await connection.getConnection();
  const users = await connectiondb
    .db("TPFinal-TP2")
    .collection("Usuarios")
    .find()
    .toArray();
  return users;
}

  {/*-----------------GET USER BY ID---------------*/}
  async function getUser(id) {
  const connectiondb = await connection.getConnection();

  const user = await connectiondb
    .db("TPFinal-TP2")
    .collection("Usuarios")
    .findOne({ _id: new ObjectId(id) });

  return user;
}


{/*-----------------UPDATE USER---------------*/}

async function updateUser(myUser) {
  const connectiondb = await connection.getConnection();
  const query = {_id: new ObjectId(myUser._id)};
  const newvalues = {
    $set: {
      name: myUser.name,
      language: myUser.language,
      age: myUser.age,
    },
  };
  console.log(myUser.age)

  console.log(query)
  const result = await connectiondb
    .db("TPFinal-TP2")
    .collection("Usuarios")
    .updateOne(query, newvalues);

  return result;
}

{/*-----------------ADD USER---------------*/}

async function addUser(user) {
  const connectiondb = await connection.getConnection();
  
  user.password = bcrypt.hashSync(user.password, 8);

  const result = await connectiondb
    .db("TPFinal-TP2")
    .collection("Usuarios")
    .insertOne(user);

  return result.ops[0];
  
}

{/*--------------------JWT--------------------*/}

async function generateJWT(user){
	const token = jwt.sign({_id: user._id, email:user.email}, process.env.SECRET_KEY, {expiresIn: '1h'})
	return token;
}

{/*-----------------FIND USER---------------*/}

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


async function findById(Id) {
  const connectiondb = await connection.getConnection();
  const user = await connectiondb
    .db("TPFinal-TP2")
    .collection("Usuarios")
    .findOne({ _Id: Id });
 
  return user;
}


module.exports = {
  addUser,
  findByCredentials,
  generateJWT,
  getAllUsers,
  updateUser,
  getUser,
  findById
};

