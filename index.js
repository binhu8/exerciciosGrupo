const express = require('express');
const app = express();
const router = express.Router();
const fs = require('fs');
const porta = process.env.PORT || 3030

app.use(express.json({extended: true}));

const lerArquivo = ()=> {
    const content = fs.readFileSync('./data/db.json', 'utf-8');
    return (JSON.parse(content));
}

router.get('/produtos', (req, res)=>{
    const conteudo = lerArquivo();
    res.send(conteudo);
})

app.use(router)

app.listen(porta,()=>{
    console.log('servidor online na em', 'http://localhost:3039/produtos')
});