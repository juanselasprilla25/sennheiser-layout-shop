const path = require("path");
const express = require("express");
const app = express();
const publicPath = path.join(__dirname, "..", "public");
app.set("port", process.env.PORT || 3000);

/**
 * Static Files
 */
// app.use(express.static(publicPath));
app.use(express.static("build"));

/**
 * Default route
 */
if (process.env.NODE_ENV == "production") {
  app.get("/", function (req, res) {
    res.sendFile(path.resolve("build/index.html"));
  });
} else {
  //   app.get("/", function (req, res) {
  //     res.send("Listening on port :" + app.get("port"));
  //   });
  app.get("*", (req, res) => {
    res.sendFile(path.join(publicPath, "index.html"));
  });
}

/**
 * StartingServer
 */
app.listen(app.get("port"), () =>
  console.log("Running server on REACT SCRIPT port " + app.get("port"))
);
