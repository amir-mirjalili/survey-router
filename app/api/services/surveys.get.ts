import SurveyModel from "@/app/api/models/surveys.schema";

export class SurveysGet {
  async candidateSurvey(
    gender: string,
    age: number,
    skip = 0
  ): Promise<RestApi.ObjectResInterface> {
    try {
      //added prescreen_questions condition to just return the records that has question
      const response = await SurveyModel.find({
        "matching_profile.gender": gender,
        "matching_profile.age": age,
        "prescreen_questions.0": { $exists: true },
      })
        .sort({ reward_amount: -1 })
        .limit(1)
        .skip(skip);
      return {
        is_success: true,
        data: response.length ? response[0] : {},
      };
    } catch (e) {
      console.log(e);
      return {
        is_success: false,
      };
    }
  }
}
