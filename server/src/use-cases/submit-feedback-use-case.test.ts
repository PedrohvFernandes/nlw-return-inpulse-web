import { SubmitFeedbackUseCase } from "./submit-feedback-use-case";

const createFeedbackSpy = jest.fn();
const sendMailSpy = jest.fn();

const submitFeedbackUseCase = new SubmitFeedbackUseCase(
  { create: createFeedbackSpy },
  { sendMail: sendMailSpy }
);

describe("Submit feedback", () => {

  it("should be able to submit feedback", async () => {
    await expect(
      submitFeedbackUseCase.execute({
        type: "BUG",
        comment: "example comment",
        screenshot: "data:image/png;base64,dvddsvsfdsf",
      })
    ).resolves.not.toThrow();
    expect(createFeedbackSpy).toHaveBeenCalled();
    expect(sendMailSpy).toHaveBeenCalled();
    

  });
  it("should not be to submit feedback without type", async () => {
    await expect(
      submitFeedbackUseCase.execute({
        type: "",
        comment: "example comment",
        screenshot: "data:image/png;base64,dvddsvsfdsf",
      })
    ).rejects.toThrow();
  });

  it("should not be to submit feedback without comment", async () => {
    await expect(
      submitFeedbackUseCase.execute({
        type: "BUG",
        comment: "",
        screenshot: "data:image/png;base64,dvddsvsfdsf",
      })
    ).rejects.toThrow();
  });

  it("should not be to submit feedback with an invalid screenshot", async () => {
    await expect(
      submitFeedbackUseCase.execute({
        type: "BUG",
        comment: "example comment",
        screenshot: "teste.jpg",
      })
    ).rejects.toThrow();
  });
});
