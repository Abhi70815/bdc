# Buddha Degree College (BDC) Project Report

## 1. Project Overview
The Buddha Degree College (BDC) project is a web application designed to manage college-related information and services. It includes a frontend website for students and visitors, and a backend server to handle data storage and API requests. The main functionalities include admission queries, fee payment processing, and administrative management of student queries and payments.

## 2. Backend Architecture
The backend is built using Node.js with the Express framework. It connects to a MongoDB database using Mongoose for data modeling. The backend exposes RESTful API endpoints for managing enquiries and payments.

- **Server Setup:**  
  The server is initialized in `backend/index.js`. It connects to MongoDB using a connection string from environment variables and listens on a configurable port (default 3000).

- **API Endpoints:**  
  - `/query` (GET): Fetch all admission queries.  
  - `/query` (POST): Add a new admission query.  
  - `/query/:id` (DELETE): Delete an admission query by ID.  
  - `/payment` (GET): Fetch all payment records.  
  - `/payment` (POST): Add a new payment record.  
  - `/payment/:id` (DELETE): Delete a payment record by ID.

- **Middleware:**  
  Uses CORS for cross-origin requests and JSON parsing middleware.

## 3. Frontend Structure
The frontend consists of multiple HTML pages and JavaScript files:

- **Main Landing Page (`index.html`):**  
  Displays college information, courses offered, placement companies, recent placements, hostel info, events, and facilities. Includes a contact form for admission queries.

- **Admin Page (`page/admin.html`):**  
  Displays admission queries and fee payment records with options to delete entries. Uses `index.js` for fetching and managing data.

- **Contact and Fee Payment Page (`page/contact/index.html`):**  
  Provides contact information and a fee payment form. Integrates Razorpay for payment processing and submits payment data to the backend.

- **JavaScript (`index.js`):**  
  Handles fetching, displaying, adding, and deleting admission queries and payments. Interacts with backend APIs and localStorage.

## 4. Data Models
- **Enquiry Model (`backend/model/enquiry.js`):**  
  Defines schema with fields: `name` (String), `email` (String), `message` (String). All fields are required.

- **Payment Model (`backend/model/payment.js`):**  
  Defines schema with fields: `name` (String), `rollno` (String), `branch` (String), `phone` (Number), `amount` (Number). All fields are required. Includes timestamps.

## 5. Key Features
- Admission query submission and management.
- Fee payment processing with Razorpay integration.
- Admin interface for viewing and deleting queries and payments.
- Informative landing page with courses, placements, events, and facilities.
- RESTful API backend with MongoDB data storage.

## 6. Technologies Used
- Node.js, Express.js
- MongoDB, Mongoose
- HTML, CSS, JavaScript
- Razorpay payment gateway
- CORS middleware

## 7. How to Run the Project
1. Install dependencies in both root and backend folders using `npm install`.
2. Set environment variable `MONGO_URL` with your MongoDB connection string.
3. Start the backend server by running `node backend/index.js`.
4. Open `index.html` in a browser to access the frontend.
5. Use the admin page to manage queries and payments.
6. Use the contact page to submit queries and make payments.

## 8. Screenshots and UI Description
- **Landing Page:** Navigation bar, course cards, placement marquees, hostel info, events, and facilities sections.
- **Admin Page:** Lists admission queries and payment records with delete buttons.
- **Contact Page:** Contact info and fee payment form with Razorpay integration.

---

This report summarizes the Buddha Degree College project structure, functionality, and usage.
