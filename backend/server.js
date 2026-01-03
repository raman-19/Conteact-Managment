const express = require("express");
const mongoose = require("mongoose");
const db=require('./db')
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());



app.use("/api/contacts", require("./routes/contactRoutes"));

app.listen(5000, () => console.log("Server running on port 5000"));
