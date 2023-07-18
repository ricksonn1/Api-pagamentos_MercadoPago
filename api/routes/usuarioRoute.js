const { Router } = require('express')
const UsuarioController = require('../controllers/UsuarioController.js')
const autenticacao = require('../middlewares/autenticado.js')

const router = Router()

router.use(autenticacao)

router
    .post('/usuario', UsuarioController.cadastrar)
    .get('/usuarios', UsuarioController.pegaTodosOsUsuarios)
    .get('/usuario/:id', UsuarioController.pegaUsuarioPorId)
    .delete('/usuario/:id', UsuarioController.deletaUsuario)
    .put('/usuarios/:id', UsuarioController.atualizaUsuario)

module.exports = router;