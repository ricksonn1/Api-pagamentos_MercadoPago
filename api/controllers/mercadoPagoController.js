const mercadopago = require('mercadopago');
require('dotenv').config()
mercadopago.configurations.setAccessToken(process.env.ACESS_TOKEN);
const UsuarioService = require('../services/UsuariosServices')
const usuarioService = new UsuarioService()


class MercadopagoController {


    static async verificaPagamento(pagamentoId) {


        try {
            const data = await mercadopago.payment.findById(pagamentoId)
            const status = data["response"]["status"]

            if (status === "approved") {

                console.log('Pagamento aprovado')
                const id = data["response"]["id"]
                const valor = parseFloat(data["response"]["transaction_amount"])

                await usuarioService.salvarCredito(id, valor)
            } else {
                console.log("O pagamento segue pendente...");
                setTimeout(() => {
                    MercadopagoController.verificaPagamento(pagamentoId);
                }, 10000);
            }
        } catch (error) {
            console.log('Erro ao processar seu pedido!', error)
        }
    }


    static async createPayment(req, res) {

        const valor = req.body.valor
        let pagamentoId;
        let status;
        let qrCodeBase64;

        const payment_data = {
            transaction_amount: parseFloat(valor),
            description: 'Título do produto',
            payment_method_id: 'pix',
            payer: {
                email: '',
                first_name: '',
                last_name: '',
                identification: {
                    type: 'CPF',
                    number: ''
                },
                address: {
                    zip_code: '',
                    street_name: '',
                    street_number: '15',
                    neighborhood: '',
                    city: '',
                    federal_unit: 'GO'
                }
            }
        };

        mercadopago.payment
            .create(payment_data)
            .then(function (data) {
                pagamentoId = data["response"]["id"]
                console.log(`ID do pagamento: ${id}`)
                status = data["response"]["status"]
                console.log(`Status do pagamento: ${status}`)
                qrCodeBase64 = data["response"]["point_of_interaction"]["transaction_data"]["qr_code_base64"]
                console.log(qrCodeBase64)
                MercadopagoController.verificaPagamento(pagamentoId)

                res.status(200).json({ IDdoPagamento: id, status: status, qrCode: qrCodeBase64 })

            })
            .catch(function (error) {
                console.log("Erro no pix:", error);
            });
    }

}


module.exports = MercadopagoController;
