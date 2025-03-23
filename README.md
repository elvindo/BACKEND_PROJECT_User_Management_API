# User Management API 🚀

A simple API project using **Express.js** and **PostgreSQL** for managing users data.

## 📌 Features
- ✅ **CRUD (Create, Read, Update, Delete) Users:** Provides basic operations for managing user data.
- ✅ **PostgreSQL as Database:** Uses the reliable and powerful PostgreSQL relational database.
- ✅ **Security Middleware:**
    - **CORS (Cross-Origin Resource Sharing):** Secures the API by controlling which domains are allowed to access resources.
    - **dotenv:** Manages environment configurations such as database connections securely.

## 🛠️ Technologies Used
- **Node.js:** JavaScript runtime environment for running the server.
- **Express.js:** A minimal and flexible web framework for Node.js.
- **PostgreSQL:** An open-source relational database management system.
- **dotenv:** A Node.js module for loading environment variables from a `.env` file.
- **CORS:** An Express.js middleware to enable cross-origin resource sharing.

---

## 🚀 Installation & Running the Project

Follow the steps below to install and run the User Management API project:

### 1️⃣ Clone Repository

```sh
git clone https://github.com/USERNAME/user-management-api.git
cd user-management-api
```

### 2️⃣ Install Dependencies

```sh
npm install
```

This command will install all necessary packages and libraries listed in the `package.json` file.

### 3️⃣ Configure Environment

Create a `.env` file in the root directory of your project (next to `package.json`) and add the following configuration:

```sh
PORT=5000
DATABASE_URL=postgresql://user:password@host:port/database
```

**Explanation:**
- `PORT`: Specifies the port where the server will run (default: 5000). You can change it as needed.
- `DATABASE_URL`: Your PostgreSQL connection string. Replace `user`, `password`, `host`, `port`, and `database` with your actual PostgreSQL credentials.

### 4️⃣ Start the Server

```sh
npm start
```

This command will start your Node.js server. If successful, you will see a message indicating that the server is running at the specified address (usually `http://localhost:5000`).

---

## 📝 API Endpoints

Below is a list of available API endpoints for user management:

| Method | Endpoint      | Description                                  |
|--------|-------------|----------------------------------------------|
| GET    | `/users`     | Retrieves a list of all users.             |
| GET    | `/users/:id` | Retrieves user details by ID.              |
| POST   | `/users`     | Adds a new user.                           |
| PUT    | `/users/:id` | Updates user data by ID.                   |
| DELETE | `/users/:id` | Deletes a user by ID.                      |

> **Note:** `:id` in the endpoint represents a parameter that should be replaced with a specific user ID.

---

## 💂️ Project Structure

Below is the directory structure of the project:

```
/backend-api
├── /routes
│   └── userRoutes.js     # Defines user routes
├── /controllers
│   └── userController.js # Handles business logic for user operations
├── /models
│   └── userModel.js      # Interacts with the database for user data
├── index.js              # Main file to run the Express server
├── .env                  # Contains environment configurations (do not commit)
├── package.json          # Contains project information and dependencies
├── package-lock.json     # Records exact versions of dependencies
├── README.md             # Project documentation (this file)
```

---

## 🔧 Using the API

You can use **Postman**, **cURL**, or any HTTP client application to test the API. Below are some examples using `cURL`:

### 1. Retrieve All Users
```sh
curl -X GET http://localhost:5000/users
```

### 2. Retrieve User Details by ID
```sh
curl -X GET http://localhost:5000/users/1
```

### 3. Add a New User
```sh
curl -X POST http://localhost:5000/users \
     -H "Content-Type: application/json" \
     -d '{"name": "John Doe", "email": "johndoe@example.com"}'
```

### 4. Update User Data
```sh
curl -X PUT http://localhost:5000/users/1 \
     -H "Content-Type: application/json" \
     -d '{"name": "John Updated", "email": "johnupdated@example.com"}'
```

### 5. Delete a User
```sh
curl -X DELETE http://localhost:5000/users/1
```

---

### 📝 Documentation 1
![1](https://drive.google.com/uc?id=1oH7kCqXor0CqHIeVvacXGoakHRYKvk0_)

### 📝 Documentation 2
![2](https://drive.google.com/uc?id=1QPFyZ_eNLh41eQcI02qz3-Hf0wqHs5fN)

### 📝 Documentation 3
![3](https://drive.google.com/uc?id=1Qg3ttUAzuvs1EQJQgXQq0VO8O5oE1dpH)

### 📝 Documentation 4
![3](https://drive.google.com/uc?id=10XqxtBA_oseqbb4M-vDUv9FOENK1P9bU)


 **Thank You!** 

