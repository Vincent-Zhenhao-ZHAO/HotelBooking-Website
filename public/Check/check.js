////////// contact ////////////////////
// get button id
const contactGeneralForm = {
    select: document.getElementById('contactCheckSelect'),
    edit: document.getElementById('contactEditBtn'),
    reset: document.getElementById('contactResetBtn'),
    delete: document.getElementById('contactDeleteBtn'),
    check: document.getElementById('contactCheckBtn')
};
// get contact id
const contactInputForm = {
    id: document.getElementById('contactID'),
    contactName: document.getElementById('contactName'),
    contactEmail: document.getElementById('contactEmail'),
    contactSubject: document.getElementById('contactSubject'),
    contactInforamtion: document.getElementById('contactInformation')
};
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
// func to check connect
async function connect() {
    const response = await fetch('/api/connect');
    const data = await response.json();
    return data
}
// when click the edit button
contactGeneralForm.edit.addEventListener('click', () => {
    // check connection
    connect().catch(() => {
        swal({
            title: "Disconnect with server",
            text: "You need to start server then!",
            icon: "error",
            button: "OK"
        });
    });
    // check the option
    if(contactGeneralForm.select.value === 'edit'){
        connect().catch(() => {
            swal({
                title: "Disconnect with server",
                text: "You need to start server then!",
                icon: "error",
                button: "OK"
            });
        })
        // get contact value
        const contactValue = {
            id: contactInputForm.id.value,
            contactName: contactInputForm.contactName.value,
            contactEmail: contactInputForm.contactEmail.value,
            contactSubject: contactInputForm.contactSubject.value,
            contactInformation: contactInputForm.contactInforamtion.value
        };
        // if type is wrong
        if (!(contactValue.contactEmail.includes("@"))){
            swal({
                title: "Wrong email form!",
                text: "It should be xxxx@sss.com",
                icon: "error",
                button: "Aww yiss!",
            });
            return;
        }
        // set api
        const contact_option_Update = {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(contactValue)
        };
        // api function 
        async function updateContact() {
            const response = await fetch('/api/update/contact/' + contactValue.id,contact_option_Update)
            const data = await response.json();
            // if id or address is wrong
            if (data.sign === false) {
                swal({
                    title: "Ooooops",
                    text: data.fail,
                    icon: "error",
                    button: "OK"
                });
            }
            // give reference number
            else{
                swal({
                    title: "We will contact you soon!",
                    text: "Your reference number is " + data.id + ". You can check and edit it in check page!",
                    icon: "success",
                    button: "OK"
                });
            }
        }
        // double check 
        swal({
            title: "Are you sure? This is your information:",
            text: "Name: " + contactValue.contactName + " Email: " + contactValue.contactEmail + " Subject: " 
            + contactValue.contactSubject +  " Information: " + contactValue.contactInformation + ". ",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
        // if pass double check
        .then((finalConfirm) => {
            if (finalConfirm) {
                updateContact().catch(() => {
                    swal({
                        title: "Disconnect with server",
                        text: "You need to start server then!",
                        icon: "error",
                        button: "OK"
                    });
                });
            }
            // if want to edit
            else {
                swal("You can continue to edit!");
            }
        });
    }
    // check the option
    else if(contactGeneralForm.select.value === 'checkSelect'){
        connect().catch(() => {
            swal({
                title: "Disconnect with server",
                text: "You need to start server then!",
                icon: "error",
                button: "OK"
            });
        })
        swal({
            title: "Wrong option",
            text: "You need to choose a option!",
            icon: "error",
            button: "OK"
        });
    }
    else{
        // check connection
        connect().catch(() => {
            swal({
                title: "Disconnect with server",
                text: "You need to start server then!",
                icon: "error",
                button: "OK"
            });
        })
        swal({
            title: "Wrong button or option",
            text: "You clicked wrong button or select wrong option. The option you chose was " + contactGeneralForm.select.value,
            icon: "error",
            button: "OK"
        });
    }
});
// reset value to empty
contactGeneralForm.reset.addEventListener('click', () => {
    contactInputForm.id.value = "",
    contactInputForm.contactName.value = "",
    contactInputForm.contactEmail.value = "",
    contactInputForm.contactSubject.value = "",
    contactInputForm.contactInforamtion.value = "";
});
// delete information
contactGeneralForm.delete.addEventListener('click', () => {
    connect().catch(() => {
        swal({
            title: "Disconnect with server",
            text: "You need to start server then!",
            icon: "error",
            button: "OK"
        });
    })
    // check the button
    if(contactGeneralForm.select.value === 'delete'){
        const contactValue = {
            id: contactInputForm.id.value,
            contactEmail: contactInputForm.contactEmail.value
        };
        // set api
        const contact_option_Delete = {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
              },
            body: JSON.stringify(contactValue)
    };
    // set api
    async function deleteContact(){
        const response = await fetch('/api/delete/contact/' + contactValue.id + "/" + contactValue.contactEmail,contact_option_Delete)
        const data = await response.json();
        // check id and email address
        if (data.sign === true){
            swal({
                title: "You have deleted it!",
                text: "You can contact us anytime!",
                icon: "success",
                button: "OK"
            });
            return
        }
        else if (data.sign === false){
            swal({
                title: "Ooops!",
                text: data.fail,
                icon: "error",
                button: "OK"
            });
            return
        }
    }
        // double check
        swal({
            title: "Are you sure to delete it? ",
            text: " Your Email: " + contactValue.contactEmail + ". Your id: " + contactValue.id,
            icon: "warning",
            buttons: true,
            dangerMode: true,
            })
        // if pass double check
        .then((finalConfirm) => {
            if (finalConfirm) {
                deleteContact().catch(() => {
                    swal({
                        title: "Disconnect with server",
                        text: "You need to start server then!",
                        icon: "error",
                        button: "OK"
                    });
                });
                return;
            } 
            // if want to keep it
            else {
                swal("You can continue to edit!");
                return;
            }
        });
    }
    // check option
    else if(contactGeneralForm.select.value === 'checkSelect'){
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
            text: "You clicked wrong button or select wrong option. The option you chose was " + contactGeneralForm.select.value,
            icon: "error",
            button: "OK"
        });
    }
});
// same as delete part 
contactGeneralForm.check.addEventListener('click', () => {
    connect().catch(() => {
        swal({
            title: "Disconnect with server",
            text: "You need to start server then!",
            icon: "error",
            button: "OK"
        });
    })
    if(contactGeneralForm.select.value === 'check'){
        const contactValue = {
            id: contactInputForm.id.value,
            contactEmail: contactInputForm.contactEmail.value
        };
        getContact().catch(() => {
            swal({
                title: "Disconnect with server",
                text: "You need to start server then!",
                icon: "error",
                button: "OK"
            });
        });
        async function getContact() {
            const response = await fetch('/api/check/contact/' + contactValue.id + "/" + contactValue.contactEmail);
            const data = await response.json();
            if(data.sign === true){
                swal({
                    title: "Here is your data!",
                    text: "Name: " + data.contactName + " Email: " + data.contactEmail + " Subject: " 
                    + data.contactSubject +  " Information: " + data.contactInformation + ". ",
                    icon: "success",
                    buttons: true
                })
            }
            if (data.sign === false){
                swal({
                    title: "Oooooops!",
                    text: data.fail,
                    icon: "error",
                    buttons: true
                })
                return
            }
        }
    }
    else if(contactGeneralForm.select.value === 'checkSelect'){
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
            text: "You clicked wrong button or select wrong option. The option you chose was " + contactGeneralForm.select.value,
            icon: "error",
            button: "OK"
        });
    }
});
// booking part (same structure of contact)
const bookingGeneralForm = {
    select: document.getElementById('bookingCheckSelect'),
    edit: document.getElementById('bookingEditBtn'),
    reset: document.getElementById('bookingResetBtn'),
    delete: document.getElementById('bookingDeleteBtn'),
    check: document.getElementById('bookingCheckBtn')
};
const bookingInputForm = {
    id: document.getElementById('bookingID'),
    bookingFirstName: document.getElementById('bookingFirstName'),
    bookingSecondName: document.getElementById('bookingSecondName'),
    bookingPhoneNumber: document.getElementById('bookingPhoneNumber'),
    bookingEmail: document.getElementById('bookingEmail'),
    bookingArriveDate: document.getElementById('bookingArriveDate'),
    bookingLeaveDate: document.getElementById('bookingLeaveDate'),
    bookingTotalNumber:document.getElementById('bookingTotalNumber'),
    bookingChildrenNumber: document.getElementById('bookingChildrenNumber')
};
bookingGeneralForm.edit.addEventListener('click', () => {
    connect().catch(() => {
        swal({
            title: "Disconnect with server",
            text: "You need to start server then!",
            icon: "error",
            button: "OK"
        });
    });
    if(bookingGeneralForm.select.value === 'edit'){
        const bookingValue = {
            id: bookingInputForm.id.value,
            bookingFirstName: bookingInputForm.bookingFirstName.value,
            bookingSecondName: bookingInputForm.bookingSecondName.value,
            bookingPhoneNumber: bookingInputForm.bookingPhoneNumber.value,
            bookingEmail: bookingInputForm.bookingEmail.value,
            bookingArriveDate: bookingInputForm.bookingArriveDate.value,
            bookingLeaveDate: bookingInputForm.bookingLeaveDate.value,
            bookingTotalNumber:bookingInputForm.bookingTotalNumber.value,
            bookingChildrenNumber: bookingInputForm.bookingChildrenNumber.value
        };
        if (!(bookingValue.bookingEmail.includes("@"))){
            swal({
                title: "Wrong email form!",
                text: "It should be xxxx@sss.com",
                icon: "error",
                button: "Aww yiss!",
            });
            return;
        }
        const booking_option_Update = {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(bookingValue)
        };
        async function updateBooking() {
            const response = await fetch('/api/update/booking/' + bookingValue.id,booking_option_Update)
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
                    title: "We will contact you soon!",
                    text: "Your reference number is " + data.id + ". You can check and edit it in check page!",
                    icon: "success",
                    button: "OK"
                });
            }
        }
        swal({
            title: "Are you sure? This is your information:",
            text: "firstName: " + bookingValue.bookingFirstName + " secondName: " + bookingValue.bookingSecondName + " Email: " + bookingValue.bookingEmail + " phoneNumber: " 
            + bookingValue.bookingPhoneNumber  +  " totalNumber: " + bookingValue.bookingTotalNumber + " childrenNumber: " + bookingValue.bookingChildrenNumber 
            + " arriveDate: " + bookingValue.bookingArriveDate + " leaveDate: " + bookingValue.bookingLeaveDate,
            icon: "warning",
            buttons: true,
            dangerMode: true,
            })
        .then((finalConfirm) => {
            if (finalConfirm) {
                updateBooking().catch(() => {
                    swal({
                        title: "Disconnect with server",
                        text: "You need to start server then!",
                        icon: "error",
                        button: "OK"
                    });
                });
            } 
            else {
                swal("You can continue to edit!");
            }
        });
    }
    else if(bookingGeneralForm.select.value === 'checkSelect'){
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
            text: "You clicked wrong button or select wrong option. The option you chose was " + bookingGeneralForm.select.value,
            icon: "error",
            button: "OK"
        });
    }
});
bookingGeneralForm.reset.addEventListener('click', () => {
    bookingInputForm.id.value = ""
    bookingInputForm.bookingFirstName.value = "";
    bookingInputForm.bookingSecondName.value = ""; 
    bookingInputForm.bookingPhoneNumber.value = "";
    bookingInputForm.bookingEmail.value = "";
    bookingInputForm.bookingArriveDate.value = "";
    bookingInputForm.bookingLeaveDate.value = "";
    bookingInputForm.bookingTotalNumber.value = "";
    bookingInputForm.bookingChildrenNumber.value = "";
});
bookingGeneralForm.delete.addEventListener('click', () => {
    connect().catch(() => {
        swal({
            title: "Disconnect with server",
            text: "You need to start server then!",
            icon: "error",
            button: "OK"
        });
    })
    if(bookingGeneralForm.select.value === 'delete'){
        const bookingValue = {
            id: bookingInputForm.id.value,
            bookingEmail: bookingInputForm.bookingEmail.value
        }
        const booking_option_Delete = {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(bookingValue)
    };
    async function deleteBooking(){
        const response = await fetch('/api/delete/booking/' + bookingValue.id + "/" + bookingValue.bookingEmail,booking_option_Delete)
        const data = await response.json();
        if (data.sign === true){
            swal({
                title: "You have deleted it!",
                text: "You can make a new booking at anytime!",
                icon: "success",
                button: "OK"
            });
            return
        }
        else if (data.sign === false){
            swal({
                title: "Ooops!",
                text: data.fail,
                icon: "error",
                button: "OK"
            });
            return
        }
    }
        swal({
            title: "Are you sure to delete it? ",
            text: " Your Email: " + bookingValue.bookingEmail + ". Your id: " + bookingValue.id,
            icon: "warning",
            buttons: true,
            dangerMode: true,
            })

        .then((finalConfirm) => {
            if (finalConfirm) {
                deleteBooking().catch(() => {
                    swal({
                        title: "Disconnect with server",
                        text: "You need to start server then!",
                        icon: "error",
                        button: "OK"
                    });
                });
                return;
            } 
            else {
                swal("You can continue to edit!");
                return;
            }
        });
    }
    else if(bookingGeneralForm.select.value === 'checkSelect'){
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
            text: "You clicked wrong button or select wrong option. The option you chose was " + bookingGeneralForm.select.value,
            icon: "error",
            button: "OK"
        });
    }
});
bookingGeneralForm.check.addEventListener('click', () => {
    connect().catch(() => {
        swal({
            title: "Disconnect with server",
            text: "You need to start server then!",
            icon: "error",
            button: "OK"
        });
    })
    if(bookingGeneralForm.select.value === 'check'){
        const bookingValue = {
            id: bookingInputForm.id.value,
            bookingEmail: bookingInputForm.bookingEmail.value
        }
        getBooking().catch(() => {
            swal({
                title: "Disconnect with server",
                text: "You need to start server then!",
                icon: "error",
                button: "OK"
            });
        })
        async function getBooking() {
            const response = await fetch('/api/check/booking/' + bookingValue.id + "/" + bookingValue.bookingEmail);
            const data = await response.json();
            if(data.sign === true){
                swal({
                    title: "Here is your data!",
                    text: "firstName: " + data.firstName + " secondName: " + data.secondName + " Email: " + data.emailAddress + " phoneNumber: " 
                    + data.phoneNumber  +  " totalNumber: " + data.totalNum + " childrenNumber: " + data.childrenNum
                    + " arriveDate: " + data.arriveDate + " leaveDate: " + data.leaveDate,
                    icon: "success",
                    buttons: true
                })
            }
            if (data.sign === false){
                swal({
                    title: "Oooooops!",
                    text: data.fail,
                    icon: "error",
                    buttons: true
                })
                return
            }
        }
    }
    else if(bookingGeneralForm.select.value === 'checkSelect'){
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
            text: "You clicked wrong button or select wrong option. The option you chose was " + bookingGeneralForm.select.value,
            icon: "error",
            button: "OK"
        });
    }
});
// feedback part(same structure of contact)
const feedbackGeneralForm = {
    select: document.getElementById('feedbackCheckSelect'),
    edit: document.getElementById('feedbackEditBtn'),
    reset: document.getElementById('feedbackResetBtn'),
    delete: document.getElementById('feedbackDeleteBtn'),
    check: document.getElementById('feedbackCheckBtn')
};
const feedbackInputForm = {
    id: document.getElementById('feedbackID'),
    feedbackName: document.getElementById('feedbackName'),
    feedbackEmail: document.getElementById('feedbackEmail'),
    feedback: document.getElementById('feedback')
};
feedbackGeneralForm.edit.addEventListener('click', () => {
    connect().catch(() => {
        swal({
            title: "Disconnect with server",
            text: "You need to start server then!",
            icon: "error",
            button: "OK"
        });
    })
    if(feedbackGeneralForm.select.value === 'edit'){
        const feedbackValue = {
            id: feedbackInputForm.id.value,
            feedbackName: feedbackInputForm.feedbackName.value,
            feedbackEmail: feedbackInputForm.feedbackEmail.value,
            feedback: feedbackInputForm.feedback.value
        };
        if (!(feedbackValue.feedbackEmail.includes("@"))){
            swal({
                title: "Wrong email form!",
                text: "It should be xxxx@sss.com",
                icon: "error",
                button: "Aww yiss!",
            });
            return;
        }
        const feedback_option_Update = {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(feedbackValue)
        };
        async function updateFeedback() {
            const response = await fetch('/api/update/feedback/' + feedbackValue.id,feedback_option_Update)
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
                    title: "Thanks for your feedback!",
                    text: "Your reference number is " + data.id + ". You can check and edit it in this page!",
                    icon: "success",
                    button: "OK"
                });
            }
        }
        swal({
            title: "Are you sure? This is your information:",
            text: "ID: " + feedbackValue.id + " Name: " + feedbackValue.feedbackName + " Email: " + feedbackValue.feedbackEmail + " feedback: " 
            + feedbackValue.feedback + ". ",
            icon: "warning",
            buttons: true,
            dangerMode: true,
            })
        .then((finalConfirm) => {
            if (finalConfirm) {
                updateFeedback().catch(() => {
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
    }
    else if(feedbackGeneralForm.select.value === 'checkSelect'){
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
            text: "You clicked wrong button or select wrong option. The option you chose was " + feedbackGeneralForm.select.value,
            icon: "error",
            button: "OK"
        });
    }
});
feedbackGeneralForm.reset.addEventListener('click', () => {
    feedbackInputForm.id.value = ""
    feedbackInputForm.feedbackName.value = ""
    feedbackInputForm.feedbackEmail.value = ""
    feedbackInputForm.feedback.value = ""
});
feedbackGeneralForm.delete.addEventListener('click', () => {
    connect().catch(() => {
        swal({
            title: "Disconnect with server",
            text: "You need to start server then!",
            icon: "error",
            button: "OK"
        });
    })
    if(feedbackGeneralForm.select.value === 'delete'){
        const feedbackValue = {
            id: feedbackInputForm.id.value,
            feedbackEmail: feedbackInputForm.feedbackEmail.value,
        };
        const feedback_option_Delete = {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
              },
            body: JSON.stringify(feedbackValue)
    };
    async function deleteFeedback(){
        const response = await fetch('/api/delete/feedback/' + feedbackValue.id + "/" + feedbackValue.feedbackEmail,feedback_option_Delete)
        const data = await response.json();
        if (data.sign === true){
            swal({
                title: "You have deleted it!",
                text: "You can give us feedback at anytime!",
                icon: "success",
                button: "OK"
            });
            return
        }
        else if (data.sign === false){
            swal({
                title: "Ooops!",
                text: data.fail,
                icon: "error",
                button: "OK"
            });
            return
        }
    }
        swal({
            title: "Are you sure to delete it? ",
            text: " Your Email: " + feedbackValue.feedbackEmail + ". Your id: " + feedbackValue.id,
            icon: "warning",
            buttons: true,
            dangerMode: true,
            })
        .then((finalConfirm) => {
            if (finalConfirm) {
                deleteFeedback().catch(() => {
                    swal({
                        title: "Disconnect with server",
                        text: "You need to start server then!",
                        icon: "error",
                        button: "OK"
                    });
                });
                return;
            } 
            else {
                swal("Your feedback is safe!");
                return;
            }
        });
    }
    else if(feedbackGeneralForm.select.value === 'checkSelect'){
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
            text: "You clicked wrong button or select wrong option. The option you chose was " + feedbackGeneralForm.select.value,
            icon: "error",
            button: "OK"
        });
    }
});
feedbackGeneralForm.check.addEventListener('click', () => {
    connect().catch(() => {
        swal({
            title: "Disconnect with server",
            text: "You need to start server then!",
            icon: "error",
            button: "OK"
        });
    })
    if(feedbackGeneralForm.select.value === 'check'){
        const feedbackValue = {
            id: feedbackInputForm.id.value,
            feedbackEmail: feedbackInputForm.feedbackEmail.value
        };
        getFeedback().catch(() => {
            swal({
                title: "Disconnect with server",
                text: "You need to start server then!",
                icon: "error",
                button: "OK"
            });
        });
        async function getFeedback() {
            const response = await fetch('/api/check/feedback/' + feedbackValue.id + "/" + feedbackValue.feedbackEmail);
            const data = await response.json();
            if(data.sign === true){
                swal({
                    title: "Here is your data!",
                    text: "Name: " + data.name + " Email: " + data.email + " feedback: "
                    + data.feedback,
                    icon: "success",
                    buttons: true
                })
            }
            if (data.sign === false){
                swal({
                    title: "Oooooops!",
                    text: data.fail,
                    icon: "error",
                    buttons: true
                })
                return
            }
        }
    }
    else if(feedbackGeneralForm.select.value === 'checkSelect'){
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
            text: "You clicked wrong button or select wrong option. The option you chose was " + feedbackGeneralForm.select.value,
            icon: "error",
            button: "OK"
        });
    }
});

