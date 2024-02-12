import { NextRequest, NextResponse } from "next/server";
import { SurveysGet } from "@/app/api/services/surveys.get";

export async function GET(req: NextRequest) {
  // const body = req;
  // const { error } = surveyValidator.candidate-survey.validate(body);
  // if (error) {
  //   const { details } = error;
  //   const message = details.map((i: any) => i.message).join(",");
  //   return NextResponse.json({ error: message }, { status: 412 });
  // }
  const surveysGet = new SurveysGet();
  const response = await surveysGet.candidateSurvey(
    req.nextUrl.searchParams.get("gender")!,
    Number(req.nextUrl.searchParams.get("age"))!,
    Number(req.nextUrl.searchParams.get("skip"))!
  );
  return NextResponse.json(response);
}
