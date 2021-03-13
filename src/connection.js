//require mongoose
const mongoose = require('mongoose')

//connection URI
const mongoURI = 'mongodb://localhost:27017/' + 'comics'

//mongoose config params
const config = { useUnifiedTopology: true, useNewUrlParser: true }

//connect to URI
mongoose.connect(mongoURI, config)

//db initialization and reporting
const DB = mongoose.connection
//connection messages
DB.on('error', (err) => console.log(err.message + ' is mongod not running?'))
DB.on('connected', () => console.log('mongo connected: ', mongoURI))
DB.on('disconnected', () => console.log('mongo disconnected'))

DB.close()

//export mongoose
module.exports = mongoose
