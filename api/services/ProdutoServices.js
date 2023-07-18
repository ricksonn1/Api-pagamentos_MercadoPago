const Services = require('./Services')
const database = require('../models')
const { v4: uuidv4 } = require('uuid')

class ProdutosServices extends Services {
    constructor() {
        super('produtos')
    }
    async cadastraProduto(dto) {
        const verificaProduto = await database.produtos.findOne({
            where: {
                nome: dto.nome
            }
        })
        if (verificaProduto)
            throw new Error('Produto já cadastrado em nosso banco')

        const produto = await database.produtos.create({
            id: uuidv4(),
            nome: dto.nome,
            quantidade: dto.quantidade,
            valor: dto.valor,
            dataDeValidade: dto.dataDeValidade
        })
        return produto;
    }
}

module.exports = ProdutosServices;