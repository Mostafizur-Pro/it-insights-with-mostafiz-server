import express from "express";
import enController from "./en.controller";

const enRoute = express.Router();

enRoute.post("/create-voc", enController.createVoc);
enRoute.get("/", enController.getAllVoc);

export default enRoute;
