const UsuariosService = require('../services/UsuariosServices')
const usuarioService = new UsuariosService()

class UsuarioController {

    static async cadastrar(req, res) {

        const { nome, email, cpf, senha, creditos } = req.body
        try {
            const usuario = await usuarioService.cadastraUsuario({ nome, email, cpf, senha, creditos })
            res.status(201).json(usuario)
        } catch (error) {
            res.status(400).json({ message: error.message })
        }
    }
    static async pegaTodosOsUsuarios(req, res) {
        const usuario = await usuarioService.pegaTodosOsRegistros()
        res.status(200).json(usuario)
    }
    static async pegaUsuarioPorId(req, res) {
        const { id } = req.params

        try {
            const usuario = await usuarioService.pegaUmRegistro(id)
            res.status(200).json(usuario)
        } catch (error) {
            res.status(400).json({ message: error.message })
        }
    }
    static async deletaUsuario(req, res) {
        const { id } = req.params

        try {
            await usuarioService.deletaRegistro(id)
            res.status(200).json('Usuario deletado com sucesso!')
        } catch (error) {
            res.status(400).json({ message: error.message })
        }
    }
    static async atualizaUsuario(req, res) {
        const { id } = req.params
        const { nome, email, cpf, senha } = req.body

        try {
            const usuario = await usuarioService.atualizaUsuario({ id, nome, email, cpf, senha })
            res.status(200).json(usuario)
        } catch (error) {
            res.status(400).json({ message: error.message })
        }
    }
}
module.exports = UsuarioController