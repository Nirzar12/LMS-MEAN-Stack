# Learning Management System (LMS) – MEAN Stack

A full-featured Learning Management System built using the **MEAN Stack** (MongoDB, Express.js, AngularJS, Node.js). This platform allows admins to manage courses, students, assignments, and performance efficiently.

---

## 📑 Table of Contents

* [Project Overview](#project-overview)
* [Tech Stack](#tech-stack)
* [Features](#features)
* [Installation](#installation)
* [Project Structure](#project-structure)
* [API Endpoints](#api-endpoints)
* [Screenshots](#screenshots)
* [Methodology](#methodology)
* [Future Improvements](#future-improvements)
* [License](#license)

---

## 🚀 Project Overview

This LMS enables administrators and students to manage the academic learning lifecycle:

* Admins can add/update/delete courses, students, and assignments.
* Students can view assigned courses and submit tasks.
* Supports authentication, role-based access, and dynamic rendering using AngularJS.

---

## 💻 Tech Stack

**Frontend**: AngularJS + Tailwind CSS
**Backend**: Node.js + Express.js
**Database**: MongoDB + Mongoose ODM
**Testing**: Postman (API Testing)

---

## ✨ Features

### Admin:

* Register/login securely
* Add, update, delete:

  * Students
  * Courses
  * Assignments
* View all records with filtering and searching

### Student:

* Register/login
* View enrolled courses
* View and submit assignments
* Profile and dashboard

### Common:

* Role-based access control (RBAC)
* Responsive UI with Tailwind CSS
* Clean API structure for extensibility

---

## ⚙️ Installation

```bash
# Clone the repo
git clone https://github.com/Nirzar12/LMS-MEAN-Stack.git
cd LMS-MEAN-Stack

# Backend Setup
cd backend
npm install
npm run dev

# Frontend Setup
cd ../frontend
npm install
npm start
```

Ensure MongoDB is running locally or configure the cloud URI in `.env`.

---

## 📁 Project Structure

```
LMS-MEAN-Stack/
├── backend/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── middleware/
│   └── server.js
├── frontend/
│   ├── components/
│   ├── pages/
│   ├── services/
│   └── app.js
└── README.md
```

---

## 📡 API Endpoints

> Base URL: `http://localhost:5000/api`

### Authentication

* `POST /auth/register`
* `POST /auth/login`

### Courses

* `GET /courses`
* `POST /courses`
* `PUT /courses/:id`
* `DELETE /courses/:id`

### Students

* `GET /students`
* `POST /students`
* `PUT /students/:id`
* `DELETE /students/:id`

---

## 🧪 Methodology

* **Component-Based UI**: AngularJS MVC structure
* **Modular REST API**: Reusable Express.js routing and middleware
* **Database Design**: Normalized schema for scalability
* **Security**: Password hashing (bcrypt), JWT-based authentication
* **Testing**: Postman collections for each API route

---

## 📷 Screenshots

*Add screenshots here for Admin and Student dashboards, Course creation, etc.*

---

## 🌱 Future Improvements

* Role-based dashboards with analytics
* File upload for assignments
* Notification system (email/SMS)
* Integration with payment gateway (for course purchase)

---

## 🪪 License

This project is licensed under the [MIT License](LICENSE).

---

### 👤 Author

**Nirzar Diwan**
[GitHub](https://github.com/Nirzar12) | [LinkedIn](https://linkedin.com/in/nirzar-diwan-105869281)

---

> Made with 💡 using MEAN Stack
