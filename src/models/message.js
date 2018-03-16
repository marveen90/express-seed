var mongoose = require('mongoose');
var muv      = require('mongoose-unique-validator');

const Schema = mongoose.Schema;
const schema = new Schema({
  content: { type: String, required: true, unique: true },
  user: { type: Schema.Types.ObjectId, ref: 'User' }
});
schema.plugin(muv);

module.exports = mongoose.model('Message', schema);