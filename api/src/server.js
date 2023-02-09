import Express from 'express'

import routes from './routes.js'

const app = new Express()
const PORT = 3000

app.use(routes)

app.listen(PORT, () => {
    console.log(`Server running in port ${PORT}`)
})