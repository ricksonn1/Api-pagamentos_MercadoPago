const { Router } = require('express')
const ProdutoController = require('../controllers/ProdutoController.js')
const autenticacao = require('../middlewares/autenticado.js')

const router = Router()


router
    .post('/produtos', autenticacao, ProdutoController.cadastrar)
    .get('/produtos', ProdutoController.pegarTodosOsProdutos)
    .get('/produtos/:id', ProdutoController.pegaProdutoPorId)
    .delete('/produtos/:id', autenticacao, ProdutoController.deletarProduto)
    .put('/produtos/:id', autenticacao, ProdutoController.editarProduto)


module.exports = router