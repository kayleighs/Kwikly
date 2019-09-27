const db = require("../models");

// Defining methods for the JobsController
module.exports = {
  findAll: function (req, res) {
    db.Jobs
      .find(req.query)
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findById: function (req, res) {
    db.Jobs
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findByCategory: function (req, res) {
    db.Jobs
      .find({category: req.params.category})
      .then(dbModel => res.json(dbModel))
      .catch(err=> res.status(422).json(err));
  },
  findBySearch: function (req, res) {
    db.Jobs
      .find({title: /wed/i})
      .then(dbModel => res.json(dbModel))
      .catch(err=> res.status(422).json(err));
  },
  create: function (req, res) {
    db.Jobs
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  update: function (req, res) {
    db.Jobs
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function (req, res) {
    db.Jobs
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};
