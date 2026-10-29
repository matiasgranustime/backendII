
const express = require("express");
const app = express();
const port = 3000;


app.get("/", (req, res) => {
    res.send(`<h1> Catálogo de Heróis </h1>
        <p> Bem-vindo ao nosso catálogo de heróis! </p>
        <p>
            <a href="/dc">Acessar catálogo da DC</a>
        </p>

        <p>
            <a href="/marvel">Acessar catálogo da Marvel</a>
        </p>
        `);
    
});



// abaixo esta o codigo pra usar o parametro na rota, para que seja possivel passar o nome do desenho na url
app.get("/desenho/:nome/:personagem", (req, res) => {
    const nome = req.params.nome
    const personagem = req.params.personagem
    res.send(`O nome do desenho é ${nome}, e o personagem é ${personagem}!`);
});


app.get("/marvel", (req, res) => {
    res.send(`<h1> Marvel!! </h1>
       <p> A Marvel Comics é uma editora norte-americana de histórias em quadrinhos, propriedade da The Walt Disney Company desde 31 de dezembro de 2009 e subsidiária da Disney Publishing Worldwide desde março de 2023.
        </p>
        `);
});

app.get("/dc", (req, res) => {
    res.send(`<h1> DC!! </h1>
        <p> A DC Comics é uma editora norte-americana subsidiária da companhia Warner Bros. Discovery situada em Burbank, Califórnia, especializada em histórias em quadrinhos e mídias relacionadas. A DC Comics é considerada uma das maiores companhias ligadas a este ramo no mundo todo.
        </p>
        `);
        });


// Iniciar o servidor
app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});
