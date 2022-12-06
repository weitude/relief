import axios from 'axios'

const instance = axios.create({baseURL: 'http://localhost:4040/api'})


const LogIn = async (name, password) =>
{
    console.log(password)
    const {
        data: {message, content, type}
    } = await instance.get('/signin', {params:{name, password}})
    return {message, content, type}
}

// const guess = async (number) =>
// {
//     const {data: {msg}} = await instance.get('/guess', {params: {number}})
//     return msg
// }

// const restart = async () =>
// {
//     const {data: {msg, ans}} = await instance.post('/restart')
//     return {msg, ans}
// }

export {LogIn}
