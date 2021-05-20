const mongoose = require('mongoose'),
      Schema = mongoose.Schema;

// Define collection and schema for Items
let Item = new Schema({
  name: {
    type: String
  },
  price: {
    type: Number
  }
},{
    collection: 'items'
});

module.exports = mongoose.model('Item', Item);