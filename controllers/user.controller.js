const User = require('../models/user.model');

module.exports = {
  login: (req, res) => {
    User.find({
      email: req.body.email,
      pass: req.body.pass,
    }, (err, post) => {
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
    let found = 1;
    User.find({
      email: req.body.email,
    }, (err, post) => {
      if (err) {
        res.send(err);
      }
      found = post.length;
      if (found === 0) {
        User.create(req.body, (err1, post1) => {
          if (err1) {
            res.send(err1);
          }
          res.json([post1]);
        });
      } else {
        res.json(post);
      }
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
