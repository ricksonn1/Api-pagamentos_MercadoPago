const ProdutosServices = require('../services/ProdutoServices.js')
const produtoService = new ProdutosServices()

class ProdutoController {


    static async cadastrar(req, res) {

        const { nome, quantidade, valor, dataDeValidade } = req.body
        try {
            const produto = await produtoService.cadastraProduto({ nome, quantidade, valor, dataDeValidade })
            res.status(201).json(produto)
        } catch (error) {
            res.status(400).json({ message: error.message })
        }
    }
    static async pegarTodosOsProdutos(req, res) {
        const usuario = await produtoService.pegaTodosOsRegistros()
        res.status(200).json(usuario)
    }
    static async pegaProdutoPorId(req, res) {
        const { id } = req.params
        try {
            const usuarioPorId = await produtoService.pegaUmRegistro(id)

            if (!usuarioPorId) {
                throw new Error('Produto não cadastrado em nosso sistema!')
            } else {
                res.status(200).json(usuarioPorId)
            }

        } catch (error) {
            res.status(400).json({ message: error.message })
        }
    }
    static async editarProduto(req, res) {
        const { id } = req.params
        const { nome, descricao } = req.body

        try {
            const verifica = await produtoService.pegaUmRegistro(id)
            if (!verifica) {
                throw new Error('Produto não cadastrado em nosso sistema!')
            }
            const usuarioProduto = await produtoService.editaRegistro({ id, nome, descricao })
            res.status(200).json(usuarioProduto)
        } catch (error) {
            throw new Error('Produto não cadastrado em nosso sistema!')
        }
    }
    static async deletarProduto(req, res) {

        const { id } = req.params

        try {
            const verifica = await produtoService.pegaUmRegistro(id)
            if (!verifica) {
                throw new Error('Produto não cadastrado em nosso sistema!')
            } else {
                await produtoService.deletaRegistro(id)
                return res.status(200).json('Produto deletado com sucesso!')
            }
        } catch (error) {
            throw new Error('Produto não cadastrado em nosso sistema!')
        }
    }
}

module.exports = ProdutoController