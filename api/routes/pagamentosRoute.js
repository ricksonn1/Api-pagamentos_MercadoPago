const { Router } = require('express')

const MercadopagoController = require('../controllers/mercadoPagoController.js')

const router = Router()

router
    .get('/pagamentos/pix', MercadopagoController.createPayment)

module.exports = router