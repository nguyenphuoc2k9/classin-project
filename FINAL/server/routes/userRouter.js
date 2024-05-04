import { Router } from "express";
import { UserController } from "../controller/user.controller.js";
import { VerifyToken } from "../middleware/verifyToken.js";
import multer from "multer";
const storage = multer.memoryStorage()
const upload = multer({storage:storage})
export const UserRouter = Router()

UserRouter.get("/:id", VerifyToken,UserController.getUser)

UserRouter.get("/:id/friends",VerifyToken,UserController.getUserFriends)

UserRouter.patch("/:id/:friendId",VerifyToken,UserController.editFriendList)

UserRouter.patch("/patch",VerifyToken,upload.single("picture"),UserController.EditUser)

