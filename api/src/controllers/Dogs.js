const {Breed, Temperament} = require ("../db")
const axios = require('axios');
const { Op } = require("sequelize");


async function llamadoApiRazas(){ 
//? Importo razas de la api y los guardo en la BD
//? IMPORTING BREEDS FROM API AND SAVING TO DB
try { 
await axios.get('https://api.thedogapi.com/v1/breeds')
  .then(response => response.data)
  .then(json => {
    json.forEach(async breed => {
      var [bree, _created] = await Breed.findOrCreate({ where: 
        {name: breed.name || 'Could not import name',}, defaults: 
        { weight: breed.weight.metric || 'Could not import weight',
        height: breed.height.metric || 'Could not import height',
        life_span: breed.life_span || 'Could not import life span',
        image: breed.image.url || 'Could not import image',
       }})
       let breedTemp = breed.temperament && breed.temperament.split(', ');
        breedTemp?.forEach(breetem => {
          Temperament.findOne({
            where: {name: breetem}
            })
            .then(tem => {bree.addTemperament(tem?.dataValues.id)})
        })
      }
    )
  })
  .then(console.log('Breeds (re)imported to DB'))
  .catch(err => console.error(err));
  } catch{err => console.error(err)};
} 


    async function getAllDogs (req, res, next) {
    const { name } = req.query
    try {
    await llamadoApiRazas()
      //?ncludi Trying to get breed by name (if provided by query) ing temperament
      if (name) {
          Breed.findAll({
          include: {model:Temperament, through:{attributes:[]}},
          where: { name: { [Op.iLike]: `%${name}%` } },
        }).then((resp) => {
          resp.length ? res.send(resp) : res.send({ message: 'Breed not found' })
        })
      }
      //? If name is not provided send all breeds
      else {
        Breed.findAll({ include: [Temperament] }).then((resp) => {
          resp.length
            ? res.send(resp)
            : res.send({ message: 'Could not get breeds' })
        })
      }
    } catch (err) {
      next(err)
    }
  }
  
    async function addDog (req, res, next) {
    const { name, height, weight, life_span, temperament } = req.body
    //? Creating Breed in post with body details
    try {
      Breed.create({
        name,
        height,
        weight,
        life_span,
        image:'https://i.imgur.com/2O2A3WP.jpeg',
      })
        .then((breed) => breed.addTemperaments(temperament))
        .then(res.send({ message: 'Created.!' }))
    } catch (err) {
      next(err.message)
    }
  }
  
    async function getDogById (req, res, next) { 
    var { id } = req.params
    //? Getting Breed if provided in params
    try {
      Breed.findByPk(id, { include: Temperament }).then((resp) => {
        resp
          ? res.send(resp)
          : res.send({ message: `Could not get breed with id: ${id}` })
      })
    } catch (err) {
      next(err)
    }
  }

  module.exports = {getDogById, getAllDogs, addDog}