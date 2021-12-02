require('dotenv').config();

const express = require('express');
const cors = require('cors');
const app = express();
const ctrl = require('./controllers')
const port = process.env.PORT || process.env.SERVER_PORT;


//middleware
app.use(cors());
app.use(express.json());

app.use(express.static("client"));

app.get('/', (req, res) => {
    res.sendFile('client/index.html');
});




app.get('/login', ctrl.login);
app.post('/register', ctrl.register);
//api is a naming convention/best practice /api/login


app.listen(port, () => console.log(`Dude, I heard they're about to SERVE some ${port}`));