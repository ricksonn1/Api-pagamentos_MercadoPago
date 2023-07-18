const database = require('../models')
const { compare } = require('bcryptjs')
const { sign } = require('jsonwebtoken')
const jsonSecret = require('../config/jsonSecret')

class AuthService {

    async login(dto) {

        const usuario = await database.usuarios.findOne({
            attributes: ['id', 'email', 'senha'],
            where: {
                email: dto.email
            }
        })
        if (!usuario) {
            throw new Error('Usuario já cadastrado em nosso sistema!')
        }
        const senha = await compare(dto.senha, usuario.senha)
        if (!senha) {
            throw new Error('Email ou senha inválido!')
        }

        const acessToken = sign({
            id: usuario.id,
            email: usuario.email
        }, jsonSecret.secret, {
            expiresIn: 864000
        }
        )
        return { acessToken }
    }
}

module.exports = AuthService