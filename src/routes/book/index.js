import { Router } from "express";
import { v1bookRouter } from "./book.js";

const bookRouter = Router();

bookRouter.use("/book", v1bookRouter);


export { bookRouter };
