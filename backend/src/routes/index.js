import express from 'express'
import { sha256 } from 'js-sha256';
import { User } from '../models/user'

const router = express.Router()

const CreateUser = async (res, name, email, hash, role) => {
	console.log(name)
	try{
		await User.create({name: name, email: email, hash: hash, role: role})
		res.json({message: "success"})
	}
	catch (e) {
		res.json({message: e})
	}
}

router.post('/SignUp', (req, res) => {
	const name = req.body.name
	const email = req.body.email
	const password = req.body.password
	const role = req.body.role

	const hash = sha256(password);

	CreateUser(res, name, email, hash, role)
})

export default router