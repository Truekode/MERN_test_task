const {Router} = require('express')
const router = Router()
const User = require('../models/User')
const auth = require('../middleware/auth.middleware')

router.get('/', auth, async (req, res) => {
    try {
        // const user = await User.find({ _id: req.user.userId })
        // res.json({ user: user, message: 'Запрос прошел успешно!' })
    } catch (e) {
        res.status(500).json({ message: 'Что-то пошло не так, попробуйте снова' })
    }
})

module.exports = router