const express = require('express');
const userRoutes = require('./UserRoutes.js')
const taskRoutes = require('./TaskRoutes.js')
var app = express();
let connectionString = "mongodb://mongodb:27017/";


//Außerdem Task-Routes auf /user/:id/tasks ändern (Post benutzen)
//REsponse status setzen


//MongoDB Client
const MongoClient = require('mongodb').MongoClient
let client;
let db;


async function connectToDb() {
    client = await MongoClient.connect(connectionString);
    db = await client.db('webtech');
}

const closeDbConnection = async () => {
    client.close;
}


//User-Endpoints
app.get('/users/:id', async function (req, res) {

  const users = await userRoutes.getOneUser(db.collection('users'), {});
  console.log(users._id);
  res.send(users).status(200);
});

//User-Endpoints
app.post('/users', async function (req, res) {
  var data = req.body;
  res.json(req.body);
  console.log(res.json(req.body));
  //const users = await userRoutes.getOneUser(db.collection('users'), {});
  res.send(data).status(200);
});


app.get('/users', async function (req, res) {
  //Filter noch setzen für Login
  res.set('Access-Control-Allow-Origin', '*');
  params = req.params;
  const users = await userRoutes.getOneUser(db.collection('users'), {});
  res.send(users);
});


//Task-Endpoints
app.get('/tasks/:id', async function (req, res) {
  const id = req.params.id;
  const task = await taskRoutes.getOneTask(db.collection('tasks'), { id: 0 });
  res.send(task);
});

app.get('/tasks', async function (req, res) {
  res.set('Access-Control-Allow-Origin', '*');
  const task = req.body;
  const users = await taskRoutes.getTasks(db.collection('tasks'), {});
  //const users = await taskRoutes.createTask(db, task);
  res.send(users);
});

app.put('/tasks/:id', async function (req, res) {
  const id = req.params.id
  const users = await taskRoutes.updateTask(db.collection('tasks'), task, id);
  res.send(users);
});

app.put('/tasks', async function (req, res) {
  const task = req.body;
  const users = await taskRoutes.getTasks(db.collection('tasks'), {});
  res.send(users);
});


app.delete('/tasks', async function (req, res) {
  const tasks = req.body;
  const users = await taskRoutes.deleteTasks(db.collection('tasks'), tasks.toArray());
  res.send(users);
});


//TODO: Mark Task as done hinzufügen?



app.post('/', function (req, res) {
  res.send('Hello World!');
});

app.delete('/', function (req, res) {
  res.send('Hello World!');
});

app.listen(2999, function () {
  console.log('Example app listening on port 2999!');
  connectToDb();
  console.log('Connected to MongoDB');
});

app.on('listening', function () {
  console.log('aslhad');
})

app.on('exit', function () {
  userRoutes.closeDbConnection();
  console.log('Closed MongoDB Connection');
});