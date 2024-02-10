import { SurveysGet } from "@/app/survey/api/services/surveys.get";
import { surveyValidator } from "@/app/survey/api/validator/survey.validator";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const body = JSON.parse(await request.text());
  const { error } = surveyValidator.search.validate(body);
  if (error) {
    const { details } = error;
    const message = details.map((i: any) => i.message).join(",");
    return NextResponse.json({ error: message }, { status: 412 });
  }
  const surveysGet = new SurveysGet();
  const response = await surveysGet.getByFilter(body.gender, body.age);
  return NextResponse.json(response);
}
