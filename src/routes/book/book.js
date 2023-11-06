import { Router } from "express";
import { bookController } from "../../controllers/index.js";
import { bookValidation } from "../../validations/index.js";



const v1bookRouter = Router();

v1bookRouter.post(
  "/add",
  bookValidation.addBook,
  bookController.addBook
);

v1bookRouter.post(
  "/update",
  bookValidation.updateBook,
  bookController.updateBook
);

v1bookRouter.get(
  "/",
  bookController.bookList
);

v1bookRouter.get(
  "/:id",
  bookValidation.getBookById,
  bookController.getBookById
);

v1bookRouter.post(
  "/delete/:id",
  bookValidation.deleteBook,
  bookController.deleteBook
);

export { v1bookRouter };
