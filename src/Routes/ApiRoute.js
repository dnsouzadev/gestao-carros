const express = require('express')
const router = express.Router()
const { Carro } = require('../Models')

router.get('/', async (req, res) => {
  const carros = await Carro.findAll()
  return res.json(carros)
})

router.post('/', async (req, res) => {
  const data = req.body
  console.log(data)
  const carro = await Carro.create(data)
  console.log(carro)
  return res.json({success: true, message: 'Carro adicionado com sucesso'})
})

module.exports = router