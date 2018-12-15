const mongoose = require('mongoose');

const CampListSchema = new mongoose.Schema({
  title: String ,
  venue: String ,
  time: Date ,
  description: String ,
  date: String ,
  month: String ,
  image: String ,
});

const UserSchema = new mongoose.Schema({
  name: String,
  last_name: String,
  eid: String,
  password1: String,
  password_confirmation: String,
  gender: String,
  date: Date,
  phn: Number,
  adress: {
      street: String,
      city: String,
      state: String,
      pincode: Number,
  },
  bloodgroup :String,
  whitecell : Number,
});

const CampList = mongoose.model('CampList', CampListSchema );
const User = mongoose.model('User', UserSchema );

module.exports = CampList ;
module.exports = User ;


