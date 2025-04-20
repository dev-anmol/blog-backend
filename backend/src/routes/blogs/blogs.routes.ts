import express from 'express';
import {createBlog, getAllBlogs} from "../../controllers/blogs/blogs.controller";
const router = express.Router();

router.get('/', getAllBlogs);
router.post('/', createBlog);

export default router;