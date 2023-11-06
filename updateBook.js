import { celebrate, Joi } from "celebrate";
export const updateBook = celebrate({
  body: Joi.object({
    book_id: Joi.string().hex().length(24).required(),
    title: Joi.string(),
    author: Joi.string(),
    summary: Joi.string(),
  }),
});
