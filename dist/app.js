"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const port = 3000;
const data = require('./data');
app.use(express_1.default.json());
//API
app.get('/', (req, res) => {
    //feach
    //res ->send
    res.send(fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(response => response.json())
        .then(json => console.log(json)));
});
//CRUD
//read
app.get('/lap', (req, res) => {
    res.json(data);
});
//delete
app.delete('/lap', (req, res) => {
    data.shift();
    res.json(data);
});
//update
app.put('/lap/:name', (req, res) => {
    let pu = data.find((x) => x.name == req.params.name);
    pu.age = req.body.age;
    res.json(data);
});
//create
app.post('/lap', (req, res) => {
    data.push(req.body);
    res.json(data);
});
//lap
//Params
app.get('/add/:num1/:num2', (req, res) => {
    // console.log(req.params);
    let sum = parseInt(req.params.num1) + parseInt(req.params.num2);
    res.send(`${sum}`);
});
app.get('/sub/:num1/:num2', (req, res) => {
    // console.log(req.params);
    let sub = parseInt(req.params.num1) - parseInt(req.params.num2);
    res.send(`${sub}`);
});
app.get('/div/:num1/:num2', (req, res) => {
    // console.log(req.params);
    let div = parseInt(req.params.num1) % parseInt(req.params.num2);
    res.send(`${div}`);
});
app.get('/mult/:num1/:num2', (req, res) => {
    // console.log(req.params);
    let mult = parseInt(req.params.num1) * parseInt(req.params.num2);
    res.send(`${mult}`);
});
//query
const auth = (req, res) => {
    if (req.query.Admin == "true") {
    }
    else {
        console.log('You are not Admin');
        res.json({ 'msg': 'You are not allowed ' });
    }
};
app.get('/User/:num1/:num2', auth);
//Body
app.get('/user', (req, res) => {
    console.log(req.body);
    res.send(`${req.body.name} with id ${req.body.id}`);
});
app.listen(port, () => console.log("express started"));
