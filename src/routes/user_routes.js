const express = require('express')
const userSchema = require('../models/user')
const route = express.Router()

/*Crear la ruta para la creación de usuarios*/
route.post('/user', (req, res) => {
    const user = userSchema(req.body)
    user
        .save()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }))
})

/*Listar los usuarios existentes*/
route.get('/users', (req, res) => {
    userSchema
        .find()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }))
})

/*Mostrar información de un usuario específico */
route.get('/users/:id', (req, res) => {
    const {id} = req.params
    userSchema
        .findById(id)
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }))
})

/*Eliminar usuario específico*/
route.delete('/users/:id', (req, res) => {
    const {id} = req.params
    userSchema
        .remove({ _id: id })
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }))
})

/*Editar un recurso específico*/
route.put('/users/:id', (req, res) => {
    const {id} = req.params
    const {name, lastname, age, email} = req.body
    userSchema
        .updateOne({_id: id}, {$set:{name, lastname, age, email}})
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }))
})

module.exports = route