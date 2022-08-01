import express from "express";
import { createPosts, getPosts ,updatePosts ,deletePosts ,likePosts,getPost } from "../controllers/posts.js";

const router = express.Router();


// instead of immediately wriiting the call back function for eact the requests we have made separate file and wrote the logic there

router.get('/',getPosts);
router.post('/',createPosts);
router.patch('/:id',updatePosts);
router.get('/:id', getPost);
router.delete('/:id',deletePosts);
router.patch('/:id/likePosts',likePosts);
export default router;
