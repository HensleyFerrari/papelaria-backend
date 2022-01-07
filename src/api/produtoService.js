const Produto = require('./produto')

module.exports = {
    async index(req,res) {
        const produto = await Produto.find({})

        return res.json(produto)
    },

    async show(req, res) {
        const produto = await Produto.findById(req.params.id)

        return res.json(produto)
    },

    async store(req,res) {
        const produto = await Produto.create(req.body)

        return res.json(produto)
    },

    async update(req,res) {
        const produto = await Produto.findByIdAndUpdate(req.params.id, req.body, {new: true})

        return res.json(produto)
    },

    async destroy(req, res) {
        await Produto.findByIdAndRemove(req.params.id)

        return res.send()
    }
}