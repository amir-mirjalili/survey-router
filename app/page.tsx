"use client";
import React, { useState } from "react";
import ChooseGender from "@/components/choose-gender";

export default function Home() {
  const [journeyStarted, setJourneyStarted] = useState(false);

  const handleStartClick = () => {
    setJourneyStarted(true);
  };
  return (
    <div
      className="flex justify-center items-center h-screen"
      style={{ width: "100%" }}
    >
      {journeyStarted ? (
        <ChooseGender />
      ) : (
        <main className="text-center bg-white rounded-lg shadow-lg p-8">
          <p className="mb-8 text-gray-800">
            {" "}
            {/* Increased margin bottom from mb-4 to mb-8 */}
            To start your journey, tap the start button
          </p>
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={handleStartClick}
          >
            Start
          </button>
        </main>
      )}
    </div>
  );
}
