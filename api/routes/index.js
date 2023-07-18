const bodyParser = require('body-parser')
const usuario = require('./usuarioRoute.js')
const auth = require('./authRoute.js')
const pagamentos = require('./pagamentosRoute.js')
const produtos = require('./produtoRoute.js')

module.exports = app => {
    app.use(
        bodyParser.json(),
        produtos,
        auth,
        usuario,
        pagamentos
    )
}