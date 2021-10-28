// get all information from form
const form = {
    username: document.getElementById('username'),
    password: document.getElementById('password'),
    submit: document.getElementById('btn-submit'),
    reset: document.getElementById('btn-reset'),
    messages: document.getElementById('form-message'),
    background: document.getElementById('background')
};
form.reset.addEventListener('click',() => {
    form.username.value = "";
    form.password.value = ""
});
form.password.addEventListener('input',(e) => {
    const input = e.target.value
    const length = input.length
    const blur = 20 - length * 2
    form.background.style.filter = `blur(${blur}px)`
});
async function connect() {
    const response = await fetch('/api/connect');
    const data = await response.json();
    return data
}
form.submit.addEventListener('click',() => {
    connect().catch(() => {
        swal({
            title: "Disconnect with server",
            text: "You need to start server then!",
            icon: "error",
            button: "OK"
        });
    });
    const newData = {
        Username: form.username.value,
        Password: form.password.value
    }
    // if the input is empty
    while((newData.Username).length === 0 || (newData.Password).length === 0 ){
        swal({
            title: "Incorrect value",
            text: "You need to put something in both!",
            icon: "error",
            button: "OK"
        });
        return
    }
    while((newData.Password).length < 10 ){
        swal({
            title: "Incorrect password length",
            text: "You need to put more password until see the background clearly!",
            icon: "error",
            button: "OK"
        });
        return
    }
    // option for post function
    const option_Post = {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json'
        },
        body: JSON.stringify(newData)
    }
    async function register() {
            const response = await fetch('/api/register/', option_Post);
            const data = await response.json();
            const checksame = data.feedback
            if(!checksame){
                const errorMessage = 'You need to input different username to sign up'
                swal({
                title: "username incorrect",
                text: errorMessage,
                icon: "error",
                button: "OK"
            });
            }
            else if(checksame) {
                swal({
                    title: "Regisition Successful!",
                    text: "Welcome and you need to login now!",
                    icon: "success",
                    button: "OK"
                })
                .then((finalconfirm) => {
                    location.href = '../index.html'
                })
            }
    };
    register().catch(() => {
        swal({
            title: "Disconnect with server",
            text: "You need to start server then!",
            icon: "error",
            button: "OK"
        });
    });
});