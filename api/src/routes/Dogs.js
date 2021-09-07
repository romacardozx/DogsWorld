const express = require('express');
const router = express.Router()
const {getAllDogs, getDogById, addDog } = require ("../controllers/Dogs")

router.get("/",getAllDogs)
router.get("/:id",getDogById)
router.post("/", addDog)

module.exports = router