import {Document} from "mongoose";

export interface IMatchingProfile {
    gender: string[];
    age: number[];
}

export interface IPrescreenQuestion {
    name: string;
    title: string;
    question_type: string;
    possible_answers: string[];
    acceptable_answers: string[];
}

export interface ISurvey extends Document {
    id: string;
    reward_amount: number;
    link: string;
    matching_profile: IMatchingProfile;
    prescreen_questions: IPrescreenQuestion[];
}