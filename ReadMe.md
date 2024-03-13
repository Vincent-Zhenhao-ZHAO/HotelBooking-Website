#### Project Name: Hotel booking system #############
# Hotel Booking System

## Aim of the Project

The aim of the project is to create a hotel booking system that can assist users with the following functionalities:
- Login
- Register
- Booking
- Contact
- View information of rooms
- Leave feedback
- Check, edit, and delete information by using ID and email address

For administrators, the system is designed to:
- Check and view all information for easier data collection
- Check individual information by using ID

Login credentials for the admin page:
- Username: vincent
- Password: 123

## Required Environment

Dependencies needed for the project:

```json
"dependencies": {
    "express": "^4.17.1",  
    "jest": "^26.6.3",     
    "supertest": "^6.1.3"  
},
"devDependencies": {
    "eslint": "^7.25.0", 
    "nodemon": "^2.0.7"    
}
```

## Used CDNs

- **sweetalert**: To provide styled alerts that inform users about errors or success in an engaging way. Useful for guiding users on next steps based on their actions.  
  Reference website: [sweetalert](https://sweetalert.js.org/)

- **Bootstrap**: Utilized for implementing responsive and attractive styles across all pages effortlessly.  
  Reference: [Bootstrap](https://getbootstrap.com/)

- **FontAwesome**: Assists in creating varied icon styles or font colours, predominantly used in Login and Register pages.  
  Reference: [FontAwesome](https://fontawesome.com/)

- **Tailwind**: Simplifies CSS construction, primarily employed in the registration page for streamlined styling.  
  Reference: [Tailwind CSS](https://tailwindcss.com/)

## References

- Colour reference: [JulioCodes on YouTube](https://www.youtube.com/watch?v=41q3xQZ_XcM&ab_channel=JulioCodes)
- HomePage images:
  - Background: [Pexels](https://www.pexels.com/zh-cn/photo/600622/)
  - Twinbed room: [Pexels](https://www.pexels.com/zh-cn/photo/3659681/)
  - Ensuite: [Pexels](https://www.pexels.com/zh-cn/photo/2598638/)
  - Single room: [Pexels](https://www.pexels.com/zh-cn/photo/3754595/)
  - Business room: [Pexels](https://www.pexels.com/zh-cn/photo/2976970/)
  - Fancy room: [Pexels](https://www.pexels.com/zh-cn/photo/6032425/)
  - Family room: [Pexels](https://www.pexels.com/zh-cn/photo/1743229/)
- Booking background image: [Pexels](https://www.pexels.com/zh-cn/photo/2017802/)
- Feedback background image: [Pexels](https://www.pexels.com/zh-cn/photo/6935076/)
- Registration background image: [Pexels](https://www.pexels.com/zh-cn/photo/3127880/)
- Login background image: [Google Images](https://images.app.goo.gl/fWxdhF3C5VJZH1gb9)

## General Commands to Start

```json
"scripts": {
  "pretest": "npx eslint app.js",
  "test": "jest",
  "start": "node server.js",
  "dev": "nodemon server.js"
},

## General Commands to Start

- `npm run pretest`: Checks the quality of code, specifically for `app.js` on the server side.
- `npm run test`: Tests the API functions.
- `npm run start` or `npm start`: Runs the server, typically on port 5000.

## How to Start?

Before you start, ensure you've completed the following preparatory steps:

1. Ensure all required environments are correctly set up.
2. Verify that Node.js and a suitable web browser are installed on your system.

To embark on your journey:

1. In your terminal, execute the command: `npm run start`.
2. Open your preferred web browser (Chrome is recommended) and navigate to `http://localhost:5000/`.

Enjoy your journey!

## File Information

1. **Main Files:**
   - `public/`: Contains client-side code, all media sources, HTML, and CSS files.
   - `api documentation.pdf`: Provides detailed API documentation.
   - `app.test.js`: Aids in testing API functionalities.
   - `app.js`: Hosts all API and server-side code.
   - `server.js`: Manages port listening.
   - `package.json` & `package-lock.json`: Include basic information about the project, such as dependencies.
   - `Readme.txt`: The document you're currently reading.

2. **`public` Directory:**
   - `index.css`, `index.html`, and `index.js`: Comprise the login page, which is the first interface users encounter.
   - `Register/`: Registration page for new users.
   - `HomePage/`: The home page of the hotel booking system, showcasing hotel information.
   - `AdminPage/`: Allows admins to check and view all customer information.
   - `Booking/`: Page for booking rooms.
   - `Feedback/`: Enables customers to leave feedback.
   - `Check/`: Allows users to view, edit, and delete all booking, contact, and feedback information using their ID and email address.
   - `images/`: Contains all images used within the site.

## Website Details

### Login Page

Users can login with a username and password. Incorrect entries prompt the system to provide guidance for corrections. A reset button aids in correcting mistakes. For users without an account, a 'sign up' option is provided, redirecting them to the registration page. Admin login credentials are specifically provided for administrative access.

### Registration Page

New users can create an account. Feedback is provided on username availability and password strength, including visual cues for password strength. A reset button allows users to correct entries easily.

### HomePage

Welcomes the user by name and includes a navigation bar for easy access to different pages. Users can search for suitable rooms based on specific dates, with the system confirming availability. Room options are displayed with details such as price and ratings, aiding decision-making. A contact form is available for direct communication with staff, providing a contact ID for further inquiries or edits.

### AdminPage

Accessible using specific admin credentials. Provides a comprehensive view and management options for all bookings, searches, contacts, and feedback. Incorrect selections prompt guidance for correction.

### Booking Page

Enables room booking with user information entry. Provides feedback for incorrect data types and confirms booking details, including providing a booking ID for future reference.

### Feedback Page

Allows users to leave feedback. Similar to the booking page, it verifies data types and confirms feedback submission with an ID.

### Check Page

Offers options to update, delete, and view booking, feedback, and contact information using an ID and email address. Incorrect selections or entries are flagged for user correction.

### Last Word

Thank you for reading, and good luck with everything!

