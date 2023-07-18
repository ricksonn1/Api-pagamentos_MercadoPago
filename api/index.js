const express = require('express')
const routes = require('./routes')
const port = 3000;

const app = express()

routes(app)

app.listen(port, () => {
    console.log(`Servidor escutando em http://localhost:${port}, com sucesso!`)
})

module.exports = app;