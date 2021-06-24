var express = require('express');
var router = express.Router();
const data = require('../data/user');
const auth = require('../middleware/auth');

router.post('/', async (req, res) => {
	try {
		const user = await data.addUser(req.body);
		if (!user.photoUrl) {
			const token = await data.generateJWT(user);
			res.send({ user, token });
		} else {
			res.send(user)
		}
	} catch (error) {
		res.status(403).send(error.message);
	}
});

module.exports = router;