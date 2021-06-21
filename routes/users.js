var express = require('express');
var router = express.Router();
const data = require('../data/user');
const auth = require('../middleware/auth');

router.get('/',auth, async (req,res)=>{

	const result = await data.getAllUsers();
	res.send(result);
});

router.get('/:id',auth, async (req, res)=>{

    const user = await data.findById(req.params.id);
    res.send(user);
});

router.post('/',auth, async(req,res)=>{
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
    let user = {...req.body, _id: req.params.id};
    let userUpdated = await data.updateUser(user);
    res.send(userUpdated);

});

module.exports = router;
