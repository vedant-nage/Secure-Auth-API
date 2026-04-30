# 🔐 Secure Auth API

## 📌 Overview

Secure Auth API is a backend authentication system built using Node.js, Express, and MongoDB. It provides secure user authentication and authorization using JWT, refresh tokens, and role-based access control.

---

## 🚀 Features

* 🔑 JWT Authentication (Access + Refresh Tokens)
* 🔐 Password hashing using bcrypt
* 🍪 Refresh tokens stored in HTTP-only cookies
* 🛡️ Role-Based Access Control (RBAC)
* 🔒 Protected routes using middleware
* 🔄 Token refresh mechanism
* 🚪 Secure logout functionality
* ✅ Input validation using express-validator

---

## 🛠️ Tech Stack

* Node.js
* Express.js
* MongoDB + Mongoose
* JSON Web Token (JWT)
* bcryptjs
* cookie-parser
* express-validator

---

## ⚙️ Setup Instructions

### 1️⃣ Clone the repository

```bash
git clone https://github.com/vedant-nage/Secure-Auth-API.git
cd Secure-Auth-API
```

### 2️⃣ Install dependencies

```bash
npm install
```

---

### 3️⃣ Create `.env` file

```env
MONGO_URI=mongodb://127.0.0.1:27017/auth_db
ACCESS_TOKEN_SECRET=your_access_secret
REFRESH_TOKEN_SECRET=your_refresh_secret
PORT=5000
```

---

### 4️⃣ Run the server

```bash
npm run dev
```

Server will run on:

```
http://localhost:5000
```

---

## 📡 API Endpoints

### 🔹 Authentication Routes

#### Register

```
POST /api/auth/register
```

#### Login

```
POST /api/auth/login
```

Returns:

* Access Token (response)
* Refresh Token (HTTP-only cookie)

---

#### Refresh Token

```
POST /api/auth/refresh
```

* Automatically uses cookie

---

#### Logout

```
POST /api/auth/logout
```

* Clears refresh token cookie

---

### 🔹 User Routes

#### Get Profile (Protected)

```
GET /api/user/profile
```

Headers:

```
Authorization: Bearer <accessToken>
```

---

### 🔹 Admin Routes

#### Get All Users (Admin Only)

```
GET /api/admin/users
```

---

## 🔐 Security Features

* Access token expires in 15 minutes
* Refresh token expires in 7 days
* Refresh tokens stored in HTTP-only cookies
* Passwords hashed using bcrypt
* Role-based access control implemented

---

## 🧪 Testing Flow

1. Register a user
2. Login to get access token + cookie
3. Access protected route (`/profile`)
4. Use refresh endpoint when token expires
5. Logout to clear session

---

## 🧠 What I Learned

* JWT authentication flow
* Access vs Refresh tokens
* Middleware-based route protection
* Role-based authorization
* Secure cookie handling
---

## 👨‍💻 Author

Vedant Nage
