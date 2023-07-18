const database = require('../models')

class Services {
    constructor(nomeDoModelo) {
        this.nomeDoModelo = nomeDoModelo
    }

    async pegaTodosOsRegistros() {
        return database[this.nomeDoModelo].findAll()
    }
    async pegaUmRegistro(id) {
        return database[this.nomeDoModelo].findOne({ where: { id: id } })
    }
    async cadastraRegistro(dados) {
        return database[this.nomeDoModelo].create(dados)
    }
    async deletaRegistro(id) {
        return database[this.nomeDoModelo].destroy({ where: { id: id } })
    }
    async editaRegistro(novosDados, id) {
        return database[this.nomeDoModelo].update(novosDados, id)
    }
    
}

module.exports = Services