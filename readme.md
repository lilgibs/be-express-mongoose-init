# 📋 User Insights API — Backend Express + MongoDB on Vercel

A simple backend API built with **Express.js** and **MongoDB (Mongoose)** deployed on **Vercel** using a dedicated `vercel` branch. This API provides user data with pagination and aggregated insights including gender distribution, device brand usage, digital interests, and location types.

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

| Endpoint                                       | Description                                |
|------------------------------------------------|--------------------------------------------|
| `GET /api/users`                               | Get paginated list of users                |
| `GET /api/users/gender-overview`               | Get user count grouped by gender           |
| `GET /api/users/brand-device-overview`         | Get user count grouped by device brand     |
| `GET /api/users/digital-interest-overview`     | Get user count grouped by digital interest |
| `GET /api/users/location-type-overview`        | Get user count grouped by location type    |

---

## 🔗 Full URLs (deployed on Vercel)

- Get users (with pagination):  
  `https://be-express-mongoose-init-git-vercel-lilgibs-projects.vercel.app/api/users`

- Get gender overview:  
  `https://be-express-mongoose-init-git-vercel-lilgibs-projects.vercel.app/api/users/gender-overview`

- Get brand device overview:  
  `https://be-express-mongoose-init-git-vercel-lilgibs-projects.vercel.app/api/users/brand-device-overview`

- Get digital interest overview:  
  `https://be-express-mongoose-init-git-vercel-lilgibs-projects.vercel.app/api/users/digital-interest-overview`

- Get location type overview:  
  `https://be-express-mongoose-init-git-vercel-lilgibs-projects.vercel.app/api/users/location-type-overview`

---
