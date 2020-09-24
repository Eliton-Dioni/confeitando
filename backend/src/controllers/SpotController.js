const User = require('../models/User');
const Spot = require('../models/Spot');

module.exports = {
    async index(req, res) {
        const { tag } = req.query;
        const spots = await Spot.find({ tags: tag })
        return res.json(spots);
    },

    async store(req, res) {
        const { filename } = req.file;
        const { product, tags, price } = req.body;
        const { user_id } = req.headers;
        const user = await User.findById(user_id);
        if (!user) {
            return res.status(400).json({ error: 'User does not exists' });
        }

        const spot = await Spot.create({
            user: user_id,
            thumbnail: filename,
            product,
            tags: tags.split(',').map(tag => tag.trim()),
            price
        })

        return res.json(spot);
    }
};