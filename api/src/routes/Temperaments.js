const express = require('express');
const router = express.Router()
const {getTemperaments} = require ("../controllers/Temperaments")

router.get("/", getTemperaments)

module.exports = router

