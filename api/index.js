const Express = require("express")

const app = new Express()
const PORT = 3000

app.get('/hello', (req, res) => {
    console.log(req)
    return res.send('<h2>Hola Puerco</h2>')
})

app.listen(PORT, () => {
    console.log(`Server running in port ${PORT}`)
})