import request from "supertest";

describe("get candidate-survey request:", () => {
  it("should return an error response when input parameters are invalid", async () => {
    request("http://localhost:3000")
      .get("/api/candidate-survey")
      .query({ age: "invalid_age" })
      .then(function (response: any) {
        expect(response).toEqual({
          status: 412,
        });
      });
  }, 10000);

  it("should return a response with survey data when input parameters are valid", async () => {
    request("http://localhost:3000")
      .get("/api/candidate-survey")
      .query({ gender: "male", age: "60" })
      .then(function (response: any) {
        expect(response).toEqual({
          status: 200,
        });
      });
  }, 10000);
});
