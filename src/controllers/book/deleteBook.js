import { StatusError } from "../../config/index.js";
import { Book } from "../../models/bookModel.js";
/**
 * deleteBook
 * @param req
 * @param res
 */
export const deleteBook = async (req, res, next) => {
  try {
    const bookId = req.params.id ? req.params.id : null;
    if (!bookId) throw StatusError.badRequest("Book Id is required");
    // Check if the book with the given bookId exists
    const book = await Book.findById(bookId);
    if (!book) throw StatusError.badRequest("invalidId");

    // Update the book's status to "deleted"
    book.status = "deleted";
    book.updated_at = req.body.updated_at
      ? new Date(req.body.updated_at)
      : new Date();
    const updatedBook = await book.save();

    return res.ok({
      message: "Deleted successfully",
      deletedBook: updatedBook,
    });
  } catch (error) {
    console.error(error);
    next(error);
  }
};
