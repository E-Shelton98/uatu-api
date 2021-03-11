//require express
const express = require('express')
//require dotenv if environment = development
if (NODE_ENV='development') {
    const dotenv = require('dotenv')
    dotenv.config()
}
//set app to express()
const APP = express()
//set port to 3000 || env
const PORT = process.env.PORT || 3000
//tell the app to accept JSON body in requests
APP.use(express.json())
//set get route to 'Hello World'
APP.get('/', (req, res) => res.json({ message: 'Hello World'}))
//tell the app to listen on our port variable
APP.listen(PORT, () => console.log(`Listening on port ${PORT}`))