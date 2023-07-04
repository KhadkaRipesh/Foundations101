const express = require("express");
const path = require("path");
const app = express();
const PORT = 3000;
const routes = require("./routes");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "./views"));

app.use("/Images", express.static("Images"));
// app.use(express.static(path.join(__dirname, "./pages")));

app.use("/", routes());

app.listen(PORT, () => {
  console.log(`The server is running on Port ${PORT}`);
});
