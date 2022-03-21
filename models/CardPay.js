const {Schema, model} = require('mongoose')

//CardNumber, ExpDate, Cvv, Amount
const schema = new Schema({
    "CardNumber": { type: String, required: true},
    ExpDate: { type: String, required: true},
    Cvv: { type: String, required: true},
    Amount: { type: Number, required: true}
})

module.exports = model('CardPay', schema)