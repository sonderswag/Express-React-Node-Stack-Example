var express = require('express');
var app = express();
var itemRouter = express.Router();

var TaskList = require('../models/TaskList');

//this is where the server handles post commands
itemRouter.route('/add/post').post(function (req,res) {
  console.log('adding item',req.body);
  TaskList.addItem(req.body);

})

//this is where the server handles get commands
itemRouter.route('/').get(function (req,res) {
  //request all of the data list in order
  console.log('getting a request for the items')
  res.json(TaskList.items)
  // res.json(Object.keys(Item.data).map(key => {return Item.data[key]}))
});

itemRouter.route('/update/:id').post(function (req,res) {
  console.log('request to update', req.body)
  if(req.body === undefined) {

    req.json(new Error('undefined value'))
    return
  }

  TaskList.editItem(req.params.id, req.body, (err,items) => {
    if (err) {
      console.log(err);
      res.json(err);
      return
    }
    console.log(items);
    res.json(items);
  })
});

itemRouter.route('/delete/:id').get(function (req, res) {
  console.log('request to delete', req.params)
  TaskList.deleteItem(req.params.id, (err, items) => {
    if (err) {
      console.log(err);
      res.json(err);
      return
    }
    console.log(items)
    res.json(items);
  })
});

module.exports = itemRouter;
