import { Schema } from "mongoose";
import {
  IMatchingProfile,
  IPrescreenQuestion,
  ISurvey,
} from "@/app/survey/api/models/surveys.interface";
import { DB } from "@/app/configs/mongodb.config";
import { GENDER } from "@/app/survey/api/models/surveys.enum";

const matchingProfileSchema = new Schema<IMatchingProfile>({
  gender: [{ type: String, enum: Object.values(GENDER) }],
  age: [{ type: Number }],
});

const prescreenQuestionSchema = new Schema<IPrescreenQuestion>({
  name: { type: String },
  title: { type: String },
  question_type: { type: String },
  possible_answers: [{ type: String }],
  acceptable_answers: [{ type: String }],
});

const surveySchema = new Schema<ISurvey>({
  id: { type: String, required: true },
  reward_amount: { type: Number, required: true },
  link: { type: String, required: true },
  matching_profile: { type: matchingProfileSchema, required: true },
  prescreen_questions: [{ type: prescreenQuestionSchema, required: true }],
});

const SurveyModel = DB.model<ISurvey>("surveys", surveySchema);
export default SurveyModel;
