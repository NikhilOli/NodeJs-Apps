import { Router } from "express";
import { addContact, contacts } from "../controllers/contact.controller.js";
import verifyToken from "../middlewares/verifyToken.middleware.js";

export const contactRouter = Router()

contactRouter.post("/add-contact", verifyToken, addContact)
contactRouter.get("/contacts", verifyToken, contacts)