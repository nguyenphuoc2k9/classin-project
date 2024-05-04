import { Router } from "express";
import { SearchController } from "../controller/search.controller.js";


export const SearchRouter = Router()

SearchRouter.get("/",SearchController.search)
