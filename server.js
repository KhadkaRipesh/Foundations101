const express = require("express");
const path = require("path");
const app = express();
const PORT = 3000;

app.use("/Images", express.static("Images"));
app.use(express.static(path.join(__dirname, "./pages")));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "./Pages/index.html"));
});

app.listen(PORT, () => {
  console.log(`The server is running on Port ${PORT}`);
});
