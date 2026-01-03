const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");
require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());

// API routes
app.use("/api/contacts", require("./routes/contactRoutes"));

// 👉 Serve frontend build
const __dirname1 = path.resolve();
app.use(express.static(path.join(__dirname1, "frontend/dist")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname1, "frontend/dist", "index.html"));
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
