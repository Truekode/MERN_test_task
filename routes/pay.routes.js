const {Router} = require('express')
const bcrypt = require('bcryptjs')
const {check, validationResult} = require('express-validator')
const CardPay = require('../models/CardPay')
const router = Router()

router.post(
    '/accept',
    [
        check('Cvv', 'Некорректный CVV').isLength({min: 3})
    ],
    async (req, res) => {
    try {
        const errors = validationResult(req)
        if (!errors.isEmpty()) {
            return res.status(400).json({
                errors: errors.array(),
                message: 'Некорректные данные при оплате'
            })
        }

        const {CardNumber, ExpDate, Cvv, Amount} = req.body
        const hashedCvv = await bcrypt.hash(Cvv, 12);
        const cardPay = new CardPay({ CardNumber, ExpDate, Cvv: hashedCvv, Amount })

        await cardPay.save()
        res.status(201).json( {"RequestId": cardPay['_id'], Amount: cardPay['Amount']} )

    } catch (e) {
        res.status(500).json({ message: e.message})
    }
})

module.exports = router