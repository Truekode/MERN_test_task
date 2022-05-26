const {Schema, model} = require('mongoose')

//LastName, FirstName, Patronymic, BirthDay, Level
const schema = new Schema({
    login: { type: String, required: true},
    lastName: { type: String, required: true},
    firstName: { type: String, required: true},
    patronymic: { type: String, required: true},
    email: { type: String, required: true},
    password: { type: String, required: true},
    birthDay: { type: Date, default: Date.now, required: true},
    level: { type: String, default: 'junior', required: true}
})

module.exports = model('User', schema)