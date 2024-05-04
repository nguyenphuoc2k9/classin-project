import { Router } from "express";
import multer from "multer";
import { PostController } from "../controller/post.controller.js";
import { VerifyToken } from "../middleware/verifyToken.js";
const storage = multer.memoryStorage()
const upload = multer({storage:storage})
export const PostRouter = Router()

PostRouter.get("/",VerifyToken,PostController.getAllPost)

PostRouter.get("/:userId/posts",VerifyToken,PostController.getUserPosts)

PostRouter.post("/posts",VerifyToken,upload.single("picture"),PostController.createPost)

PostRouter.patch("/:id/like",VerifyToken,PostController.likePost)

PostRouter.patch("/:id/comment",VerifyToken,PostController.CreateComment)

PostRouter.patch("/:id/patch",VerifyToken,upload.single("picture"),PostController.EditPost)

PostRouter.delete("/:id/delete",VerifyToken,PostController.DeletePost)