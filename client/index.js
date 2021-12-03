const loginForm = document.getElementById('login-form')
const display = document.getElementById('display')
const hidden = document.getElementById('hidden')
const registerForm = document.getElementById('register-form')


function clearDisplay() {
    display.innerHTML = ''
    hidden.innerHTML = ''
}

registerForm.addEventListener('submit', e => {
    e.preventDefault()
    clearDisplay()

    let firstName = document.getElementById('first');
    let lastName = document.getElementById('last');
    let email = document.getElementById('email');
    let username = document.getElementById('user-register');
    let password = document.getElementById('pw-register');

    function resetRegForm() {
            username.value = ''
            password.value = ''
            firstName.value = ''
            lastName.value = ''
            email.value = ''
        }

    let userObj = {
        username: username.value,
        password: password.value,
        firstName: firstName.value,
        lastName: lastName.value,
        email: email.value
    }

    axios.post(`/register`, userObj )
        .then(res => {
            console.log(res.data)
        
            let regMsg = document.createElement('h2');
            let link = document.createElement('p');
            regMsg.textContent = `Yo ${res.data.username}! You're registered! Please log in.`;
            link.innerHTML += `<a href="./index.html">Log In</a>`
            display.append(regMsg);
            display.append(link);

            resetRegForm()

    })
        .catch(err => {
            alert("Please make sure there are no blank fields. If there aren't, then this username is unavailable.")
            resetRegForm()
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

    axios.get(`/login?username=${username}&password=${password}`)
        .then(res => {
            console.log(res.data)

            const platform = document.createElement('h2');
            const enter = document.createElement('h4');
            const loginMsg = document.createElement('h3');
            const links = document.createElement('h4');
            // enter.textContent = "Enter Here"
            // platform.innerHTML += ``
            loginMsg.textContent = `Welcome, ${res.data.username}! Please proceed ahead to Platform 9 3/4 and board the Hogwart's Express!`;
            links.innerHTML += `<a href="./sorting.html"><img src="https://images.fineartamerica.com/images/artworkimages/mediumlarge/1/harry-potter-art-doc-braham.jpg" height="200"/></a>`
            hidden.append(links);
            hidden.append(platform);
            display.append(loginMsg);
            // display.append(links);
          
            usernameInput.value = ''
            passwordInput.value = ''

        })
        .catch(err => {
            alert('Uh oh you got it wrong!')
            usernameInput.value = ''
            passwordInput.value = ''
            console.log(err.response.data)
        });


});