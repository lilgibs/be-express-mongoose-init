# 📋 User Insights API — Backend Express + MongoDB on Vercel

A simple backend API built with **Express.js** and **MongoDB (Mongoose)** deployed on **Vercel** using a dedicated `vercel` branch. This API provides user data with pagination and aggregated insights including gender distribution, device brand usage, digital interests, and location types.

---

## 🛠️ Tech Stack

- **Node.js** + **Express.js** – Backend framework
- **MongoDB** + **Mongoose** – Database & ODM
- **Vercel** – Serverless deployment (uses `vercel` branch)

---

## 🚀 Features

- 🔹 Get paginated list of users.
- 🔹 Aggregate and retrieve user count by gender.
- 🔹 Aggregate and retrieve user count by device brand.
- 🔹 Aggregate and retrieve user count by digital interest.
- 🔹 Aggregate and retrieve user count by location type.
- 🔹 Serverless deployment on Vercel with branch-based setup.

---

## 🌐 API Endpoints

| Method | Endpoint                                       | Description                                |
|--------|------------------------------------------------|--------------------------------------------|
| GET    | `GET /api/users`                               | Get paginated list of users                |
| GET    | `GET /api/users/gender-overview`               | Get user count grouped by gender           |
| GET    | `GET /api/users/brand-device-overview`         | Get user count grouped by device brand     |
| GET    | `GET /api/users/digital-interest-overview`     | Get user count grouped by digital interest |
| GET    | `GET /api/users/location-type-overview`        | Get user count grouped by location type    |

---

## 🧾 Query Parameters

Some endpoints support query parameters to help filter or limit the results. Below are the available parameters:

### 🔹 `/api/users`

This endpoint supports pagination to retrieve users in chunks.

| Parameter | Type    | Description                                          | Example     |
|-----------|---------|------------------------------------------------------|-------------|
| `page`    | Integer | Page number to retrieve. Default is `1`.             | `page=2`    |
| `limit`   | Integer | Number of users per page. Default is `10`, max is 20 | `limit=20`  |

**Example Request:**

```http
GET /api/users?page=2&limit=5
```

---

## 🔗 Full URLs (deployed on Vercel)

- Get users (with pagination):  
  <https://be-express-mongoose-init-git-vercel-lilgibs-projects.vercel.app/api/users?page=1&limit=10>

- Get gender overview:  
  <https://be-express-mongoose-init-git-vercel-lilgibs-projects.vercel.app/api/users/gender-overview>

- Get brand device overview:  
  <https://be-express-mongoose-init-git-vercel-lilgibs-projects.vercel.app/api/users/brand-device-overview>

- Get digital interest overview:  
  <https://be-express-mongoose-init-git-vercel-lilgibs-projects.vercel.app/api/users/digital-interest-overview>

- Get location type overview:  
  <https://be-express-mongoose-init-git-vercel-lilgibs-projects.vercel.app/api/users/location-type-overview>

---

## 🚀 Getting Started

1. **Clone or download** this repository to your local machine.
2. Open a terminal or command prompt and navigate to the repository directory.
3. create a .env in the root directory
    ```env
    DATABASE_USERNAME=your_db_username
    DATABASE_PASSWORD=your_db_password
    DATABASE_NAME=your_db_name
    APP_PORT=your_app_port 
    ```
4. **Install dependencies** with the command:
     ```sh
    yarn
    ```
5. **Start the application** in development mode by running:
     ```sh
    yan dev
    ```
6. After the server is running, you can access the API locally at:
    ```sh
    http://localhost:<your_app_port>/api/users
    ```