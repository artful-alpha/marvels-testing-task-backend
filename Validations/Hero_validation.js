import { body } from "express-validator";

export const heroCreateValidator = [
  body("nickname", "Nikname must longer 2 char and less 213")
    .isString()
    .isLength({ min: 2, max: 213 }),
  body("real_name", "Nikname must longer 2 char and less 213")
    .optional()
    .isString()
    .isLength({ min: 2, max: 213 }),
  body("superpowers").isArray(),
  body("catch_phrase", "Catch phrase must longer 2 char and less 213")
    .optional()
    .isString({ min: 2, max: 213 }),
  body("img_hero", "String must be URL type")
    .isURL()
    .isString({ min: 1, max: 500 }),
];
