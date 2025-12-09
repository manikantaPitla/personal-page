import { emailjs } from "../../lib/emailjs";
import { EMAIL_CONFIG, EMAIL_MESSAGES } from "../../constants";

interface SendEmailParams {
  name: string;
  email: string;
  message: string;
}

export const emailService = {
  /**
   * Send email using EmailJS
   */
  async sendEmail(params: SendEmailParams): Promise<void> {
    if (!EMAIL_CONFIG.SERVICE_ID || !EMAIL_CONFIG.TEMPLATE_ID || !EMAIL_CONFIG.PUBLIC_KEY) {
      throw new Error(EMAIL_MESSAGES.ERROR);
    }

    const templateParams = {
      from_name: params.name,
      from_email: params.email,
      message: params.message,
    };

    await emailjs.send(EMAIL_CONFIG.SERVICE_ID, EMAIL_CONFIG.TEMPLATE_ID, templateParams);
  },
};

export default emailService;
