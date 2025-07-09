# College Management API

A simple RESTful API for managing college students and courses built with Node.js.

## About the Project

This College Management API provides a system for managing educational resources. It enables:
- User authentication with admin and staff roles
- Course management (creation, viewing, updating, deletion)
- Student management with course enrollment
- Secure API endpoints with role-based access control

## Created By
**Name:** Birat Aryal  
**Roll no:** 221614  
**Class:** BESE 'M' 6th Semester

## Tech Stack

- **Backend:** Node.js & Express
- **Database:** MongoDB with Mongoose
- **Authentication:** JWT tokens & bcrypt password hashing
- **Deployment:** Docker containerization

## API Routes

### Authentication
- `POST /api/auth/register` - Create new user account
- `POST /api/auth/login` - Get access token
- `GET /api/auth/me` - Get current user profile

### Courses
- `GET /api/courses` - List all courses
- `GET /api/courses/:id` - View course details
- `POST /api/courses` - Add new course (admin only)
- `PUT /api/courses/:id` - Update course (admin only)
- `DELETE /api/courses/:id` - Remove course (admin only)

### Students
- `GET /api/students` - List all students
- `GET /api/students/:id` - View student details
- `POST /api/students` - Add new student (admin only)
- `PUT /api/students/:id` - Update student info (admin only)
- `DELETE /api/students/:id` - Remove student (admin only)
- `POST /api/students/:id/enroll` - Enroll student in course (admin only)

## Getting Started

### With Docker
```
docker-compose up --build
```

### Without Docker
1. Install dependencies: `npm install`
2. Set up environment variables in .env file
3. Start server: `npm start` or `npm run dev`

## Testing the API

Use Postman to test endpoints. First register or login to get your JWT token:
```
POST http://localhost:5000/api/auth/login
{
  "username": "admin",
  "password": "password123"
}
```

Then use the returned token in your request headers for protected routes:
```
Authorization: Bearer your_token_here
```