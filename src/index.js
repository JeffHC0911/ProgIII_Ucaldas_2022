const express = require('express')
const mongoose = require('mongoose')
require('dotenv').config()
const req = require('express/lib/request')
const port = process.env.PORT || 3000
const execute_app = express()

//Conexión al puerto 3000
execute_app.listen(port, () =>{console.log('Listening the port', port)})

//Primer request para acceder a http://localhost:3000
execute_app.get('/home', (req, res) => res.send('Programación III'))

mongoose
        .connect(process.env.MONGODB_CONNECTION_STRING)
        .then(() => console.log('Connect with MongoDB'))
        .catch((error) => console.error(error))

const userSchemaRoutes = require('./routes/user_routes')

/*Middleware*/
execute_app.use(express.json())
/*Crear usuario: http://localhost:3000/dashboard/user
Consultar usuarios http://localhost:3000/dashboard/users*/
execute_app.use('/dashboard', userSchemaRoutes)