var express = require('express');
var router = express.Router();
const data = require('../data/user');
const auth = require('../middleware/auth');

router.post('/', async (req,res)=>{
	const result = await data.addUser(req.body);
	res.send(result);
});

module.exports = router;