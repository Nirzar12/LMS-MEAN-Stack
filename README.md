# 🎓 Learning Management System (LMS)

This project is a **Learning Management System** that allows users to enroll in courses, make payments, and access course content. The system has features like rich design, user authentication, and course management for admins. 

- 🖥️ **Frontend:** AngularJS (older version)  
- ⚙️ **Backend:** Node.js  
- 🔐 **Features:**
  - User authentication (via JWT)
  - Payment processing via Stripe
  - Admin can add courses and course content
  - Courses are stored in a MongoDB database
  - Access to course content (PDFs, Videos) **only after payment and enrollment**
  - Responsive, rich UI/UX design

---

## 🔑 Environment Variables

Create a `.env` file at the root of your project and include the following keys:

```env
MONGO_URI=<Your MongoDB Connection URI>
PORT=5000
JWT_SECRET=<Your JWT Secret>
STRIPE_SECRET_KEY=<Your Stripe Secret Key>
SAMPLE_ACCOUNT_NUMBER=4000003560000008
```

---

## 📂 File Access Post-Enrollment

- **Course Content** (PDFs, Videos) will be accessible **only after payment and successful course enrollment**.
- Users who successfully enroll in a course via Stripe can download or view course materials such as PDFs and videos.

---

## 🔁 Flow for Stripe Public Key

```
🧑‍💻 Client
   ⬇️
🧠 Controllers
   ⬇️
🎯 enrollCourse()
   ⬇️
🔑 Your Stripe Public Key
```

> 💳 This flow illustrates how the Stripe public key is accessed during course enrollment.

---

Let me know if you'd like to add any further details, such as API endpoints or how to interact with the database for courses/content!
