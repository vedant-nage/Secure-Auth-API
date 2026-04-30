# Secure Auth API

## Overview
The Secure Auth API is designed to provide robust authentication and authorization mechanisms for applications, ensuring that user identities are properly verified before any sensitive operations can be performed.

## Features
- Secure user authentication with JWT tokens
- Password hashing and storage
- Role-based access control
- User registration and login
- Token expiry management
- Refresh token mechanism

## Getting Started
### Prerequisites
- Node.js (version >= 12.x)
- MongoDB (for user data storage)

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/vedant-nage/Secure-Auth-API.git
   cd Secure-Auth-API
   ```
2. Install dependencies:
   ```bash
   npm install
   ```

### Configuration
Before running the application, create a `.env` file in the root directory and add the following variables:
```
DB_URI=mongodb://<username>:<password>@your_mongodb:27017/your_database_name
JWT_SECRET=your_jwt_secret
```

### Running the Application
To start the server, use:
```bash
npm start
```
The server should now be running on `http://localhost:3000`.

## API Endpoints
### 1. Registration
- **Endpoint:** `POST /api/auth/register`
- **Request Body:**
  - `username` (string, required)
  - `email` (string, required)
  - `password` (string, required)

### 2. Login
- **Endpoint:** `POST /api/auth/login`
- **Request Body:**
  - `email` (string, required)
  - `password` (string, required)

### 3. Token Refresh
- **Endpoint:** `POST /api/auth/token`

## Error Handling
The API returns standard HTTP status codes for errors:
- `400 Bad Request` for invalid input.
- `401 Unauthorized` for failed authentication.
- `404 Not Found` for requests to non-existent endpoints.

## Contribution
Contributions are welcome! Please open an issue or submit a pull request.

## License
This project is licensed under the MIT License.

## Contact
For further inquiries, please contact vedant-nage.