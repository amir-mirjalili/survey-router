import SurveyModel from "@/app/api/models/surveys.schema";

export class SurveysGet {
  async getByFilter(gender: string, age: number) {
    try {
      const response = await SurveyModel.find({
        "matching_profile.gender": gender,
        "matching_profile.age": age,
      });
      return response;
    } catch (e) {
      console.log(e);
    }
  }
}
