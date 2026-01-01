# HealthyEats - South Indian Food Ordering Platform

HealthyEats is a premium, full-stack South Indian food ordering application. Built with a focus on authentic aesthetics, smooth animations, and a production-ready architecture.

## 🚀 Features

### User-Side
- **Cinematic Landing Page**: Features parallax scrolling effects and scroll-triggered animations.
- **Dynamic Menu**: Categorized food items (Breakfast, Lunch, Dinner, etc.) with real-time filtering and search.
- **Seamless Cart**: Interactive shopping cart with quantity updates and total price calculation.
- **Premium UI**: Crafted with Tailwind CSS and Framer Motion for a state-of-the-art user experience.
- **Responsive Design**: Mobile-first approach, fully optimized for all devices.

### Admin Panel
- **Secure Authentication**: JWT-based login for authorized administrators.
- **Full CRUD**: Add, edit, and delete food items directly from a dedicated dashboard.
- **Real-time Updates**: Instant feedback with toast notifications.

## 🛠 Tech Stack

**Frontend:**
- React.js (Functional Components)
- Tailwind CSS (Styling)
- Framer Motion (Animations)
- Lucide React (Icons)
- Axios (API Calls)
- React Router (Route Management)

**Backend:**
- Node.js & Express.js
- MongoDB & Mongoose (Database)
- JWT (Authentication)
- Bcrypt.js (Password Hashing)

## 📦 Project Structure

```text
/
├── client/              # React frontend (Vite)
│   ├── src/
│   │   ├── components/  # Reusable UI, Layout, Food components
│   │   ├── pages/       # Page views (Home, Menu, Admin, etc.)
│   │   ├── context/     # Auth & Cart State Management
│   │   ├── services/    # API configuration (Axios)
│   │   └── assets/      # Global styles and local assets
├── server/              # Node.js backend
│   ├── models/          # Mongoose schemas
│   ├── controllers/     # Route logic
│   ├── routes/          # API endpoints
│   ├── middleware/      # Auth and Error handling
│   └── scripts/         # Database seeding scripts
```

## ⚙️ Setup & Installation

### 1. Prerequisite
- Node.js installed
- MongoDB Atlas account (or local MongoDB)

### 2. Backend Setup
1. Navigate to `/server`: `cd server`
2. Install dependencies: `npm install`
3. Configure `.env`:
   ```env
   PORT=5000
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret
   ```
4. Seed the database: `npm run seed`
5. Start the server: `npm run dev`

### 3. Frontend Setup
1. Navigate to `/client`: `cd client`
2. Install dependencies: `npm install`
3. Start development server: `npm run dev`

## 🔐 Admin Credentials
- **Email:** `admin@healthyeats.com`
- **Password:** `admin123`

## 📄 API Documentation
- `POST /api/auth/login`: Administrative login
- `GET /api/foods`: Fetch all menu items
- `POST /api/foods`: Add new item (Admin)
- `PUT /api/foods/:id`: Update item (Admin)
- `DELETE /api/foods/:id`: Remove item (Admin)
