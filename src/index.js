const express = require('express')
const dbServer = require('./Models')
const app = express()

const IndexRoute = require('./Routes/IndexRoute')
app.use('/', IndexRoute)

app.listen(3000, async () => {
  await dbServer.sequelize.sync().then(() => {
    console.log('Banco de dados Conectado.')
    console.log('Servidor Iniciado.')
  })
})