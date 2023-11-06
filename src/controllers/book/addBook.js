import { StatusError } from "../../config/index.js";
import { Book } from "../../models/bookModel.js"; 

/**
 * addBook
 * @param req
 * @param res
 */
export const addBook = async (req, res, next) => {
  try {
    let reqBody = req.body;

    const bookData = {
      title: reqBody.title ? reqBody.title : "",
      author: reqBody.author ? reqBody.author : "",
      summary: reqBody.summary ? reqBody.summary : "",
      status: "active",
      created_at: reqBody.created_at ? new Date(reqBody.created_at) : new Date(),
    };

    const book = new Book(bookData);

    const savedBook = await book.save();

    if (savedBook) {
      return res.ok({
        message: res.__("createdSuccessfully"),
        Data: savedBook,
      });
    } else {
      throw StatusError.serverError(res.__("serverError"));
    }
  } catch (error) {
    console.error(error);
    next(error);
  }
};
