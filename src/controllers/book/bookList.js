import { Book } from "../../models/bookModel.js";

/**
 * bookList
 * @param req
 * @param res
 */
export const bookList = async (req, res, next) => {
  try {
    // Fetch all books
    const books = await Book.find(
      {},
      {
        id: 1,
        title: 1,
        author: 1,
        summary: 1,
        status: 1,
        created_at: {
          $dateToString: { format: "%Y-%m-%d", date: "$created_at" },
        },
      }
    );

    return res.ok({
      data: books,
    });
  } catch (error) {
    console.error(error);
    next(error);
  }
};
