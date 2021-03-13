var express = require('express');
var mongoose = require('mongoose');
var todoModel = mongoose.model('todos')
var router = express.Router();
var S = require('string');

const bodyModifier = (bodyText) => {
  var modifiedString = S(bodyText).stripPunctuation().s;
  modifiedString = S(bodyText).collapseWhitespace().s;

}


/* GET all todos */
router.get('/getTodos', function(req, res, next) {
  todoModel.find({}, null, {sort: {updatedAt: -1}} , (err, doc)=>{
    res.json(doc);
  });
});

// ADD Todos
router.post('/addTodo', function(req, res, next) {
  bodyModifier(req.body.body);
  try{
    todoModel.insertMany([req.body], (err, doc)=>{
      if(err) throw err;
      res.json(doc);
    });
  }catch(err){
    res.send({status: false, error: 'something went wrong!'});
  }
});

// UPDATE Todos
router.post('/updateTodo', function(req, res, next) {
  var id = req.body.id;

  var updatedData = req.body;
  delete updatedData.id;

  try{
    todoModel.findByIdAndUpdate(id.toString(), {$set: updatedData}, {new: false}, (err, doc)=>{
      if(err) throw err;
      res.json(doc);
    })
  }catch(err){
    res.send({status: false, error: 'something went wrong!'});
  }
});

// UPDATE Todos
router.post('/deleteTodo', function(req, res, next) {
  var id = req.body.id;
  try{
    todoModel.findByIdAndRemove(id.toString(), (err, doc)=>{
      if(err) throw err;
      res.json(doc);
    })
  }catch(err){
    res.send({status: false, error: 'something went wrong!'});
  }
});

module.exports = router;
