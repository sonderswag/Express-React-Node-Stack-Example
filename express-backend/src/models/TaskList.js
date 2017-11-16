
var TaskList = function() {
  this.items = {
    0: "task0",
    1: "task1"
  }
}

TaskList.prototype.addItem = function(task) {
  var newId = Object.keys(this.items).length;
  this.items[newId] = Object.keys(task)[0];
  console.log(this.items);
}

TaskList.prototype.deleteItem = function(taskId, callback) {
  if (this.items[taskId] !== null) {
    delete this.items[taskId]
    callback(null, this.items);
  }
  else {
    return new Error('Item out of index');
  }

}

TaskList.prototype.editItem = function(taskId, value, callback) {
  if (this.items[taskId] !== null) {
    console.log(taskId)
    this.items[taskId] = Object.keys(value)[0]
    callback(null,this.items)
  }
  else {
    return new Error('Item out of index')
  }
}

module.exports = new TaskList();
