var express = require('express');
var router = express.Router();
const data = require('../data/user');
const auth = require('../middleware/auth');

router.get('/', async (req,res)=>{

	const result = await data.getAllUsers();
	res.send(result);
});

router.get('/:id', async (req, res)=>{

    const user = await data.findById(req.params.id);
    res.send(user);
});

router.post('/', async(req,res)=>{
	try{
		const user = await data.findById(req.body._id);
		const token = await data.generateJWT(user);
		res.send({user,token})
	} catch (error){
		res.status(401).send(error.message);
	}

});

router.put('/:id', async (req, res)=>{
    // TODO: Validacion
    let id = req.params.id;
    let user = req.body;
    user._id = id;
    user = await data.updateUser(req.body);
    res.send(user);

});

module.exports = router;
