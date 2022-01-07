const mongoose = require('mongoose')

const produtoSchema = new mongoose.Schema({
    solicitante: { type: String, required: true },
    descricao: { type: String, default: '' },
    valor: { type: Number, default: 0 },
    createdAt: { type: Date, default: Date.now }
})

module.exports = mongoose.model('Produto', produtoSchema)