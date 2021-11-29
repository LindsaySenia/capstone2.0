const loginForm = document.getElementById('login-form')
const display = document.getElementById('display')
const registerForm = document.getElementById('register-form')

// registerForm.addEventListener('submit', e => {
//     e.preventDefault();

//     const firstInput = document.getElementById('first');
//     const lastInput = document.getElementById('last');
//     const emailInput = document.getElementById('email');
//     const userInput = document.getElementById('user-register');
//     const pwInput = document.getElementById('pw-register');

//     let firstName = firstInput.value;
//     let lastName = lastInput.value;
//     let emailAdd = emailInput.value;
//     let userReg = userInput.value;
//     let pwReg = pwInput.value;

//     axios.post(`http://localhost:3141/login`, body)
// })

// function createWelcome(obj) {
//     let regMsg = document.createElement('h2');
//     let link = document.createElement('p');
//     regMsg.textContent = `Yo ${res.data.username}! You're registered! Please log in.`;
//     link.innerHTML += `<a href="./index.html">Log In</a>`
//     display.append(regMsg);
//     display.append(link);
// }



function clearDisplay() {
    display.innerHTML = ''
}

registerForm.addEventListener('submit', e => {
    e.preventDefault()
    clearDisplay()

    let firstName = document.getElementById('first');
    let lastName = document.getElementById('last');
    let email = document.getElementById('email');
    let username = document.getElementById('user-register');
    let password = document.getElementById('pw-register');



    let userObj = {
        username: username.value,
        password: password.value,
        firstName: firstName.value,
        lastName: lastName.value,
        email: email.value
    }

    axios.post(`http://localhost:3141/register`, userObj )
        .then(res => {
            console.log(res.data)
        
            let regMsg = document.createElement('h2');
            let link = document.createElement('p');
            regMsg.textContent = `Yo ${res.data.username}! You're registered! Please log in.`;
            link.innerHTML += `<a href="./index.html">Log In</a>`
            display.append(regMsg);
            display.append(link);

            username.value = ''
            password.value = ''
            firstName.value = ''
            lastName.value = ''
            email.value = ''
    })
        .catch(err => {
            console.log(userObj)
        console.log(err.response.data)
    })


   
});

loginForm.addEventListener('submit', e => {
    e.preventDefault();
    clearDisplay()

    const usernameInput = document.getElementById('user-login');
    const passwordInput = document.getElementById('pw-login');

    let username = usernameInput.value;
    let password = passwordInput.value;

    axios.get(`http://localhost:3141/login?username=${username}&password=${password}`)
        .then(res => {
            console.log(res.data)

            const loginMsg = document.createElement('h2');
            const links = document.createElement('p');
            loginMsg.textContent = `Yo ${res.data.username}! You did it! You may now proceed to your final destination.`;
            links.innerHTML += `<a href="./sorting.html">Sorting Hat</a>`
            display.append(loginMsg);
            display.append(links);
          
            usernameInput.value = ''
            passwordInput.value = ''

        })
        .catch(err => {
            console.log(err.response.data)
        });


});