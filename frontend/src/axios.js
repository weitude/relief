import axios from 'axios'

const instance = axios.create({baseURL: 'http://localhost:4040/api'})

/*
const startGame = async () =>
{
    const {data: {msg, ans}} = await instance.post('/start')
    return {msg, ans}
}

const guess = async (number) =>
{
    const {data: {msg}} = await instance.get('/guess', {params: {number}})
    return msg
}

const restart = async () =>
{
    const {data: {msg, ans}} = await instance.post('/restart')
    return {msg, ans}
}

export {startGame, guess, restart}*/
