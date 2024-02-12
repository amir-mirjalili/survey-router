"use client";
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import CandidateSurvey from "@/components/candidate-survey";
import JourneyEnd from "@/components/journey-end";
export default function FillBirthdate({ gender }: { gender: string }) {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [isFetched, setFetched] = useState<boolean>(false);
  const [isSuccess, setSuccess] = useState<boolean>(false);
  const [responseBody, setResponseBody] = useState({});
  const handleDateChange = (date: Date | null) => {
    setSelectedDate(date);
  };

  const callApi = async (gender: string, age: number, skip = 0) => {
    try {
      const response = await fetch(
        `/api/candidate-survey?gender=${gender}&age=${age}&skip=${skip}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (!response.ok) {
        throw new Error("Failed to save user data");
      }
      return response.json();
    } catch (error) {
      console.error("Error:", error);
      setLoading(false);
    }
  };

  const handleSubmit = async () => {
    if (!selectedDate) return;

    setLoading(true);
    const age = new Date().getFullYear() - selectedDate.getFullYear();
    try {
      let body;
      body = await callApi(gender, age);
      let skip = 0;
      if (Object.keys(body).length) {
        while (!body.prescreen_questions.length) {
          skip++;
          body = await callApi(gender, age, skip);
        }
        setSuccess(true);
      }
      setLoading(false);
      setFetched(true);
      setResponseBody(body);
    } catch (error) {
      console.error("Error:", error);
      setLoading(false);
    }
  };

  return (
    <div style={{ width: "100%" }}>
      {isFetched ? (
        isSuccess ? (
          <CandidateSurvey data={responseBody} />
        ) : (
          <JourneyEnd />
        )
      ) : (
        <div className="flex flex-col items-center">
          <h2 className="text-xl font-semibold mb-4">Choose Your Birthdate</h2>
          <div className="mb-4">
            <DatePicker
              selected={selectedDate}
              onChange={handleDateChange}
              dateFormat="MM/dd/yyyy"
              placeholderText="Select your birthdate"
              className="border border-gray-300 rounded px-3 py-2 text-gray-700"
              showYearDropdown
              scrollableYearDropdown
              yearDropdownItemNumber={50}
            />
          </div>
          {loading && <div className="w-full h-2 bg-blue-500 rounded mb-4" />}
          <button
            onClick={handleSubmit}
            disabled={!selectedDate || loading}
            className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ${
              loading && "opacity-50 cursor-not-allowed"
            }`}
          >
            {loading ? "Loading..." : "Submit"}
          </button>
        </div>
      )}
    </div>
  );
}
