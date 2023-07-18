const AuthService = require('../services/AuthService.js')
const authService = new AuthService()

class AuthController {

    static async login(req, res) {
        const { email, senha } = req.body

        try {
            const usuario = await authService.login({ email, senha })
            res.status(200).json(usuario)
        } catch (error) {
            res.status(400).json({ message: error.message })
        }
    }
}

module.exports = AuthController;