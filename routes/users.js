var express = require('express');
var router = express.Router();
const data = require('../data/user');
const auth = require('../middleware/auth');

router.get('/', async (req,res)=>{

	const result = await data.getAllUsers();
	res.send(result);
});

router.get('/:id', async (req, res)=>{

    const user = await data.getUser(req.params.id);
    res.send(user);
});

router.post('/', async (req,res)=>{
	const result = await data.addUser(req.body);
	res.send(result);
});

router.put('/:id', async (req, res)=>{
    // TODO: Validacion
    let id = req.params.id;
    let user = req.body;
    user._id = id;
    user = await data.updateUser(req.body);
    res.send(user);

});

router.post('/login', async(req,res)=>{
	try{
		const user = await data.findByCredentials(req.body.email,req.body.password);
		const token = await data.generateJWT(user);
		res.send({user,token})
	} catch (error){
		res.status(401).send(error.message);
	}

});

module.exports = router;
