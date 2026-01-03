                                   Contact Management App

A simple Contact Management Web App built using the MERN stack (MongoDB, Express, React, Node.js).
Users can add contacts with Name, Email, Phone, and Message, view all contacts, and delete contacts.

Features

Add a contact with name, email, phone, and optional message

Client-side validation (required fields + valid email format)

View all saved contacts in colorful, responsive cards

Delete contacts

Responsive UI for mobile, tablet, and desktop

Modern, recruiter-friendly design with Tailwind CSS

Tech Stack

Layer	Technology
Frontend	React.js, Tailwind CSS
Backend	Node.js, Express.js
Database	MongoDB Atlas
State	useState

Folder Structure

Contact-Managment/
│
├── backend/                 # Backend API
│   ├── db.js                # MongoDB connection
│   ├── server.js            # Express server
│   ├── models/Contact.js    # Mongoose schema
│   ├── routes/contact.js    # API routes
│   └── .env                 # Environment variables
│
├── frontend/                # React frontend
│   ├── src/
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   ├── components/
│   │   │   ├── ContactForm.jsx
│   │   │   └── ContactList.jsx
│   │   └── index.css
│   └── package.json
│
├── .gitignore
└── README.md

Backend Setup
1. Navigate to backend folder
cd Contact-Managment/backend

2. Install dependencies
npm install


Dependencies:

express

mongoose

cors

dotenv

nodemon (dev)

3. Create .env file
PORT=5000
MONGODB_URL=<your-mongodb-connection-string>


Replace <your-mongodb-connection-string> with your MongoDB Atlas URI.

4. Start the backend server
npm run dev


Server runs on http://localhost:5000

API Endpoints:

GET /api/contacts → Get all contacts

POST /api/contacts → Add a new contact

DELETE /api/contacts/:id → Delete a contact

Frontend Setup:-
1. Navigate to frontend folder
cd Contact-Managment/frontend

2. Install dependencies
npm install


Dependencies:

react

react-dom

tailwindcss

vite (for development server)

3. Start the frontend server
npm run dev


Frontend runs on http://localhost:5173 (or Vite default port)

Connects to backend at http://localhost:5000

Usage Instructions

Open the app in your browser.

Fill in the contact form (Name, Email, Phone, Message).

Click Submit.

The new contact will appear below in colorful cards.

Delete any contact using the Delete button.

Note: Form validation ensures Name and Phone are required and Email must be valid.