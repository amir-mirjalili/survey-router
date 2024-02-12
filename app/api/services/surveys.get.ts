import SurveyModel from "@/app/api/models/surveys.schema";

export class SurveysGet {
  async candidateSurvey(gender: string, age: number, skip = 0) {
    try {
      const response = await SurveyModel.find({
        "matching_profile.gender": gender,
        "matching_profile.age": age,
      })
        .sort({ reward_amount: -1 })
        .limit(1)
        .skip(skip);
      return response.length ? response[0] : {};
    } catch (e) {
      console.log(e);
    }
  }
}
