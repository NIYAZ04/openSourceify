import resend from "../config/resend";
import { EMAIL_SENDER, NODE_ENV } from "../constants/env";

type Params = {
  to: string;
  subject: string;
  text: string;
  html: string;
};

const getFromEmail = () =>EMAIL_SENDER ;

const getToEmail = (to: string) =>
  NODE_ENV === "deployment" ? to :  "niyazhaque098@gmail.com";

export const sendMail = async ({ to, subject, text, html }: Params) =>
  await resend.emails.send({
    from: getFromEmail(),
    to: getToEmail(to),
    subject,
    text,
    html,
  });
