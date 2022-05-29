const {Router} = require('express')
const bcrypt = require('bcryptjs')
const config = require('config')
const {check, validationResult} = require('express-validator')
const User = require('../models/User')
const mongoose = require("mongoose");
const jwt = require('jsonwebtoken');
const router = Router()


router.post(
    '/login',
    [
        check('login', 'Некорректный логин').isLength({min: 3}),
        check('password', 'Некорректный пароль').isLength({min: 3}),
    ],
    async (req, res) => {
        try {
            const errors = validationResult(req)
            if (!errors.isEmpty()) {
                return res.status(400).json({
                    errors: errors.array(),
                    message: 'Некорректные данные при входе'
                })
            }
            let {login, password} = req.body;
            login = login.toLowerCase();
            password = password.trim();
            const user = await User.findOne({ login })

            if (!user) {
                return res.status(400).json({ message: 'Пользователь не найден' })
            }

            const isMatch = await bcrypt.compare(password, user.password)

            if (!isMatch) {
                return res.status(400).json({ message: 'Неверный пароль, попробуйте снова' })
            }

            const token = jwt.sign(
                { userId: user.id },
                config.get('jwtSecret'),
                { expiresIn: '1h' }
            )

            res.json({ token, userId: user.id, user})

        } catch (e) {
            res.status(500).json({ message: e.message})
        }
    })

router.post(
    '/register',
    [
        check('password', 'Некорректный пароль').isLength({min: 3})
    ],
    async (req, res) => {
        try {
            const errors = validationResult(req)

            if (!errors.isEmpty()) {
                return res.status(400).json({
                    errors: errors.array(),
                    message: 'Некорректный данные при регистрации'
                })
            }

            let {login, lastName, firstName, patronymic, password, birthDay, email, level } = req.body
            const hashedPassword = await bcrypt.hash(password, 12);
            login = login.toLowerCase();
            const user = new User({ login, lastName, firstName, patronymic, birthDay, level, email, password: hashedPassword })

            const candidate = await User.findOne({ login })

            if (candidate) {
                return res.status(400).json({type: 'error', message: 'Пользователь с таким логином уже существует' })
            }

            await user.save();
            res.status(201).json({ type: 'success', message: 'Регистрация прошла успешно!' })


        } catch (e) {
            res.status(500).json({type: 'error', message: e.message})
        }
    })

module.exports = router