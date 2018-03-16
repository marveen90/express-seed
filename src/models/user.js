var mongoose = require('mongoose');
var muv = require('mongoose-unique-validator');

const Schema = mongoose.Schema;

const schema = new Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true }
  // messages: [{type: Schema.Types.ObjectId, ref: 'Message'}]
});

schema.plugin(muv);

module.exports = mongoose.model('User', schema);