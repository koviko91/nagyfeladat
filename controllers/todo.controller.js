const User = require('../models/todo.model');

module.exports = {
  list: (req, res) => {
    // így lehet keresni
    User.find({}, (err, post) => {
      if (err) {
        res.send(err);
      }
      res.json(post);
    });
  },

  find: (req, res) => {
    User.findById(req.params.id, (err, post) => {
      if (err) {
        res.send(err);
      }
      res.json(post);
    });
  },

  create: (req, res) => {
    User.create(req.body, (err, post) => {
      if (err) {
        res.send(err);
      }
      res.json(post);
    });
  },

  update: (req, res) => {
    req.body.updatedAt = new Date().toLocaleString();
    User.findByIdAndUpdate(req.params.id, req.body, (err, post) => {
      if (err) {
        res.send(err);
      }
      res.json(post);
    });
  },

  remove: (req, res) => {
    User.findByIdAndRemove(req.params.id, (err, post) => {
      if (err) {
        res.send(err);
      }
      res.json(post);
    });
  },
};
