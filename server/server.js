require('dotenv').config();

const express = require('express');
const cors = require('cors');
const app = express();
const path = require('path')
const ctrl = require('./controllers')

const port = process.env.PORT || 3141;

//middleware
app.use(cors());
app.use(express.json());

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, '../index.html'));
});

app.get('/login', ctrl.login);
// app.post('/login/id', ctrl.register)



app.listen(port, () => console.log(`Dude, I heard they're about to SERVE some ${port}`));