import { MailAdapter } from "../adapters/mail-adapter";
import { FeedbacksRepository } from "../repositories/feedbacks-repository";

interface SubmitFeedbackUseCaseRequest {
  type: string;
  comment: string;
  screenshot?: string;
}
export class SubmitFeedbackUseCase {
  constructor(
    private feedbacksRepository: FeedbacksRepository,
    private mailAdapter: MailAdapter
  ) {}
  async execute(request: SubmitFeedbackUseCaseRequest) {

    const { type, comment, screenshot } = request;

    if(!type) {
      throw new Error('Type is required');
    }

    if(!comment) {
      throw new Error('Type is required');
    }

    if (screenshot && !screenshot.startsWith("data:image/png;base64,")) {
      throw new Error("Invalid screenshot format");
    }

    await this.feedbacksRepository.create({
      type,
      comment,
      screenshot,
    });

    await this.mailAdapter.sendMail({
      subject: type === 'BUG' ? "Novo feedback de um bug :(" : "Nova feedback de ideia ou outro :)",
      body: [
        `<div style='font-family: sans-serif; font-size: 16px; color:#111; padding: 15px 20px'>`,
          `<h1 style='border-bottom: 2px solid #000; width:50%'>Tipo do feedback: ${type}</h1>`,
          `<p style='border-bottom: 2px solid #000; width:50%'>Comentário: ${comment}</p>`,
          screenshot ? `<p>Seu print:</p>` : `<p>Você não enviou nem um print:</p>`,
          screenshot ? `<img width='100%' src="${screenshot}" />` : `<img width='50%' src='https://memegenerator.net/img/instances/55928527.jpg'>`,
        `</div>`,
      ].join("\n"),
    });
  }
}
