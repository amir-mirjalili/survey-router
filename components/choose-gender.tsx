"use client";
import React, { useState } from "react";
import FillBirthdate from "@/components/fill-birthdate";

export default function ChooseGender() {
  const [gender, setGender] = useState<string | null>(null);

  const handleGenderChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setGender(event.target.value);
  };

  return (
    <div className="flex flex-col items-center" style={{ width: "100%" }}>
      {gender ? (
        <FillBirthdate gender={gender} />
      ) : (
        <div>
          <h2 className="text-xl font-semibold mb-4">Choose Your Gender</h2>
          <div className="flex flex-col">
            <label className="inline-flex items-center mb-2">
              <input
                type="radio"
                className="form-radio text-blue-500"
                name="gender"
                value="male"
                checked={gender === "male"}
                onChange={handleGenderChange}
              />
              <span className="ml-2">Male</span>
            </label>
            <label className="inline-flex items-center mb-2">
              <input
                type="radio"
                className="form-radio text-blue-500"
                name="gender"
                value="female"
                checked={gender === "female"}
                onChange={handleGenderChange}
              />
              <span className="ml-2">Female</span>
            </label>
            <label className="inline-flex items-center mb-2">
              <input
                type="radio"
                className="form-radio text-blue-500"
                name="gender"
                value="other"
                checked={gender === "other"}
                onChange={handleGenderChange}
              />
              <span className="ml-2">Other</span>
            </label>
          </div>
        </div>
      )}
    </div>
  );
}
