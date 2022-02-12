const mongosse = require('mongoose')

const goalSchema = mongosse.Schema({
  user: {
    type: mongosse.Schema.Types.ObjectId,
    required: true,
    ref: 'User'
  },
  text: {
    type: String,
    require: [true, 'Please add a text value']
  }
}, {timestamps: true})

module.exports = mongosse.model('Goal', goalSchema)
