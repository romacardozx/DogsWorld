const express = require('express');
const router = express.Router()
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const routedogs = require ("./Dogs")
const routetemperaments = require ("./Temperaments")
router.use("/dogs", routedogs)
router.use("/temperaments", routetemperaments)



  
  module.exports = router


