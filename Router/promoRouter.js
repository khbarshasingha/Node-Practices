const express = require("express");

const promoRouter = express.Router();

promoRouter
  .route("/")
  .all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");

    next();
  })
  .get((req, res, next) => {
    res.end("Will send all the promotions to you!");
  })
  .post((req, res, next) => {
    res.end(
      "Will add the promo: " +
        req.body.name +
        " with details " +
        req.body.description
    );
  })
  .put((req, res, next) => {
    res.statusCode = 403;
    res.end("PUT operation not supported on /promotions");
  })
  .delete((req, res, next) => {
    res.end("will delete all the promotions ");
  });

promoRouter
  .route("/:promoId")
  .all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");

    next();
  })
  .get((req, res, next) => {
    console.log(req.params.promoId);
    res.end("Will send you the details of  promo " + req.params["promoId"]);
  })
  .post((req, res, next) => {
    res.statusCode = 403;
    res.end(
      "POST operation not supported on /promotions " + req.params.promoId
    );
  })
  .put((req, res, next) => {
    res.write("updating the promo " + req.params.promoId);
    res.end(
      "Will update the promo " +
        req.body.name +
        " with details " +
        req.body.description
    );
  })
  .delete((req, res, next) => {
    res.end("Deleting promo " + req.params.promoId);
  });
module.exports = promoRouter;
