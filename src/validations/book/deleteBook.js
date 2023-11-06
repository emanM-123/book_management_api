import { celebrate, Joi, Segments } from "celebrate";

export const deleteBook = celebrate({
  [Segments.PARAMS]: {
    id: Joi.string().hex().length(24).required(),
  },
});

