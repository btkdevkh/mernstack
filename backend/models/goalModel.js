const mongosse = require('mongoose')

const goalSchema = mongosse.Schema({
  text: {
    type: String,
    require: [true, 'Please add a text value']
  }
}, {timestamps: true})

module.exports = mongosse.model('Goal', goalSchema)
