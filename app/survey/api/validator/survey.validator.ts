import Joi from "joi";
import { GENDER } from "@/app/survey/api/models/surveys.enum";
export const surveyValidator = {
  search: Joi.object({
    age: Joi.number().required().required(),
    gender: Joi.string()
      .valid(...Object.values(GENDER))
      .required(),
  }),
};
