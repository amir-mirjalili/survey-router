import React, { useState } from "react";

export default function CandidateSurvey({ data }: { data: any }) {
  const [isSingleAnswered, setSingleSelectedAnswer] = useState<boolean>(false);
  const [isMultiAnswered, setMultiSelectedAnswer] = useState<boolean>(false);

  const handleAnswerSelect = (
    event: React.ChangeEvent<HTMLSelectElement>,
    acceptable_answer: any
  ) => {
    if (acceptable_answer.includes(event.target.value))
      setSingleSelectedAnswer(true);
  };
  const handleAnswerInput = (
    event: React.ChangeEvent<HTMLInputElement>,
    acceptable_answer: any
  ) => {
    if (acceptable_answer.includes(event.target.value))
      setMultiSelectedAnswer(true);
  };

  const handleButtonClick = () => {
    if (isSingleAnswered && isMultiAnswered) {
      window.open(data.link, "_blank");
    }
  };
  return (
    <div style={{ width: "100%" }}>
      {data && data.prescreen_questions && data.prescreen_questions.length ? (
        data.prescreen_questions.map((question: any, index: number) => (
          <div key={question._id} className={`mb-${index === 0 ? 8 : 4}`}>
            <label className="block font-semibold mb-1">{question.title}</label>
            {question.question_type === "single_select" && (
              <select
                name={question.name}
                className="block w-full border border-gray-300 rounded px-3 py-2 mb-1 bg-gray-100 shadow-sm focus:outline-none focus:border-blue-500 text-gray-800"
                onChange={(e) =>
                  handleAnswerSelect(e, question.acceptable_answer)
                }
              >
                {question.possible_answers.map((answer: string) => (
                  <option key={answer} value={answer}>
                    {answer}
                  </option>
                ))}
              </select>
            )}

            {question.question_type === "multi_select" && (
              <div>
                {question.possible_answers.map((answer: string) => (
                  <label key={answer} className="inline-flex items-center mb-1">
                    <input
                      type="checkbox"
                      name={question.name}
                      value={answer}
                      className="form-checkbox text-blue-500"
                      onChange={(e) =>
                        handleAnswerInput(e, question.acceptable_answer)
                      }
                    />
                    <span className="ml-2">{answer}</span>
                  </label>
                ))}
              </div>
            )}
          </div>
        ))
      ) : (
        <div className="text-center text-gray-600">No questions available.</div>
      )}

      {isSingleAnswered && isMultiAnswered && (
        <div className="mt-4">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={handleButtonClick}
          >
            Click Here
          </button>
        </div>
      )}
    </div>
  );
}
