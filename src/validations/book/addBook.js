import { celebrate, Joi } from "celebrate";
export const addBook = celebrate({
  body: Joi.object({
    title: Joi.string().required(),
    author: Joi.string().required(),
    summary: Joi.string().required(),
  }),
});
