import express from "express";
import { getBook } from "../Controller/Book.Controller.js";

const route = express.Router();

route.get("/", getBook);

export default route;
