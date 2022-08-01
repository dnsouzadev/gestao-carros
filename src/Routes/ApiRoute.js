const express = require('express')
const router = express.Router()
const { Carro } = require('../Models')

router.post('/', async (req, res) => {
  const data = req.body
  console.log(data)
  const carro = await Carro.create(data)
  console.log(carro)
  return res.json({success: true, message: 'Carro adicionado com sucesso'})
})

module.exports = router