const mongoose = require('mongoose');
const { type } = require('os');
const { boolean } = require('webidl-conversions');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required:true
  },
  age: {
    type:Number
  },
  email: {
    type:String,
  },
  mobile: {
    type:String
  },
  adress: {
    type: String,
    required:true
  },
  adharcard: {
    type: Number,
    required: true,
    unique:true
  },
  password: {
    type: String,
    required:true
  },
  role: {
    type: String,
    enum: ['voter', 'admin'],
    default:"voter"
  },
  isvoted: {
    type: boolean,
    default:false
  }
  
})
const User = mongoose.model('User', userSchema);
module.exports = User;