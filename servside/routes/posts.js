import { Router } from 'express'
import {
    createPost,
    getAll,
    getAllvideo,
    getById,
    removePost,
    updatePost,
    getPostComments,
    getMyPosts,
    createVideo
} from '../controllers/posts.js'
import { checkAuth } from '../utils/checkAuth.js'
const router = new Router()

// Create Post
// http://localhost:3002/api/posts
router.post('/', checkAuth, createPost)

// Create Post
// http://localhost:3002/api/posts/video
router.post('/video', checkAuth, createVideo)

// Get All Posts
// http://localhost:3002/api/posts
router.get('/all', getAll)
// http://localhost:3002/api/posts
router.get('/video/all', getAllvideo)

// Get Post By Id
// http://localhost:3002/api/posts/:id
router.get('/:id', getById)

// Update Post
// http://localhost:3002/api/posts/:id
router.put('/:id', checkAuth, updatePost)

// Remove Post
// http://localhost:3002/api/posts/:id
router.delete('/:id', checkAuth, removePost)

// Get Post Comments
// http://localhost:3002/api/posts/comments/:id
router.get('/comments/:id', getPostComments)


// Get My Posts
// http://localhost:3002/api/posts/user/me
router.get('/user/me', checkAuth, getMyPosts)


export default router
