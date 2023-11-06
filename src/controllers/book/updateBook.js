import { StatusError } from "../../config/index.js";
import { Book } from "../../models/bookModel.js"; 

/**
 * Update book
 * @param req
 * @param res
 * @param next
 */
export const updateBook = async (req, res, next) => {
  try {
    const reqBody = req.body;
    const bookId = reqBody.book_id ? reqBody.book_id : "";

    if (!bookId) {
      throw StatusError.badRequest(res.__("Book Id is required"));
    }

    // Update the book by ID
    const updatedBook = await Book.findByIdAndUpdate(bookId, {
      title: reqBody.title || "",
      author: reqBody.author || "",
      summary: reqBody.summary || "",
      status: "active",
      updated_at: reqBody.updated_at || new Date(),
    }, { new: true });

    if (!updatedBook) {
      throw StatusError.badRequest(res.__("invalidId"));
    }

    return res.ok({
      message: res.__("Updated successfully"),
      data: updatedBook,
    });
  } catch (error) {
    console.log(error);
    next(error);
  }
};
