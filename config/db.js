const { default: mongoose } = require("mongoose");
mongoose.set("strictQuery", true);
const dotenv = require("dotenv")
dotenv.config()

const dbConnect = async () => {
  await mongoose.connect(process.env.MONGODB_URL);
  console.log("db connected");
};

module.exports = dbConnect;
