// feedback (same as booking aprt)
// nav set
const header = document.querySelector('.header');
const  hotelMenu = document.querySelector('.hotel-menu');

window.addEventListener('scroll', () => {
    let windowPosition = window.scroolY > 0;
    header.className.toggle('active',windowPosition)
})

hotelMenu.addEventListener('click',() => {
    header.classList.toggle('open-menu');
})
const headerForm = {
    home:document.getElementById('home'),
    book:document.getElementById('book'),
    feedback:document.getElementById('feedback'),
    check:document.getElementById('check'),
    change:document.getElementById('change')
}
headerForm.home.addEventListener('click',() => {
    connect()
    .then(() => {
        location.href = '../HomePage/index.html'
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
headerForm.book.addEventListener('click',() => {
    connect()
    .then(() => {
        location.href = '../Booking/booking.html'
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
headerForm.feedback.addEventListener('click',() => {
    connect()
    .then(() => {
        location.href = '../feedback/feedback.html'
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
headerForm.check.addEventListener('click',() => {
    connect()
    .then(() => {
        location.href = '../Check/check.html'
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
headerForm.change.addEventListener('click',() => {
    connect()
    .then(() => {
        location.href = '../index.html'
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
const form = {
    userName: document.getElementById('userName'),
    userEmail: document.getElementById('userEmail'),
    userFeedback: document.getElementById('userFeedback'),
    userButton: document.getElementById('Usersend')
}
async function connect() {
    const response = await fetch('/api/connect');
    const data = await response.json();
    return data
}
form.userButton.addEventListener('click',() => {
    connect().catch(() => {
        swal({
            title: "Disconnect with server",
            text: "You need to start server then!",
            icon: "error",
            button: "OK"
        });
    })
    const newFeedback = {
        name: form.userName.value,
        email: form.userEmail.value,
        feedback: form.userFeedback.value
    }
    const feedback_option_Post = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
          },
        body: JSON.stringify(newFeedback)
    }
    async function postFeedback() {
        const response = await fetch('/api/feedback',feedback_option_Post)
        const data = await response.json();
        swal({
            title: "Submitted!",
            text: "We got your feedback! And your id reference number is: " + data.id + ". You can check or edit it in Check page",
            icon: "success",
            button: "Ok!",
        });
    }
    if(newFeedback.name === "" || newFeedback.email === "" || newFeedback.feedback === "" ){
        swal({
            title: "Wrong form",
            text: "You need to put something before submit!",
            icon: "error",
            button: "Aww yiss!",
        });
        return
    }
    else if(newFeedback.name === ""){
        swal({
            title: "Wrong name",
            text: "You need to put your name",
            icon: "error",
            button: "OK!",
        });
        return
    }
    else if(newFeedback.email === ""){
        swal({
            title: "Wrong email",
            text: "You need to put your email address",
            icon: "error",
            button: "OK!",
        });
        return
    }
    else if(newFeedback.feedback === ""){
        swal({
            title: "Wrong subject",
            text: "You need to put the subject",
            icon: "error",
            button: "OK!",
        });
        return
    }
    else if (!newFeedback.email.includes("@")){
        swal({
            title: "Wrong email form!",
            text: "It should be xxxx@sss.com",
            icon: "error",
            button: "OK!",
        });
        return
    }
    swal({
        title: "Are you sure? This is your inoformation:",
        text: "Name: " + newFeedback.name + " Email: " + newFeedback.email + " Feedback: " +
        newFeedback.feedback,
        icon: "warning",
        buttons: true,
        dangerMode: true,
        })
    .then((finalConfirm) => {
        if (finalConfirm) {
            postFeedback().catch(() => {
                swal({
                    title: "Disconnect with server",
                    text: "You need to start server then!",
                    icon: "error",
                    button: "OK"
                });
            })
        } 
        else {
            swal("You can continue to edit!");
            return
        }
    });
})

