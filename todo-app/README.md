# 📝 Todo Application with Authentication

A full-stack Todo application with user authentication, session management, and a beautiful modern UI.

## 🌟 Features

### Authentication & Session Management
- ✅ User Signup with unique ID generation
- ✅ User Login with secure password hashing (bcrypt)
- ✅ Session-based authentication using express-session
- ✅ Protected routes (Dashboard only accessible when logged in)
- ✅ Automatic session checking on page load
- ✅ Logout functionality

### Todo Management
- ✅ Create new tasks
- ✅ View only user's own tasks
- ✅ Edit task titles
- ✅ Toggle task status (pending/completed)
- ✅ Delete tasks
- ✅ Statistics dashboard (total, pending, completed)
- ✅ Separate views for pending and completed tasks

### Modern UI/UX
- ✨ Beautiful gradient backgrounds with animated floating circles
- ✨ Glass-morphism design with backdrop blur
- ✨ Smooth animations and transitions
- ✨ Loading states for all async operations
- ✨ Responsive design (mobile, tablet, desktop)
- ✨ Interactive hover effects
- ✨ Toast notifications for success/error messages

## 📁 Project Structure

```
todo-app/
├── backend/
│   ├── server.js          # Express server with all API routes
│   ├── package.json       # Backend dependencies
│   ├── .env              # Environment variables
│   ├── users.json        # User data storage (id, username, password)
│   └── tasks.json        # Task data storage (id, userId, title, status)
│
└── frontend/
    ├── public/
    │   └── index.html
    ├── src/
    │   ├── components/
    │   │   └── ProtectedRoute.js    # Route protection component
    │   ├── context/
    │   │   └── AuthContext.js       # Authentication context & state
    │   ├── pages/
    │   │   ├── Login.js             # Login page
    │   │   ├── Signup.js            # Signup page
    │   │   ├── Dashboard.js         # Todo dashboard
    │   │   ├── Auth.css             # Auth pages styles
    │   │   └── Dashboard.css        # Dashboard styles
    │   ├── App.js
    │   ├── App.css
    │   ├── index.js
    │   └── index.css
    └── package.json
```

## 🛠️ Tech Stack

### Backend
- **Node.js** with Express
- **bcryptjs** - Password hashing
- **express-session** - Session management
- **uuid** - Unique ID generation
- **cors** - Cross-origin resource sharing
- **dotenv** - Environment configuration

### Frontend
- **React 18** - UI library
- **React Router** - Navigation
- **Axios** - HTTP client
- **Context API** - State management

## 🚀 Installation & Setup

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Backend Setup

1. Navigate to backend folder:
```cmd
cd e:\BackEnd\todo-app\backend
```

2. Install dependencies:
```cmd
npm install
```

3. Start the backend server:
```cmd
npm start
```

Server will run on `http://localhost:5001`

### Frontend Setup

1. Open a new terminal and navigate to frontend folder:
```cmd
cd e:\BackEnd\todo-app\frontend
```

2. Install dependencies:
```cmd
npm install
```

3. Start the frontend:
```cmd
npm start
```

Frontend will run on `http://localhost:3000`

## 📡 API Endpoints

### Authentication Routes

| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|---------------|
| POST | `/api/signup` | Create new user account | No |
| POST | `/api/login` | Login user and create session | No |
| POST | `/api/logout` | Logout user and destroy session | Yes |
| GET | `/api/check-session` | Check if user is authenticated | No |

### Todo Routes

| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|---------------|
| GET | `/api/tasks` | Get all tasks for logged-in user | Yes |
| POST | `/api/tasks` | Create new task | Yes |
| PUT | `/api/tasks/:id` | Update task (title or status) | Yes |
| DELETE | `/api/tasks/:id` | Delete task | Yes |

## 💾 Data Structure

### users.json
```json
[
  {
    "id": "unique-uuid-v4",
    "username": "john_doe",
    "password": "hashed-password-with-bcrypt"
  }
]
```

### tasks.json
```json
[
  {
    "id": "unique-uuid-v4",
    "userId": "user-uuid",
    "title": "Complete project",
    "status": "pending",
    "createdAt": "2025-10-02T10:30:00.000Z",
    "updatedAt": "2025-10-02T11:00:00.000Z"
  }
]
```

## 🔐 Security Features

- Passwords hashed using bcrypt (10 salt rounds)
- Session-based authentication with secure cookies
- Protected API routes (middleware checks for valid session)
- Users can only access their own tasks
- Input validation on both frontend and backend

## 🎨 UI Features

### Login/Signup Pages
- Clean, modern design with gradient backgrounds
- Input fields with animated icons
- Form validation with error messages
- Loading states during API calls
- Link to switch between login and signup

### Dashboard
- Welcome message with username
- Statistics cards showing total, pending, and completed tasks
- Quick add task form at the top
- Grouped task lists (pending and completed)
- Inline editing for task titles
- Checkbox to toggle task completion
- Delete button for each task
- Empty state when no tasks exist
- Logout button

## 🎯 How to Use

1. **Signup**: Create a new account with a unique username
2. **Login**: Enter your credentials to access the dashboard
3. **Add Tasks**: Type in the input field and click "Add" or press Enter
4. **Complete Tasks**: Check the checkbox to mark as completed
5. **Edit Tasks**: Click the edit icon (✏️) to modify task title
6. **Delete Tasks**: Click the delete icon (🗑️) to remove tasks
7. **Logout**: Click logout button to end your session

## 📱 Responsive Design

The application is fully responsive and works on:
- 📱 Mobile devices (320px+)
- 📱 Tablets (768px+)
- 💻 Desktop (1024px+)

## 🎭 Animations

- Page load animations (slide up, fade in)
- Hover effects on all interactive elements
- Smooth transitions on state changes
- Floating background circles
- Bouncing icons
- Loading spinners
- Toast message animations

## 🔧 Configuration

All configurations are **hardcoded** in `server.js` for simplicity:

- **PORT**: `5001` (Line ~55 in server.js)
- **Session Secret**: `"todo-app-secret-key-2025"` (Line ~28 in server.js)
- **Users File**: `"users.json"` (Line ~56 in server.js)
- **Tasks File**: `"tasks.json"` (Line ~57 in server.js)

**Note:** `.env` file is not required. To change settings, edit `server.js` directly.

## 📝 Notes

- Sessions expire after 24 hours
- All tasks are stored per user (userId-based filtering)
- Session cookies are HTTP-only for security
- CORS is configured to allow requests from `http://localhost:3000`

## 🚨 Important

For production deployment:
- Change SESSION_SECRET to a secure random string
- Enable HTTPS and set `cookie.secure` to `true`
- Use a real database instead of JSON files
- Add rate limiting to prevent abuse
- Implement proper error logging

## 👨‍💻 Author

Created with ❤️ for Code Academy

Enjoy your beautiful Todo app! 🎉
