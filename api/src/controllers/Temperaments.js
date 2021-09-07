const {Temperament} = require ("../db")
const axios = require('axios');


function llamadoApiTemps() {
    let temp = new Set();
    //? Importo temperamentos de la api y los guardo en la BD
    //? IMPORTING TEMPERAMENTS FROM API AND SAVING TO DB
    try { 
    axios('https://api.thedogapi.com/v1/breeds')
      .then(response => response.data)
      .then(json => {
        json && json.forEach(breed => {
          let temps = breed.temperament && breed.temperament.split(', ');
          temps && temps.forEach(t => temp.add(t));
        })
        let arrayTemp = Array.from(temp)
        Temperament.bulkCreate(arrayTemp.map(t => ({ name: t })))
      })
      .then(console.log('Temperaments (re)imported to DB'))
      .catch(err => console.error(err));
 } catch{err => console.error(err)};
} 

    async function getTemperaments (_req, res, next) {
    //? Getting all temperaments from DB
    try {
        await llamadoApiTemps()
      Temperament.findAll({ order: [['name', 'asc']] }).then((resp) => {
        resp.length
          ? res.send(resp)
          : res.send({ message: 'Could not get temperaments' })
      })
    } catch (err) {
      next(err)
    }
  }

  module.exports={getTemperaments}