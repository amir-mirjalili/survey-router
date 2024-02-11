"use client";
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function FillBirthdate() {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [journeyEnded, setJourneyEnded] = useState<boolean>(false);

  const handleDateChange = (date: Date | null) => {
    setSelectedDate(date);
  };

  const handleSubmit = async () => {
    if (!selectedDate) return; // Ensure birthdate is selected

    const gender = localStorage.getItem("selectedGender");

    setLoading(true);
    const age = new Date().getFullYear() - selectedDate.getFullYear();
    try {
      const response = await fetch(`/api/search?gender=${gender}&age=${age}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error("Failed to save user data");
      }

      setLoading(false);
      setJourneyEnded(true);
    } catch (error) {
      console.error("Error:", error);
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center">
      {!journeyEnded && (
        <>
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
          <button
            onClick={handleSubmit}
            disabled={!selectedDate || loading}
            className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ${
              loading && "opacity-50 cursor-not-allowed"
            }`}
          >
            {loading ? "Loading..." : "Submit"}
          </button>
        </>
      )}
      {journeyEnded && (
        <p className="mt-4 text-green-600 font-semibold">The journey ends!</p>
      )}
    </div>
  );
}
