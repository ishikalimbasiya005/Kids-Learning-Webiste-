# ⭐Magic Learn World

Magic Learn World is a modern and interactive learning website built using **React.js** for the frontend and **Node.js + Express + MongoDB** for the backend.  
The website is designed for kids to learn through interactive content and allows admin management for books, users, and feedback.

---

## Features

### Frontend (User)
- Home Page
- Book Page (View learning materials/books)
- About Us Page
- Contact Us Page
- User Authentication:
  - Users can register and login.
  - Registered users can access the website and save progress.
  
### Admin Panel
- Admin can login with credentials:
  - **Username:** weadmin  
  - **Password:** Admin@07
- Manage Books:
  - Insert new books
  - Update existing books
  - Delete books
- Manage Feedback:
  - View all user feedback
  - Delete feedback
- View Registered Users:
  - Admin can see user information who have registered

---

## Tech Stack

### Frontend
- React.js
- React Router DOM
- Axios
- React Icons
- React Owl Carousel
- Swiper.js
- jQuery

### Backend
- Node.js
- Express.js
- MongoDB (via Mongoose)
- Express-Session
- CORS
- Dotenv

---

## Installation & Setup

### Prerequisites
- Node.js & npm installed
- MongoDB running locally or via cloud

---

### Steps

1. **Clone the repository**
```bash
git clone <your-repo-url>
cd magic-learn-world
```

2. **Install frontend dependencies**
```npm install```

3. **Setup backend**
Ensure you have server.js and all backend routes (/routes) and config (/config/db.js) files.
Install backend dependencies (if not already installed):
```npm install express express-session mongoose cors dotenv```

4. **Environment Variables**
Create a .env file in the root of your project with:
```
SESSION_SECRET=yourSecretKey
MONGO_URI=your_mongodb_connection_string
PORT=5000
```

5. **Run the backend server**
```node server.js```

6. **Run the frontend**
```npm start```
Frontend will run at http://localhost:3000

7. **Access the Website**
-> Open browser at http://localhost:3000
-> Register a new user or login as admin (weadmin / Admin@07) to manage books and feedback.

---

## Database Setup (MongoDB)

### 1. Create Database
- Open **MongoDB** (local or cloud)
- Create a new database named:  ```kids_website```

 ### 2. Create Collections
- Create the following **4 collections** inside the `kids_website` database:

1. **book**  
   - Add books **separately** (one at a time)  
   - Use the JSON data provided in the book files

2. **subjects**  
   - Add subjects (one at a time)  
   - Use the data provided in the subject files

3. **users**  
   - Just create the collection, user data will be added automatically when users register on the website

4. **contact**  
   - Just create the collection, feedback or contact messages will be automatically added when users submit forms

### 3. Insert Data
- Go to each collection → Click **Insert Document** → Copy and paste the data from the files provided for **books** and **subjects**  
- Each book or subject should be added individually (do **not** insert all at once)

---

