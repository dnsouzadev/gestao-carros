const express = require('express')
const router = express.Router()
const { Carro } = require('../Models/Carro')

router.get('/', async (req, res) => {
  const all = await Carro.findAll()
  return res.json(all)
})

module.exports = router