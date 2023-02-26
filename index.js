require("dotenv")
const port=process.env.PORT || 5000
const express = require("express");
const bodyParser = require("body-parser");
const axios = require("axios");
const cors = require("cors");
const UserModel = require("./model/user.model");
const dbConnect = require("./config/db");

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("Server is Running");
});

// <<<<<<<<<<<<< POST USER ROUTE >>>>>>>>>>>
app.post("/fetch-users", async (req, res) => {
  try {
    const { data } = await axios.get("https://randomuser.me/api/?results=50");
    // console.log("data",data)
    const users = data.results.map((result) => ({
      name: `${result.name.first} ${result.name.last}`,
      email: result.email,
      phone: result.phone,
      gender: result.gender,
      location: result.location.country,
    }));
    await UserModel.insertMany(users);
    res.status(200).json({ message: "Users saved successfully!" });
  } catch (error) {
    console.log("error", error.message);

    res
      .status(500)
      .json({ message: "Error occurred while fetching and saving users!" });
  }
});

// <<<<<<<<<<<<< DELETE ROUTE >>>>>>>>>>>
app.delete("/delete-users", async (req, res) => {
  try {
    await UserModel.deleteMany({});
    res.status(200).json({ message: "Users deleted successfully!" });
  } catch (error) {
    console.log("error", error.message);

    res.status(500).json({ message: "Error occurred while deleting users!" });
  }
});

// <<<<<<<<<<<<< GET USERS ROUTE >>>>>>>>>>>
app.get("/get-users", async (req, res) => {
  const { page, limit, filter } = req.query;

  try {
    if (filter !== "") {
      const total = await UserModel.find({ gender: filter }).count();
      const data = await UserModel.find({ gender: filter })
        .skip((page - 1) * limit)
        .limit(limit);
      console.log("data :>> ", data);

      const totalPage = Math.ceil(total / limit);
      console.log(totalPage, "pages");

      res.send({ data: data, totalPages: totalPage });
    } else {
      const total = await UserModel.find().count();
      const data = await UserModel.find({})
        .skip((page - 1) * limit)
        .limit(limit);

      const totalPage = total / limit;
      console.log(totalPage, "pages");

      res.send({ data: data, totalPages: totalPage });
    }
  } catch (error) {
    console.log("error", error.message);
  }
});

// Listen the port
app.listen(port, async() => {
 await dbConnect()
  console.log(`Server started on port ${port}`);
});
