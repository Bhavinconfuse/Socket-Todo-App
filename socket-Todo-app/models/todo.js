const mongoose =  require('mongoose');

const todoSchema = new mongoose.Schema({
    description: {type: String},
    date: {type: Date, default: Date.now() }
});

const todoModel = mongoose.model('todo', todoSchema);
module.exports = todoModel;