import { NextRequest, NextResponse } from "next/server";
import { SurveysGet } from "@/app/api/services/surveys.get";
import { surveyValidator } from "@/app/api/validator/survey.validator";

export async function GET(req: NextRequest) {
  const params = req.nextUrl.searchParams;
  const { error, value } = surveyValidator.candidate.validate({
    gender: params.get("gender"),
    age: params.get("age"),
  });
  if (error) {
    const { details } = error;
    const message = details.map((i: any) => i.message).join(",");
    return NextResponse.json({ error: message }, { status: 412 });
  }
  const surveysGet = new SurveysGet();
  const response = await surveysGet.candidateSurvey(
    value.gender,
    Number(value.age),
    value.skip
  );
  return NextResponse.json(response);
}
