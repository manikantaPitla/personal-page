import { ENV_CONFIG } from "../config/env";

// Email configuration constants
export const EMAIL_CONFIG = {
  SERVICE_ID: ENV_CONFIG.EMAIL_SERVICE_ID,
  TEMPLATE_ID: ENV_CONFIG.EMAIL_TEMPLATE_ID,
  PUBLIC_KEY: ENV_CONFIG.EMAIL_PUBLIC_KEY,
} as const;

export const EMAIL_MESSAGES = {
  LOADING: "Sending your message...",
  SUCCESS: "Your message has been sent successfully!",
  ERROR: "Failed to send your message. Please try again later.",
  VALIDATION: {
    NAME_REQUIRED: "Please enter your Name",
    EMAIL_REQUIRED: "Email is Required!",
    MESSAGE_REQUIRED: "Message is Required!",
  },
} as const;
