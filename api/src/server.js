import Express from 'express'
import routes from './routes.js'
import bodyParser from 'body-parser'

import './db/connection.js'


const { json, urlencoded } = bodyParser

const app = new Express()
const PORT = 3000

app.use(json( { extended: true } ))
app.use(urlencoded( { extended: true } ))

app.use(routes);
app.listen(PORT, () => {
    console.log(`Server running in port ${PORT}`)
})