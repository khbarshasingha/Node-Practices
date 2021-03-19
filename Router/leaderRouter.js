const express = require("express");

const leaderRouter = express.Router();

leaderRouter
  .route("/")
  .all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    next();
  })
  .get((req, res, next) => {
    res.end("Will send all the leader to you!");
  })
  .post((req, res, next) => {
    res.end(
      "Will add the leader: " +
        req.body.name +
        " with details " +
        req.body.description
    );
  })
  .put((req, res, next) => {
    res.statusCode = 403;
    res.end("PUT operation not supported on /leader");
  })
  .delete((req, res, next) => {
    res.end("will delete all the leader ");
  });

leaderRouter
  .route("/:leaderId")
  .all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");

    next();
  })
  .get((req, res, next) => {
    console.log(req.params.dishId);
    res.end("Will send you the details of " + req.params["leaderId"]);
  })
  .post((req, res, next) => {
    res.statusCode = 403;
    res.end(
      "POST operation not supported on /leader/leaderId " + req.params.leaderId
    );
  })
  .put((req, res, next) => {
    res.write("updating the leader " + req.params.leaderId);
    res.end(
      " Will update the leader " +
        req.body.name +
        " with details " +
        req.body.description
    );
  })
  .delete((req, res, next) => {
    res.end("Deleting leader " + req.params.leaderId);
  });
module.exports = leaderRouter;
