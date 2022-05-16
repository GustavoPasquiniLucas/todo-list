const servidor = require('./config/servidor')
const app = servidor.app
const porta = servidor.porta
//importar a rota index.js
const index = require('./routes/index')(app)

const consigne = require('consign')
consigne().include('./routes').into(app)

app.listen(porta)
 
