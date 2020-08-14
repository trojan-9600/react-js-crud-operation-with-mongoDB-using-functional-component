const express = require("express");

var ObjectID = require("mongoose").Types.ObjectId;
var router = express.Router();

var { Data } = require("../models/dataModel");

router.get("/", (req, res) => {
  Data.find((err, docs) => {
    if (!err) {
      res.send(docs);
    } else {
      console.log(
        "error while retriving data :" + JSON.stringify(err, undefined, 2)
      );
    }
  });

  router.post("/", (req, res) => {
    var newRecord = new Data({
      _id: req.body.id,
      FirstName: req.body.FirstName,
      MiddleName: req.body.MiddleName,
      LastName: req.body.LastName,
      Email: req.body.Email,
      date: req.body.Date,
      bio: req.body.Bio,
    });
    newRecord.save((err, docs) => {
      if (!err) {
        res.send(docs);
      } else {
        condsole.log(
          "Error while creating new record" + JSON.stringify(err, undefined, 2)
        );
      }
    });
  });

  router.put("/:id", (req, res) => {
    if (!ObjectID.isValid(req.params.id)) {
      return res.status(400).send("no record with given id :" + req.params.id);
    }

    var updatedRecord = {
      FirstName: req.body.Fname,
      MiddleName: req.body.Mname,
      LastName: req.body.Lname,
      Email: req.body.email,
      date: req.body.date,
      bio: req.body.bio,
    };
    Data.findByIdAndUpdate(
      req.params.id,
      { $set: updatedRecord },
      { new: true },
      (err, docs) => {
        if (!err) {
          res.send(docs);
        } else {
          condsole.log(
            "Error while updating a record" + JSON.stringify(err, undefined, 2)
          );
        }
      }
    );
  });

  router.delete("/:id", (req, res) => {
    if (!ObjectID.isValid(req.params.id)) {
      return res.status(400).send("no record with given id :" + req.params.id);
    }
    Data.findByIdAndRemove(req.params.id, (err, docs) => {
      if (!err) {
        res.send(docs);
      } else {
        condsole.log(
          "Error while deleting a record" + JSON.stringify(err, undefined, 2)
        );
      }
    });
  });
});
module.exports = router;
