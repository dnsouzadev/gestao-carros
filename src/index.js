const express = require('express')
const dbServer = require('./Models')
const app = express()

app.use(express.json())

const IndexRoute = require('./Routes/IndexRoute')
app.use('/', IndexRoute)
const ApiRoute = require('./Routes/ApiRoute')
app.use('/api/v1/', ApiRoute)

app.listen(3000, async () => {
  await dbServer.sequelize.sync().then(() => {
    console.log('Banco de dados Conectado.')
    console.log('Servidor Iniciado.')
  })
})