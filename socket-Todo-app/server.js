


const express = require('express');
const http = require('http');
const path  = require('path');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const todoroutes =  require('./routes/todos');
const SocketIO =  require('socket.io');


const port = process.env.PORT || 3000;

const app = express();

const ToDo = require('./models/todo');

mongoose.connect('mongodb://socket-todo-confuse:confuse57@ds235461.mlab.com:35461/socket-todo')
.then(() => {
    console.log('Databse:- Socket-todo connectd')
})


app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());


app.use('/todo',todoroutes);
const server =  http.createServer(app);
const io =  SocketIO(server);
app.set('io',io);



app.use(express.static(path.join(__dirname, '/dist/socket-Todo-app')));

server.listen(port, () =>{
    console.log('Port Running on ' + port);
});