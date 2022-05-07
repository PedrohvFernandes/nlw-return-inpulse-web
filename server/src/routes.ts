import express from "express";

import { SubmitFeedbackUseCase } from "./use-cases/submit-feedback-use-case";
import { NodemailerMailAdapter } from "./adapters/nodemailer/nodemailer-mail-adapter";
import { PrismaFeedbackRepository } from "./repositories/prisma/prisma-feebacks-repository";

export const routes = express.Router();
routes.post("/feedbacks", async (request, response) => {
  const { type, comment, screenshot } = request.body;
  const prismaFeedbackRepository = new PrismaFeedbackRepository();
  const nodemailerMailAdapter = new NodemailerMailAdapter();
  const submitFeedbackUseCase = new SubmitFeedbackUseCase(
    prismaFeedbackRepository,
    nodemailerMailAdapter
  );

  await submitFeedbackUseCase.execute({
    type,
    comment,
    screenshot,
  });
  return response.status(201).send();
});
