"use client";
import React from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  const handleStartClick = () => {
    window.location.href = "/choose-gender";
  };
  return (
    <div className="flex justify-center items-center h-screen">
      <main className="text-center bg-white rounded-lg shadow-lg p-8">
        <p className="mb-4 text-gray-800">
          To start your journey, tap the start button
        </p>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={handleStartClick}
        >
          Start
        </button>
      </main>
    </div>
  );
}
