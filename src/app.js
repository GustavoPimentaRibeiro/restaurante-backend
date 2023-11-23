//app.js
const express = require("express");
const app = express();

const CrudController = require('./controllers/crudController');
const crudController = new CrudController();

app.use(express.json());

app.post('/create', crudController.createUser);
app.post('/update', crudController.updateUser);
app.get('/read', crudController.readUser);
app.post('/delete', crudController.deleteUser)

module.exports = app;