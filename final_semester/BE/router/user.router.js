import { Router } from "express";
import { UserController } from "../controllers/user.controller.js";



export const UserRouter = Router()

UserRouter.post('/login', UserController.login)
UserRouter.post('/registry',UserController.registry)

