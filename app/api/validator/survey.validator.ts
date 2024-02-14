import Joi from "joi";
import { GENDER } from "@/app/api/models/surveys.enum";
export const surveyValidator = {
  candidate: Joi.object({
    age: Joi.string().required(),
    gender: Joi.string()
      .valid(...Object.values(GENDER))
      .required(),
    skip: Joi.string(),
  }),
};
