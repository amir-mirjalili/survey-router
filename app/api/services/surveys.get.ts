import SurveyModel from "@/app/api/models/surveys.schema";

export class SurveysGet {
  async search(gender: string, age: number) {
    try {
      console.log("gender:", gender);
      console.log("age:", age);
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
