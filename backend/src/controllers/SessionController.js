const User = require('../models/User');

module.exports = {
    async store(req, res) {
        const { email } = req.body;
        const { userName } = req.body;
        let user = await User.findOne({ email, userName });

        if (!user) {
            user = await User.create({ email, userName });
        }
        return res.json(user);
    }
};