
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
    },

    register: (req, res) => {
        console.log(req.body)
        
        const { 
            firstName,
            lastName,
            email,
            username,
            password
        } = req.body;

        const prevUser = users.find((user) => {
            return username === user.username
        })

        if (firstName === '' || lastName === '' || email === '' || username === '' || password === '') {
            console.log('You missed something.')
            res.status(406).send('You forgot a field')
        } else if (!prevUser) {

            const newUserObj = {
                username,
                password,
                firstName,
                lastName,
                email
            }
    
            users.push(newUserObj)
            console.log(users)
            let userDisplay = {...newUserObj}
            delete userDisplay.password
            res.status(200).send(userDisplay)
        } else {
            res.status(403).send("Your chosen username is not available")
        }

        }

        
};




        // need to compare username to users array to make sure it is unique
        //if have time compare email too
        //this needs a for loop

        //hash and salt password

        //new user object

        //push to users array
        // append to display message a message with a link to sign in
    // }
