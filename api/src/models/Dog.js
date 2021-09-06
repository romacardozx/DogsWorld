const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  //?DEFINO LA TABLA DE BREED EN LA BASE DE DATOS 
  //?DEFINING BREED TABLE AT DB
  sequelize.define('dog', {
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
};
  //?DEFINO LA TABLA DE TEMPERAMENTO EN LA BASE DE DATOS
  //?DEFINING TEMPERAMENT TABLE AT DB
  sequelize.define('temperament', {
  name: {
    type: DataTypes.STRING
  },
},
  { timestamps: false 
});

