import express from 'express'
import crypto from 'crypto'
import { sha256 } from 'js-sha256';
import { Base64 } from 'js-base64';
import { User } from '../models/user'
import { Card } from '../models/Card'

const router = express.Router()

const CreateUser = async (res, name, email, hash, role) => {
	try{
		await User.create({name: name, email: email, hash: hash, role: role})
		res.json({message: "success"})
	}
	catch (e) {
		res.json({message: e})
	}
}

const Login = async (res, name, hash) =>{
	const result = await User.find({name: name})
		
	if(result.length === 1){
		console.log(hash)
		if(result[0].hash === hash)
			res.json({message: "success", content: result, type: 1})	
		else
			res.json({message: "Wrong password", content: undefined, type: 2})
	}
	else if(result.length > 1){
		res.json({message: "really?", content: undefined, type: 3})
	}
	else{
		res.json({message: "Can't find user", content: undefined, type: 0})
	}
}

const PostCard = async (res, title, question, tag, id) => {
	try{
		await Card.create({title: title, question: question, response: "", tag: tag, replied: false, id: id})
		res.json({message: "success", type: 1})
	}
	catch (e){
		res.json({message: "error", type: 0})
	}
}

router.post('/signup', (req, res) => {
	const name = req.body.name
	const email = req.body.email
	const password = req.body.password
	const role = req.body.role

	const hash = sha256(password);

	CreateUser(res, name, email, hash, role)
})

router.get('/signin', (req, res) => {
	const name = req.body.name
	const password = req.body.password

	const hash = sha256(password);

	Login(res, name, hash)
})

router.post('/postcard', (req, res) => {
	const buf = crypto.randomBytes(8);
	const id = Base64.encode(buf)
	
	const title = req.body.title
	const question = req.body.question
	const tag = req.body.tag

	PostCard(res, title, question, tag, id)
})

export default router