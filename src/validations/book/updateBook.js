import { celebrate, Joi } from "celebrate";
export const updateBook = celebrate({
  body: Joi.object({
    book_id: Joi.number().required(),
    title: Joi.string(),
    author: Joi.string(),
    summary: Joi.string(),
  }),
});
