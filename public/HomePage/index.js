const header = document.querySelector('.header');
const  hotelMenu = document.querySelector('.hotel-menu');
window.addEventListener('scroll', () => {
    let windowPosition = window.scroolY > 0;
    header.classList.toggle('active', windowPosition);
})
hotelMenu.addEventListener('click',() => {
    header.classList.toggle('open-menu');
})
const searchForm = {
    destination: document.getElementById('destination'),
    checkIn: document.getElementById('check-in'),
    checkOut: document.getElementById('check-out'),
    adults: document.getElementById('adults'),
    children: document.getElementById('children')
}
const contactForm = {
     contactName: document.getElementById('contactName'),
     contactEmail:document.getElementById('contactEmail'),
     contactSubject: document.getElementById('contactSubject'),
     contactInformation: document.getElementById('contactInformation')
}
const gengralForm = {
    searchBtn:document.getElementById('searchBtn'),
    contactBtn:document.getElementById('contactBtn'),
    resetBtn:document.getElementById('resetBtn'),
    contactWhole:document.getElementById('contactWhole'),
    popBox: document.getElementById('popBox'),
    edit: document.getElementById('alertEdit'),
    submit: document.getElementById('alertSubmit')
}
async function connect() {
    const response = await fetch('/api/connect');
    const data = await response.json();
    return data
}
const headerForm = {
    home:document.getElementById('home'),
    book:document.getElementById('book'),
    feedback:document.getElementById('feedback'),
    check:document.getElementById('check'),
    change:document.getElementById('change'),
    bookingNow1:document.getElementById('bookingNow1'),
    bookingNow2:document.getElementById('bookingNow2'),
    bookingNow3:document.getElementById('bookingNow3'),
    bookingNow4:document.getElementById('bookingNow4'),
    bookingNow5:document.getElementById('bookingNow5'),
    bookingNow6:document.getElementById('bookingNow6')
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
headerForm.bookingNow1.addEventListener('click',() => {
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
headerForm.bookingNow2.addEventListener('click',() => {
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
headerForm.bookingNow3.addEventListener('click',() => {
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
headerForm.bookingNow4.addEventListener('click',() => {
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
headerForm.bookingNow5.addEventListener('click',() => {
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
headerForm.bookingNow6.addEventListener('click',() => {
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
getUserData()
async function getUserData() {
    const userResponse = await fetch('/api/loginUser/');
    const userdata = await userResponse.json();
    const user = await userdata[0];
   if (user != []) {
        document.getElementById('welcome').innerHTML = "WELCOME BACK: " + user.username;
   }
}
gengralForm.resetBtn.addEventListener('click', () => {
    contactForm.contactName.value = "";
    contactForm.contactEmail.value = "";
    contactForm.contactSubject.value = "";
    contactForm.contactInformation.value = "";
    return
})
gengralForm.contactBtn.addEventListener('click',() => {
    const contact = {
        contactName: contactForm.contactName.value,
        contactEmail: contactForm.contactEmail.value,
        contactSubject: contactForm.contactSubject.value,
        contactInformation: contactForm.contactInformation.value,
    }
    if(contact.contactName === "" || contact.contactEmail === "" || contact.contactSubject === "" || contact.contactInformation === ""){
        swal({
            title: "Wrong form",
            text: "You need to put something before submit!",
            icon: "error",
            button: "OK!",
        });
        return
    }
    else if(contact.contactName === ""){
        swal({
            title: "Wrong name",
            text: "You need to put your name",
            icon: "error",
            button: "OK!",
        });
        return
    }
    else if(contact.contactEmail === ""){
        swal({
            title: "Wrong email",
            text: "You need to put your email address",
            icon: "error",
            button: "OK!",
        });
        return
    }
    else if(contact.contactSubject === ""){
        swal({
            title: "Wrong subject",
            text: "You need to put the subject",
            icon: "error",
            button: "OK!",
        });
        return
    }
    else if(contact.contactInformation === ""){
        swal({
            title: "Wrong information",
            text: "You need to put some inforamtion",
            icon: "error",
            button: "OK!",
        });
        return
    }
    else if (!contact.contactEmail.includes("@")){
        swal({
            title: "Wrong email form!",
            text: "It should be xxxx@sss.com",
            icon: "error",
            button: "OK!",
        });
        return
    }
    const contact_option_Post = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
            },
        body: JSON.stringify(contact)
    }
    async function postContact() {
        const response = await fetch('/api/contact',contact_option_Post)
        const data = await response.json();
        swal({
            title: "We will contact you soon!",
            text: "Your reference number is " + data.id + ". You can check and edit it in check page!",
            icon: "success",
            button: "OK"
        });
    }
    swal({
        title: "Are you sure? This is your inoformation:",
        text: "Name: " + contact.contactName + " Email: " + contact.contactEmail + " Subject: " 
        + contact.contactSubject +  " Information: " + contact.contactInformation + ". ",
        icon: "warning",
        buttons: true,
        dangerMode: true,
        })
    .then((finalConfirm) => {
        if (finalConfirm) {
            postContact().catch(() => {
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
        }
    });
    gengralForm.edit.addEventListener('click', () => {
        gengralForm.popBox.style.display = "none" 
        return
    })
    gengralForm.submit.addEventListener('click', () => {
        gengralForm.popBox.style.display = "none" 
        postContact().catch(() => {
            swal({
                title: "Disconnect with server",
                text: "You need to start server then!",
                icon: "error",
                button: "OK"
            });
        })
        return
    })
})
gengralForm.searchBtn.addEventListener('click',() => {
    const newSearch = {
        destination: searchForm.destination.value,
        checkInDate: searchForm.checkIn.value,
        checkOutDate: searchForm.checkOut.value,
        adults: searchForm.adults.value,
        children: searchForm.children.value
    }
    const search_option_Post = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
            },
        body: JSON.stringify(newSearch)
    }
    async function postSearch(){
        const response = await fetch('/api/search',search_option_Post)
        const data = await response.json();
        swal({
            title: "We have place for you!",
            text: "Your information is: destination: " + data.destination + " checkInDate: " + data.checkInDate + " checkOutDate: " 
            + data.checkOutDate + " adults: " + data.adults + " children: " + data.children,
            icon: "success",
            button: "Ok!"
        });
        return
    }
    postSearch().catch(() => {
        swal({
            title: "Disconnect with server",
            text: "You need to start server then!",
            icon: "error",
            button: "OK"
        });
    })
})