const express = require('express');
const app = express();

app.use(express.json()); // req.body
app.use(express.static('public')); // use all files called public
// // logging message
// app.use(function(req,res,next){
//     console.log('Logging...')
//     next()
// });
// login data
const login = [
    {
        username: 'vincent',
        password: '123'
    },
    {
        username: 'username',
        password: 'password'
    }
];
// admin data
const admin = [
    {
        username: "vincent",
        password: '123'
    }
];
// user data
const userData = [
];
// booking data
const booking = [
    {
        id: 1,
        firstName: "vincent",
        secondName: "chao",
        phoneNumber: '07430052652',
        arriveDate: '13-02-2020',
        totalNum: 5,
        emailAddress: 'zhenhaozhao46@gmail.com',
        leaveDate: '18-02-2020',
        childrenNum: 0,
        sign: true
    }
];
const feedback = [
    {
        id: 1,
        name: 'Vincent',
        email: 'zhenhaozhao46@gmail.com',
        feedback: 'Thanks for your help!',
        sign: true
    }
];
const contact = [
    {
        id: 1,
        contactName: 'Vincent',
        contactEmail: 'zhenhaozhao46@gmail.com',
        contactSubject: 'Safety',
        contactInformation: 'Is this a safe place?',
        sign: true
    }
];
const search = [ 
    {
    id: 1,
    destination: 'London',
    checkInDate: '10-09-2021',
    checkOutDate: '14-09-2021',
    adults: 4,
    children: 2,
    sign: true
}
];
// check server conncection
app.get('/api/connect',(req,res) => {
    const connectInformation = {
        check: true
    };
    res.status(200).send(connectInformation);
});
// get login username
app.get('/api/loginUser',(req,res) => {
    res.status(200).send(userData);
});
// get and check the password
app.get('/api/login/:username/:password', (req,res) => {
    const login_username = login.find(username => username.username === req.params.username);
    const login_password = login.find(password => password.password === req.params.password);
    const login_whole = login_username;
    const admin_username = admin.find(username => username.username === req.params.username);
    const admin_password = admin.find(password => password.password === req.params.password);
    const admin_whole = admin_password;
    if (admin_username && admin_password){
        const loginFeedback = {
            loginInformation: login_whole,
            loginCheck: 'admin'
        };
        while(userData.length >= 1){
            userData.pop();
        }
        userData.push(admin_whole);
        res.status(200).send(loginFeedback);
        return;
    }
    if (login_password && login_username){
        const loginFeedback = {
            loginInformation: login_whole,
            loginCheck: true
        };
        while(userData.length > 1){
            userData.pop();
        }
        userData.push(login_whole);
        res.status(200).send(loginFeedback);
        return;
    }
    else{
        const failMessage = 'username or passoword is not correct!';
        const loginFeedback = {
            loginInformation: [{
                username: req.params.username,
                password: req.params.password
            }],
            loginCheck: false,
            errorMessage: failMessage
        };
        res.status(404).send(loginFeedback);
        return;
    }
});
// post new username and password from register form
app.post('/api/register', (req,res) => {
    const checksame = login.find(username => username.username === req.body.Username);
    if (req.body.username == "" || req.body.password == ""){
        const failMessage = "You need to put something in username or password";
        res.status(404).send(failMessage);
    }
    if (!checksame){
        const new_data = {
            username: req.body.Username,
            password: req.body.Password,
            feedback: true
        };
        login.push(new_data);
        res.send(new_data);
        return;
    }
    else if(checksame){
        const new_data = {
            username: req.body.Username,
            password: req.body.Password, 
            feedback: false
        };
        res.status(400).send(new_data);
        return;
    }
});
// get all booking information data
app.get('/api/getAll/booking',(req,res) => {
    res.send(booking);
});
// get one booking information data by id
app.get('/api/getOne/booking/:id',(req,res) => {
    const check_bookingId = booking.find(id => id.id === parseInt(req.params.id));
    if (!check_bookingId) {
        const failMessage = 'Wrong booking ID';
        const feedback = {
            fail:failMessage,
            sign:false
        };
        res.status(404).send(feedback);
        return;
    }
    else if (check_bookingId){
        res.status(200).send(check_bookingId);
        return;
    }
});
// get booking inforamtion by id and email address
app.get('/api/check/booking/:id/:email', (req,res) => {
    const check_bookingId = booking.find(id => id.id === parseInt(req.params.id));
    const check_bookingEmail = booking.find(email => email.emailAddress === req.params.email);
    const bookingWhole = check_bookingId;
    if (!check_bookingId) {
        const failMessage = 'Wrong booking ID';
        const feedback = {
            fail:failMessage,
            sign:false
        };
        res.status(404).send(feedback);
        return;
    }
    else if (!check_bookingEmail) {
        const failMessage = 'Wrong booking email address';
        const feedback = {
            fail:failMessage,
            sign:false
        };
        res.status(404).send(feedback);
        return;
    }
    else if (check_bookingEmail && check_bookingId ){
        res.send(bookingWhole);
        return;
    }
});
// post new booking form
app.post('/api/booking', (req,res) => {
    const newBooking = {
        id: booking.length + 1,
        firstName: req.body.firstName,
        secondName: req.body.secondName,
        phoneNumber: req.body.phoneNumber,
        arriveDate: req.body.arriveDate,
        totalNum: req.body.totalNum,
        emailAddress: req.body.emailAddress,
        leaveDate: req.body.leaveDate,
        childrenNum: req.body.childrenNum,
        sign: true
    };
    booking.push(newBooking);
    res.send(newBooking);
});
// update new booking form by using id.
app.put('/api/update/booking/:id', (req,res) => {
    const check_bookingId = booking.find(id => id.id === parseInt(req.params.id));
    const whole_booking = check_bookingId;
    if (!check_bookingId) {
        if (!check_bookingId) {
            const failMessage = 'Wrong booking ID';
            const feedback = {
                fail:failMessage,
                sign:false
            };
            res.status(404).send(feedback);
            return;
        }
    }
    else{
        if (!(req.body.bookingFirstName === "")){
            whole_booking.firstName = req.body.bookingFirstName;
        }
        if (!(req.body.bookingSecondName === "")){
            whole_booking.secondName = req.body.bookingSecondName;
        }
        if (!(req.body.bookingPhoneNumber === "")){
            whole_booking.phoneNumber = req.body.bookingPhoneNumber;
        }
        if (!(req.body.bookingArriveDate === "")){
            whole_booking.arriveDate = req.body.bookingArriveDate;
        }
        if (!(req.body.bookingTotalNumber === "")){
            whole_booking.totalNum = req.body.bookingTotalNumber;
        }
        if (!(req.body.bookingEmail === "")){
            whole_booking.emailAddress = req.body.bookingEmail;
        }
        if (!(req.body.bookingLeaveDate === "")){
            whole_booking.leaveDate = req.body.bookingLeaveDate;
        }
        if (!(req.body.bookingChildrenNumber === "")){
            whole_booking.childrenNum = req.body.bookingChildrenNumber;
        }
        res.send(whole_booking);
    }
});
// delete booking form by using id and email address.
app.delete('/api/delete/booking/:id/:email',(req,res) => {
    const check_bookingId = booking.find(id => id.id === parseInt(req.params.id));
    const check_bookingEmail = booking.find(email => email.emailAddress === req.params.email);
    const bookingWhole = check_bookingId;
    if (!check_bookingId) {
        const failMessage = 'Wrong booking ID';
        const feedback = {
            fail:failMessage,
            sign:false
        };
        res.status(404).send(feedback);
        return;
    }
    else if (!check_bookingEmail) {
        const failMessage = 'Wrong booking email address';
        const feedback = {
            fail:failMessage,
            sign:false
        };
        res.status(404).send(feedback);
        return;
    }
    else if (check_bookingEmail && check_bookingId){
        const index = booking.indexOf(bookingWhole);
        booking.splice(index,1);
        const feedback = {
            sign:true
        };
        res.status(200).send(feedback);
        return;
    }
});
// get all feedback information data
app.get('/api/getAll/feedback',(req,res) => {
    res.send(feedback);
});
// get one feedback information data by id
app.get('/api/getOne/feedback/:id',(req,res) => {
    const check_feedbackId = feedback.find(id => id.id === parseInt(req.params.id));
    if (!check_feedbackId) {
        const failMessage = 'Wrong feedback ID';
        const feedback = {
            fail:failMessage,
            sign:false
        };
        res.status(404).send(feedback);
        return;
    }
    else if (check_feedbackId){
        res.status(200).send(check_feedbackId);
        return;
    }
});
// get feedback information by using id and email
app.get('/api/check/feedback/:id/:email', (req,res) => {
    const check_feedbackId = feedback.find(id => id.id === parseInt(req.params.id));
    const check_feedbackEmail = feedback.find(email => email.email === req.params.email);
    const feedbackWhole = check_feedbackId;
    if (!check_feedbackId) {
        const failMessage = 'Wrong feedback ID';
        const Feedback = {
            fail:failMessage,
            sign:false
        };
        res.status(404).send(Feedback);
        return;
    }
    else if (!check_feedbackEmail) {
        const failMessage = 'Wrong feedback email address';
        const Feedback = {
            fail:failMessage,
            sign:false
        };
        res.status(404).send(Feedback);
        return;
    }
    else if (check_feedbackEmail && check_feedbackId ){
        res.send(feedbackWhole);
        return;
    }
});
// post new feedback form
app.post('/api/feedback', (req,res) => {
    const newFeedback = {
        id: feedback.length + 1,
        name: req.body.name,
        email: req.body.email,
        feedback: req.body.feedback,
        sign: true
    };
    feedback.push(newFeedback);
    res.send(newFeedback);
});
// update new feedback form by using id.
app.put('/api/update/feedback/:id', (req,res) => {
    const check_feedbackId = feedback.find(id => id.id === parseInt(req.params.id));
    const whole_feedback = check_feedbackId;
    if (!check_feedbackId) {
        const failMessage = 'Wrong feedback ID';
        const Feedback = {
            fail:failMessage,
            sign:false
        };
        res.status(404).send(Feedback);
        return;
    }
    else{
        if (!(req.body.name === "")){
            whole_feedback.name = req.body.feedbackName;
        }
        if (!(req.body.email === "")){
            whole_feedback.email = req.body.feedbackEmail;
        }
        if (!(req.body.feedback === "")){
            whole_feedback.feedback = req.body.feedback;
        }
        res.send(whole_feedback);
    }
});
// delete feedback form by using id and email address.
app.delete('/api/delete/feedback/:id/:email',(req,res) => {
    const check_feedbackId = feedback.find(id => id.id === parseInt(req.params.id));
    const check_feedbackEmail = feedback.find(email => email.email === req.params.email);
    const feedbackWhole = check_feedbackId;
    if (!check_feedbackId) {
        const failMessage = 'Wrong feedback ID';
        const Feedback = {
            fail:failMessage,
            sign:false
        };
        res.status(404).send(Feedback);
        return;
    }
    else if (!check_feedbackEmail) {
        const failMessage = 'Wrong feedback email address';
        const Feedback = {
            fail:failMessage,
            sign:false
        };
        res.status(404).send(Feedback);
        return;
    }
    else if (check_feedbackEmail && check_feedbackId){
        const index = booking.indexOf(feedbackWhole);
        feedback.splice(index,1);
        const Feedback = {
            sign:true
        };
        res.status(200).send(Feedback);
        return;
    }
});
// get all contact information data
app.get('/api/getAll/contact',(req,res) => {
    res.send(contact);
});
// get one contact information data by id
app.get('/api/getOne/contact/:id',(req,res) => {
    const check_contactId = contact.find(id => id.id === parseInt(req.params.id));
    if (!check_contactId) {
        const failMessage = 'Wrong contact ID';
        const feedback = {
            fail:failMessage,
            sign:false
        };
        res.status(404).send(feedback);
        return;
    }
    else if (check_contactId){
        res.status(200).send(check_contactId);
        return;
    }
});
// get contact inforamtion by id and email address
app.get('/api/check/contact/:id/:email', (req,res) => {
    const check_contactId = contact.find(id => id.id === parseInt(req.params.id));
    const check_contactEmail = contact.find(email => email.contactEmail === req.params.email);
    const contactWhole = check_contactId;
    if (!check_contactId) {
        const failMessage = 'Wrong contact ID';
        const feedback = {
            fail:failMessage,
            sign:false
        };
        res.status(404).send(feedback);
        return;
    }
    else if (!check_contactEmail) {
        const failMessage = 'Wrong contact email address';
        const feedback = {
            fail:failMessage,
            sign:false
        };
        res.status(404).send(feedback);
        return;
    }
    else if (check_contactEmail && check_contactId ){
        res.send(contactWhole);
        return;
    }
});
// post new contact form
app.post('/api/contact', (req,res) => {
    const newContact = {
        id: contact.length + 1,
        contactName: req.body.contactName,
        contactEmail: req.body.contactEmail,
        contactSubject: req.body.contactSubject,
        contactInformation: req.body.contactInformation,
        sign: true
    };
    contact.push(newContact);
    res.send(newContact);
});
// update new contact form by using id.
app.put('/api/update/contact/:id', (req,res) => {
    const check_contactId = contact.find(id => id.id === parseInt(req.params.id));
    const whole_contact = check_contactId;
    if (!check_contactId) {
        const failMessage = 'Wrong contact ID';
        const feedback = {
            fail:failMessage,
            sign:false
        };
        res.status(404).send(feedback);
        return;
    }
    else{
        if (!(req.body.contactName === "")){
            whole_contact.contactName = req.body.contactName;
        }
        if (!(req.body.contactEmail === "")){
            whole_contact.contactEmail = req.body.contactEmail;
        }
        if (!(req.body.contactSubject === "")){
            whole_contact.contactSubject = req.body.contactSubject;
        }
        if (!(req.body.contactInformation === "")){
            whole_contact.contactInformation = req.body.contactInformation;
        }
        res.send(whole_contact);
    }
});
// delete contact form by using id and email address.
app.delete('/api/delete/contact/:id/:email',(req,res) => {
    const check_contactId = contact.find(id => id.id === parseInt(req.params.id));
    const check_contactEmail = contact.find(email => email.contactEmail === req.params.email);
    const contactWhole = check_contactId;
    if (!check_contactId) {
        const failMessage = 'Wrong contact ID';
        const feedback = {
            fail:failMessage,
            sign:false
        };
        res.status(404).send(feedback);
        return;
    }
    else if (!check_contactEmail) {
        const failMessage = 'Wrong contact email address';
        const feedback = {
            fail:failMessage,
            sign:false
        };
        res.status(404).send(feedback);
        return;
    }
    else if (check_contactEmail && check_contactId){
        const index = booking.indexOf(contactWhole);
        contact.splice(index,1);
        const feedback = {
            sign:true
        };
        res.send(feedback);
        return;
    }
});
// get all search information data
app.get('/api/getAll/search',(req,res) => {
    res.send(search);
});
// get one search information data by id
app.get('/api/getOne/search/:id',(req,res) => {
    const check_searchId = search.find(id => id.id === parseInt(req.params.id));
    if (!check_searchId) {
        const failMessage = 'Wrong search ID';
        const feedback = {
            fail:failMessage,
            sign:false
        };
        res.status(404).send(feedback);
        return;
    }
    else if (check_searchId){
        res.status(200).send(check_searchId);
        return;
    }
});
// post new search form
app.post('/api/search', (req,res) => {
    const newSearch = {
        id: search.length + 1,
        destination: req.body.destination,
        checkInDate: req.body.checkInDate,
        checkOutDate: req.body.checkOutDate,
        adults: req.body.adults,
        children: req.body.children,
        sign: true
    };
    search.push(newSearch);
    res.send(newSearch);
});
module.exports = app;

