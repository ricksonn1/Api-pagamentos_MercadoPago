'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class vendas extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      vendas.belongsTo(models.usuarios, {
        foreignKey: 'id_usuario'
      })
      vendas.belongsTo(models.produtos, {
        foreignKey: 'id_produto'
      })
    }
  }
  vendas.init({
    id_usuario: DataTypes.INTEGER,
    id_produto: DataTypes.INTEGER,
    quantidade: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'vendas',
  });
  return vendas;
};