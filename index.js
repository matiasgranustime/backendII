const express = require ("express")
const app = express()
const port = 3000

// codigo node com as rotas e tudo mais
// CADA APP É UMA ROTA DIFERENTE
app.get("/", (req, res) => {
        res.send ("Ola NODEJS")


})
app.listen(port, () => {
        console.log(`Servidor rodando em http://localhost:${port}`)
        
})

