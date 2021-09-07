const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  //?DEFINO LA TABLA DE TEMPERAMENTO EN LA BASE DE DATOS
  //?DEFINING TEMPERAMENT TABLE AT DB
  sequelize.define('Temperament', {
    name: {
      type: DataTypes.STRING
    },
  },
    { timestamps: false }
  );
}