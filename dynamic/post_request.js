const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express()
const port = 3000

app.use('/public', express.static(path.join(__dirname,'static')) );
app.use(bodyParser.urlencoded({extended:false}));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname,'static', 'index.html'))
});
app.post('/', (req, res) => {
    console.log(req.body);

    res.send(' date proccessed successfuly');
});


app.listen(port, () => console.log(`Example app listening on port !`))