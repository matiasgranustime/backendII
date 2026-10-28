
const express = require("express");
const app = express();
const port = 3000;


app.get("/dc", (req, res) => {
    res.send("Essa pagina é sobre a DC! Super Homem é um herói da DC");
});


app.get("/marvel", (req, res) => {
    res.send("Essa página é sobre a Marvel! Homem Aranha é um herói da Marvel");
});



// Iniciar o servidor
app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});
