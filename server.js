const express = require("express");
const path = require("path");

const app = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.static(path.join(__dirname, "public"), {
  maxAge: "7d",
  etag: true
}));

app.get("/", (_, res) => res.render("index"));

app.use((req, res) => res.status(404).render("404"));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () =>
  console.log(`ASCEND running on http://localhost:${PORT}`)
);
