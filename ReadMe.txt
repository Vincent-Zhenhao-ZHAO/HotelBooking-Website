#### Project Name: Hotel booking system #############
#### The aim of this project #################
The aim of the project is to make a hotelBooking system and can help user to 
    - login
    - register
    - booking
    - contact
    - view information of rooms
    - leave feedback
    - check,edit, delete inforamtion by using id and email address
For admin, can help admin to:
    - check and view all inforamtion, easy to collect.
    - check one inforamtion by using id.
You can use login page to login admin page:
    - username:vincent
    - password:123
#################################################
#### Required environment ###########
    for dependencies: {
        "express": "^4.17.1", # used in sever side
        "jest": "^26.6.3",     # used in test api things
        "supertest": "^6.1.3"  # used in test api things
      }
    for devDependencies: {
    "eslint": "^7.25.0",   # help to improve code quality.
    "nodemon": "^2.0.7"    # help to save time by writing code.
  }
#### Used CDN #############
    sweetalert: To give alert with styles, easy and interesting way to show user what's happening like if made a error, will tell user 
    what to do next. If did successful will tell user the information that user want to know.
    Reference website:https://sweetalert.js.org/
    ############################################
    Bootstrap: To built some easy use but fanastic styles in all pages.
    Reference: https://getbootstrap.com/
    ############################################
    FontAwesome: Help to build different styles of icons or colour of font. Most used in Login and Regisiter page.
    Reference: https://fontawesome.com/
    ##############################################
    Tailwind: Easy way to build css, most used in register page.
    Reference: https://tailwindcss.com/

#### Reference ###############
    colour reference: https://www.youtube.com/watch?v=41q3xQZ_XcM&ab_channel=JulioCodes
    HomePage: image: background: https://www.pexels.com/zh-cn/photo/600622/
                     twinbed room: https://www.pexels.com/zh-cn/photo/3659681/
                     ensuite:   https://www.pexels.com/zh-cn/photo/2598638/
                     singleroom: https://www.pexels.com/zh-cn/photo/3754595/
                     business room:https://www.pexels.com/zh-cn/photo/2976970/
                     fancy room:https://www.pexels.com/zh-cn/photo/6032425/
                     family room:https://www.pexels.com/zh-cn/photo/1743229/
    Booking: image: background: https://www.pexels.com/zh-cn/photo/2017802/
    Feedback: image: background: https://www.pexels.com/zh-cn/photo/6935076/
    Regisition: image: background: https://www.pexels.com/zh-cn/photo/3127880/
    Login: image: background: https://images.app.goo.gl/fWxdhF3C5VJZH1gb9
    FontAwesome code: https://fontawesome.com/
    Tailwind code:  https://tailwindcss.com/
    sweetalert code: https://sweetalert.js.org/

#### General code to start ########
    "pretest": "npx eslint app.js",
    "test": "jest",
    "start": "node server.js",
    "dev": "nodemon server.js"
  },
  npm run pretest: check the quality of code, in this case is app.js(server side)
  npm run test: test the api functions.
  npm run start/ npm start: run server and the port is 5000

#### How to start ? #########
    # Before you start, make sure you check these two steps:
    1: make sure you have all required environment!
    2: make sure you have node and browser!
    # Start your journey
    1: in your terminal, run code: npm run start
    2: in your browser(Suggestion is Chrome) url address is: http://localhost:5000/
    # Enjoy your journey!

#### File information ########
    1:  Main File: 
        'public': contains client side code, all media source, every html file and css file.
        'api documentation.pdf': shows the api documentation thing,
        'app.test.js': to help test api things, 
        'app.js': contains all api and server code,
        'server.js': contains port listener, 
        'package.json' & 'package-lock.json': contains basic inforamtion about code like environment etc,
        ‘Readme.txt': which you are reading.

    2: 'public':
        'index.css','index.html' and 'index.js': Login in page, and it si also the first page user go in after put http://localhost:5000/,
        'Register' : registion page to help user do regisition.
        'HomePage': homePage of Hotel booking system, shows every information about hotels,
        'AdminPage': Admin page to check and view all inforamtion which customers put in,
        'Booking' : Booking page to help customer book a room by giving information,
        'Feedback' : Feedback page to help customer leave feedback,
        'Check' : Check page to help user can view,edit and delete all booking,contact and feedback information
         he/she just put in by using id and email address.
         'images': All images used in the html.

#### Website details ##########
    Login page: 
    User can do Login with username and password, if it is not correct will give the information to user and allow 
    user to input again. Also have reset button can help user correct mistake. If user don't have a account, will 
    allow user to click 'sign up', then go to regisition page.
    If admin input admin username and password, will go to admin page.
    You can use this username and password to login admin page:
    - username:vincent
    - password:123
    If the server disconnected, will give the information to let user connect the server.
    #############################
    Regisition page:
    User can sign a new account to login, if username is used, will give the information to help user re-input a 
    username. 
    When inputting a password, the background image will change as well, when the password is strong enough,
    the background image will be very clearly. Also if the background is not clear but user submitted, will give the information
    that you need to make password until the background is clear enough.
    Also user can use reset button to correct mistake.
    If the server disconnected, will give the information to let user connect the server.
    ##############################
    HomePage:
    User can see 'Welcome back, username' on the left top.
    Also there is nevagation bar to help user go to different pages.
    Below user can search if there is suitable room in unique date, and will give confirm inforamtion to suer.
    User can see different type of rooms with price and stars to help user make decision.
    If user have any issues or any concerns, can use contact form to contact staffs directly, and will get contact id,
    this can be helpful for user to check, edit and delete in check page.
    If user input wrong type like not email address, will give information let user change it.
    After finish the form, will give the message to help user re-check the input inforamtion and user has option to 
    continue to edit.
    If the server disconnected, will give the information to let user connect the server.
    ###############################
    AdminPage:
    You can use login page to login admin page:
    - username:vincent
    - password:123
    Admin can see 'Welcome back, manager username' on the left top.
    Also there is nevagation bar to help user go to different pages.
    Below admin can view and check all booking,search,contact and feedback information by clicking the button.
    If the option is wrong, will give information to change the option to correct one,
    also if the button is wrong, will give information to mention admin what is happening now.
    If user click view, can check all inforamtion and data via json file.
    If user want to see only one information, can put the id, then will show out.
    If the server disconnected, will give the information to let user connect the server.
    #################################
    Booking page:
    User can give information to book a room.
    If user input wrong type, will let user know what needs to type in.
    After finish the form, will give the message to help user re-check the input inforamtion and user has option to 
    continue to edit.
    After confirming, will give successful information with booking id, this can be helpful for user to check, edit and delete in check page.
    If the server disconnected, will give the information to let user connect the server.
    ##################################
    Feedback page:
    User can give information to leave feedback.
    If user input wrong type, will let user know what needs to type in.
    After finish the form, will give the message to help user re-check the input inforamtion and user has option to 
    continue to edit.
    After confirming, will give successful information with booking id, this can be helpful for user to check, edit and delete in check page.
    If the server disconnected, will give the information to let user connect the server.
    ##################################
    Check page:
    User can update, delete and view booking,feedback,contact by using giving id and email address.
    If the select option is wrong, will give information to change the option to correct one,
    also if the button is wrong, will give information to mention admin what is happening now.
    If the id or email address is not correct, will give an inforamtion to let user know what is wrong in here.
    If the server disconnected, will give the information to let user connect the server.
    ######################################
###### Last word ##################
Thanks for you reading and good luck for everything!




        


