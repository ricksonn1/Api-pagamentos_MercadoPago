const Services = require('./Services.js')
const database = require('../models')
const { hash } = require('bcryptjs')
const { v4: uuidv4 } = require('uuid')

class UsuariosService extends Services {
    constructor() {
        super('usuarios')
    }
    async cadastraUsuario(dto) {
        const verificaUsuario = await database.usuarios.findOne({
            where: {
                email: dto.email
            }
        })
        if (verificaUsuario)
            throw new Error('Usuario já cadastrado em nosso banco')

        const senhaHash = await hash(dto.senha, 8)

        const usuario = await database.usuarios.create({
            id: uuidv4(),
            nome: dto.nome,
            email: dto.email,
            senha: senhaHash,
            creditos: dto.creditos
        })
        return usuario;
    }

    async salvarCredito(id, valor) {
        try {
            const usuario = await database.usuarios.findOne({
                where: {
                    id: id
                }
            })
            if (usuario) {
                throw new Error('Usuario não encontrado em nosso banco!')
            }
            usuario.creditos += valor
            await usuario.save()
            console.log(`Crédito adicionado com sucesso${id}`)
        } catch (error) {
            console.log("Erro ao salvar crédito:", error);
        }
    }
}

module.exports = UsuariosService