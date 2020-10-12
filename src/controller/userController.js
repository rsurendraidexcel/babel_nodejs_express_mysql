// const Users = require("../model/Users");
import Users from '../model/Users';
const funcIndex = (req,res) => {
  Users.get(req.con, function(err, rows) {
   // console.log(rows);
    console.log(JSON.stringify(req.headers));
    res.json(rows);
    // res.render("users/index", { data: rows })
  });
};

module.exports = {
  index: funcIndex,
  getUserId: function(req, res) {
    Users.getById(req.con, req.params.id, function(err, rows) {
      console.log('rows');
      res.json(rows);
      // res.render("users/index", { data: rows })
    });
  },
  create: function(req, res) {
    Users.create(req.con,req.body, function(err, rows) {
       if(err) throw err;
       res.json(rows.insertId);
    });
    //res.render("users/create")
  },

  store: function(req, res) {
    Users.create(req.con, req.body, function(error) {
      res.redirect('/users');
    });
  },
  edit: function(req, res) {
    Users.getById(req.con, req.params.id, function(error, rows) {
      res.render('users/edit', { data: rows[0] });
    });
  },
  update: function(req, res) {
    Users.update(req.con, req.body, req.params.id, function(error) {
      res.redirect('/users');
    });
  },
  destroy: function(req, res) {
    Users.destroy(req.con, req.params.id, function(error) {
      res.redirect('/users');
    });
  }
};