const express = require('express')

const routes = express.Router()

const ProductService = require('../api/produtoService')

routes.get('/produtos', ProductService.index)
routes.get('/produtos/:id', ProductService.show)
routes.post('/produtos', ProductService.store)
routes.put('/produtos/:id', ProductService.update)
routes.delete('/produtos/:id', ProductService.destroy)


module.exports = routes