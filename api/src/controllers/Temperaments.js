const {Dogs ,Temperament} = require ("../db")
const axios = require('axios');
const {Router} = require ('express');
//const router = Router()

async function llamadoApiTemps() {
    let temp = new Set();
    //? Importo temperamentos de la api y los guardo en la BD
    //? IMPORTING TEMPERAMENTS FROM API AND SAVING TO DB
    try { 
      axios.get('https://api.thedogapi.com/v1/breeds')
      .then(response => response.data)
      .then(json => {
        json && json.forEach(breed => {
          let temps = breed.temperament && breed.temperament.split(', ');
          temps && temps.forEach(t => temp.add(t));
        })
        let arrayTemp = Array.from(temp)
        //Temperament.findOrCreate(arrayTemp.map(t => ({ where:{name: t} })))
        arrayTemp.map(t =>
          Temperament.findOrCreate({where:{name: t}})
          ) 
      })
      .then(console.log('Temperaments (re)imported to DB'))
      .catch(err => console.error(err));
 } catch{err => console.error(err)};
} 


/*router.get('/', async (_req, res, next) => {
  try {
      const temperamentDb = await Temperament.findAll();
      const api = await getApi();
      console.log(temperamentDb)
      if(temperamentDb.length === 0){
          api.forEach( async (el) => {
              await Temperament.create({
                  name: el
              })
          })
          console.log("creada bd temperaments");
          const bdCreated = await Temperament.findAll();
          res.send(bdCreated)
      } 
      res.send(temperamentDb);
  } catch (error){
      console.log(error);
  }
});*/
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