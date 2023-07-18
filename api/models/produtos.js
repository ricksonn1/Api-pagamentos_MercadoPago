'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class produtos extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      produtos.hasMany(models.vendas, {
        foreignKey: 'id_produto'
      })
    }
  }
  produtos.init({
    nome: DataTypes.STRING,
    quantidade: DataTypes.STRING,
    valor: DataTypes.STRING,
    dataDeValidade: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'produtos',
  });
  return produtos;
};