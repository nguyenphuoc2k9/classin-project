import express from "express";
import multer from "multer";
import { MovieController } from "../controllers/movie.controller.js";
import { TokenVerify } from "../middleware/TokenVerify.js";
const storage = multer.memoryStorage()
const upload = multer({storage:storage})
export const MovieRouter = express.Router()

MovieRouter.get("/",TokenVerify,MovieController.getAll_Movie)
MovieRouter.patch("/edit/:id",TokenVerify,upload.single("file"),MovieController.update_Movie)
MovieRouter.post("/create",TokenVerify,upload.single("file"),MovieController.create_Movie)
MovieRouter.get("/:id",TokenVerify,MovieController.get_Movie)
MovieRouter.delete("/:id",TokenVerify,MovieController.delete_Movie)
