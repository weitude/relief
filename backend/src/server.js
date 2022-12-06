import express from 'express';
import routes from './routes/index'
import cors from 'cors';
import mongo from './mongo'

const app = express()
const PORT = process.env.PORT || 4040;

app.use(cors())
app.use('/api', routes);

mongo.connect()
app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`));