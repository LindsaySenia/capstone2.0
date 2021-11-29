require('dotenv').config();

const express = require('express');
const cors = require('cors');
const app = express();
// const path = require('path')
const ctrl = require('./controllers')



//middleware
app.use(cors());
app.use(express.json());

app.use(express.static("client"));

app.get('/', (req, res) => {
    res.sendFile('client/index.html');
});

const port = process.env.PORT || process.env.SERVER_PORT;


app.get('/login', ctrl.login);
app.post('/register', ctrl.register);



app.listen(port, () => console.log(`Dude, I heard they're about to SERVE some ${port}`));