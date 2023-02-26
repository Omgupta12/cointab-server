const {mongoose } = require("mongoose");

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  gender: String,
  location: String,
});

const UserModel = mongoose.model("User", userSchema);

module.exports=UserModel