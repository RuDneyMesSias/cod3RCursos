const porta = 3003

const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const bancoDeDados = require('./bancoDeDados')

app.use(bodyParser.urlencoded({extended: true}))

app.get('/produtos', (req, res, next) => { //GET: Todos
    res.send(bancoDeDados.getProdutos())
})

app.get('/produtos/:id', (req, res, next) => { //GET/:id 
    res.send(bancoDeDados.getProdutos(req.params.id))
})

app.post('/produtos', (req, res, next) => { //POST: salvar dados em memoria
    const produto = bancoDeDados.salvarProduto({
        nome: req.body.nome,
        preco: req.body.preco
    })
    res.send(produto) //Json
})

app.put('/produtos/:id', (req, res, next) => { //PUT: alterar dados em memoria 
    const produto = bancoDeDados.salvarProduto({
        id: req.params.id,
        nome: req.body.nome,
        preco: req.body.preco
    })
    res.send(produto) //Json
})

app.delete('/produtos/:id', (req, res, next) => { //DELETE: Excluir dados 
    const produto = bancoDeDados.excluirProduto(req.params.id)
    res.send(produto) //Json
})

app.listen(porta, () => {
    console.log(`Servidor executando na porta ${porta}. `)
})

//Crud: Quatro operações básicas do banco de dados: GET, POST, PUT, DELETE
