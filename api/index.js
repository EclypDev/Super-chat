const Express = require("express")

const app = new Express()
const PORT = 3000

app.get('/healty', (req, res) => {
    return res.status(200).json({ 
        status: "Running",
        version: '0.0.1'
     })
})

app.listen(PORT, () => {
    console.log(`Server running in port ${PORT}`)
})