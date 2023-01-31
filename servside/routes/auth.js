import { Router } from 'express'
import { register,
     login,
      getMe,
       getallUser ,
       updateUser
    } from '../controllers/auth.js'
import { checkAuth } from '../utils/checkAuth.js'
const router = new Router()

// Register
// http://localhost:3002/api/auth/register
router.post('/register', register)

// Login
// http://localhost:3002/api/auth/login
router.post('/login', login)

// Get Me
// http://localhost:3002/api/auth/me
router.get('/me', checkAuth, getMe)

// Get all
// http://localhost:3002/api/auth/all
router.get('/all', checkAuth, getallUser)


// http://localhost:3002/api/auth/all
router.put('/updateuser', checkAuth, updateUser)

export default router
