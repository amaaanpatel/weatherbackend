var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var CollectionSchema = new Schema({
   cityName:{type:String},
   data:{type:Object}
},{ timestamps: true });

// Export the model
module.exports = mongoose.model('cities', CollectionSchema);