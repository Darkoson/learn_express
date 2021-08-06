const express = require('express')
const path = require("path");
const Joi = require('joi');
const bodyParser = require('body-parser');

const app = express()
const port = 3000
app.set('view engine', 'ejs');

// middle ware
app.use('/public', express.static(path.join(__dirname, 'static')))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());





//send the index page to the client
app.get('/:title', (req, res) => {
    res.render('index', {book: {title: req.params.title}});
})
app.listen(port, () => { console.log('Server started ...'); })

app.post('/', (req, res) => {

    const schema = Joi.object().keys({
        email: Joi.string().trim().email().required(),
        password: Joi.string().min(5).max(10).required()
    });

    Joi.validate(req.body, schema, (err, res) => {
        if (err) {
            console.log(err);
            res.send(' An error has occured ');
        }
        console.log(res);
        res.send(' form processed successfuly');
     }) ;
});