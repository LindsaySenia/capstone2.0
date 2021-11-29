const users = require('./db.json');
let globalId = 6;


module.exports = {
    login: (req, res) => {
        const { username, password } = req.query;
        const foundUser = users.find((user) => {
            return username === user.username
            console.log(req.query)
        });
        if(!foundUser) {
            res.status(403).send("You don't exist.")
        }
        console.log(foundUser);
        res.status(200).send(foundUser);
    }
}