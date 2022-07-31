module.exports = (sequelize, DataTypes) => {
  const Carro = sequelize.define('Carro', {
    // Model attributes are defined here
    marca: {
      type: DataTypes.STRING,
      allowNull: false
    },
    modelo: {
      type: DataTypes.STRING,
      allowNull: false
    },
    cor: {
      type: DataTypes.STRING,
      allowNull: false
    },
    ano: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  })
  return Carro
}