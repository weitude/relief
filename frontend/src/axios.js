import axios from 'axios'

const instance = axios.create({baseURL: 'http://localhost:4040/api'})


const LogIn = async (name, password) =>
{
    console.log(password)
    const {
        data: {message, content, type}
    } = await instance.get('/signin', {
        params:{
            name, 
            password
        }
    })

    return {message, content, type}
}

const SignUp_axios = async (name, email, password, role) =>
{
    const {
        data: {message, type}
    } = await instance.post('/signup', {
        name: name, 
        email: email, 
        password: password, 
        role: role
    })
    
    return {message, type}
}

// const restart = async () =>
// {
//     const {data: {msg, ans}} = await instance.post('/restart')
//     return {msg, ans}
// }

export {LogIn, SignUp_axios}
