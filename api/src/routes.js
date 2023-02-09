import { Router } from 'express'

const route = Router()

route.get('/healty', (req, res) => {
    return res.status(200).json({ 
        status: "Running",
        version: '0.0.1'
     })
})

export default route