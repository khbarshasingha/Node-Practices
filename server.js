const express = require("express");
const http = require("http");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const dishRouter = require("./Router/dishRouter");
const promoRouter = require("./Router/promoRouter");
const leaderRouter = require("./Router/leaderRouter");

const hostname = "localhost";
const port = 3000;
const app = express();

app.use(morgan("dev"));
app.use(bodyParser.json());
app.use("/dishes", dishRouter);
app.use("/promotions", promoRouter);
app.use("/leaders", leaderRouter);
// app.use("/dish", dishIdRouter);
//.all() works for all the (get post etc )methods on the given endpoint and will execute first

//app.all executes first and then the req and res is passed on to  app.get()
//any modified req or res inside app.all will be passed  on to the get() as modified
//

app.use(express.static(__dirname + "/public"));

app.use((req, res, next) => {
  console.log(req.headers);
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/html");
  res.end("<html><body> <h1>This is an express server </h1></body></html>");
});

const server = http.createServer(app);

server.listen(port, hostname, () => {
  console.log("Server running ");
});
