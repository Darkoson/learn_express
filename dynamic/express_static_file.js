const express = require('express');
const path = require('path');

const app = express();

app.get('/' , (req, res) => {
    res.send('This is a sample application using express') ;
});

app.get('/example' , (req, res) => {
    res.send('This is a response from example route') ;
});

app.get('/example/:name/:age' , (req, res) => {
    console.log(req.params); //the parameters defined in the rout 
    console.log(req.query); //the parameters defined in the query string

    res.send(` Your name is : ${req.params.name} 
    \n Your age is ${req.params.age} `) ;
});



app.listen('3001') ;