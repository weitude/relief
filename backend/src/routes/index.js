import express from 'express'
import { sha256 } from 'js-sha256';
import { User } from '../models/user'

const router = express.Router()

const CreateUser = async (res, name, email, hash, rule) => {
	console.log(name)
	try{
		User.create({name: name, email: email, hash: hash, rule: rule})
		res.json({message: "success"})
	}
	catch (e) {
		res.json({message: e})
	}
}

router.post('/login', (req, res) => {
	let name = req.body.name
	let email = req.body.email
	let password = req.body.password
	let rule = req.body.rule

	var hash = sha256(password);
	
	CreateUser(res, name, email, hash, rule)
})

export default router