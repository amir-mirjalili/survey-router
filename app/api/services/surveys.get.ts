import SurveyModel from "@/app/api/models/surveys.schema";

export class SurveysGet {
  async candidateSurvey(
    gender: string,
    age: number,
    skip = 0
  ): Promise<RestApi.ObjectResInterface> {
    try {
      const response = await SurveyModel.find({
        "matching_profile.gender": gender,
        "matching_profile.age": age,
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
