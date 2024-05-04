import { Router } from "express";

import multer from "multer";
import { AuthController } from "../controller/auth.controller.js";
const storage = multer.memoryStorage()
const upload = multer({storage:storage})

export const AuthRouter = Router()

AuthRouter.post("/login",AuthController.login)

AuthRouter.post("/registry",upload.single("picture"),AuthController.registry)

