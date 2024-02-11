import { NextRequest, NextResponse } from "next/server";
import { SurveysGet } from "@/app/api/services/surveys.get";

export async function GET(req: NextRequest) {
  // const body = req;
  // const { error } = surveyValidator.search.validate(body);
  // if (error) {
  //   const { details } = error;
  //   const message = details.map((i: any) => i.message).join(",");
  //   return NextResponse.json({ error: message }, { status: 412 });
  // }
  const surveysGet = new SurveysGet();
  const response = await surveysGet.search(
    req.nextUrl.searchParams.get("gender")!,
    Number(req.nextUrl.searchParams.get("age"))!
  );
  return NextResponse.json(response);
}
