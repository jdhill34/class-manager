const express = require("express");
const app = express();
const session = require("express-session");
const dotenv = require("dotenv");
dotenv.config();

app.use(
  session({ secret: process.env.SESSION_SECRET, cookie: { maxAge: 60000 } })
);

app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/", require("./routes/home"));

const port = process.env.PORT;
app.listen(5000, () => console.log(`Server @ http://localhost:${port}/`));
