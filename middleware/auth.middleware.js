const jwt = require('jsonwebtoken')
const config = require('config')
const User = require('../models/User')

module.exports = async (req, res, next) => {
    if (req.method === 'OPTIONS') {
        return next()
    }

    try {

        const token = req.headers.authorization.split(' ')[1] // "Bearer TOKEN"

        if (!token) {
            return res.status(401).json({ message: 'Нет авторизации' })
        }

        req.user = jwt.verify(token, config.get('jwtSecret'));
        const user = await User.find({ _id: req.user.userId })
        res.status(201).json({ user })
        next()

    } catch (e) {
        res.status(401).json({ message: 'Нет авторизации' })
    }
}