const header = document.querySelector('.header');
const  hotelMenu = document.querySelector('.hotel-menu');
window.addEventListener('scroll', () => {
    let windowPosition = window.scroolY > 0;
    header.classList.toggle('active', windowPosition);
})
hotelMenu.addEventListener('click',() => {
    header.classList.toggle('open-menu');
})
const generalForm = {
    contactViewBtn: document.getElementById('contactViewBtn'),
    contactCheckBtn: document.getElementById('contactCheckBtn'),
    contactCheckSelect: document.getElementById('contactCheckSelect'),
    bookingViewBtn: document.getElementById('bookingViewBtn'),
    bookingCheckBtn: document.getElementById('bookingCheckBtn'),
    bookingCheckSelect: document.getElementById('bookingCheckSelect'),
    feedbackViewBtn: document.getElementById('feedbackViewBtn'),
    feedbackCheckBtn: document.getElementById('feedbackCheckBtn'),
    feedbackCheckSelect: document.getElementById('feedbackCheckSelect'),
    searchViewBtn: document.getElementById('searchViewBtn'),
    searchCheckBtn: document.getElementById('searchCheckBtn'),
    searchCheckSelect: document.getElementById('searchCheckSelect')
}
const generData = {
    contactID: document.getElementById('contactID'),
    bookingID: document.getElementById('bookingID'),
    feedbackID: document.getElementById('feedbackID'),
    searchID: document.getElementById('searchID')
}
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
async function connect() {
    const response = await fetch('/api/connect');
    const data = await response.json();
    return data
}
// contact:
generalForm.contactViewBtn.addEventListener('click', () => {
    connect()
    .catch(() => {
        swal({
            title: "Disconnect with server",
            text: "You need to start server then!",
            icon: "error",
            button: "OK"
        });
        return
    })
    if (generalForm.contactCheckSelect.value === 'view'){
        async function contactViewALL() {
            const response = await fetch('/api/getAll/contact')
            const data = await response.json();
            swal({
                title: "All contact information is ready!",
                text: "Click ok to view it or cancel to later view",
                icon: "success",
                buttons: true
            })
            .then((finalConfirm) => {
                if (finalConfirm) {
                    location.href = '/api/getAll/contact'
                } 
                else {
                    swal("You can view it later!");
                }
            });
        }
        contactViewALL().catch(() => {
            swal({
                title: "Disconnect with server",
                text: "You need to start server then!",
                icon: "error",
                button: "OK"
            });
            return
        })
    }
    else if(generalForm.contactCheckSelect.value === 'checkSelect'){
        swal({
            title: "Wrong option",
            text: "You need to choose a option!",
            icon: "error",
            button: "OK"
        });
    }
    else{
        swal({
            title: "Wrong button or option",
            text: "You clicked wrong button or select wrong option. The option you chose was " + generalForm.contactCheckSelect.value,
            icon: "error",
            button: "OK"
        });
    }
})
generalForm.contactCheckBtn.addEventListener('click', () => {
    connect()
    .catch(() => {
        swal({
            title: "Disconnect with server",
            text: "You need to start server then!",
            icon: "error",
            button: "OK"
        });
        return
    })
    if (generalForm.contactCheckSelect.value === 'check'){
        const contactData = {
            id: generData.contactID.value
        }
        async function contactCheckOne() {
            const response = await fetch('/api/getOne/contact/' + contactData.id)
            const data = await response.json();
            if (data.sign === false) {
                swal({
                    title: "Ooooops",
                    text: data.fail,
                    icon: "error",
                    button: "OK"
                });
            }
            else{
                swal({
                    title: "Here is contact information from id is" + data.id,
                    text: "Name: " + data.contactName + " Email: " + data.contactEmail + " Subject: " 
                    + data.contactSubject +  " Information: " + data.contactInformation + ". ",
                    icon: "success",
                    button: "OK"
                });
            }
        }
        contactCheckOne().catch(() => {
            swal({
                title: "Disconnect with server",
                text: "You need to start server then!",
                icon: "error",
                button: "OK"
            });
            return
        })
    }
    else if(generalForm.contactCheckSelect.value === 'checkSelect'){
        swal({
            title: "Wrong option",
            text: "You need to choose a option!",
            icon: "error",
            button: "OK"
        });
    }
    else{
        swal({
            title: "Wrong button or option",
            text: "You clicked wrong button or select wrong option. The option you chose was " + generalForm.contactCheckSelect.value,
            icon: "error",
            button: "OK"
        });
    }
})
// booking:
generalForm.bookingViewBtn.addEventListener('click', () => {
    connect()
    .catch(() => {
        swal({
            title: "Disconnect with server",
            text: "You need to start server then!",
            icon: "error",
            button: "OK"
        });
        return
    })
    if (generalForm.bookingCheckSelect.value === 'view'){
        async function bookingViewALL() {
            const response = await fetch('/api/getAll/booking')
            const data = await response.json();
            swal({
                title: "All booking information is ready!",
                text: "Click ok to view it or cancel to later view",
                icon: "success",
                buttons: true
            })
            .then((finalConfirm) => {
                if (finalConfirm) {
                    location.href = '/api/getAll/booking'
                } 
                else {
                    swal("You can view it later!");
                }
            });
        }
        bookingViewALL().catch(() => {
            swal({
                title: "Disconnect with server",
                text: "You need to start server then!",
                icon: "error",
                button: "OK"
            });
            return
        })
    }
    else if(generalForm.bookingCheckSelect.value === 'checkSelect'){
        swal({
            title: "Wrong option",
            text: "You need to choose a option!",
            icon: "error",
            button: "OK"
        });
    }
    else{
        swal({
            title: "Wrong button or option",
            text: "You clicked wrong button or select wrong option. The option you chose was " + generalForm.bookingCheckSelect.value,
            icon: "error",
            button: "OK"
        });
    }
})
generalForm.bookingCheckBtn.addEventListener('click', () => {
    connect()
    .catch(() => {
        swal({
            title: "Disconnect with server",
            text: "You need to start server then!",
            icon: "error",
            button: "OK"
        });
        return
    })
    if (generalForm.bookingCheckSelect.value === 'check'){
        const bookingData = {
            id: generData.bookingID.value
        }
        async function bookingCheckOne() {
            const response = await fetch('/api/getOne/booking/' + bookingData.id)
            const data = await response.json();
            if (data.sign === false) {
                swal({
                    title: "Ooooops",
                    text: data.fail,
                    icon: "error",
                    button: "OK"
                });
            }
            else{
                swal({
                    title: "Here is booking information from id is" + data.id,
                    text: "firstName: " + data.firstName + " secondName: " + data.secondName + " Email: " + data.emailAddress + " phoneNumber: " 
                    + data.phoneNumber  +  " totalNumber: " + data.TotalNum + " childrenNumber: " + data.childrenNum
                    + " arriveDate: " + data.arriveDate + " leaveDate: " + data.leaveDate,
                    icon: "success",
                    button: "OK"
                });
            }
        }
        bookingCheckOne().catch(() => {
            swal({
                title: "Disconnect with server",
                text: "You need to start server then!",
                icon: "error",
                button: "OK"
            });
            return
        })
    }
    else if(generalForm.bookingCheckSelect.value === 'checkSelect'){
        swal({
            title: "Wrong option",
            text: "You need to choose a option!",
            icon: "error",
            button: "OK"
        });
    }
    else{
        swal({
            title: "Wrong button or option",
            text: "You clicked wrong button or select wrong option. The option you chose was " + generalForm.bookingCheckSelect.value,
            icon: "error",
            button: "OK"
        });
    }
})
// feedback:
generalForm.feedbackViewBtn.addEventListener('click', () => {
    connect()
    .catch(() => {
        swal({
            title: "Disconnect with server",
            text: "You need to start server then!",
            icon: "error",
            button: "OK"
        });
        return
    })
    if (generalForm.feedbackCheckSelect.value === 'view'){
        async function feedbackViewALL() {
            const response = await fetch('/api/getAll/feedback')
            const data = await response.json();
            swal({
                title: "All feedback information is ready!",
                text: "Click ok to view it or cancel to later view",
                icon: "success",
                buttons: true
            })
            .then((finalConfirm) => {
                if (finalConfirm) {
                    location.href = '/api/getAll/feedback'
                } 
                else {
                    swal("You can view it later!");
                }
            });
        }
        feedbackViewALL().catch(() => {
            swal({
                title: "Disconnect with server",
                text: "You need to start server then!",
                icon: "error",
                button: "OK"
            });
            return
        })
    }
    else if(generalForm.feedbackCheckSelect.value === 'checkSelect'){
        swal({
            title: "Wrong option",
            text: "You need to choose a option!",
            icon: "error",
            button: "OK"
        });
    }
    else{
        swal({
            title: "Wrong button or option",
            text: "You clicked wrong button or select wrong option. The option you chose was " + generalForm.feedbackCheckSelect.value,
            icon: "error",
            button: "OK"
        });
    }
})
generalForm.feedbackCheckBtn.addEventListener('click', () => {
    connect()
    .catch(() => {
        swal({
            title: "Disconnect with server",
            text: "You need to start server then!",
            icon: "error",
            button: "OK"
        });
        return
    })
    if (generalForm.feedbackCheckSelect.value === 'check'){
        const feedbackData = {
            id: generData.feedbackID.value
        }
        async function feedbackCheckOne() {
            const response = await fetch('/api/getOne/feedback/' + feedbackData.id)
            const data = await response.json();
            if (data.sign === false) {
                swal({
                    title: "Ooooops",
                    text: data.fail,
                    icon: "error",
                    button: "OK"
                });
            }
            else{
                swal({
                    title: "Here is feedback information from id is" + data.id,
                    text: "Name: " + data.name + " Email: " + data.email + " feedback: "
                    + data.feedback,
                    icon: "success",
                    button: "OK"
                });
            }
        }
        feedbackCheckOne().catch(() => {
            swal({
                title: "Disconnect with server",
                text: "You need to start server then!",
                icon: "error",
                button: "OK"
            });
            return
        })
    }
    else if(generalForm.feedbackCheckSelect.value === 'checkSelect'){
        swal({
            title: "Wrong option",
            text: "You need to choose a option!",
            icon: "error",
            button: "OK"
        });
    }
    else{
        swal({
            title: "Wrong button or option",
            text: "You clicked wrong button or select wrong option. The option you chose was " + generalForm.feedbackCheckSelect.value,
            icon: "error",
            button: "OK"
        });
    }
})
// search:
generalForm.searchViewBtn.addEventListener('click', () => {
    connect()
    .catch(() => {
        swal({
            title: "Disconnect with server",
            text: "You need to start server then!",
            icon: "error",
            button: "OK"
        });
        return
    })
    if (generalForm.searchCheckSelect.value === 'view'){
        async function searchViewALL() {
            const response = await fetch('/api/getAll/search')
            const data = await response.json();
            swal({
                title: "All search information is ready!",
                text: "Click ok to view it or cancel to later view",
                icon: "success",
                buttons: true
            })
            .then((finalConfirm) => {
                if (finalConfirm) {
                    location.href = '/api/getAll/search'
                } 
                else {
                    swal("You can view it later!");
                }
            });
        }
        searchViewALL().catch(() => {
            swal({
                title: "Disconnect with server",
                text: "You need to start server then!",
                icon: "error",
                button: "OK"
            });
            return
        })
    }
    else if(generalForm.searchCheckSelect.value === 'checkSelect'){
        swal({
            title: "Wrong option",
            text: "You need to choose a option!",
            icon: "error",
            button: "OK"
        });
    }
    else{
        swal({
            title: "Wrong button or option",
            text: "You clicked wrong button or select wrong option. The option you chose was " + generalForm.searchCheckSelect.value,
            icon: "error",
            button: "OK"
        });
    }
})
generalForm.searchCheckBtn.addEventListener('click', () => {
    connect()
    .catch(() => {
        swal({
            title: "Disconnect with server",
            text: "You need to start server then!",
            icon: "error",
            button: "OK"
        });
        return
    })
    if (generalForm.searchCheckSelect.value === 'check'){
        const searchData = {
            id: generData.searchID.value
        }
        async function searchCheckOne() {
            const response = await fetch('/api/getOne/search/' + searchData.id)
            const data = await response.json();
            if (data.sign === false) {
                swal({
                    title: "Ooooops",
                    text: data.fail,
                    icon: "error",
                    button: "OK"
                });
            }
            else{
                swal({
                    title: "Here is search information from id is" + data.id,
                    text: "destination: " + data.destination + " checkInDate: " + data.checkInDate + " checkOutDate: " 
                    + data.checkOutDate + " adults: " + data.adults + " children: " + data.children,
                    icon: "success",
                    button: "OK"
                });
            }
        }
        searchCheckOne().catch(() => {
            swal({
                title: "Disconnect with server",
                text: "You need to start server then!",
                icon: "error",
                button: "OK"
            });
            return
        })
    }
    else if(generalForm.searchCheckSelect.value === 'checkSelect'){
        swal({
            title: "Wrong option",
            text: "You need to choose a option!",
            icon: "error",
            button: "OK"
        });
    }
    else{
        swal({
            title: "Wrong button or option",
            text: "You clicked wrong button or select wrong option. The option you chose was " + generalForm.searchCheckSelect.value,
            icon: "error",
            button: "OK"
        });
    }
})