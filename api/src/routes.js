import { Router } from 'express'

import { Users } from './db/schemas/index.js'


const route = Router()

route.get('/healty', (req, res) => {
    return res.status(200).json({ 
        status: "Running",
        version: '0.0.1'
     })
})

route.post('/sign-up', async (req, res) => {
    const { id, name, address } = req.body
    const user = await Users.create({name, id, address})
    return res.status(200).json(user)
})

export default route