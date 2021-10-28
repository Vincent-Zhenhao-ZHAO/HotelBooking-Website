// set nav
const header = document.querySelector('.header');
const  hotelMenu = document.querySelector('.hotel-menu');

window.addEventListener('scroll', () => {
    let windowPosition = window.scroolY > 0;
    header.classList.toggle('active', windowPosition);
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
// get form information
const form = {
    firstName: document.getElementById('firstName'),
    secondName: document.getElementById('secondName'),
    phoneNumber: document.getElementById('phoneNumber'),
    arriveDate: document.getElementById('arriveDate'),
    totalNum: document.getElementById('totalNumber'),
    emailAddress: document.getElementById('emailAddress'),
    leaveDate: document.getElementById('leaveDate'),
    childrenNum: document.getElementById('totalNumberChildren'),
    submit: document.getElementById('bookButton')
}
// check connection
async function connect() {
    const response = await fetch('/api/connect');
    const data = await response.json();
    return data
}
// submit form 
form.submit.addEventListener('click', () => {
    // check connection
    connect().catch(() => {
        swal({
            title: "Disconnect with server",
            text: "You need to start server then!",
            icon: "error",
            button: "OK"
        });
    })
    // get value 
    const NewBooking = {
        firstName: form.firstName.value,
        secondName: form.secondName.value,
        phoneNumber: form.phoneNumber.value,
        arriveDate: form.arriveDate.value,
        totalNum: form.totalNum.value,
        emailAddress: form.emailAddress.value,
        leaveDate: form.leaveDate.value,
        childrenNum: form.childrenNum.value
    }
    // set api
    const booking_option_Post = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
          },
        body: JSON.stringify(NewBooking)
    }
    // post new booking information
    async function postBooking() {
        const response = await fetch('/api/booking',booking_option_Post)
        const data = await response.json();
        swal({
            title: "Submitted!",
            text: "You have booked successful! And your id reference number is: " + data.id + ". " + " You can check or edit it in Check page",
            icon: "success",
            button: "Ok!",
        });
    }
    // check empty
    if (NewBooking.firstName === "" || NewBooking.secondName === "" || NewBooking.phoneNumber === "" || NewBooking.arriveDate === "" ||NewBooking.totalNum === "" ||
    NewBooking.emailAddress === "" || NewBooking.leaveDate === "" || NewBooking.childrenNum === ""){
        swal({
            title: "Ooooops!",
            text: "You need to complete all sections!",
            icon: "error",
            button: "Ok!",
        });
    }
    // check address form
    else if (!NewBooking.emailAddress.includes("@")){
        swal({
            title: "Wrong email form!",
            text: "It should be xxxx@sss.com",
            icon: "error",
            button: "OK!",
        });
        return
    }
    // check number form
    else if (Number.isInteger(NewBooking.phoneNumber)){
        swal({
            title: "Wrong phoneNumber form!",
            text: "It should be all integers",
            icon: "error",
            button: "OK!",
        });
        return
    }
    // check total num
    else if (Number.isInteger(NewBooking.totalNum) || Number.isInteger(NewBooking.childrenNum)){
        swal({
            title: "Wrong total number or children number form!",
            text: "It should be all integers",
            icon: "error",
            button: "OK!",
        });
        return
    }
    // double check
    else{
        swal({
            title: "Are you sure to submit it? This is your information:",
            text: "firstName: " + NewBooking.firstName + " secondName: " + NewBooking.secondName + " Email: " + NewBooking.emailAddress + " phoneNumber: " 
            + NewBooking.phoneNumber +  " emailAddress: " + NewBooking.emailAddress +  " totalNumber: " + NewBooking.totalNum + " childrenNumber: " + NewBooking.childrenNum 
            + " arriveDate: " + NewBooking.arriveDate + " leaveDate: " + NewBooking.leaveDate,
            icon: "warning",
            buttons: true,
            dangerMode: true,
            })
        // pass double check
        .then((finalConfirm) => {
            if (finalConfirm) {
                postBooking().catch(() => {
                    swal({
                        title: "Disconnect with server",
                        text: "You need to start server then!",
                        icon: "error",
                        button: "OK"
                    });
                })
                return
            } 
            // continue edit
            else {
                swal("You can continue to edit!");
                return
            }
        });
    }
})
