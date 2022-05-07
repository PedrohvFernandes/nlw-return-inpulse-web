import { MailAdapter, SendMailData } from "../mail-adapter";
import nodemailer from "nodemailer";

const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "859263f9aec6d8",
    pass: "350b59063cb53e",
  },
});

export class NodemailerMailAdapter implements MailAdapter {
  async sendMail({subject, body}: SendMailData) {
    await transport.sendMail({
      from: "Equipe Feedget <oi@feedget.com>",
      to: "Pedro Henrique Vieira Fernandes <pedrohv20fernandes@gmail.com>",
      subject: subject,
      html: body,
    });
  }
}
