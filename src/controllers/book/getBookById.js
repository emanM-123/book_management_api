import { StatusError } from "../../config/index.js";
import { Book } from "../../models/bookModel.js"; 

/**
 * Get a book by ID
 * @param req
 * @param res
 */
export const getBookById = async (req, res, next) => {
  try {
    const bookId = req.params.id; 

    // Use Mongoose to find the book by ID
    const book = await Book.findById(bookId);

    if (!book) {
      throw StatusError.notFound("Book not found"); 
    }
    return res.ok({ data: book });
  } catch (error) {
    console.error(error);
    next(error);
  }
};
