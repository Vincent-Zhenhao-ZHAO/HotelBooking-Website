// get all information from form
const form = {
    username: document.getElementById('username'),
    password: document.getElementById('password'),
    submit: document.getElementById('btn-submit'),
    check: document.getElementById('btn-check'),
    reset: document.getElementById('btn-reset'),
    messages: document.getElementById('form-messages'),
    sign: document.getElementById('btn-sign')
};
form.reset.addEventListener('click',() => {
    form.username.value = "";
    form.password.value = ""
    return
});
async function connect() {
    const response = await fetch('/api/connect');
    const data = await response.json();
    return data
}
// when click the submit button, do something
form.submit.addEventListener('click',() => {
    connect().catch(() => {
        swal({
            title: "Disconnect with server",
            text: "You need to start server then!",
            icon: "error",
            button: "OK"
        });
    });
    // get value from form
    const requestData = {
        Username: form.username.value,
        Password: form.password.value
    };
    connect().catch(() => {
        swal({
            title: "Disconnect with server",
            text: "You need to start server then!",
            icon: "error",
            button: "OK"
        });
    })
    // if the input is empty
    while(requestData.Username === "" || requestData.Password === "" ){
        swal({
            title: "Incorrect value",
            text: "You need to put something in both!",
            icon: "error",
            button: "OK"
        });
        return
    };
    // login function to check username and password
    async function login() {
        const response = await fetch('/api/login/' + requestData.Username + '/' + requestData.Password);
        const data = await response.json();
        // if the username and password are all correct, turn to index.html
        if (data.loginCheck === true) {
            location.href = './HomePage/index.html'
        }
        else if (data.loginCheck === 'admin') {
            location.href = './AdminPage/adminPage.html'
        }
        // if the username or password is not correct, give new buttons
        else if (data.loginCheck === false) {
            swal({
                title: "Username or password is incorrect",
                icon: "error",
                button: "OK"
            });
            return
        };
    }
    // login
    login().catch(() => {
        swal({
            title: "Disconnect with server",
            text: "You need to start server then!",
            icon: "error",
            button: "OK"
        });
    });
})
form.sign.addEventListener('click', () => {
    connect()
    .then(() => {
        location.href = './Register/regisition.html'
    })
    .catch(() => {
        swal({
            title: "Disconnect with server",
            text: "You need to start server then!",
            icon: "error",
            button: "OK"
        });
        return
    })
})