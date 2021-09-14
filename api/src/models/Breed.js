const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  //?DEFINO LA TABLA DE BREED EN LA BASE DE DATOS 
  //?DEFINING BREED TABLE AT DB
  sequelize.define('Breed', {
    /*id:{ 
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true
    },*/
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    height: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    weight: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    life_span: {
      type: DataTypes.STRING,
    },
    image: {
      type: DataTypes.STRING,
    }
  },
    { timestamps: false 
  });
}
