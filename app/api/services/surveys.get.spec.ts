import { SurveysGet } from "@/app/api/services/surveys.get";
describe("SurveysGet", () => {
  it("should fetch candidate survey based on gender and age", async () => {
    const gender = "male";
    const age = 30;
    const skip = 0;

    let surveysGet = new SurveysGet();
    const result = await surveysGet.candidateSurvey(gender, age, skip);
    expect(result.is_success).toEqual(true);
  }, 10000);
});
